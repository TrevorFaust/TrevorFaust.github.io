export const site = {
  name: "Trevor Faust",
  initials: "TF",
  title: "Trevor Faust | Data Analytics & Product Building",
  description:
    "Data professional in Seattle turning messy data into decisions people act on. Sports analytics, product tools, and end-to-end builds.",
  location: "Seattle, WA",
  email: "trevorfaus27@gmail.com",
  tagline: "I turn messy data into decisions people act on.",
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
      "A fantasy football platform that puts live drafts, rankings, and league intel in one place so you can make the pick faster.",
    detail:
      "React, TypeScript, Python, and PostgreSQL on 200M+ NFL records, with a 150-source pipeline feeding weekly coverage.",
    href: "https://draftdna.com",
    repo: "https://github.com/TrevorFaust/DraftDNA",
    tags: ["React", "Python", "Supabase", "Tailwind", "Realtime"],
    featured: true,
  },
  {
    slug: "scoutdna",
    title: "ScoutDNA Newsletter",
    blurb: "Weekly news for all 32 NFL clubs, so you don't have to chase thirty-two feeds.",
    detail:
      "A newsletter that pulls leaguewide activity into one briefing with scouting notes and daily signals.",
    href: "https://substack.com/@trevorfaust",
    repo: "https://github.com/TrevorFaust/ScoutDNA_Newsletter",
    tags: ["RAG", "Clustering", "Scraping", "LLM compose", "Supabase"],
    featured: true,
  },
  {
    slug: "job-search",
    title: "Job Search",
    blurb:
      "A job-hunt workflow that turns your experience into resumes, cover letters, follow-ups, and interview prep.",
    detail:
      "The more you feed it, the better it knows your background: scrape, structure, score, and ship a faster search.",
    href: "https://github.com/TrevorFaust/Job_Search",
    repo: "https://github.com/TrevorFaust/Job_Search",
    tags: ["LLM", "APIs", "RSS", "Automation", "Supabase"],
    featured: false,
  },
  {
    slug: "apartment-hunt",
    title: "Apartment Hunt",
    blurb: "Finds off-market apartments that match what you asked for.",
    detail:
      "Next.js tooling with Playwright scrapers and fit scoring, pulling listings that never show up on the usual sites.",
    href: "https://github.com/TrevorFaust/Apartment_Search",
    repo: "https://github.com/TrevorFaust/Apartment_Search",
    tags: ["Playwright", "Scoring", "Resend", "Supabase"],
    featured: false,
  },
  {
    slug: "fantasy-league-blog",
    title: "Fantasy League Blog",
    blurb: "Power rankings and season recaps for my Seattle fantasy league.",
    detail:
      "Moved off Wix onto Next.js and Vercel. Home hosts the live season. Past years live as full recaps with the original writeups.",
    href: "https://fantasy-league-blog.vercel.app",
    repo: "https://github.com/TrevorFaust/fantasy-league-blog",
    tags: ["Next.js", "Vercel", "TypeScript"],
    featured: true,
  },
] as const;

export const about = {
  lead: "I build data work that people pick up and use.",
  body: [
    "At Kennametal I work across process engineering, product analytics, and sales enablement. I cut $2M from production with Excel/VBA scheduling, structured 500+ product datasets, and built Power BI dashboards for regional pipeline and retention. SQL, Power BI, and Excel are the daily stack. Python is for the problems that outgrow a spreadsheet.",
    "Off the clock I build products from UI through backend because I want to own the full thing. Scrape, structure, score, and ship something I would use.",
    "I'm looking for my next data analytics role in sports or technology.",
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
