# New section (page content)

## Purpose
Add a new section to an existing page with consistent structure, spacing, and headings.

## When to Use
- Adding a new content block (case study, skills section, FAQ, testimonials)
- Expanding existing pages (about, work, experience, contact)

## Pre-written Prompt

```
Add a new section to [PAGE_FILE] called “[SECTION_TITLE]”.

Requirements:
- Use existing section patterns (container wrapper, creative section classes where appropriate)
- Keep headings in sentence case (H2+)
- Use natural phrasing with minimal hyphens, no Oxford commas
- Ensure it looks good on mobile (no horizontal scrolling, comfortable spacing)

Show me the updated section markup and any required CSS changes.
```

## Section Patterns (pick one)

### Pattern A: simple text section

```html
<section class="about-section-creative">
  <div class="container">
    <h2>Section title</h2>
    <p>Paragraph text...</p>
  </div>
</section>
```

### Pattern B: card grid section

```html
<section class="work-content-creative">
  <div class="container">
    <div class="card-grid">
      <div class="card">
        <h3>Card title</h3>
        <p>Card description...</p>
      </div>
    </div>
  </div>
</section>
```

### Pattern C: callout section

```html
<section class="about-section-creative">
  <div class="container">
    <div class="callout">
      <h2>Callout title</h2>
      <p>Callout text...</p>
    </div>
  </div>
</section>
```

## Common Commands

```bash
cd /Users/alysaandrews/Documents/docs/aly-andrews.github.io
./script/preview.sh
```

