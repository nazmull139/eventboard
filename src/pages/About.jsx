import React from 'react'

const About = () => {
    return (
        <main className="mx-auto max-w-4xl px-4 py-16">
            <div className="rounded-3xl border bg-white p-8 shadow-sm md:p-12">
                <p className="font-bold uppercase tracking-widest text-indigo-600">About EventBoard</p>
                <h1 className="mt-3 text-4xl font-black">A simple way to discover and plan events.</h1>
                <p className="mt-6 leading-8 text-slate-600">EventBoard is a frontend-focused event discovery and personal schedule application. It demonstrates reusable React components, client-side routing, filtering, localStorage persistence and schedule conflict detection.</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-slate-50 p-5">
                        <b>Built with</b><p className="mt-2 text-sm text-slate-500">React · JavaScript · Tailwind CSS · React Router</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-5"><b>Data</b><p className="mt-2 text-sm text-slate-500">Local mock event data with browser persistence.</p>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default About