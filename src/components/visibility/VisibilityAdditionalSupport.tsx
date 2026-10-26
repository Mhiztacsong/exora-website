export function VisibilityAdditionalSupport() {
  return (
    <section
      className="border-b border-border bg-surface/50"
      aria-labelledby="visibility-additional-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-pine">
              Beyond the monthly package
            </p>

            <h2
              id="visibility-additional-heading"
              className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl"
            >
              Need more? Let's discuss what fits.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-muted">
            <p>
              The monthly package focuses on content strategy, writing,
              planning, and the included carousel designs for one platform.
              If you need support beyond that scope, we can discuss your
              requirements separately.
            </p>

            <div>
              <h3 className="font-medium text-foreground">
                Services outside the standard package
              </h3>

              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Video editing</li>
                <li>Additional graphic designs beyond the included carousels</li>
                <li>Community management and replying to comments or messages</li>
                <li>Scheduling and publishing content on your behalf</li>
                <li>Broader social media management</li>
                <li>Content for additional platforms</li>
              </ul>
            </div>

            <p className="text-foreground">
              These services are not included in the monthly fee. Any
              additional work must be discussed and agreed upon separately
              before it begins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
