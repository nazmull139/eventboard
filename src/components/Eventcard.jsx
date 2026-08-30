import { AlertTriangle, CalendarDays, Check, Lock, MapPin } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useScheduleContext } from "../context/ScheduleContext";
import { categoryStyle } from "../utils/categoryStyles";
import ConflictModal from "./ConflictModal";

export default function EventCard({ event }) {
  const { removeEvent, saveEvent, isSaved, conflict } = useScheduleContext();
  const { isLoggedIn } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [showConflictModal, setShowConflictModal] = useState(false);

  const saved = isSaved(event.id);
  const clashes = conflict(event);
  const style = categoryStyle(event.category);

  const handleSave = () => {
    if (!isLoggedIn) {
      navigate("/login", { state: { from: location.pathname } });
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
  };

  return (
    <div>
      <article className="group overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(20,19,31,0.4)]">
        <Link to={`/event/${event.id}`} className="block">
          <div className="relative h-48 overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${style.badge}`}>
              {event.category}
            </span>
          </div>
        </Link>

        <div className="px-5 pt-4">
          <div className="flex items-start justify-between gap-3">
            <Link to={`/event/${event.id}`} className="min-w-0">
              <h3 className=" font-display text-lg font-bold leading-snug transition group-hover:text-cobalt">
                {event.title}
              </h3>
            </Link>
            <button
              onClick={handleSave}
              aria-label={!isLoggedIn ? "Log in to save event" : saved ? "Remove from schedule" : "Save event"}
              data-saved={saved}
              className="stamp-btn shrink-0"
            >
              {!isLoggedIn ? (
                <Lock className="h-3.5 w-3.5" strokeWidth={2.5} />
              ) : saved ? (
                <Check className="h-4 w-4" strokeWidth={3} />
              ) : (
                <span className="h-2 w-2 rounded-full bg-gold" />
              )}
            </button>
          </div>
          <p className="mt-1 text-sm text-ink-muted">by {event.organizer}</p>
        </div>

        <div className="ticket-perforation my-4" />

        <div className="flex items-end justify-between gap-3 px-5 pb-5">
          <div className="space-y-1.5 font-mono text-xs text-ink-muted">
            <p className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5 text-cobalt" />
              {event.date} · {event.start}–{event.end}
            </p>
            <p className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-cobalt" />
              {event.location}
            </p>
          </div>

          {clashes.length > 0 && saved && (
            <div className="flex shrink-0 items-center gap-1.5 rounded-lg border border-amber-200 bg-amber-50 px-2.5 py-1.5 text-amber-900">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
              <span className="text-[11px] font-bold leading-tight">Conflict</span>
            </div>
          )}
        </div>
      </article>

      {showConflictModal && (
        <ConflictModal {...{ event, setShowConflictModal, clashes, confirmSave }} />
      )}
    </div>
  );
}
