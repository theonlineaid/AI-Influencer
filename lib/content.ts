/**
 * Central content for the Sajied AI landing page (Founders-AI-style layout).
 * Edit here to rebrand or swap copy, images, and CTAs.
 */

export type ImageRef = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const site = {
  name: "Sajied AI",
  description:
    "Get your AI product in front of millions — using the Sajied AI growth flywheel.",
  url: "https://sajied.ai",
};

export const nav = {
  cta: { label: "Book a Free Strategy Call", href: "#book-call" },
};

export const hero = {
  /** Main headline — shown on separate lines in the hero. */
  headlineLines: [
    "Get Your AI Tool 30 Million",
    "Views and 2,500 Signups",
    "in 30 Days",
  ],
  subheadline: "Using our AI Influencer Flywheel.",
  punchy:
    "No random posts. No wasted budget. No guessing what works.",
  guarantee:
    "And if we don't deliver 30M views and 1,500 signups? — You don't pay.",
  /** Contained (solid) — under video */
  campaignCta: {
    label: "Start Your 30-Day Campaign",
    href: "#book-call",
  },
  /** Outline — under video */
  strategyCallCta: {
    label: "Book a Free Strategy Call",
    href: "#book-call",
  },
  guaranteeFootnote:
    "30-day guarantee • No signups = No payment + $5,000 bonus",
  email: {
    placeholder: "Enter your work email",
    submitLabel: "Start Growing Now",
  },
  /** Hero YouTube embed (edit `src` to swap videos). */
  youtubeEmbed: {
    src: "https://www.youtube.com/embed/jX4dLxiso6A?si=XWgBQSQvYHneR_un",
    title: "YouTube video player",
  },
};

/** Logo strip under hero — swap `src` for your own brand assets in /public/images/trusted/ */
export const trustedBy = {
  title: "Trusted by founders at",
  logos: [
    {
      id: "higgsfield",
      src: "/images/trusted/higgsfield.svg",
      alt: "Higgsfield AI",
      width: 200,
      height: 36,
    },
    {
      id: "napkin",
      src: "/images/trusted/napkin.svg",
      alt: "Napkin AI",
      width: 140,
      height: 36,
    },
    {
      id: "chatgpt",
      src: "/images/trusted/chatgpt.svg",
      alt: "ChatGPT",
      width: 130,
      height: 36,
    },
    {
      id: "deepseek",
      src: "/images/trusted/deepseek.svg",
      alt: "DeepSeek",
      width: 140,
      height: 36,
    },
    {
      id: "perplexity",
      src: "/images/trusted/perplexity.svg",
      alt: "Perplexity",
      width: 160,
      height: 36,
    },
    {
      id: "claude",
      src: "/images/trusted/claude.svg",
      alt: "Claude",
      width: 110,
      height: 36,
    },
    {
      id: "runway",
      src: "/images/trusted/runway.svg",
      alt: "Runway",
      width: 120,
      height: 36,
    },
    {
      id: "midjourney",
      src: "/images/trusted/midjourney.svg",
      alt: "Midjourney",
      width: 160,
      height: 36,
    },
  ],
} as const;

export type TrustedLogo = (typeof trustedBy.logos)[number];

export const painPoints = {
  title: "Are You Struggling With These?",
  subtitle:
    "Most AI founders hit the same wall: great product, invisible distribution.",
  items: [
    {
      id: "leads",
      icon: "trendDown" as const,
      title: "Low Lead Volume",
      body: "Your demos are strong, but inbound dries up the moment ads or posts stop.",
    },
    {
      id: "noise",
      icon: "users" as const,
      title: "Crowded Market",
      body: "Everyone is launching an AI tool — standing out on social feels impossible.",
    },
    {
      id: "cost",
      icon: "dollar" as const,
      title: "Burning Budget",
      body: "Paid spend and agencies eat runway before you ever see repeatable signups.",
    },
  ],
};

export const flipBanner = {
  headline: "What if you could flip this completely?",
  cta: { label: "See how it works", href: "#flywheel" },
};

export const flywheel = {
  id: "flywheel" as const,
  title: "How We Get You 30M Views?",
  subtitle: "The AI Influencer Flywheel",
  items: [
    {
      id: "1",
      title: "Viral-first positioning",
      body: "We sharpen your hook, offer, and proof so every piece of content has a reason to spread.",
    },
    {
      id: "2",
      title: "Creator & channel mix",
      body: "We place you where your buyers already scroll — with scripts that sound human, not corporate.",
    },
    {
      id: "3",
      title: "Always-on publishing",
      body: "Consistency beats perfection. The flywheel keeps content shipping while you build the product.",
    },
    {
      id: "4",
      title: "Measure what matters",
      body: "Views are vanity until they become signups. We track the path from attention to waitlist.",
    },
  ],
};

