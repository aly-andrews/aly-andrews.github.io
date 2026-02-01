# Component patterns (HTML + CSS)

## Purpose
Reusable, copy friendly patterns for common portfolio sections. Use these to build pages quickly while keeping styling consistent.

## When to Use
- You want to add a new section but keep it consistent with the site
- You want repeatable markup that stays mobile friendly

## Pre-written Prompt

```
Using the component patterns in @cursor-workflows/site-build/component-patterns.md, add a new [PATTERN_NAME] section to [PAGE_FILE]. Populate it with this content: [PASTE CONTENT]. Keep headings in sentence case and follow .cursorrules.
```

## Pattern: card grid (3 up → 2 up → 1 up)

Markup:

```html
<section class="pattern-section">
  <div class="container">
    <h2>Section title</h2>
    <div class="pattern-card-grid">
      <article class="pattern-card">
        <h3>Card title</h3>
        <p>Card body...</p>
      </article>
    </div>
  </div>
</section>
```

CSS (add to `assets/css/main.css` if not present):

```css
.pattern-card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 768px) {
  .pattern-card-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 480px) {
  .pattern-card-grid { grid-template-columns: 1fr; }
}
```

## Pattern: testimonial blockquotes

Markup:

```html
<section class="pattern-section">
  <div class="container">
    <h2>What people say</h2>
    <div class="pattern-testimonials">
      <blockquote class="pattern-quote">
        <p>Quote text...</p>
        <cite>— Name, title</cite>
      </blockquote>
    </div>
  </div>
</section>
```

## Pattern: callout

```html
<div class="pattern-callout">
  <h3>Callout title</h3>
  <p>Callout text...</p>
</div>
```

### Callout type variants (engine)

Use a modifier class for tone. CSS in `assets/css/main.css`.

```html
<div class="pattern-callout pattern-callout--tip">
  <p>Helpful tip or best practice.</p>
</div>
<div class="pattern-callout pattern-callout--note">
  <p>Additional context or supplementary detail.</p>
</div>
<div class="pattern-callout pattern-callout--important">
  <p>Critical information that shouldn't be missed.</p>
</div>
```

## Pattern: accordion (engine)

Collapse long content so the page scans first. No JavaScript; uses `<details>`/`<summary>`.

```html
<details class="portfolio-accordion">
  <summary class="portfolio-accordion-heading">Accomplishments & Results</summary>
  <div class="portfolio-accordion-content">
    <p>Content here. Keep paragraphs short (2–4 sentences).</p>
  </div>
</details>
```

Use on Experience page for per-role "Accomplishments & Results" or "Content Strategy & Development" so users expand only what they want.

## Pattern: checklist (engine)

Checkmark + short line per item. Good for "What I bring" or skills at a glance.

```html
<ul class="portfolio-checklist">
  <li>Content strategy and roadmaps</li>
  <li>Video production and scripting</li>
  <li>Technical writing and documentation</li>
</ul>
```

## Pattern: CTA block (engine)

End-of-section or end-of-page call to action.

```html
<div class="portfolio-cta-block">
  <h3 class="portfolio-cta-heading">Let's connect</h3>
  <p class="portfolio-cta-text">Have a project in mind? I'd love to hear from you.</p>
  <a class="portfolio-cta-button" href="/contact">Get in touch</a>
</div>
```

## Pattern: two-column content (desktop), stacked (mobile)

```html
<section class="pattern-section">
  <div class="container">
    <div class="pattern-two-col">
      <div>
        <h2>Left title</h2>
        <p>Left content...</p>
      </div>
      <div>
        <h2>Right title</h2>
        <p>Right content...</p>
      </div>
    </div>
  </div>
</section>
```

CSS:

```css
.pattern-two-col {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
}

@media (max-width: 768px) {
  .pattern-two-col { grid-template-columns: 1fr; }
}
```

