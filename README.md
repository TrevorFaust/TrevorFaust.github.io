# Trevor Faust — Portfolio

Personal site for projects, about, and contact. Live at https://trevorfaust.github.io.

## What's live

The project list shows DraftDNA, ScoutDNA Newsletter, Hustle Hunter, and Lease Locator. Copy, links, and about text live in `src/data/site.ts`. Set `hidden: true` on a project to keep it in the data file without showing it on the site.

## Look and feel

The site uses a warm beige background with deep green accents. In the hero, the name sits between the beach photo and a cutout of Trevor (`src/assets/portrait-hero-cutout.png`). The letters pass behind him, and their outline is drawn only where they cross his body. The layers shift slightly with the cursor and on scroll, and a soft highlight follows the mouse. A skills ticker that never stops scrolling leads into Projects. Contact is a small filing cabinet: click a tab to pull the Email, LinkedIn, Substack, or GitHub card to the front.

## Scavenger hunt

Clicking "Open to data analytics roles" in the hero starts a three-clue hunt. The clues lead to the lock-on square around Trevor's face, then a star in the skills ticker, then a hidden "Classified" card that slips into the contact cabinet. The clue logic lives in `src/components/Hunt.astro`. Progress is saved in `localStorage` under `tf-hunt`. Run `localStorage.removeItem('tf-hunt')` in the console to start over.

## Local development

```bash
npm install
npm run dev
```

## Deploy

Pushes to `main` build and publish through GitHub Pages (`.github/workflows/deploy.yml`).

Cursor commits leftover local work and pushes it to `main` when a session finishes. A nightly task does the same at 11:00 PM if anything is still unpushed. That updates the live site. Major changes also land in this README. Small copy or layout tweaks do not.
