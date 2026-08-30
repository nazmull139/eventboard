
const Banner = () => {
    return (
        <section className="relative overflow-hidden bg-ink text-white">
            <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 md:pt-20">
                <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                    Discover · Plan · Experience
                </p>
                <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
                    Find events worth<br className="hidden sm:block" /> showing up for.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
                    Explore workshops, tech meetups, sports and cultural experiences around Dhaka.
                    Save your favorites and build a schedule that doesn't clash.
                </p>
            </div>

            {/* torn-ticket edge into the page below */}
            <div className="ticket-edge" aria-hidden="true" />
        </section>
    )
}

export default Banner
