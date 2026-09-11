export const site = {
  name: "Trevor Faust",
  title: "Trevor Faust — Data Analytics & Product Building",
  description:
    "Data professional turning messy data into decisions people act on. Projects spanning sports analytics, product tools, and end-to-end builds.",
  location: "Seattle, WA",
  email: "trevorfaus27@gmail.com",
  tagline: "Turning messy data into decisions people act on.",
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
    blurb: "A full-scale fantasy football platform — live drafts, rankings, and league intelligence built end to end.",
    detail:
      "React, TypeScript, Python, and PostgreSQL/Supabase on 200M+ NFL records, with a 150-source pipeline feeding weekly coverage of leaguewide activity.",
    href: "https://draftdna.com",
    repo: "https://github.com/TrevorFaust/DraftDNA",
    tags: ["React", "TypeScript", "Python", "Supabase", "Sports"],
    featured: true,
  },
  {
    slug: "scoutdna",
    title: "ScoutDNA Newsletter",
    blurb: "Weekly team news for all 32 NFL clubs — scouting breakdowns and daily signals, in one place.",
    detail:
      "A newsletter product that aggregates leaguewide activity so readers don't have to chase thirty-two separate feeds.",
    href: "https://substack.com/@trevorfaust",
    repo: "https://github.com/TrevorFaust/ScoutDNA_Newsletter",
    tags: ["Newsletter", "NFL", "Scraping", "Product"],
    featured: true,
  },
  {
    slug: "fantasy-league-blog",
    title: "Fantasy League Blog",
    blurb: "A commissioner power-rankings site for my Seattle fantasy league — season archives, quarterly rankings, and zero filter (with an optional safe mode).",
    detail:
      "Migrated off Wix onto Next.js/Vercel. Home hosts the live season; past years live as full season recaps with the original writeups intact.",
    href: "https://fantasy-league-blog.vercel.app",
    repo: "https://github.com/TrevorFaust/fantasy-league-blog",
    tags: ["Next.js", "Vercel", "Sports", "Content"],
    featured: true,
  },
  {
    slug: "apartment-hunt",
    title: "Apartment Hunt",
    blurb: "Find niche, off-the-books apartments matched to your specifications.",
    detail:
      "Next.js tooling with Playwright scrapers and fit scoring — aggregating listings that never show up on the usual sites.",
    href: "https://github.com/TrevorFaust/Apartment_Search",
    repo: "https://github.com/TrevorFaust/Apartment_Search",
    tags: ["Next.js", "Playwright", "Scraping"],
    featured: false,
  },
  {
    slug: "job-search",
    title: "Job Search",
    blurb: "A workflow for finding the right role — resumes, cover letters, follow-ups, and interview prep that compound.",
    detail:
      "The more you feed it, the smarter it gets about your experience: scrape, structure, score, and ship a faster job hunt.",
    href: "https://github.com/TrevorFaust/Job_Search",
    repo: "https://github.com/TrevorFaust/Job_Search",
    tags: ["Next.js", "LLM", "Automation"],
    featured: false,
  },
] as const;

export const about = {
  lead: "I'm a data professional who believes the best insights are the ones people actually use.",
  body: [
    "At Kennametal I've worked across process engineering, product analytics, and sales enablement — from $2M in production savings with Excel/VBA scheduling, to structuring 500+ product datasets, to Power BI dashboards for regional pipeline analysis and retention. SQL, Power BI, and Excel are my day-to-day; Python is what I reach for when the problem outgrows a spreadsheet.",
    "Off the clock I build products end to end — UI/UX through backend — because I like owning the full thing, not just the charts. The through-line is simple: scrape, structure, score, and ship something I'd actually want to use myself.",
    "I'm looking for my next data analytics role in sports or technology, where technical depth, product thinking, and UI sensibility meet problems that matter.",
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
  ],
};
