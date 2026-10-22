import { Price } from "@/components/Price";

export function ExecuteHero() {
  return (
    <section
      className="relative overflow-hidden border-b border-border"
      aria-labelledby="execute-heading"
    >
      <div className="pointer-events-none absolute inset-0 paper-grid opacity-70" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-pine">
              EXORA Execute · The Founding Five
            </p>

            <h1
              id="execute-heading"
              className="mt-6 text-balance font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-6xl"
            >
              Your goals need more than good intentions.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              EXORA Execute is a 30-day, one-on-one programme for people who
              are ready to stop postponing what matters and start making
              measurable progress on a specific goal.
            </p>

            <p className="mt-4 text-base leading-8 text-foreground">
              Build a practical plan. Take consistent action. Track your
              progress. Keep moving.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
              <span>30 days</span>
              <span>One-on-one support</span>
              <span>Five founding places</span>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-full bg-pine px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-pine-dark"
              >
                Apply for the Founding Five
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-transparent px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-pine hover:text-pine"
              >
                See how it works
              </a>
            </div>

            <p className="mt-6 text-sm leading-6 text-muted">
              Founding price: <Price amount="10,000" /> per participant for
              the 30-day programme.
            </p>
          </div>
        </div>
      </section>
    );
}