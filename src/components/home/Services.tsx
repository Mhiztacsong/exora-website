import { Price } from "@/components/Price";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-b border-border"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-pine">
            Services
          </p>
          <h2
            id="services-heading"
            className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl"
          >
            Two offers. Distinct work.
          </h2>
          <p className="mt-5 text-base leading-8 text-muted">
            Execute is a time-bound programme around one person and one goal.
            Visibility & Content is a monthly retainer of writing, design, and
            planning for a single platform.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="flex flex-col border border-border bg-surface p-7 sm:p-9"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-pine">
                {service.eyebrow}
              </p>
              <h3 className="mt-4 font-serif text-3xl tracking-tight">
                {service.name}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted">
                {service.summary}
              </p>
              <p className="mt-3 text-sm text-foreground">{service.audience}</p>

              <p className="mt-8 font-serif text-4xl">
                <Price amount={service.price} />
                <span className="ml-2 font-sans text-sm text-muted">
                  {service.priceNote}
                </span>
              </p>
              <p className="mt-2 text-sm font-medium text-pine">
                {service.constraint}
              </p>

              <h4 className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Included
              </h4>
              <ul className="mt-4 space-y-2.5">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pine"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {service.exclusions.length > 0 ? (
                <p className="mt-6 text-sm leading-6 text-muted">
                  Not included: {service.exclusions.join(" and ")}.
                </p>
              ) : null}

              <a
                href="#enquire"
                className="mt-10 inline-flex w-fit items-center justify-center rounded-full bg-pine px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-pine-dark"
              >
                Enquire about {service.id === "execute" ? "Execute" : "Visibility"}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
