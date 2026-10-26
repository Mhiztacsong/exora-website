export function VisibilityEnquire() {
  return (
    <section
      id="enquire"
      className="border-b border-border bg-pine text-white"
      aria-labelledby="visibility-enquire-heading"
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden px-5 py-16 sm:px-8 sm:py-20">
        <div className="pointer-events-none absolute inset-0 paper-grid opacity-20" />

        <div className="relative max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/75">
            Take the next step
          </p>

          <h2
            id="visibility-enquire-heading"
            className="mt-4 font-serif text-3xl leading-tight sm:text-5xl"
          >
            Let’s build your visibility.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
            Tell us about your brand, your audience, and what you want your
            content to achieve. We’ll use that information to understand
            whether EXORA Visibility & Content is a good fit for you.
          </p>

          <p className="mt-4 text-sm leading-7 text-white/80">
            Founding-client offer: ₦10,000 per platform, per month, for the
            first five clients.
          </p>

          <a
            href="visibility/apply"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-pine transition-colors hover:bg-white/90"
          >
            Apply for Visibility & Content
          </a>
        </div>
      </div>
    </section>
  );
}
