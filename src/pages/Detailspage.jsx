import {
  AlertTriangle,
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  CalendarDays,
  MapPin
} from 'lucide-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ConflictModal from '../components/ConflictModal';
import { useScheduleContext } from '../context/ScheduleContext';
import { events } from '../data/events';

const Detailspage = () => {

  const { id } = useParams();
  const event = events.find((item) => item.id === id);
  const { isSaved, saveEvent, removeEvent , conflict } = useScheduleContext();
  const [showConflictModal, setShowConflictModal] = useState(false);
 

  if (!event) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-16">
        <p className="text-slate-600">Event not found.</p>
        <Link className="mt-4 inline-block font-semibold text-indigo-600" to="/">
          Back to events
        </Link>
      </main>
    );
  }

  const saved = isSaved(event.id);
  const clashes = conflict(event)
  
 // console.log(clashes)

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
    <main className="mx-auto max-w-5xl px-4 py-10">
    <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600">
      <ArrowLeft className="h-4 w-4" />
      Back to events
    </Link>

    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <img src={event.image} alt={event.title} className="h-64 w-full object-cover md:h-96" />

      <div className="p-6 md:p-10">
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700">
          {event.category}
        </span>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{event.title}</h1>
        <p className="mt-2 text-slate-500">Organized by {event.organizer}</p>

        <div className="my-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-5">
            <CalendarDays className="mb-3 text-indigo-600" />
            <b>{event.date}</b>
            <p className="text-sm text-slate-500">{event.start} – {event.end}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <MapPin className="mb-3 text-indigo-600" />
            <b>Location</b>
            <p className="text-sm text-slate-500">{event.location}</p>
          </div>
        </div>

        <p className="max-w-3xl leading-7 text-slate-600">{event.description}</p>


        {clashes.length > 0 && saved && (
          <div className="mt-6 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
            <AlertTriangle className="shrink-0" />
            <div>
              <b>Schedule conflict</b>
              <p className="text-sm">
                This saved event overlaps with {clashes.map((item) => item.title).join(', ')}.
              </p>
            </div>
          </div>
        )}





        <button
          onClick={handleSave}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white transition hover:bg-indigo-700"
        >
          {saved ? <><BookmarkCheck /> Saved to schedule</> : <><Bookmark /> Save to my schedule</>}
        </button>
      </div>
    </article>

    {showConflictModal && (
      <ConflictModal {...{event,setShowConflictModal,clashes,confirmSave}} />
    )}


   
  </main>
  )
}

export default Detailspage