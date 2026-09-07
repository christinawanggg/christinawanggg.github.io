# thechristinawang.com

Personal site — Astro + TypeScript + Tailwind, static output, deployed to GitHub Pages.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
```

## Adding an essay

Drop a `.md` or `.mdx` file into `src/content/essays/` with frontmatter:

```md
---
title: some new essay
date: 2026-09-01
---

body goes here.
```

It appears on `/writing` automatically, newest first. The filename becomes its id.

## Editing about-page content

`src/data/about.ts` holds the tagline, work entries, living notes, and links.

## Layout

- `src/layouts/Layout.astro` — page shell, window card, optional title bar
- `src/components/TitleBar.astro` — back-to-home + cross-link chrome (about/writing only)
- `src/components/AboutTabs.astro` — work / living / find me tabs
- `src/components/NotesApp.astro` — split view on desktop, push navigation on mobile
