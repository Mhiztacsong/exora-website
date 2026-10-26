
export function VisibilityChallenge() {
  return (
    <section
      className="border-b border-border bg-surface/50"
      aria-labelledby="visibility-problem-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-pine">
              The problem we solve
            </p>

            <h2
              id="visibility-problem-heading"
              className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl"
            >
              Being good at what you do is not enough if people cannot see your value.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-muted">
            <p>
              You may have valuable knowledge, a great service, or a business
              worth knowing about. But if your message is unclear or your
              content is inconsistent, the right people may struggle to
              understand what you offer and why it matters.
            </p>

            <p>
              EXORA Visibility & Content brings strategy and writing together
              to help you communicate your value through clear, purposeful
              content. We help you plan what to say and create content you can
              publish on your own platform.
            </p>

            <p className="text-foreground">
              You do not have to hand over your platform to get content
              support. You stay in control of publishing while we help you
              communicate more consistently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
