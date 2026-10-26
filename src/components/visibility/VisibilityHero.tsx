import { Price } from "@/components/Price";

export function VisibilityHero() {
  return (
    <section
      className="relative overflow-hidden border-b border-border"
      aria-labelledby="visibility-heading"
    >
      <div className="pointer-events-none absolute inset-0 paper-grid opacity-70" />

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-pine">
            EXORA Visibility & Content · Founding-client offer
          </p>

          <h1
            id="visibility-heading"
            className="mt-6 text-balance font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-6xl"
          >
            Your value deserves to be seen.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            EXORA helps professionals, creators, and small businesses turn
            what they do, what they know, and what they are building into
            clear, strategic content that helps the right people understand
            their value.
          </p>

          <p className="mt-4 text-base leading-8 text-foreground">
            Build a clear message. Show up consistently. Make your work easier
            to understand.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
            <span>27 written posts monthly</span>
            <span>6 carousel designs included</span>
            <span>One platform at a time</span>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#enquire"
              className="inline-flex items-center justify-center rounded-full bg-pine px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-pine-dark"
            >
              Let’s build your visibility
            </a>

            <a
              href="#visibility-how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-transparent px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-pine hover:text-pine"
            >
              See how it works
            </a>
          </div>

          <p className="mt-6 text-sm leading-6 text-muted">
            Founding-client price: <Price amount="10,000" /> per platform,
            per month.
          </p>
        </div>
      </div>
    </section>
  );
}
