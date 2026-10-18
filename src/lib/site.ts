export const site = {
  name: "EXORA",
  tagline: "Execution and visibility, with a clear brief.",
  description:
    "EXORA offers a 30-day one-to-one goal execution programme and monthly content support for professionals, creators, and small businesses.",
};

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#enquire", label: "Enquire" },
] as const;

export const services = [
  {
    id: "execute",
    name: "EXORA Execute",
    eyebrow: "30 days · one to one",
    summary:
      "A focused programme for people who already know what they want to achieve, and need structured help turning that goal into daily action.",
    price: "10,000",
    priceNote: "per person",
    constraint: "Five places only",
    audience: "For individuals with a measurable goal and a 30-day window.",
    deliverables: [
      "Goal mapping",
      "Execution planning",
      "Check-ins",
      "Progress tracking",
      "Final review",
    ],
    exclusions: [] as string[],
  },
  {
    id: "visibility",
    name: "EXORA Visibility & Content",
    eyebrow: "Monthly · per platform",
    summary:
      "Content support for professionals, creators, and small businesses who need a consistent presence without handing over publishing.",
    price: "10,000",
    priceNote: "per platform / month",
    constraint: "Billed monthly, one platform at a time",
    audience: "For people and businesses who already have a channel to fill.",
    deliverables: [
      "27 written posts",
      "Six carousel designs",
      "Content strategy",
      "Content calendar",
      "Profile optimization",
      "Performance review",
    ],
    exclusions: ["scheduling", "publishing"],
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Choose the work",
    body: "Select Execute if you need a 30-day plan around one goal. Select Visibility & Content if you need a month of posts, carousels, and structure for a single platform.",
  },
  {
    number: "02",
    title: "Set the brief",
    body: "Share the goal you intend to complete, or the platform you need filled. The work stays within that brief so the deliverables stay specific.",
  },
  {
    number: "03",
    title: "Work the cadence",
    body: "Execute is built around mapping, planning, check-ins, and tracking. Visibility & Content is built around strategy, a calendar, written posts, and carousel designs.",
  },
  {
    number: "04",
    title: "Close with a review",
    body: "Both services end with a review of what was produced and what moved. From there, you decide whether to continue, pause, or stop.",
  },
] as const;
