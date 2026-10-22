import { theApproach } from "@/lib/execute";

export function ExecuteApproach() {
  return (
    <section
      className="border-b border-border bg-surface/50"
      aria-labelledby="execute-approach-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-pine">
            The EXORA approach
          </p>

          <h2
            id="execute-approach-heading"
            className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl"
          >
            Support that moves you towards action.
          </h2>

          <p className="mt-5 text-base leading-8 text-muted">
            Progress takes more than encouragement alone. It takes
            honest reflection, practical planning, and a willingness to
            do the work.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {theApproach.map((principle) => (
            <article
              key={principle.title}
              className="border border-border rounded-full bg-pine p-6"
            >
              <p className="text-xs font-medium tracking-[0.2em] text-white/70 justify-center flex">
                {principle.number}
              </p>

              <h3 className="mt-4 font-serif text-2xl text-white justify-center flex text-center">
                {principle.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/80 justify-center flex text-center">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>  
  );
}