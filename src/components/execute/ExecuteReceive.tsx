import { whatYouReceive } from "@/lib/execute";

export function ExecuteReceive() {
  return (
    <section
      className="border-b border-border bg-surface/50"
      aria-labelledby="execute-includes-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-pine">
            What you receive
          </p>
    
          <h2
            id="execute-includes-heading"
            className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl"
          >
            A practical structure for your next 30 days.
          </h2>

          <p className="mt-5 text-base leading-8 text-muted">
            You will have a plan to work from, regular opportunities to
            discuss your progress, and tools to help you stay focused
            throughout the programme.
          </p>
        </div>
    
        <div className="mt-10 grid gap-0 sm:grid-cols-2">
          {whatYouReceive.map((item) => (
            <article
              key={item.number}
              className="border-b border-border py-6 sm:px-6 sm:py-7 [&:nth-child(odd)]:sm:border-r [&:nth-child(1)]:sm:pl-0 [&:nth-child(odd)]:sm:pr-8 [&:nth-child(even)]:sm:pl-8"
            >
              <p className="text-xs font-medium tracking-[0.2em] text-pine">
                {item.number}
              </p>

              <h3 className="mt-3 font-serif text-xl text-foreground">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
    
        <p className="mt-8 max-w-3xl text-sm leading-7 text-muted">
          The programme is designed to support measurable progress. Your
          results will depend on your goal, circumstances, and the actions
          you take; completion of every goal is not guaranteed.
        </p>
      </div>
    </section>
  );
}