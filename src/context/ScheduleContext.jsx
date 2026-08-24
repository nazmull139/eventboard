import { createContext, useContext, useEffect, useState } from "react";


export const ScheduleContext = createContext()
const SCHEDULE_KEY = "savedSchedule";

const getSchedule = () => {
    const schedule = localStorage.getItem(SCHEDULE_KEY);
    if (schedule) {
        return JSON.parse(schedule);
    }
    return [];

}



export default function ScheduleContextProvider({children}) {

    const [saved , setSaved] = useState(getSchedule);

    useEffect(() => {
        localStorage.setItem(SCHEDULE_KEY, JSON.stringify(saved));
    }, [saved]);

    const isSaved = (id) => saved.some((event) => event.id === id);

    const saveEvent = (event) => {
        setSaved((current) => [...current, event]);
      };
    
      const removeEvent = (id) => {
        setSaved((current) => current.filter((event) => event.id !== id));
      };

      const conflict = (event) =>
        saved.filter(
          (savedEvent) =>
            savedEvent.id !== event.id &&
            savedEvent.date === event.date &&
            savedEvent.start < event.end && //  start: "10:00", end: "14:00",
            event.start < savedEvent.end, // start: "11:00", end: "13:00",
        );


    return (
        <ScheduleContext.Provider value={{saved , isSaved, saveEvent, removeEvent , conflict }}>
            {children}
        </ScheduleContext.Provider>
    )
}

export function useScheduleContext() {
    const context = useContext(ScheduleContext);
    
    return context;
}

