
export function CommitmentQuestions() {
  return (
    <fieldset className="mt-8 space-y-4 border-t border-border pt-10">
      <h2 className="font-serif text-2xl text-foreground">
        Are you ready to commit?
      </h2>

      <p className="text-sm leading-6 text-muted">
        The programme involves taking action, tracking your progress, and
        being honest about what is and isn't working.
      </p>

      <div className="space-y-2">
        <label
          htmlFor="accountability"
          className="block text-sm font-medium text-foreground"
        >
          How would one-on-one accountability help you achieve your goal?
          <span aria-hidden="true"> *</span>
        </label>
        <textarea
          id="accountability"
          name="accountability"
          required
          rows={4}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-pine"
          placeholder="Tell us what kind of support would help you..."
        />
      </div>

      <div className="space-y-3">
        <legend className="text-sm font-medium text-foreground">
          Are you willing to track your daily actions, attend scheduled
          check-ins, and report your progress honestly?
          <span aria-hidden="true"> *</span>
        </legend>

        <label className="flex items-start gap-3 rounded-xl border border-border p-4">
          <input
            type="radio"
            name="commitment"
            value="ready"
            required
            className="mt-1 accent-pine"
          />
          <span className="text-sm leading-6 text-foreground">
            Yes, I'm ready to commit.
          </span>
        </label>

        <label className="flex items-start gap-3 rounded-xl border border-border p-4">
          <input
            type="radio"
            name="commitment"
            value="need-more-information"
            required
            className="mt-1 accent-pine"
          />
          <span className="text-sm leading-6 text-foreground">
            I need to understand the commitment better.
          </span>
        </label>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="additionalInfo"
          className="block text-sm font-medium text-foreground"
        >
          Is there anything else you'd like EXORA to know?
        </label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          rows={3}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-pine"
          placeholder="Anything else you'd like to share (optional)..."
        />
      </div>
    </fieldset>
  );
}
