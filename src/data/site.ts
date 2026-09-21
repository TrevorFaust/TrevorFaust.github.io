export const site = {
  name: "Trevor Faust",
  initials: "TF",
  title: "Trevor Faust | Data Analytics & Product Building",
  description:
    "Seattle data professional who builds sports tools and side projects. I turn messy data into things people can act on.",
  location: "Seattle, WA",
  email: "trevorfaus27@gmail.com",
  tagline:
    "I'm an engineer who can't leave an inefficient process alone. Give me a tedious or broken process and I'll design and ship a real system for it, from large-scale sports data platforms to job search automation.",
  links: {
    linkedin: "https://www.linkedin.com/in/trevor-faust-000t",
    substack: "https://substack.com/@trevorfaust",
    github: "https://github.com/TrevorFaust",
  },
};

export const projects = [
  {
    slug: "draftdna",
    title: "DraftDNA",
    blurb:
      "A fantasy football platform that puts live drafts, rankings, and league intel in one place to help you run a smoother season.",
    detail:
      "A PostgreSQL database that hosts 200M+ NFL records, with a 150-source pipeline feeding weekly coverage, built on React, TypeScript, and Python.",
    href: "https://draftdna.com",
    repo: "https://github.com/TrevorFaust/DraftDNA",
    tags: ["React", "Python", "Supabase", "Tailwind", "Realtime"],
  },
  {
    slug: "scoutdna",
    title: "ScoutDNA Newsletter",
    blurb: "Weekly news for all 32 NFL clubs, so you don't have to chase thirty-two feeds.",
    detail:
      "A newsletter that pulls leaguewide activity into one briefing for each team with scouting notes, daily signals, and important updates for the upcoming week's matchup.",
    href: "https://scoutdna-news.vercel.app/",
    repo: "https://github.com/TrevorFaust/ScoutDNA_Newsletter",
    tags: ["RAG", "Clustering", "Scraping", "LLM compose", "Supabase"],
  },
  {
    slug: "job-search",
    title: "Hustle Hunter",
    blurb:
      "A site that helps you find a job, then tailors your resumes, cover letters, follow-ups, and interview prep all from the experience you provide it.",
    detail:
      "The more you feed it, the better it knows your background and the more it shapes the search around you.",
    href: "https://hustlehunter.vercel.app/",
    repo: "https://github.com/TrevorFaust/Job_Search",
    tags: ["LLM", "APIs", "RSS", "Automation", "Supabase"],
  },
  {
    slug: "apartment-hunt",
    title: "Lease Locator",
    blurb: "Finds apartments and houses to lease based on the preferences you set.",
    detail:
      "It catches hidden and niche listings that slip through the cracks of the usual rental sites.",
    href: "https://leaselocator.vercel.app/",
    repo: "https://github.com/TrevorFaust/Apartment_Search",
    tags: ["Playwright", "Scoring", "Resend", "Supabase"],
  },
  {
    slug: "fantasy-league-blog",
    title: "Seattle SeaSquacks Fantasy Football Blog",
    blurb:
      "My fantasy football league and blog for friends, with power rankings, season recaps, and my personal opinions about their chances to win a championship.",
    detail:
      "It runs on Next.js and TypeScript, with the live season on the home page and previous years kept as full recaps with the original writeups.",
    href: "https://seattleseasquawks-practicesquad.vercel.app/",
    repo: "https://github.com/TrevorFaust/fantasy-league-blog",
    tags: ["Next.js", "Vercel", "TypeScript"],
    // Hidden from the public site. Set to false to show it again.
    hidden: true,
  },
] as const;

export const editorial = {
  kicker: "builder & automation engineer",
  hello: "Come say hi",
  categories: {
    draftdna: "Live product",
    scoutdna: "Intel pipeline",
    "job-search": "Automation",
    "apartment-hunt": "Housing",
    "fantasy-league-blog": "Community",
  },
  flagships: ["draftdna", "scoutdna"] as const,
  capabilities: {
    draftdna: [
      { label: "Persistent", detail: "200M+ NFL records in Postgres" },
      { label: "Modular", detail: "Live drafts, rankings, and league intel" },
      { label: "Scalable", detail: "150-source pipeline for weekly coverage" },
    ],
    scoutdna: [
      { label: "Coverage", detail: "All 32 clubs in one weekly briefing" },
      { label: "Extracted", detail: "Scouting notes, daily signals, matchup updates" },
      { label: "Composed", detail: "RAG, clustering, and LLM writeup" },
    ],
  },
  specs: {
    draftdna: {
      stack: "React, TypeScript, Python, Supabase",
      scale: "200M+ NFL records",
      status: "Live",
    },
    scoutdna: {
      stack: "RAG, clustering, scraping, Supabase",
      scale: "32 clubs, weekly",
      status: "Live",
    },
  },
};

export const about = {
  lead: "I like turning messy data into things people can act on.",
  body: [
    "At Kennametal I work across process engineering, product analytics, and sales enablement. I cut $2M from production with Excel/VBA scheduling, structured 500+ product datasets, and I use Power BI dashboards that help teams track product and regional performance. SQL, Power BI, and Excel are the daily stack. Python is for the problems that outgrow a spreadsheet.",
    "Off the clock I build products from UI through backend because I want to own the full thing. The process is usually scrape, structure, and ship something I would use myself. DraftDNA, Hustle Hunter, and Lease Locator all started that way. I love taking a messy source, modeling it, and putting an interface on it so people actively use it.",
    "I'm looking for my next data analytics role in sports, technology, or energy and sustainability.",
  ],
  skills: [
    "SQL",
    "Power BI",
    "Excel / VBA",
    "Python",
    "React / TypeScript",
    "Next.js",
    "PostgreSQL / Supabase",
    "Playwright",
    "Tailwind",
  ],
};
