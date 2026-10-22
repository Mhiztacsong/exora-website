
import { Price } from "@/components/Price";
import { services } from "@/lib/site";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 border-b border-border bg-surface"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-pine">
            Pricing
          </p>
          <h2
            id="pricing-heading"
            className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl"
          >
            Straightforward fees.
          </h2>
          <p className="mt-5 text-base leading-8 text-muted">
            Both services have a founding offer of <Price amount="10,000" />,
            with different terms. Execute is a one-time fee for 30 days.
            Visibility & Content is a monthly fee for one social media
            platform, at the founding-client rate for the first five clients.
          </p>
        </div>

        <div className="mt-12 overflow-hidden border border-border bg-background">
          <table className="hidden w-full text-left md:table">
            <caption className="sr-only">EXORA service pricing</caption>
            <thead className="border-b border-border text-xs uppercase tracking-[0.18em] text-muted">
              <tr>
                <th scope="col" className="px-8 py-4 font-medium">
                  Service
                </th>
                <th scope="col" className="px-8 py-4 font-medium">
                  Fee
                </th>
                <th scope="col" className="px-8 py-4 font-medium">
                  Term
                </th>
                <th scope="col" className="px-8 py-4 font-medium">
                  Availability
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <th scope="row" className="px-8 py-6 font-serif text-2xl">
                  Execute
                </th>
                <td className="px-8 py-6 text-sm">
                  <Price amount="10,000" /> per person
                </td>
                <td className="px-8 py-6 text-sm">
                  30 days, one-time fee
                </td>
                <td className="px-8 py-6 text-sm">
                  The Founding Five · five places
                </td>
              </tr>
              <tr>
                <th scope="row" className="px-8 py-6 font-serif text-2xl">
                  Visibility & Content
                </th>
                <td className="px-8 py-6 text-sm">
                  <Price amount="10,000" /> per platform / month
                </td>
                <td className="px-8 py-6 text-sm">Monthly</td>
                <td className="px-8 py-6 text-sm">
                  Founding-client rate · first five clients
                </td>
              </tr>
            </tbody>
          </table>

          <div className="divide-y divide-border md:hidden">
            {services.map((service) => (
              <div key={service.id} className="p-6">
                <h3 className="font-serif text-2xl">{service.name}</h3>
                <p className="mt-3 text-sm">
                  <Price amount={service.price} /> {service.priceNote}
                </p>
                <p className="mt-2 text-sm text-muted">{service.constraint}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm leading-7 text-muted">
          The Execute fee includes a copy of Just Execute. The Visibility &
          Content package includes 27 written posts per month, with six
          carousel designs included within those 27 posts. Scheduling and
          publishing are not included.
        </p>
      </div>
    </section>
  );
}
