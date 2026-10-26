export function GoalQuestions() {
  return (
    <fieldset className="mt-8 space-y-4 border-t border-border pt-10">
      <h2 className="font-serif text-2xl text-foreground">
        Let’s talk about your goal
      </h2>

      <p className="text-sm leading-6 text-muted">
        EXORA Execute is built around one specific goal. Tell us what you
        want to accomplish and what progress would mean to you.
      </p>

      <div className="space-y-2">
        <label
          htmlFor="goal"
          className="block text-sm font-medium text-foreground"
        >
          What specific goal do you want to work towards over the next 30 days?
          <span aria-hidden="true"> *</span>
        </label>
        <textarea
          id="goal"
          name="goal"
          required
          rows={4}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-pine"
          placeholder="Describe the goal you want to achieve..."
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="whyNow"
          className="block text-sm font-medium text-foreground"
        >
          Why is this goal important to you right now?
          <span aria-hidden="true"> *</span>
        </label>
        <textarea
          id="whyNow"
          name="whyNow"
          required
          rows={4}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-pine"
          placeholder="Tell us why you want to make progress now..."
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="obstacles"
          className="block text-sm font-medium text-foreground"
        >
          What has been stopping you from making progress so far?
          <span aria-hidden="true"> *</span>
        </label>
        <textarea
          id="obstacles"
          name="obstacles"
          required
          rows={4}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-pine"
          placeholder="For example, distractions, lack of structure, or difficulty staying consistent..."
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="success"
          className="block text-sm font-medium text-foreground"
        >
          What would meaningful progress look like for you after 30 days?
          <span aria-hidden="true"> *</span>
        </label>
        <textarea
          id="success"
          name="success"
          required
          rows={4}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-pine"
          placeholder="What would you be able to do, complete, or measure?"
        />
      </div>
    </fieldset>
  );
}
