
export function AdditionalNotes() {
  return (
    <fieldset className="space-y-6">
      <legend className="font-serif text-2xl text-foreground">
        Anything else we should know?
      </legend>

      <p className="text-sm leading-6 text-muted">
        Share any other details that could help us understand your brand
        and its content needs. This section is optional.
      </p>

      <div className="space-y-2">
        <label
          htmlFor="additionalNotes"
          className="block text-sm font-medium text-foreground"
        >
          Additional information
        </label>

        <textarea
          id="additionalNotes"
          name="additionalNotes"
          rows={4}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-pine"
          placeholder="Write your message here..."
        />
      </div>
    </fieldset>
  );
}
