# New page (Jekyll)

## Purpose
Create a new page in the Jekyll site with correct front matter, consistent structure, and navigation.

## When to Use
- Adding a new top level page (e.g., Services, Photography, Writing, Projects)
- Creating a new landing page for a section of content

## Pre-written Prompt

```
Create a new page in the aly-andrews.github.io Jekyll site.

Requirements:
- Page file name: [FILE_NAME].md
- Title: [TITLE]
- Permalink: /[PERMALINK]
- Layout: default
- Add to navigation in _config.yml
- Match the existing HTML + CSS conventions used in about.md/work.md (creative header sections, container wrappers)
- Follow writing rules in .cursorrules: sentence case for H2+, minimal hyphens, no Oxford commas

After creating the page, show me the final file and the _config.yml navigation diff.
```

## Steps Checklist

1. Decide file name and permalink
2. Create the new markdown file with front matter
3. Add a creative page header section and a content section
4. Add navigation entry to `_config.yml`
5. Verify links and permalinks are consistent

## Template

Use this template (also available at `@cursor-workflows/templates/jekyll-page-frontmatter.md`).

## Common Commands

```bash
cd /Users/alysaandrews/Documents/docs/aly-andrews.github.io
./script/preview.sh
# Visit http://127.0.0.1:4000/[PERMALINK]
```

## Troubleshooting

- **Page 404 locally**: check `permalink` and restart preview
- **Nav link wrong**: ensure navigation url uses the same `/permalink` value
- **Layout looks off**: confirm you used the existing header/content classes

