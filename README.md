# Jeswin Chacko — Portfolio

A cinematic, dark, motion-driven personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lenis smooth scrolling.

## Design concept

- **Signature moment:** the preloader mimics a fraud-risk "confidence score" building up to `verified` — a nod to FinSentinel's risk-scoring model, instead of a generic loading spinner.
- **Palette:** deep ink background (`#0a0c10`), warm off-white text, with two accent colors used deliberately — amber for "risk/detection" and teal for "verified/trust" — echoing the fraud-detection subject matter rather than a generic accent color.
- **Type:** Fraunces (display/italic) for cinematic headlines, Inter for body copy, JetBrains Mono for labels, tags, and data — a nod to a systems/data aesthetic.
- **Motion:** staggered word reveals, scroll-triggered panel reveals, animated SVG visuals per project (a "risk pulse" radar for FinSentinel, a voice waveform for WhisperPen), and a scroll-progress bar. All motion respects `prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

- **Hero / About / Contact copy:** `components/Hero.tsx`, `components/About.tsx`, `components/Contact.tsx`
- **Projects:** `components/Work.tsx` — edit the `projects` array (name, description, tech, GitHub link)
- **Skills:** `components/Skills.tsx` — edit the `groups` array
- **Colors / fonts:** `app/globals.css` (CSS variables at the top) — swap `--signal-amber` / `--signal-teal` or the font-family variables to restyle the whole site
- **Resume link:** currently points to `/resume` in `components/Nav.tsx` and `components/Contact.tsx` — add a `public/resume.pdf` and either rename it to match, or update the `href`s to `/resume.pdf`

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.

Or via CLI:

```bash
npm i -g vercel
vercel
```

## Notes

- Fonts are self-hosted via `@fontsource` (no external Google Fonts request at runtime — faster, more private).
- No images are required for the two project visuals — they're animated SVGs, so there's nothing to source or optimize.
- Update the real GitHub/LinkedIn URLs and add `public/resume.pdf` before shipping.
