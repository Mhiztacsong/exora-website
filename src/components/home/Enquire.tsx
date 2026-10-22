
export function Enquire() {
  return (
    <section
      id="enquire"
      className="scroll-mt-24"
      aria-labelledby="enquire-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="border border-border bg-pine px-6 py-14 text-white sm:px-12 sm:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/70">
            Next step
          </p>
          <h2
            id="enquire-heading"
            className="mt-4 max-w-2xl font-serif text-4xl tracking-tight sm:text-5xl"
          >
            Ready to take the next step?
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/80">
            Whether you need focused support to make progress on a specific
            goal or strategic content to communicate your value, EXORA offers
            a clear process built around the work you need. Explore the two
            services below to find the right starting point.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="/execute"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-pine transition-colors hover:bg-background"
            >
              Explore EXORA Execute
            </a>
            <a
              href="#visibility"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-white"
            >
              Explore Visibility & Content
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
