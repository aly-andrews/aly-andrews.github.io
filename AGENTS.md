# AGENTS.md

## Cursor Cloud specific instructions

This is a **Jekyll static site** (portfolio website) using the `github-pages` gem. There is no backend, database, or API — the only service is the Jekyll dev server.

### Prerequisites

- **Ruby 3.3.4** is managed via `mise` (see `.mise.toml` and `.ruby-version`).
- System packages `libyaml-dev`, `libffi-dev`, `libreadline-dev`, `zlib1g-dev` are required to compile Ruby's `psych` extension and native gems.
- Mise must be activated in the shell (`eval "$(mise activate bash)"`) for `ruby` and `bundle` to resolve.

### Running the dev server

```bash
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

The site will be available at `http://localhost:4000`. Jekyll watches for file changes and auto-regenerates.

### Building

```bash
bundle exec jekyll build
```

Output goes to `_site/`.

### Lint / Tests

There are no automated tests or linters configured in this project. Validation is visual — load the site in a browser and verify pages render correctly. All five navigation pages should return HTTP 200: `/`, `/portfolio/`, `/how-i-work/`, `/resume/`, `/contact/`.

### Gotchas

- The `Gemfile.lock` was bundled with Bundler 4.0.5. If a newer Bundler is installed, it will auto-downgrade on first `bundle install` — this is expected and not an error.
- The `github-pages` gem pins Jekyll to 3.10.0 and many plugin versions. Do not upgrade Jekyll independently.
- `_config.yml` excludes several root-level `.html` files (deploy artifacts) so Jekyll regenerates them from source templates. Do not edit the root HTML files directly — edit the layouts/pages in `_pages/` or `_layouts/`.
