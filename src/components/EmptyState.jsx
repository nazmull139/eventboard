export default function EmptyState({ title = 'No events found', text = 'Try changing your filters or search terms.' }) {

  
  return <div className="rounded-2xl border border-dashed bg-white p-12 text-center">

    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xl">📅</div>

    <h3 className="text-lg font-bold">{title}</h3>
    
    <p className="mt-1 text-sm text-slate-500">{text}</p>
  </div>
}
