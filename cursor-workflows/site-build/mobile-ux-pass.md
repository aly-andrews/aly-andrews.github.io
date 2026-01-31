# Mobile UX pass

## Purpose
Run a focused mobile UX pass across your portfolio and apply small, consistent fixes.

## When to Use
- You added new sections and want to confirm mobile is still great
- You see horizontal scrolling, cramped spacing, or hard-to-tap links
- You want quick polish before deploying

## Pre-written Prompt

```
Do a mobile UX pass on this Jekyll site (home, about, work, experience, contact).

Requirements:
- No horizontal scrolling
- Comfortable tap targets (44px+)
- Clear focus states for keyboard users
- Images responsive (no cropping surprises)
- Keep styling consistent with existing design
- Follow .cursorrules (sentence case H2+, minimal hyphens, no Oxford commas)

Make the smallest set of changes that noticeably improves mobile UX. Summarize the changes and list files modified.
```

## Checklist

- **Layout**
  - Check for overflow on small screens (320–390px)
  - Ensure grids collapse cleanly (no squished columns)
  - Ensure headers don’t wrap awkwardly

- **Typography**
  - Headings not too large on mobile
  - Paragraph line length comfortable
  - Adequate spacing between sections

- **Navigation**
  - Hamburger menu opens/closes reliably
  - Links are easy to tap
  - Active state visible

- **Media**
  - Images scale with max-width: 100%
  - Video area doesn’t cause overflow
  - Alt text present and descriptive

- **Accessibility**
  - Skip link works
  - Focus visible on links/buttons
  - Contrast is acceptable

## Suggested test loop

```bash
cd /Users/alysaandrews/Documents/docs/aly-andrews.github.io
./script/preview.sh
```

Then test in browser device mode (iPhone 12/13, iPhone SE) and do a quick scroll on each page.

