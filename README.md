# Trevor Faust — Portfolio

Personal site for projects, about, and contact. Live at https://trevorfaust.github.io.

## What's live

The project list shows DraftDNA, ScoutDNA Newsletter, Hustle Hunter, and Lease Locator. Copy, links, and about text live in `src/data/site.ts`. Set `hidden: true` on a project to keep it in the data file without showing it on the site.

## Look and feel

The site uses a warm beige background with deep green accents. In the hero, the name sits between the beach photo and a cutout of Trevor (`src/assets/portrait-hero-cutout.png`). The letters pass behind him, and their outline is drawn only where they cross his body. The layers shift slightly with the cursor and on scroll, and a soft highlight follows the mouse. A skills ticker that never stops scrolling leads into Projects. Contact is a small filing cabinet: click a tab to pull the Email, LinkedIn, Substack, or GitHub card to the front.

## Scavenger hunt

A note in the footer points visitors to "Open to data analytics roles" in the hero, which starts a four-clue hunt. Each clue appears where it was triggered, and the steps only work in order:

1. The status line pops out a card beneath it pointing at the target around Trevor's face.
2. A shot only counts on Trevor's head or neck, not anywhere in the box. A hit leaves a dot, and the next card rises from it to above his head.
3. "Off the clock" on the About photo launches an alarm clock that falls, shatters, and reassembles into the next card.
4. A star in the skills ticker drops out and cracks open like a fortune cookie, pointing to the "Classified" card now in the contact cabinet.

Opening the Classified card clears every clue so the hunt can be played again. Once found, the card stays in the cabinet on later visits (`localStorage` key `tf-hunt-found`). Run `localStorage.removeItem('tf-hunt-found')` to hide it again. The hunt logic and animations live in `src/components/Hunt.astro`.

## Local development

```bash
npm install
npm run dev
```

## Deploy

Pushes to `main` build and publish through GitHub Pages (`.github/workflows/deploy.yml`).

Cursor commits leftover local work and pushes it to `main` when a session finishes. A nightly task does the same at 11:00 PM if anything is still unpushed. That updates the live site. Major changes also land in this README. Small copy or layout tweaks do not.
