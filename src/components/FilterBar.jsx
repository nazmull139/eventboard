import { Search, SlidersHorizontal } from 'lucide-react';

export default function FilterBar({ q, setQ, category, setCategory, date, setDate }) {
   // console.log(date)
    return <div className="rounded-2xl border bg-white p-4 shadow-sm">
        <div className="grid gap-3 md:grid-cols-[1fr_180px_180px]">
            <label className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search events or organizers..." className="w-full rounded-xl border bg-slate-50 py-3 pl-10 pr-3 outline-none focus:ring-2 focus:ring-indigo-500" />
            </label>
            <select value={category} onChange={e => setCategory(e.target.value)} className="rounded-xl border bg-slate-50 px-3 py-3">
                <option>All categories</option>
                <option>Tech</option>
                <option>Workshop</option>
                <option>Sports</option>
                <option>Cultural</option>
            </select>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} className="rounded-xl border bg-slate-50 px-3 py-3" />
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
            <SlidersHorizontal className="h-4 w-4" />Filter by title, organizer, category or date.</div>

    </div>

}
