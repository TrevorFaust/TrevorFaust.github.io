# Trevor Faust — Portfolio

Personal site for projects, about, and contact. Live at https://trevorfaust.github.io.

## What's live

The project list shows DraftDNA, ScoutDNA Newsletter, Hustle Hunter, and Lease Locator. Copy, links, and about text live in `src/data/site.ts`. Set `hidden: true` on a project to keep it in the data file without showing it on the site.

An editorial alternate lives at `/alt`. Use the Original / Editorial toggle in the corner to switch. Same content, different layout: type-led hero, live Seattle time, flagship project deep-dives, and a note-style about. The original homepage stays the public version.

## Local development

```bash
npm install
npm run dev
```

## Deploy

Pushes to `main` build and publish through GitHub Pages (`.github/workflows/deploy.yml`).

Cursor commits leftover local work and pushes it to `main` when a session finishes. A nightly task does the same at 11:00 PM if anything is still unpushed. That updates the live site. Major changes also land in this README. Small copy or layout tweaks do not.
