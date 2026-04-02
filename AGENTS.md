# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is a Jekyll static-site (portfolio for Aly Andrews) hosted on GitHub Pages. There is no backend, database, or external API.

### Ruby & Dependencies

- Ruby 3.3.4 is managed via **mise** (config in `.mise.toml` and `.ruby-version`).
- After `mise install`, activate it with `eval "$(mise activate bash)"` so `ruby`/`bundle` resolve to the mise-managed version.
- Gems are installed with `bundle install` (Bundler 4.0.5, pinned in `Gemfile.lock`).
- Build dependencies required on Ubuntu: `libyaml-dev libffi-dev libreadline-dev zlib1g-dev libssl-dev`.

### Common commands

| Task | Command |
|---|---|
| Install deps | `bundle install` |
| Build site | `bundle exec jekyll build` |
| Dev server | `bundle exec jekyll serve` (serves at `http://localhost:4000`) |
| Dev server (detached) | `bundle exec jekyll serve --host 0.0.0.0 --port 4000 --detach` |

### Shopify Getting Started manual

- HTML lives under `getting-started-shopify/` (static HTML, not excluded from the build).
- Article shell: `header.manual-page-header` → `article.manual-main.manual-content`.
- **Overview** groups each topic in `<section class="manual-section">` with `h2` as the first child. **Chapter** pages often use a flat `h2` stack after `.manual-on-this-page`; spacing is meant to match the overview via shared CSS variables on `.manual-content` in `assets/css/main.css` (`--manual-between-topics`, `--manual-first-topic-after-toc`, `--manual-p-margin-bottom`, `--manual-intro-direct-p-margin`, `--manual-list-margin-bottom`).
- See the comment block above `.manual-layout` in `main.css` for the full structural checklist (TOC, callouts, video, footer, page nav).

### Gotchas

- The `github-pages` gem pins Jekyll to **3.10.0** (not 4.x). All plugin/theme versions are locked by this gem.
- There is no linter or test suite configured in the repo. Validation = successful `jekyll build` with no errors.
- Scripts in `script/` contain hardcoded macOS paths for logging and are designed for the maintainer's local machine; they are not needed for standard dev work.
- The `_config.yml` `exclude` list deliberately excludes pre-built HTML files in the repo root (`index.html`, `about.html`, etc.) so Jekyll regenerates them from Markdown/Liquid sources.
