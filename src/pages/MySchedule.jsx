import { CalendarDays, MapPin, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import { useScheduleContext } from '../context/ScheduleContext';

export default function Schedule() {
  const { saved, removeEvent } = useScheduleContext();

  return <main className="mx-auto max-w-7xl px-4 py-10">
    <div className="mb-8">
      <h1 className="text-4xl font-black">My Schedule</h1>
      <p className="mt-2 text-slate-500">Your saved events, persisted locally in your browser.</p>
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
          .map(e => 
          <article key={e.id} className="flex flex-col gap-4 rounded-2xl border bg-white p-4 shadow-sm sm:flex-row sm:items-center">
            
          <img src={e.image} className="h-28 w-full rounded-xl object-cover sm:w-44" />
          <div className="min-w-0 flex-1"><Link to={`/event/${e.id}`} className="text-xl font-bold hover:text-indigo-600">{e.title}</Link>
            <p className="mt-1 text-sm text-slate-500">{e.organizer}</p><p className="mt-3 text-sm text-slate-600">
              <CalendarDays className="mr-1 inline h-4 w-4" />{e.date} · {e.start}–{e.end} <span className="mx-2">•</span><MapPin className="mr-1 inline h-4 w-4" />{e.location}</p>
          </div>
          <button onClick={() => removeEvent(e.id)} className="rounded-xl border px-4 py-3 font-semibold text-red-600 hover:bg-red-50"><Trash2 className="inline h-4 w-4" /> Remove</button>
        </article>)}
        </div>
    }
  </main>
}
