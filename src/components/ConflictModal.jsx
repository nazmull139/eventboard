import {
    AlertTriangle, X
} from 'lucide-react';
import React from 'react';
  
const ConflictModal = ({event , setShowConflictModal , clashes , confirmSave }) => {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/55 p-4" role="dialog" aria-modal="true" aria-labelledby="conflict-title">
        <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
              <AlertTriangle />
            </div>
            <button onClick={() => setShowConflictModal(false)} className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700" aria-label="Close conflict dialog">
              <X className="h-5 w-5" />
            </button>
          </div>

          <h2 id="conflict-title" className="mt-5 text-2xl font-black">Schedule conflict</h2>
          <p className="mt-2 text-slate-600">
            This event overlaps with an event already in your schedule. Do you still want to save it?
          </p>

          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-bold text-slate-900">{event.title}</p>
            <p className="mt-1 text-sm text-slate-600">{event.date} · {event.start}–{event.end}</p>
            <div className="mt-3 space-y-2 text-sm text-slate-700">
              {clashes.map((item) => (
                <p key={item.id}>
                  <span className="font-semibold">Overlaps with:</span> {item.title} ({item.start}–{item.end})
                </p>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button onClick={() => setShowConflictModal(false)} className="rounded-xl border border-slate-200 px-4 py-3 font-bold text-slate-700 hover:bg-slate-50">
              Cancel
            </button>
            <button onClick={confirmSave} className="rounded-xl bg-indigo-600 px-4 py-3 font-bold text-white hover:bg-indigo-700">
              Keep Both & Save
            </button>
          </div>
        </div>
      </div>
  )
}

export default ConflictModal