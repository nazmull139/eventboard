import { CalendarDays, MapPin, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import { useScheduleContext } from '../context/ScheduleContext';
import { categoryStyle } from '../utils/categoryStyles';

export default function Schedule() {
  const { saved, removeEvent } = useScheduleContext();

  return <main className="mx-auto max-w-7xl px-4 py-10">
    <div className="mb-8">
      <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">Your passes</p>
      <h1 className="font-display text-4xl font-bold tracking-tight">My Schedule</h1>
      <p className="mt-2 text-ink-muted">Your saved events, persisted locally in your browser.</p>
    </div>
    {
      !saved.length ?
        <EmptyState title="Your schedule is empty" text="Save an event from Discover to start planning." />
        :
        <div className="space-y-4">
          {saved
          .sort((a, b) =>
          `${a.date}${a.start}`.localeCompare(`${b.date}${b.start}`)
          )
          .map(e => {
            const style = categoryStyle(e.category);
            return (
            <article key={e.id} className="flex flex-col gap-0 overflow-hidden rounded-2xl border border-line bg-paper shadow-sm sm:flex-row sm:items-stretch">

            <img src={e.image} alt={e.title} className="h-40 w-full object-cover sm:h-auto sm:w-48" />

            <div className="hidden w-0 border-l-2 border-dashed border-line sm:block" />

            <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 p-5">
              <span className={`w-fit rounded-full px-2.5 py-0.5 text-[11px] font-bold ${style.badge}`}>{e.category}</span>
              <Link to={`/event/${e.id}`} className="font-display text-xl font-bold leading-snug hover:text-cobalt">{e.title}</Link>
              <p className="text-sm text-ink-muted">{e.organizer}</p>
              <p className="font-mono text-xs text-ink-muted">
                <CalendarDays className="mr-1 inline h-3.5 w-3.5 text-cobalt" />{e.date} · {e.start}–{e.end} <span className="mx-2">•</span><MapPin className="mr-1 inline h-3.5 w-3.5 text-cobalt" />{e.location}
              </p>
            </div>

            <div className="flex items-center justify-end border-t border-line p-4 sm:border-l sm:border-t-0">
              <button onClick={() => removeEvent(e.id)} className="flex items-center gap-1.5 rounded-xl border border-line px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:border-red-200 hover:bg-red-50">
                <Trash2 className="h-4 w-4" /> Remove
              </button>
            </div>
          </article>
          )})}
        </div>
    }
  </main>
}
