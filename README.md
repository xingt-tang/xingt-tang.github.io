# Xing Tang — Academic Homepage

Source code for [xingt-tang.github.io](https://xingt-tang.github.io), a single-page academic homepage built with [Astro](https://astro.build/). The site includes an introduction, news, selected publications, academic service, group members, and teaching, plus a separate page for the complete publication list.

## Local development

The active site uses Node.js 24 and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:4321` to view the development site.

Before publishing changes, run:

```bash
npm run check
npm run build
```

To inspect the production build locally:

```bash
npm run preview
```

## Content maintenance

| Content                                                     | Source                            |
| ----------------------------------------------------------- | --------------------------------- |
| Profile, biography, links, avatar, and collaboration notice | `src/data/profile.ts`             |
| Service, group, and teaching                                | `src/data/sections.ts`            |
| News                                                        | `_news/*.md`                      |
| Publications                                                | `_bibliography/papers.bib`        |
| CCF ranks                                                   | `src/data/ccfRanks.ts`            |
| Journal SCI and impact-factor metadata                      | `src/data/journalMetrics.ts`      |
| Publication framework figures                               | `assets/img/publication_preview/` |
| Publication PDFs                                            | `assets/pdf/`                     |

Set `selected = {true}` on a BibTeX entry to show it on the homepage. Add `preview = {filename.png}` to associate a framework figure stored in `assets/img/publication_preview/`. The complete list at `/publications/` is generated from the same BibTeX file and grouped by year.

## Project structure

- `src/pages/index.astro` assembles the single-page homepage.
- `src/pages/publications/index.astro` renders the complete publication list.
- `src/layouts/SiteLayout.astro` contains shared metadata, navigation, theme switching, and footer markup.
- `src/styles/global.css` defines the responsive light and dark themes.
- `src/utils/` contains the news and BibTeX parsers.
- `public/` contains deployment-ready static files and exposes the shared `assets/` directory.

The repository still contains parts of the previous Jekyll/al-folio implementation for reference, but the deployed site is built from the Astro source above.

## Deployment

Pushes to `master` or `main` trigger the `Deploy site` GitHub Actions workflow. It installs dependencies, checks the Astro source, builds the static site, validates internal links, and publishes `dist/` to GitHub Pages. Pull requests run the same checks without deploying.
