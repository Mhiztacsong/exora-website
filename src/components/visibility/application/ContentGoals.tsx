
export function ContentGoals() {
  return (
    <fieldset className="space-y-6">
      <legend className="font-serif text-2xl text-foreground">
        Tell us about your content goals
      </legend>

      <p className="text-sm leading-6 text-muted">
        Help us understand your audience, your message, and what you want your content to achieve.
      </p>

      <div className="space-y-2">
        <label
          htmlFor="targetAudience"
          className="block text-sm font-medium text-foreground"
        >
          Who do you want to reach? *
        </label>
        <textarea
          id="targetAudience"
          name="targetAudience"
          required
          rows={3}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-pine"
          placeholder="Describe the people you want to connect with."
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="contentGoals"
          className="block text-sm font-medium text-foreground"
        >
          What would you like your content to help you achieve? *
        </label>
        <textarea
          id="contentGoals"
          name="contentGoals"
          required
          rows={4}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-pine"
          placeholder="For example, explain your expertise more clearly or communicate your services consistently."
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="currentChallenges"
          className="block text-sm font-medium text-foreground"
        >
          What is your biggest content challenge?
        </label>
        <textarea
          id="currentChallenges"
          name="currentChallenges"
          rows={3}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-pine"
          placeholder="Tell us what has been difficult about creating content."
        />
      </div>
    </fieldset>
  );
}
