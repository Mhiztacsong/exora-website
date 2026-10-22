
export function ProgrammeDetails() {
  return (
    <section
      className="mt-12 border-t border-border pt-10"
      aria-labelledby="programme-details-heading"
    >
      <h2
        id="programme-details-heading"
        className="font-serif text-2xl text-foreground"
      >
        Before you apply
      </h2>

      <p className="mt-4 text-sm leading-7 text-muted">
        EXORA Execute is a focused, 30-day, one-on-one programme designed
        to help you turn one specific goal into practical action and
        measurable progress.
      </p>

      <div className="mt-6 rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-pine">
          The Founding Five
        </p>

        <p className="mt-3 font-serif text-4xl text-foreground">
          ₦10,000
        </p>

        <p className="mt-2 text-sm text-muted">
          For the 30-day programme
        </p>

        <div className="my-6 border-t border-border" />

        <h3 className="text-sm font-semibold text-foreground">
          What's included
        </h3>

        <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
          <li>Personal goal-mapping session</li>
          <li>A personalised 30-day execution plan</li>
          <li>Two scheduled one-on-one check-ins each week</li>
          <li>Daily action tracker and weekly progress reports</li>
          <li>Accountability and problem-solving support</li>
          <li>A copy of the book <em>Just Execute</em></li>
          <li>Final progress review</li>
        </ul>
      </div>

      <div className="mt-6 space-y-3">
        <h3 className="font-medium text-foreground">
          What happens after you apply?
        </h3>

        <p className="text-sm leading-7 text-muted">
          EXORA will review your application to understand your goal
          and whether the programme is a suitable fit. If it is, you'll
          be contacted about the next steps.
        </p>

        <p className="text-sm leading-7 text-muted">
          Submitting this application does not automatically confirm
          your place or require you to make a payment.
        </p>
      </div>
    </section>
  );
}
