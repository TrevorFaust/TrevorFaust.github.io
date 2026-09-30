# Trevor Faust — Portfolio

Personal site for projects, about, and contact. Live at https://trevorfaust.github.io.

## What's live

The project list shows DraftDNA, ScoutDNA Newsletter, Hustle Hunter, and Lease Locator. Copy, links, and about text live in `src/data/site.ts`. Set `hidden: true` on a project to keep it in the data file without showing it on the site.

## Look and feel

The site is dark, with warm sunset accents taken from the hero photo. In the hero, the name sits between the beach photo and a cutout of Trevor (`src/assets/portrait-hero-cutout.png`), so the letters pass behind him and their outline is drawn over him. The layers shift slightly with the cursor and on scroll. A skills ticker leads into Projects, and Projects, About, and Contact share the same dark styling.

## Local development

```bash
npm install
npm run dev
```

## Deploy

Pushes to `main` build and publish through GitHub Pages (`.github/workflows/deploy.yml`).

Cursor commits leftover local work and pushes it to `main` when a session finishes. A nightly task does the same at 11:00 PM if anything is still unpushed. That updates the live site. Major changes also land in this README. Small copy or layout tweaks do not.
