
const faqs = [
  {
    question: "Do I need to have a goal before applying?",
    answer:
      "Yes. You should have a specific goal you want to work on. Goal mapping will help clarify it and determine what meaningful progress can look like in 30 days.",
  },
  {
    question: "Can I bring any type of goal?",
    answer:
      "You can bring a goal from different areas of life, provided it can be broken into actionable steps and its progress can be measured within 30 days.",
  },
  {
    question: "Does the programme guarantee I will complete my goal?",
    answer:
      "No specific outcome can be guaranteed. The programme provides structure, support, accountability, and progress tracking to help you take action and make measurable progress.",
  },
  {
    question: "Is the book included?",
    answer:
      "Yes. A copy of Just Execute is included in the ₦10,000 founding programme fee.",
  },
  {
    question: "How often will we meet?",
    answer:
      "The programme includes two scheduled one-on-one check-ins per week during the 30-day period.",
  },
  {
    question: "How much does it cost?",
    answer:
      "The founding price is ₦10,000 per participant for the 30-day programme.",
  },
];

export function ExecuteFAQs() {
  return (
    <section
      className="bg-background px-5 py-16 sm:px-8 sm:py-20"
      aria-labelledby="execute-faq-heading"
    >
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-pine">
          Frequently asked questions
        </p>

        <h2
          id="execute-faq-heading"
          className="mt-4 font-serif text-3xl tracking-tight text-foreground sm:text-4xl"
        >
          A Few Things You Might Wonder.
        </h2>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-foreground">
                <span>{faq.question}</span>

                <span
                  aria-hidden="true"
                  className="text-xl text-pine transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
