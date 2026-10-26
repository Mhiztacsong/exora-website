export function VisibilityAudience() {
  return (
    <section
      className="border-b border-border"
      aria-labelledby="visibility-audience-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-pine">
            Who we work with
          </p>

          <h2
            id="visibility-audience-heading"
            className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl"
          >
            Your work is valuable. Let’s help the right people see it.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-serif text-xl text-foreground">
              Personal brands and professionals
            </h3>

            <p className="mt-4 text-sm leading-7 text-muted">
              Personal brands and professionals who want to communicate
              their expertise and build visibility.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-serif text-xl text-foreground">
              Creators
            </h3>

            <p className="mt-4 text-sm leading-7 text-muted">
              Creators who want a clearer content direction and stronger
              connection with their audience.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-serif text-xl text-foreground">
              Small businesses and entrepreneurs
            </h3>

            <p className="mt-4 text-sm leading-7 text-muted">
              Small businesses and entrepreneurs who need content that
              explains their offers and keeps their brand visible.
            </p>
          </article>
        </div>

        <p className="mt-8 max-w-3xl text-base leading-8 text-muted">
          Different goals require different content approaches. We shape
          the strategy around what you do, who you want to reach, and what
          you want your content to achieve.
        </p>
      </div>
    </section>
  );
}
