import React, { useMemo, useState } from 'react';
import EmptyState from '../components/EmptyState';
import EventCard from '../components/Eventcard';
import FilterBar from '../components/FilterBar';
import { events } from '../data/events';


const AllEvents = () => {




    const [q, setQ] = useState(''),
    [category, setCategory] = useState('All categories'),
    [date, setDate] = useState('');



 



    const filtered = useMemo(
        () =>
          events.filter(
            (e) =>
              (!q ||
                `${e.title} ${e.organizer}`
                  .toLowerCase()
                  .includes(q.toLowerCase())) &&
              (category === "All categories" || e.category === category) &&
              (!date || e.date === date)
          ),
        [q, category, date ]
      );

 

   




  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
    <FilterBar {...{ q, setQ, category, setCategory, date, setDate }} />
    <div className="mb-5 mt-10 flex items-end justify-between">
        <div>
            <h2 className="text-2xl font-black">Upcoming events</h2>
            <p className="text-sm text-slate-500">{filtered.length} event{filtered.length !== 1 ? 's' : ''} found</p>
        </div>
    </div>
    {filtered.length ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(event =>
        <EventCard key={event.id} event={event} />)}</div> : <EmptyState />}

</div>

)
}

export default AllEvents