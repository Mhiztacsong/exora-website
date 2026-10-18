import { processSteps } from "@/lib/site";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 border-b border-border"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-pine">
            How it works
          </p>
          <h2
            id="process-heading"
            className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl"
          >
            A short brief, then the work.
          </h2>
          <p className="mt-5 text-base leading-8 text-muted">
            There is no long onboarding sequence and no extra product layer.
            You choose a service, agree the scope, and complete the
            deliverables inside that frame.
          </p>
        </div>

        <ol className="mt-14 grid gap-px bg-border sm:grid-cols-2">
          {processSteps.map((step) => (
            <li key={step.number} className="bg-background p-7 sm:p-9">
              <span className="font-serif text-3xl text-pine">
                {step.number}
              </span>
              <h3 className="mt-5 font-serif text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
