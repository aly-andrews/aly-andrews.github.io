# Article engine to portfolio: what to reuse

**Purpose:** Use the Shopify Academy article-engine style guides and components to add dynamic elements and better formatting to the portfolio site so content is not a wall of text.  
**Source:** If you have the full docs repo, see `shopify/templates/article-engine/Article-Documentation-Complete.md`. Component markup and patterns live in [component-patterns.md](../cursor-workflows/site-build/component-patterns.md) in this site.

---

## What the article engine gives you

### Style and content rules (avoid walls of text)

- **Short paragraphs:** 2–4 sentences per paragraph; max 15 words per sentence.
- **Limit bullets:** 1–2 bullet lists per page, max 3 points per list. Use descriptive subheadings instead of lists where possible.
- **Flowing prose:** Prefer flowing paragraphs with clear transitions over long bullet blocks.
- **Headings:** Sentence case; H1 → H2 → H3. Headers should be scannable, not definitions.
- **White space:** Blank line between paragraphs; sufficient space for readability.
- **One main idea per section:** Each section has one clear topic; use accordions for detail so users expand only what they need.

### Components (HTML + patterns)

| Component | Article-engine use | Portfolio use |
|-----------|--------------------|----------------|
| **Table of contents** | Sticky sidebar (desktop), toggle on mobile | Long pages (Experience, How I work): "On this page" with anchor links |
| **Callouts** | Info, warning, tip, important, note (icon + content) | Highlight key points, tips, or quotes; you already have `pattern-callout`, add type variants |
| **Accordion** | `<details>`/`<summary>` for FAQs, specs, long lists | Collapse "Key accomplishments" or long role descriptions so the page scans first |
| **Block quote** | Quote text + cite (optional animation) | Testimonials; you have `pattern-quote`, can add optional animation |
| **Checklist** | Checkmark icon + short line per item | "What I bring" or skills summary on About / How I work |
| **Reference list** | "Further reading" with icon + links | "More" or "Links" at end of How I work or a case study |
| **CTA block** | Heading + short text + button | End of page or section: "Let's connect" / "View resume" |
| **Image layouts** | Single image + caption; multi-column row with captions | Standardize image + caption pattern for work samples |
| **Margin notes** | Left/right note on desktop, inline on mobile | Optional asides on How I work (more advanced) |
| **Slideshow** | Card-based image carousel | Optional for work samples (e.g. multiple screenshots) |

---

## Recommended additions for aly-andrews.github.io

### 1. Accordion (high impact, no JS)

Use native `<details>`/`<summary>` so long content is collapsed by default. Good for:

- Experience page: each role's "Accomplishments & Results" or "Content Strategy & Development" as an accordion section so the page shows role titles first, expand for detail.
- How I work: "Challenges and learnings" or "Skillsets" as accordions so the page scans as headings, expand for full text.

**HTML (match your existing classes):**

```html
<details class="portfolio-accordion">
  <summary class="portfolio-accordion-heading">Accomplishments & Results</summary>
  <div class="portfolio-accordion-content">
    <p>Content here. Keep paragraphs short.</p>
  </div>
</details>
```

**CSS:** In `assets/css/main.css`. Style `summary` (cursor pointer, list-style none, padding), `[open]` state, and content padding. No JavaScript required.

### 2. Callout types (medium effort)

You have `pattern-callout`. Add type modifiers so you can vary tone:

- `pattern-callout--tip` (e.g. green/teal accent)
- `pattern-callout--note` (e.g. gray)
- `pattern-callout--important` (e.g. gold/amber)

Use for: one-line takeaways on How I work, or a short "Tip" or "Note" on Experience (e.g. "All metrics are organic; no paid promotion.").

### 3. Table of contents for long pages (medium effort)

On Experience and How I work, add an "On this page" block that lists H2 (and optionally H3) with anchor links. On desktop, make it sticky in a sidebar or top strip; on mobile, make it a single toggle ("On this page" → expand to show links). Article-engine uses a `jsa-toc` structure; you can simplify to a list of links and minimal JS or CSS only (e.g. `position: sticky` for desktop).

### 4. Checklist block (low effort)

Checkmark + short line per item. Good for "What I bring" or "Skills at a glance" so it's not a long paragraph. HTML: list with a checkmark icon (e.g. SVG or Unicode) and a class like `portfolio-checklist`; style list-style none and icon alignment.

