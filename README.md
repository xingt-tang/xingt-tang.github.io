# Xing Tang — Academic Homepage

Source for [xingt-tang.github.io](https://xingt-tang.github.io), built with Jekyll and the al-folio theme.

## Local Development

The project uses Ruby 3.3.5 and Bundler 2.6.9.

```bash
gem install bundler -v 2.6.9
bundle install
bundle exec jekyll serve --livereload
```

The local site is available at `http://localhost:4000`.

Docker is also supported:

```bash
docker compose up
```

The Docker development server is available at `http://localhost:8080`.

## Content Structure

- `_pages/` contains the main site pages.
- `_news/` contains dated homepage announcements.
- `_bibliography/papers.bib` contains publication metadata.
- `_data/socials.yml` contains academic and social profile links.
- `assets/img/` and `assets/pdf/` contain profile and publication assets.

## Deployment

Changes pushed to `main` are built, checked for broken internal links, and deployed to GitHub Pages by the `Deploy site` workflow.
