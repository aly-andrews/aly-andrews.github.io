# Preview locally

## Purpose
Preview the Jekyll site locally before deploying, using the existing preview script and a quick checklist.

## When to Use
- Before pushing to main
- After changing CSS, layout, navigation, or assets
- When debugging why something isn’t appearing on the live site

## Pre-written Prompt

```
Give me the exact steps to preview this site locally and a quick checklist for what to verify on home, about, work, experience and contact before deploying.
```

## Commands

From macOS Terminal:

```bash
cd /Users/alysaandrews/Documents/docs/aly-andrews.github.io
./script/preview.sh
```

Then visit:
- http://127.0.0.1:4000

## What to verify (quick checklist)

- **Navigation**
  - Links work and active state is correct
  - Mobile nav opens and closes

- **Layout**
  - No horizontal scrolling on small screens
  - Headings are not clipped

- **Images and video**
  - Images load and placeholders only appear when missing
  - Photography grid keeps natural aspect ratio

- **Accessibility**
  - Tab through and you can see focus
  - Skip to main content link works

## Troubleshooting

- If the server won’t start, check the output of `./script/preview.sh`
- If Ruby version is too old, install Ruby 3 via Homebrew (the script will guide you)

