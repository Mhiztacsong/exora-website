import { isThisForYou } from "@/lib/execute";

export function ExecuteAudience() {
  return (
    <section
      className="border-b border-border"
      aria-labelledby="execute-audience-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-pine">
            Is this for you?
          </p>

          <h2
            id="execute-audience-heading"
            className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl"
          >
            You have a goal. Now you need a way to move it forward.
          </h2>

          <p className="mt-5 text-base leading-8 text-muted">
            EXORA Execute is designed for people who are ready to turn a
            specific goal into practical steps and measurable progress
            within 30 days.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {isThisForYou.map((item) => (
            <article
              key={item.title}
              className="border border-border bg-surface/60 p-6 sm:p-7"
            >
              <h3 className="font-serif text-xl text-foreground">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm leading-7 text-muted">
          You do not need to have every step figured out before applying.
          You do need a goal you are willing to work on.
        </p>
      </div>
    </section>
  );
}