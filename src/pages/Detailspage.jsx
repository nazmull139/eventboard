import {
  AlertTriangle,
  ArrowLeft,
  CalendarDays,
  Check,
  Lock,
  MapPin
} from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import ConflictModal from '../components/ConflictModal';
import { useAuthContext } from '../context/AuthContext';
import { useScheduleContext } from '../context/ScheduleContext';
import { events } from '../data/events';
import { categoryStyle } from '../utils/categoryStyles';

const Detailspage = () => {

  const { id } = useParams();
  const event = events.find((item) => item.id === id);
  const { isSaved, saveEvent, removeEvent , conflict } = useScheduleContext();
  const { isLoggedIn } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [showConflictModal, setShowConflictModal] = useState(false);


  if (!event) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-16">
        <p className="text-ink-muted">Event not found.</p>
        <Link className="mt-4 inline-block font-semibold text-cobalt" to="/">
          Back to events
        </Link>
      </main>
    );
  }

  const saved = isSaved(event.id);
  const clashes = conflict(event)
  const style = categoryStyle(event.category);

  const handleSave = () => {
    if (!isLoggedIn) {
      navigate('/login', { state: { from: location.pathname } });
      return;
    }
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
    <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-muted hover:text-cobalt">
      <ArrowLeft className="h-4 w-4" />
      Back to events
    </Link>

    <article className="overflow-hidden rounded-3xl border border-line bg-paper shadow-sm">
      <img src={event.image} alt={event.title} className="h-64 w-full object-cover md:h-96" />

      <div className="px-6 pt-6 md:px-10 md:pt-10">
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${style.badge}`}>
          {event.category}
        </span>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">{event.title}</h1>
        <p className="mt-2 text-ink-muted">Organized by {event.organizer}</p>

        <div className="my-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-paper-2 p-5">
            <CalendarDays className="mb-3 text-cobalt" />
            <b className="font-mono text-base">{event.date}</b>
            <p className="text-sm text-ink-muted">{event.start} – {event.end}</p>
          </div>
          <div className="rounded-2xl bg-paper-2 p-5">
            <MapPin className="mb-3 text-cobalt" />
            <b>Location</b>
            <p className="text-sm text-ink-muted">{event.location}</p>
          </div>
        </div>
      </div>

      <div className="ticket-perforation ticket-perforation--on-white mx-6 md:mx-10" />

      <div className="px-6 pb-10 pt-6 md:px-10">
        <p className="max-w-3xl leading-7 text-ink-muted">{event.description}</p>

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
          data-saved={saved}
          className="stamp-btn-wide mt-8 inline-flex items-center gap-2 rounded-xl px-5 py-3 font-bold transition"
        >
          {!isLoggedIn ? (
            <><Lock className="h-4 w-4" /> Log in to save</>
          ) : saved ? (
            <><Check className="h-4 w-4" strokeWidth={3} /> Saved to schedule</>
          ) : (
            <>Save to my schedule</>
          )}
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
