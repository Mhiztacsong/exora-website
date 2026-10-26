
export function PlatformDetails() {
  return (
    <fieldset className="space-y-6">
      <legend className="font-serif text-2xl text-foreground">
        Which platform do you need help with?
      </legend>

      <p className="text-sm leading-6 text-muted">
        The founding-client offer covers one platform at a time.
      </p>

      <div className="space-y-2">
        <label
          htmlFor="platform"
          className="block text-sm font-medium text-foreground"
        >
          Choose your main platform *
        </label>

        <select
          id="platform"
          name="platform"
          required
          defaultValue=""
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-pine"
        >
          <option value="" disabled>
            Select a platform
          </option>
          <option value="Instagram">Instagram</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Facebook">Facebook</option>
          <option value="TikTok">TikTok</option>
          <option value="X">X</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="otherPlatform"
          className="block text-sm font-medium text-foreground"
        >
          If you selected Other, name the platform
        </label>
        <input
          id="otherPlatform"
          name="otherPlatform"
          type="text"
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-pine"
          placeholder="Enter the platform name"
        />
      </div>
    </fieldset>
  );
}
