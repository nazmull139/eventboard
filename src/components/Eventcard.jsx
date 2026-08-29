import { AlertTriangle, Bookmark, BookmarkCheck, CalendarDays, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useScheduleContext } from "../context/ScheduleContext";
import ConflictModal from "./ConflictModal";

export default function EventCard({ event }) {
  const { removeEvent, saveEvent , isSaved , conflict  } = useScheduleContext();
  const [showConflictModal, setShowConflictModal] = useState(false);
 

  const saved = isSaved(event.id);
  const clashes = conflict(event)
  
 

  const handleSave = () => {
    if (saved) {
      removeEvent(event.id);
      return;
    }
    if (clashes.length > 0) {
      setShowConflictModal(true);
      return;
    }

   

    saveEvent(event);
  };

  const confirmSave = () => {
    saveEvent(event);
    setShowConflictModal(false);
  }



  
  return (
    <div>
    <article className="overflow-hidden rounded-2xl  bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <img src={event.image} className="h-48 w-full object-cover" />
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700">
            {event.category}
          </span>
          <button
            onClick={handleSave}
            aria-label="save event"
            className="rounded-full p-2 hover:bg-slate-100"
          >
            {saved ? (
              <BookmarkCheck className="text-indigo-600" />
            ) : (
              <Bookmark />
            )}
          </button>
        </div>

     

      

        <Link to={`/event/${event.id}`}>
          <h3 className="text-xl font-bold hover:text-indigo-600">
            {event.title}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-slate-500">by {event.organizer}</p>

        <div className="mt-4 space-y-2 flex flex-row justify-between  text-sm text-slate-600">
          <div>
            <p>
            <CalendarDays className="mr-2 inline h-4 w-4" />
            {event.date} · {event.start}–{event.end}
          </p>
          <p>
            <MapPin className="mr-2 inline h-4 w-4" />
            {event.location}
          </p>
          </div>

          <div>
          {clashes.length > 0 && saved && (
          <div className=" flex gap-2  rounded-2xl border border-amber-200 bg-amber-50 p-2  text-amber-900">
            <AlertTriangle className="shrink-0" />
            <div>
              <b>Schedule <br></br> conflict</b>
              
            </div>
          </div>
        )}
          </div>

          
        </div>
      </div>


      
    </article> 

    {showConflictModal && (
      <ConflictModal {...{event,setShowConflictModal,clashes,confirmSave}} />
    )}
    
    </div>
  );
}
