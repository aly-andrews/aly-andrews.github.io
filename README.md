# Aly Andrews - Portfolio Site

Personal portfolio website showcasing my work in technical writing, content creation and video production.

**Live site:** https://aly-andrews.github.io

## Tech Stack

- **Jekyll** - Static site generator
- **GitHub Pages** - Hosting
- **Netlify** - PR preview deployments

## Project Structure

```
aly-andrews.github.io/
├── pages/              # All site pages
│   ├── how-i-work.md  # "How I work" page (nav: /about)
│   ├── work.md        # Portfolio/work samples
│   ├── experience.md  # Professional experience & resume
│   ├── contact.md     # Contact information
│   └── love-letter.md # AI & technical writing philosophy
├── assets/            # Static assets
│   ├── css/          # Stylesheets
│   ├── js/           # JavaScript files
│   ├── images/       # Images & graphics
│   └── videos/       # Video files
├── _layouts/          # Jekyll layouts
├── cursor-workflows/  # Cursor IDE workflow commands
├── docs/             # Documentation & guides
├── script/           # Build & deployment scripts
└── index.md          # Homepage
```

## Local Development

### Prerequisites
- Ruby 3.2+
- Bundler

### Setup
```bash
bundle install
bundle exec jekyll serve
```

Site will be available at `http://localhost:4000`

## Deployment

- **Production:** Automatically deploys from `main` branch to GitHub Pages
- **PR Previews:** Netlify automatically builds deploy previews for all pull requests

## Navigation Structure

- **Home** → `/` (index.md)
- **How I work** → `/about` (pages/how-i-work.md)
- **Work** → `/work` (pages/work.md)
- **Experience** → `/experience` (pages/experience.md)
- **Contact** → `/contact` (pages/contact.md)

## Contributing

This is a personal portfolio site. For major changes, please open an issue first.

## License

© 2026 Aly Andrews. All rights reserved.
