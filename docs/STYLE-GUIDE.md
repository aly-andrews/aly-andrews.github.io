# Portfolio Website Style Guide

This guide defines the visual and interaction standards for the Aly Andrews portfolio website. All new components must follow these patterns to maintain consistency and user experience quality.

## Project Cards

**Critical Rule**: ALL project cards across the site MUST use the same styling and dynamic behavior. This includes cards on:
- Home page (how-i-work.md)
- Portfolio page (work.md)  
- Contact page (contact.md)
- Any future pages with interactive cards

### Card Structure

Every project card must follow this HTML structure:

```html
<div class="project-card" data-type="[TYPE]" data-[ATTRIBUTE]="[VALUE]">
  <div class="card-content">
    <h3>[Title]</h3>
    <p>[Description]</p>
    <span class="card-cta">[CTA Text]</span>
  </div>
</div>
```

### Card Types

Cards can have three data-type values:

1. **`data-type="popup"`** - Opens a modal overlay
   - Requires: `data-target="popup-content-id"`
   - CTA text: "Learn more"
   
2. **`data-type="doc"`** - Navigates to another page
   - Requires: `data-url="/path/to/page"`
   - CTA text: "View project" or "Learn more"
   
3. **`data-type="video"`** - Opens video in modal
   - Requires: `data-video-src="/path/to/video"`
   - CTA text: "Watch video"

### Card Styling Requirements

All project cards share these styles (defined in main.css):

```css
.project-card {
  border-radius: 12px;
  overflow: hidden;
  background: var(--bg-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}
```

**Do NOT create custom card styles** that deviate from this pattern. All cards must:
- Have consistent border radius (12px)
- Use the same hover animation (translateY -8px)
- Use the same shadow values
- Use the same transition timing (0.3s ease)

### Grid Layout

Cards displayed in grids must use:

```css
.pattern-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
```

## Modal and Popup Behavior

### Transition Requirements

All modals and popups must:
- Fade in smoothly (use opacity transition)
- Have a semi-transparent overlay background
- Use `aria-hidden="true"` when closed, `aria-hidden="false"` when open
- Prevent body scroll when open: `document.body.style.overflow = 'hidden'`
- Restore body scroll when closed: `document.body.style.overflow = ''`
- Close on Escape key press
- Close when clicking overlay (not the content container)

### Overlay Styling

Popup overlays must have light opacity to allow background visibility:

```css
.skillset-popup-overlay,
.video-modal-overlay {
  background: rgba(0, 0, 0, 0.6); /* Light enough to see through */
}
```

## Typography and Content

### Block Quotes

Important content or philosophy statements should use block quotes:

```html
<blockquote>
  <p>Content here</p>
</blockquote>
```

Styling:
```css
blockquote {
  border-left: 4px solid var(--accent-teal);
  padding-left: 1.5rem;
  margin: 1.5rem 0;
  font-style: italic;
  color: var(--text-color);
}
```

### Heading Hierarchy

From the workspace .cursorrules:
- **H1**: Title case (capitalize all major words)
- **H2, H3, H4+**: Sentence case (capitalize only first word and proper nouns)

### Hyphenation

Follow minimal hyphenation rules from .cursorrules:
- Use "step by step" (no hyphens)
- Use "hands on" (no hyphens)
- Use "on demand" (no hyphens)
- Exception: "step-by-step" keeps the hyphen

### Commas and Punctuation

From .cursorrules:
- **No Oxford commas**: "red, white and blue" not "red, white, and blue"
- **Avoid semicolons**: Use periods or separate sentences instead

## Color Palette

All components must use the defined color variables:

```css
--primary-color: #2c2c2c;
--secondary-color: #8b7355;
--accent-color: #a68b5b;
--accent-green: #7a9a7a;
--accent-teal: #6b9a9a;
--accent-gold: #c9a96b;
--accent-purple: #9b7fb8;
--accent-coral: #e67e7e;
--accent-blue: #6b9fd4;
--text-color: #2c2c2c;
--text-light: #5a5a5a;
--bg-color: #faf9f7;
--bg-light: #f5f3f0;
--bg-accent: #ede9e3;
--border-color: #d4d0c8;
```

### Gradient Usage

Page headers and decorative elements use gradients matching the site theme:

```css
background: linear-gradient(135deg, var(--accent-green), var(--accent-teal), var(--accent-blue));
```

Match gradient colors to adjacent page elements for visual cohesion.

## Accessibility

All interactive elements must:
- Have proper ARIA labels
- Support keyboard navigation
- Have visible focus states
- Meet WCAG 2.1 AA contrast requirements
- Work with screen readers

### Focus States

```css
*:focus-visible {
  outline: 2px solid var(--accent-teal);
  outline-offset: 2px;
}
```

## Layout Patterns

### Section Spacing

Standard sections use:
```css
section {
  padding: 4rem 0;
}
```

### Container Width

All content containers use:
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
```

## Component-Specific Rules

### Contact Cards

Contact information cards (Email, LinkedIn) must match project card styling including:
- Same border radius
- Same hover effects
- Same padding and spacing
- Same typography hierarchy

### Video Embeds

Video carousel and embedded videos must:
- Include poster images
- Have play overlays
- Support keyboard controls
- Show loading states
- Handle autoplay restrictions gracefully

### Photography Carousel

The infinite-scroll photography carousel must:
- Duplicate images for seamless loop
- Include pause/play controls
- Support reduced motion preferences
- Maintain image aspect ratios

## File Organization

When adding new components:

1. **HTML/Markdown**: Place in `/pages/` or add to existing pages
2. **CSS**: Add to `/assets/css/main.css` in the appropriate section
3. **JavaScript**: Add to `/assets/js/` with descriptive filename
4. **Images**: Place in `/assets/images/` with appropriate subfolder
5. **Videos**: Place in `/assets/videos/`

## Creating New Project Cards

When adding a new project card:

1. **Choose card type**: popup, doc, or video
2. **Use standard structure**: Copy existing card HTML
3. **Match grid layout**: Place in `.pattern-card-grid` or similar
4. **Set data attributes**: Add required data-type and corresponding attributes
5. **Write clear CTA**: Use consistent language ("Learn more", "View project")
6. **Test interactions**: Verify hover, click and keyboard navigation
7. **Verify styling**: Ensure hover effects and transitions match existing cards

## Animation Standards

### Timing Functions

Use consistent easing:
- **Most transitions**: `ease` (default)
- **Hover effects**: `ease` with 0.3s duration
- **Modals**: `ease-out` for opening, `ease-in` for closing

### Transform Properties

Hover effects use:
```css
transform: translateY(-8px);
```

Do not use scale or rotate transforms on project cards without updating this guide.

## Testing Checklist

Before deploying changes:

- [ ] All project cards use identical styling
- [ ] Hover effects work consistently across cards
- [ ] Modals and popups transition smoothly
- [ ] No Oxford commas in content
- [ ] Headings follow capitalization rules
- [ ] Colors match defined palette
- [ ] Focus states are visible
- [ ] Keyboard navigation works
- [ ] Screen reader announces content correctly
- [ ] Mobile responsive design works
- [ ] No console errors

## Future Considerations

When extending the site:

1. **New card types**: Update this guide first, then implement
2. **Color changes**: Update CSS variables, not individual components
3. **Typography changes**: Update base styles, not individual elements
4. **Layout changes**: Maintain consistent spacing and grid patterns

---

**Last updated**: February 4, 2026  
**Maintained by**: Aly Andrews
