
const visibilityFAQs = [
  {
    question: "Who is this service for?",
    answer:
      "It is designed for personal brands and professionals, creators, and small businesses that want strategic content for one social media platform.",
  },
  {
    question: "How many posts are included?",
    answer:
      "The monthly package includes 27 written posts. Six of those posts can be delivered as carousel designs; the carousels are not additional posts.",
  },
  {
    question: "Does the package include publishing?",
    answer:
      "No. Scheduling and publishing can be added as a separate service.",
  },
  {
    question: "Can I add another platform?",
    answer:
      "Yes. Content for additional platforms is discussed and priced separately.",
  },
  {
    question: "Does EXORA guarantee viral posts or sales?",
    answer:
      "No. We focus on strategic planning and quality content deliverables. Reach, engagement, leads, and sales depend on several factors and cannot be guaranteed.",
  },
  {
    question: "How do I get started?",
    answer:
      "Use the contact or inquiry option on this website to tell us about your brand and what you need.",
  },
];

export function VisibilityFAQs() {
  return (
    <section
      className="border-b border-border bg-surface/50"
      aria-labelledby="visibility-faq-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-pine">
            Frequently asked questions
          </p>

          <h2
            id="visibility-faq-heading"
            className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl"
          >
            A few things you may want to know.
          </h2>
        </div>

        <div className="mt-10 max-w-3xl divide-y divide-border">
          {visibilityFAQs.map((faq) => (
            <details key={faq.question} className="py-5">
              <summary className="cursor-pointer font-medium text-foreground">
                {faq.question}
              </summary>

              <p className="mt-3 text-sm leading-7 text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
