export const site = {
  name: "EXORA",
  tagline: "Execution and visibility, with a clear brief.",
  description:
    "EXORA offers a 30-day one-to-one goal execution programme and monthly content support for professionals, creators, and small businesses.",
};

export const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#enquire", label: "Enquire" },
] as const;


export const services = [
  {
    id: "execute",
    name: "EXORA Execute",
    eyebrow: "30 days · one to one",
    summary:
      "A 30-day one-on-one programme that helps you turn one specific goal into a practical plan, take consistent action, and track measurable progress.",
    price: "10,000",
    priceNote: "per person · 30 days",
    constraint: "The Founding Five · five places",
    audience:
      "For people with a clear goal they can break into actions and measure within 30 days.",
    deliverables: [
      "Personal goal mapping session",
      "Personalised 30-day execution plan",
      "Two scheduled one-on-one check-ins each week",
      "Daily action tracker",
      "Weekly progress reports",
      "Accountability and problem-solving support",
      "A copy of Just Execute",
      "Final progress review",
    ],
    exclusions: [] as string[],
  },
  {
    id: "visibility",
    name: "EXORA Visibility & Content",
    eyebrow: "Monthly · per platform",
    summary:
      "Strategic content support that helps professionals, creators, and small businesses communicate their value clearly and consistently on one social media platform.",
    price: "10,000",
    priceNote: "per platform / month",
    constraint: "Founding-client rate · first five clients",
    audience:
      "For people and businesses that want purposeful content without handing over publishing.",
    deliverables: [
      "27 written posts per month",
      "Six carousel designs included within the 27 posts",
      "Content strategy tailored to your goals",
      "Monthly content calendar",
      "Initial profile optimisation",
      "Monthly performance review",
    ],
    exclusions: [
      "Scheduling and publishing",
      "Additional social media platforms",
      "Video editing and extra graphic designs",
      "Community management and broader social media management",
    ],
  },
] as const;

export const processGroups = [
  {
      title: "EXORA Execute",
      description:
        "A guided 30-day process to help you turn one specific goal into action and track your progress.",
      steps: [
        {
          number: "01",
          title: "Apply",
          body: "Share the specific goal you want to work towards during the 30-day programme.",
        },
        {
          number: "02",
          title: "Confirm the fit",
          body: "Discuss your goal and confirm that it is suitable for the programme.",
        },
        {
          number: "03",
          title: "Map your goal",
          body: "Work together to create a personalised 30-day execution plan with clear actions.",
        },
        {
          number: "04",
          title: "Take action and track progress",
          body: "Use your daily action tracker, weekly progress reports, and two scheduled one-on-one check-ins each week to stay accountable.",
        },
        {
          number: "05",
          title: "Review your progress",
          body: "Look at what you achieved, what challenged you, and what your next steps should be.",
        },
      ],
    },
    {
      title: "EXORA Visibility & Content",
      description:
        "A monthly content process that gives your brand direction, purposeful content, and a way to review performance.",
      steps: [
        {
          number: "01",
          title: "Tell us about your brand",
          body: "Share your business or personal brand, audience, goals, and chosen social media platform.",
        },
        {
          number: "02",
          title: "Set the direction",
          body: "Develop a content strategy and monthly calendar around your goals.",
        },
        {
          number: "03",
          title: "Prepare your content",
          body: "Receive 27 written posts per month, including six carousel designs, prepared for your chosen platform.",
        },
        {
          number: "04",
          title: "Review and refine",
          body: "Review the content and provide feedback so the work can be refined before it is finalised.",
        },
        {
          number: "05",
          title: "Learn and improve",
          body: "Review monthly performance to understand what worked and inform future content decisions.",
        },
      ],
    },
] as const;
