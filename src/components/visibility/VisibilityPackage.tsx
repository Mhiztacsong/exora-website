import { Price } from "@/components/Price";

const monthlyDeliverables = [
  "27 written posts per month",
  "6 carousel designs included within the 27 posts",
  "Content strategy",
  "Monthly content calendar",
  "Initial profile optimization",
  "Monthly performance review",
];

export function VisibilityPackage() {
  return (
    <section
      className="border-b border-border"
      aria-labelledby="visibility-package-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-pine">
              Your monthly package
            </p>

            <h2
              id="visibility-package-heading"
              className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl"
            >
              A clearer message. A more consistent presence.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
              Get strategic content support for one platform at a time,
              with the writing and planning needed to communicate your value
              consistently throughout the month.
            </p>

            <ul className="mt-8 space-y-4">
              {monthlyDeliverables.map((deliverable) => (
                <li
                  key={deliverable}
                  className="flex items-start gap-3 text-sm leading-7 text-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pine"
                  />
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="self-start rounded-3xl border border-border bg-surface p-7 sm:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-pine">
              Founding-client offer
            </p>

            <p className="mt-5 font-serif text-4xl text-foreground sm:text-5xl">
              <Price amount="10,000" />
            </p>

            <p className="mt-2 text-sm text-muted">
              Per platform, per month
            </p>

            <div className="my-6 border-t border-border" />

            <p className="text-sm leading-7 text-muted">
              This introductory price is for the first five founding clients.
              Each platform is priced separately, and the service is billed
              monthly.
            </p>

            <p className="mt-4 text-sm leading-7 text-foreground">
              You remain in control of publishing. EXORA provides content
              support; publishing and broader social media management are
              not included.
            </p>

            <a
              href="#enquire"
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-pine px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-pine-dark"
            >
              Enquire about the package
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
