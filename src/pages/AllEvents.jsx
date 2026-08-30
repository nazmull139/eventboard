import { useEffect, useMemo, useState } from 'react';
import EmptyState from '../components/EmptyState';
import ErrorState from '../components/ErrorState';
import EventCard from '../components/Eventcard';
import FilterBar from '../components/FilterBar';
import Loading from '../components/Loading';
import { fetchEvents } from '../data/events';


const AllEvents = () => {

  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



    const [q, setQ] = useState(''),
    [category, setCategory] = useState('All categories'),
    [date, setDate] = useState('');


  useEffect(()=>{
      fetchEvents()
        .then((result)=>{
          setEventsData(result);
          setLoading(false);
        })
        .catch((error)=>{
          setError(error.message);
          
        })
        .finally(()=>{
          setLoading(false);
        })


  },[])
  



    const filtered = useMemo(
        () =>
          eventsData.filter(
            (e) =>
              (!q ||
                `${e.title} ${e.organizer}`
                  .toLowerCase()
                  .includes(q.toLowerCase())) &&
              (category === "All categories" || e.category === category) &&
              (!date || e.date === date)
          ),
        [q, category, date , eventsData ]
      );

 

      const upcomingEvents = useMemo(()=>
        filtered.filter((e) => new Date(e.date) > new Date() ),[filtered]
                    
      )
      const endedEvents = useMemo(()=>
        filtered.filter((e) => new Date(e.date) < new Date() ),[filtered]
                    
      )

      if (loading) {
        return <Loading/>
      }
    
      
      if (error) {
        return <ErrorState message={error}/>
      }



  return (
    <div className="mx-auto max-w-7xl px-4 pb-16">
    <div className="relative z-10 -mt-10 md:-mt-14">
      <FilterBar {...{ q, setQ, category, setCategory, date, setDate }} />
    </div>

    <div className="mb-5 mt-12 flex items-end justify-between">
        <div>
            <h2 className="font-display text-2xl font-bold tracking-tight">Upcoming events</h2>
            <p className="font-mono text-xs uppercase tracking-wide text-ink-muted">{upcomingEvents.length} event{upcomingEvents.length !== 1 ? 's' : ''} found</p>
        </div>
    </div>
    {upcomingEvents.length ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{upcomingEvents.map(event =>
        <EventCard key={event.id} event={event} />)}</div> : <EmptyState />}


      {/* Ended Events */}

    <div className="mb-5 mt-14 flex items-end justify-between">
        <div>
            <h2 className="font-display text-2xl font-bold tracking-tight">Ended events</h2>
            <p className="font-mono text-xs uppercase tracking-wide text-ink-muted">{endedEvents.length} event{endedEvents.length !== 1 ? 's' : ''} found</p>
        </div>
    </div>
    {endedEvents.length ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{endedEvents.map(event =>
        <EventCard key={event.id} event={event} />)}</div> : <EmptyState />}

</div>

)
}

export default AllEvents