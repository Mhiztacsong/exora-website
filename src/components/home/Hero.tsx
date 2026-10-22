import { Price } from "@/components/Price";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-border"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 paper-grid opacity-70" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)] lg:items-end lg:py-32">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-pine">
            Two services. One standard of care.
          </p>
          <h1
            id="hero-heading"
            className="mt-6 max-w-3xl text-balance font-serif text-[2.15rem] leading-[1.15] tracking-tight text-foreground sm:text-6xl"
          >
            Finish the goal.
            <span className="mt-2 block italic text-pine">
              Keep the work visible.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
            EXORA helps you make progress on a specific goal through a
            focused 30-day, one-on-one programme, or communicate your value
            through strategic monthly content for your brand or business.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-pine px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-pine-dark"
            >
              Explore the services
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-transparent px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-pine hover:text-pine"
            >
              View pricing
            </a>
          </div>
        </div>

        <aside className="border border-border bg-surface/80 p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.22em] text-muted">
            At a glance
          </p>
          <dl className="mt-6 space-y-6">
            <div className="border-b border-border pb-5">
              <dt className="font-serif text-2xl text-foreground">
                <Price amount="10,000" />
              </dt>
              <dd className="mt-1 text-sm leading-6 text-muted">
                EXORA Execute · one-time fee for 30 days
              </dd>
            </div>
            <div className="border-b border-border pb-5">
              <dt className="font-serif text-2xl text-foreground">
                <Price amount="10,000" />
              </dt>
              <dd className="mt-1 text-sm leading-6 text-muted">
                Visibility & Content · per platform, per month
              </dd>
            </div>
            <div>
              <dt className="font-serif text-2xl text-foreground">Five</dt>
              <dd className="mt-1 text-sm leading-6 text-muted">
                Founding places for EXORA Execute
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
