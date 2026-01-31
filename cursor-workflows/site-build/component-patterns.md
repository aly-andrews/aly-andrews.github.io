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

