
export function BrandDetails() {
  return (
    <fieldset className="space-y-6">
      <legend className="font-serif text-2xl text-foreground">
        Tell us about your brand
      </legend>

      <p className="text-sm leading-6 text-muted">
        Help us understand what you do and where people can find you.
      </p>

      <div className="space-y-2">
        <label
          htmlFor="brandName"
          className="block text-sm font-medium text-foreground"
        >
          Business or brand name *
        </label>
        <input
          id="brandName"
          name="brandName"
          type="text"
          required
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-pine"
          placeholder="Enter your business or brand name"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="brandProfile"
          className="block text-sm font-medium text-foreground"
        >
          Link to your social media profile
        </label>
        <input
          id="brandProfile"
          name="brandProfile"
          type="url"
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-pine"
          placeholder="https://..."
        />
        <p className="text-xs leading-5 text-muted">
          If your brand has more than one profile, you can share the main one for now.
        </p>
      </div>
    </fieldset>
  );
}
