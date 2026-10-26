
export function PackageUnderstanding() {
  return (
    <fieldset className="space-y-6">
      <legend className="font-serif text-2xl text-foreground">
        Let's confirm the package details
      </legend>

      <div className="rounded-xl border border-border bg-background p-5">
        <p className="font-medium text-foreground">
          EXORA Visibility & Content
        </p>

        <p className="mt-2 text-2xl font-serif text-foreground">
          ₦10,000
        </p>

        <p className="mt-1 text-sm text-muted">
          Per platform, per month
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
          <li>27 written posts per month</li>
          <li>6 carousel designs included within the 27 posts</li>
          <li>Content strategy and a monthly content calendar</li>
          <li>Initial profile optimisation</li>
          <li>Monthly performance review</li>
        </ul>

        <p className="mt-4 text-sm leading-6 text-muted">
          Publishing and scheduling are not included. Additional services
          and extra platforms may be priced separately.
        </p>
      </div>

      <label className="flex items-start gap-3 text-sm leading-6 text-foreground">
        <input
          type="checkbox"
          name="packageAcknowledged"
          value="yes"
          required
          className="mt-1 h-4 w-4 accent-pine"
        />

        <span>
          I understand the package, its price, and that publishing is not
          included. *
        </span>
      </label>
    </fieldset>
  );
}