### 5. CTA block (low effort)

A single block at the end of a page: heading (e.g. "Let's connect"), one sentence, and a button/link. Reuse your existing button/link styles; add a wrapper class (e.g. `portfolio-cta-block`) and optional background so it stands out.

### 6. Content formatting rules when you add copy

When you write or paste content for the site:

- Break long paragraphs into 2–4 sentences.
- Prefer 1–2 short bullet lists per section (max 3 items) or subheadings instead of long lists.
- Use one H2 per major section and H3 for subsections so the page scans.
- Put the most important line first in each block (for accordions and callouts).

---

## Methods of formatting content to upload

### Option A: Jekyll includes (recommended)

Create includes for each pattern so you can drop them into Markdown or HTML:

- `_includes/accordion.html` – pass title and content (or use Liquid for multiple items).
- `_includes/callout.html` – pass type (tip, note, important) and text.
- `_includes/checklist.html` – pass a list of items.
- `_includes/cta-block.html` – pass heading, text, link URL, link label.

Then in a page you write:

```liquid
{% include accordion.html heading="Accomplishments & Results" content="..." %}
{% include callout.html type="tip" text="All metrics are organic; no paid promotion." %}
```

Content can live in the include call (short) or in a dedicated file or front matter that the include reads.

### Option B: HTML snippets in Markdown

Paste the component HTML (accordion, callout, checklist, CTA) directly into your `.md` or `.html` pages. Markdown inside HTML blocks is not processed by Jekyll unless you use a converter, so keep snippet content as plain HTML or use includes.

### Option C: Markdown-first with minimal HTML

Write most of the page in Markdown. Use raw HTML only for components that need specific structure (e.g. `<details>`, callout divs). Add the CSS classes from your `main.css` so the components match the rest of the site.

---

## Where to put CSS and markup

- **CSS:** Add any new classes (e.g. `portfolio-accordion`, `pattern-callout--tip`, `portfolio-checklist`, `portfolio-cta-block`) to `assets/css/main.css`. Reuse your existing variables (`--accent-teal`, `--accent-gold`, etc.) for callout types.
- **Markup:** Keep component patterns in [component-patterns.md](../cursor-workflows/site-build/component-patterns.md) and add the new patterns (accordion, callout types, checklist, TOC, CTA block) there so you can copy-paste or reference when building pages.
- **Templates:** If you use Jekyll includes, add them under `_includes/` and reference from your layout or pages.

---

## Quick reference: article-engine component HTML

For full markup and `jsa-` class names, see the Article-Documentation-Complete doc in the shopify/templates/article-engine folder (if available). Summary:

- **Callouts:** `jsa-callout jsa-callout-info` (or warning, tip, important, note) with `jsa-callout-icon` and `jsa-callout-content`.
- **Accordion:** `<details class="jsa-accordion">` with `<summary class="jsa-accordion-header">` and `<div class="jsa-accordion-content">`.
- **Block quote:** `jsa-blockquote`, `jsa-blockquote-text`, `jsa-blockquote-cite`.
- **Checklist:** `jsa-checklist`, `jsa-checklist-item`, `jsa-checklist-icon`, `jsa-checklist-content`.
- **Reference list:** `jsa-reference-list`, `jsa-reference-title`, `jsa-reference-item`, `jsa-reference-icon`, `jsa-reference-content`.
- **CTA:** `jsa-cta-block`, `jsa-cta-heading`, `jsa-cta-text`, `jsa-cta-button`.

Use these as reference; on your site use your own class names (e.g. `portfolio-*` or `pattern-*`) so your CSS stays in one place and doesn't depend on `jsa-` styles.

---

## Summary

| Goal | Use from article engine |
|------|--------------------------|
| Less wall of text | Short paragraphs, limit bullets, subheadings, accordions for long sections |
| More dynamic feel | Accordion (expand/collapse), optional TOC (sticky/toggle), callout types |
| Clear formatting when uploading | Jekyll includes for accordion, callout, checklist, CTA; or HTML snippets in Markdown |
| Consistent presentation | Add accordion, callout variants, checklist, and CTA to component-patterns.md and main.css |

Start with **accordions** on the Experience page (collapse accomplishments per role) and **callout types** for one or two standout lines on How I work. Add **checklist** and **CTA block** when you add or restructure those sections.
