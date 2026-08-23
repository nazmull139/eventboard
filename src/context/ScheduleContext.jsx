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

   


    return (
        <ScheduleContext.Provider value={{saved , isSaved, saveEvent, removeEvent , }}>
            {children}
        </ScheduleContext.Provider>
    )
}

export function useScheduleContext() {
    const context = useContext(ScheduleContext);
    
    return context;
}