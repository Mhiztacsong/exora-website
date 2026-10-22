import { theProcess } from "@/lib/execute";

export function ExecuteProcess() {
  return (
    <section
      id="how-it-works"
      className="border-b border-border"
      aria-labelledby="execute-process-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-pine">
            The process
          </p>

          <h2
            id="execute-process-heading"
            className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl"
          >
            From intention to action, one step at a time.
          </h2>

          <p className="mt-5 text-base leading-8 text-muted">
            The programme follows a clear structure so you know what
            happens next and what you need to focus on.
          </p>
        </div>

        <div className="mt-10 space-y-0">
          {theProcess.map((step) => (
            <article
              key={step.number}
              className="grid gap-3 border-b border-border py-6 sm:grid-cols-[4rem_1fr] sm:gap-6 sm:py-7"
            >
              <p className="text-sm font-medium tracking-[0.2em] text-pine">
                {step.number}
              </p>

              <div>
                <h3 className="font-serif text-xl text-foreground">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section> 
  );
}