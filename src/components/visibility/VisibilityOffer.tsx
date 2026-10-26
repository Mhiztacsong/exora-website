export function VisibilityOffer() {
  return (
    <section
      className="border-b border-border bg-surface/50"
      aria-labelledby="visibility-offer-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-pine">
            What we do
          </p>

          <h2
            id="visibility-offer-heading"
            className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl"
          >
            Strategy and writing, working together.
          </h2>

          <p className="mt-5 text-base leading-8 text-muted">
            We help you turn your ideas, knowledge, services, and experiences
            into clear, purposeful content that communicates your value to
            the right people.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-2xl border border-border bg-background p-6">
            <h3 className="font-serif text-xl text-foreground">
              Content strategy
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              Align content topics and messaging with your goals, your
              audience, and the value you want to communicate.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-background p-6">
            <h3 className="font-serif text-xl text-foreground">
              Content writing
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              Turn your ideas, knowledge, services, and experiences into
              clear written posts that help people understand what you offer.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-background p-6">
            <h3 className="font-serif text-xl text-foreground">
              Carousel design
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              Present selected ideas through structured carousel designs.
              Six designs are included within the monthly post total.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-background p-6">
            <h3 className="font-serif text-xl text-foreground">
              Profile optimization
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              Review and improve your profile information so visitors can
              understand who you are, what you offer, and what to do next.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-background p-6">
            <h3 className="font-serif text-xl text-foreground">
              Monthly performance review
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              Review available performance information to help guide future
              content decisions and improvements.
            </p>
          </article>
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-7 text-muted">
          Content support helps you communicate more clearly and consistently.
          Specific reach, engagement, audience growth, or sales results are
          not guaranteed.
        </p>
      </div>
    </section>
  );
}
