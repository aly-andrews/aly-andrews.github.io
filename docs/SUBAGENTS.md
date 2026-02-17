# Using Subagents for Faster Static Site Development

This guide explains how to use Cursor's subagents feature to accelerate development of your Jekyll static site.

## What are Subagents?

Subagents are independent agents specialized to handle discrete parts of a parent agent's task. They:
- Run in parallel (faster execution)
- Use their own context (more focused)
- Can be configured with custom prompts, tool access, and models

## Default Subagents (Automatic)

Cursor includes default subagents that automatically help with:
- **Researching your codebase** - Finds relevant files and patterns
- **Running terminal commands** - Executes build/test commands
- **Parallel work streams** - Handles multiple tasks simultaneously

These work automatically - no configuration needed!

## Custom Subagents for Static Site Development

You can create custom subagents for specific tasks. Here are examples tailored to Jekyll development:

### Example 1: Component Builder Subagent

**File:** `.cursor/subagents/component-builder.md`

```markdown
# Component Builder Subagent

## Purpose
Specialized agent for creating and updating Jekyll includes, layouts, and reusable components.

## Focus Areas
- Jekyll includes (`_includes/`)
- Layout files (`_layouts/`)
- Liquid template syntax
- Front matter structure
- Responsive design patterns

## Tools Access
- File reading/writing (layouts, includes)
- Codebase search (find similar components)
- Terminal (Jekyll build commands)

## Instructions
- Always follow Jekyll best practices
- Use semantic HTML5
- Ensure mobile responsiveness
- Match existing site patterns and styles
- Test with `bundle exec jekyll serve` before completing
```

### Example 2: Content Writer Subagent

**File:** `.cursor/subagents/content-writer.md`

```markdown
# Content Writer Subagent

## Purpose
Specialized agent for writing and editing markdown content pages.

## Focus Areas
- Markdown page creation (`pages/`, `index.md`)
- Front matter (YAML)
- Content structure and formatting
- SEO optimization
- Accessibility (alt text, headings)

## Tools Access
- File reading/writing (markdown files)
- Image handling (add alt text)
- Content search (avoid duplication)

## Instructions
- Follow Jekyll front matter conventions
- Use proper heading hierarchy (h1 → h2 → h3)
- Include descriptive alt text for images
- Optimize for SEO (meta descriptions, keywords)
- Match existing content tone and style
```

### Example 3: Asset Optimizer Subagent

**File:** `.cursor/subagents/asset-optimizer.md`

```markdown
# Asset Optimizer Subagent

## Purpose
Specialized agent for optimizing images, CSS, and JavaScript assets.

## Focus Areas
- Image optimization (compression, formats)
- CSS minification and organization
- JavaScript bundling
- Performance optimization
- Asset organization (`assets/` directory)

## Tools Access
- File reading/writing (assets)
- Terminal (image optimization tools)
- Codebase search (find asset references)

## Instructions
- Optimize images before adding to `assets/images/`
- Use modern formats (WebP, AVIF) with fallbacks
- Minify CSS/JS for production
- Check file sizes (aim for < 200KB per image)
- Update references after optimization
```

### Example 4: Page Builder Subagent

**File:** `.cursor/subagents/page-builder.md`

```markdown
# Page Builder Subagent

## Purpose
Specialized agent for creating complete new pages from scratch.

## Focus Areas
- New page creation (markdown + front matter)
- Navigation updates (`_config.yml`)
- Layout selection
- Content structure
- Cross-page linking

## Tools Access
- File reading/writing (pages, config)
- Codebase search (find similar pages)
- Terminal (test builds)

## Instructions
- Create markdown file in `pages/` directory
- Add proper front matter (title, layout, permalink)
- Update navigation in `_config.yml` if needed
- Link to new page from relevant existing pages
- Test page renders correctly
- Ensure mobile responsiveness
```

## How to Use Subagents

### Method 1: Automatic (Default Subagents)
Just use the agent normally - default subagents will automatically help with:
- Researching your codebase
- Running commands
- Parallel task execution

### Method 2: Custom Subagents
1. Create subagent files in `.cursor/subagents/` directory
2. Reference them in your agent conversations:
   - "Use the component builder subagent to create a new testimonial include"
   - "Have the content writer subagent draft a new portfolio page"
   - "Let the asset optimizer subagent compress these images"

### Method 3: Explicit Task Delegation
When starting a complex task, break it down:
- "Build a new portfolio page: use the page builder subagent for structure, content writer for copy, and asset optimizer for images"

## Example Workflow: Building a New Section

**Main Agent Task:** "Add a testimonials section to the homepage"

**Subagent Breakdown:**
1. **Research Subagent** (automatic): Finds existing homepage structure
2. **Component Builder Subagent**: Creates `_includes/testimonial.html`
3. **Content Writer Subagent**: Writes testimonial content
4. **Asset Optimizer Subagent**: Optimizes testimonial images
5. **Page Builder Subagent**: Integrates into `index.md`

All running in parallel = **much faster** than sequential work!

## Best Practices

1. **Break down complex tasks** - Let subagents handle discrete parts
2. **Use parallel work** - Multiple subagents can work simultaneously
3. **Keep context focused** - Each subagent only sees what it needs
4. **Test incrementally** - Have subagents test their work before completing

## Resources

- [Cursor Subagents Documentation](https://cursor.com/docs/subagents)
- [Cursor Changelog 2.4](https://cursor.com/changelog/2-4)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
