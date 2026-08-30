import { Search, SlidersHorizontal } from 'lucide-react';
import { CATEGORY_LIST } from '../utils/categoryStyles';

export default function FilterBar({ q, setQ, category, setCategory, date, setDate }) {
    return <div className="rounded-2xl border border-line bg-paper p-4 shadow-[0_20px_45px_-20px_rgba(20,19,31,0.35)]">
        <div className="grid gap-3 md:grid-cols-[1fr_180px_180px]">
            <label className="relative min-w-0">
                <Search className="pointer-events-none absolute left-3 top-3 h-5 w-5 text-ink-muted" />
                <input
                    value={q}
                    onChange={e => setQ(e.target.value)}
                    placeholder="Search events or organizers..."
                    className="w-full rounded-xl border border-line bg-paper-2 py-3 pl-10 pr-3 text-sm outline-none transition focus:border-cobalt focus:ring-2 focus:ring-cobalt/25"
                />
            </label>
            <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="w-full min-w-0 rounded-xl border border-line bg-paper-2 px-3 py-3 text-sm outline-none transition focus:border-cobalt focus:ring-2 focus:ring-cobalt/25"
            >
                <option>All categories</option>
                {CATEGORY_LIST.map((c) => (
                    <option key={c}>{c}</option>
                ))}
            </select>
            <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                className="w-full min-w-0 rounded-xl border border-line bg-paper-2 px-3 py-3 text-sm outline-none transition focus:border-cobalt focus:ring-2 focus:ring-cobalt/25"
            />
        </div>

        <div className="mt-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-ink-muted">
            <SlidersHorizontal className="h-3.5 w-3.5" />Filter by title, organizer, category or date.
        </div>
    </div>
}
