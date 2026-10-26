const visibilitySteps = [
  {
    number: "01",
    title: "Understand your brand",
    description:
      "We learn about what you do, who you want to reach, your goals, and the value you want your content to communicate.",
  },
  {
    number: "02",
    title: "Build your content direction",
    description:
      "We develop a content strategy and monthly calendar to guide what you communicate and keep your content aligned with your goals.",
  },
  {
    number: "03",
    title: "Create your content",
    description:
      "We prepare your written posts and included carousel designs for your selected platform.",
  },
  {
    number: "04",
    title: "Publish and review",
    description:
      "You remain responsible for publishing. At the end of the month, we review available performance information to help inform future content.",
  },
];

export function VisibilityProcess() {
  return (
    <section
      id="visibility-how-it-works"
      className="border-b border-border"
      aria-labelledby="visibility-process-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-pine">
            How it works
          </p>

          <h2
            id="visibility-process-heading"
            className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl"
          >
            A clear process, from strategy to review.
          </h2>

          <p className="mt-5 text-base leading-8 text-muted">
            Each month follows a clear process designed to help you communicate
            your value with more focus and consistency.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibilitySteps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <p className="text-sm font-medium tracking-widest text-pine">
                {step.number}
              </p>

              <h3 className="mt-5 font-serif text-xl text-foreground">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