export const growthSystem = {
  id: "system" as const,
  title: "How The S-A-I-E System Works",
  subtitle:
    "Strategy → Amplify → Implement → Evolve. A simple loop that compounds distribution.",
  cta: { label: "Start Your Growth Journey", href: "#book-call" },
  pillars: [
    {
      letter: "S",
      title: "Strategy sprint",
      body: "We map your ICP, angles, and the stories that win on short-form.",
    },
    {
      letter: "A",
      title: "Amplify reach",
      body: "Coordinated posts, creators, and remixes designed to spike reach fast.",
    },
    {
      letter: "I",
      title: "Implement playbooks",
      body: "Scripts, shot lists, and templates you can reuse without starting from zero.",
    },
    {
      letter: "E",
      title: "Evolve with data",
      body: "Double down on what converts; cut what doesn’t — weekly iteration cadence.",
    },
  ],
};

export const included = {
  id: "included" as const,
  title: "What's Included In Your Partnership",
  items: [
    "Viral scriptwriting & hooks",
    "Short-form content calendar",
    "Influencer & creator management",
    "Posting & repurposing workflows",
    "Landing page CRO suggestions",
    "Weekly growth reviews & reporting",
  ],
  footnote: "100% Done-For-You Service",
};

export const caseStudies = {
  id: "cases" as const,
  title: "Case Study",
  subtitle: "Real distribution outcomes from teams we’ve partnered with.",
  cases: [
    {
      id: "tiktok",
      platform: "TikTok",
      title: "B2B AI assistant launch",
      body: "30-day burst focused on founder pain stories + demo clips.",
      metrics: { views: "12.4M", signups: "1.8k", roi: "4.1x" },
      image: {
        src: "/images/cases/tiktok-analytics.svg",
        alt: "TikTok analytics dashboard showing views and growth",
        width: 800,
        height: 520,
      } satisfies ImageRef,
    },
    {
      id: "x",
      platform: "X / Twitter",
      title: "Developer tool waitlist",
      body: "Thread-led narrative + micro-demos every 48 hours.",
      metrics: { views: "8.2M", signups: "920", roi: "3.6x" },
      image: {
        src: "/images/cases/x-analytics.svg",
        alt: "X analytics showing impressions and engagement",
        width: 800,
        height: 520,
      } satisfies ImageRef,
    },
    {
      id: "ig",
      platform: "Instagram Reels",
      title: "Consumer AI companion",
      body: "Relatable skits + product proof in the first 3 seconds.",
      metrics: { views: "6.9M", signups: "2.1k", roi: "5.0x" },
      image: {
        src: "/images/cases/instagram-analytics.svg",
        alt: "Instagram Reels performance and reach dashboard",
        width: 800,
        height: 520,
      } satisfies ImageRef,
    },
  ],
};

export const about = {
  id: "about" as const,
  eyebrow: "About us",
  title: "We help AI founders turn attention into signups.",
  body: [
    "Sajied AI exists because building in public isn’t optional anymore — but doing it well is still rare. We combine creative direction, influencer workflows, and ruthless prioritization so your roadmap and your distribution move together.",
    "You stay focused on product. We make sure the market actually sees it.",
  ],
  bullets: [
    "Done-for-you content & creator coordination",
    "Scripts and formats tuned for each platform",
    "Clear reporting from views to qualified signups",
  ],
};

export const founder = {
  name: "Sajied",
  title: "CEO & Founder",
  image: {
    src: "/images/sajied-founder.png",
    alt: "Sajied, CEO & Founder of Sajied AI",
    width: 640,
    height: 800,
  } satisfies ImageRef,
};

export const faq = {
  id: "faq" as const,
  title: "Frequently Asked Questions",
  items: [
    {
      id: "q1",
      question: "Who is Sajied AI for?",
      answer:
        "Founders and small teams shipping AI products who need distribution that compounds — not one-off viral posts that vanish.",
    },
    {
      id: "q2",
      question: "Do you replace our marketing team?",
      answer:
        "We’re built to plug in alongside your team or as your external growth arm. Many clients use us to run the flywheel while they stay heads-down on product.",
    },
    {
      id: "q3",
      question: "How fast can we start?",
      answer:
        "After a strategy call, most partners are live within one to two weeks — with scripts, channel plan, and first publish dates locked.",
    },
    {
      id: "q4",
      question: "What if we’re pre-launch?",
      answer:
        "Even better. We can shape waitlist narrative, proof points, and creator angles before you open the doors — so day-one attention converts.",
    },
    {
      id: "q5",
      question: "How do you measure success?",
      answer:
        "We track reach, engagement, and signups attributed to campaigns — plus downstream demo requests when you share that data with us.",
    },
    {
      id: "q6",
      question: "What’s required from our side?",
      answer:
        "Access to product truth (screens, roadmap, positioning), approval on key scripts, and a point person for quick feedback so we can keep shipping.",
    },
  ],
};

export const booking = {
  id: "book-call" as const,
  title: "Book Your Strategy Call",
  subtitle:
    "Pick a time that works. We’ll map your flywheel and next 30 days of distribution.",
  /** Inline embed — event: https://calendly.com/omorfaruk-dev/new-meeting */
  calendlyEmbedUrl:
    "https://calendly.com/omorfaruk-dev/new-meeting?embed_type=Inline",
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} Sajied AI. All rights reserved.`,
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "X", href: "https://twitter.com" },
  ],
  legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export type PainIcon = (typeof painPoints.items)[number]["icon"];
