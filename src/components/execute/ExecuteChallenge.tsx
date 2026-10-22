export function ExecuteChallenge() {
  return (
    <section
      className="border-b border-border bg-surface/50"
      aria-labelledby="execute-problem-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-pine">
              The real challenge
            </p>

            <h2
              id="execute-problem-heading"
              className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl"
            >
              Knowing what to do is not the same as doing it.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-muted">
            <p>
              You may already know what you want to achieve. You may even
              have a good idea of the steps you need to take. But between
              making a plan and following through, it is easy to lose focus,
              postpone important tasks, or become unsure of what to do next.
            </p>

            <p>
              EXORA Execute gives you a practical plan, regular
              one-on-one check-ins, and a way to track your progress over
              30 days. The aim is to help you move from good intentions to
              consistent, measurable action.
            </p>

            <p className="text-foreground">
              You do not have to figure out every step alone. You do need
              to be willing to take action and be honest about your progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}