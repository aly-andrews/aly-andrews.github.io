# Update About Page

## Purpose
Update the about.md page with new content, photos, or information following site style guidelines

## When to Use
- Adding new skills or experience highlights
- Updating personal information or bio
- Changing photography showcase
- Refreshing page content

## Pre-written Prompt

```
Update the about page (about.md) in the aly-andrews.github.io repository with the following changes: [DESCRIBE CHANGES]. Follow the site's style guidelines from .cursorrules - use minimal hyphens, sentence case for H2+ headings, no Oxford commas, and maintain the creative layout structure. Show me a preview of the changes before committing.
```

## Steps Checklist

The AI will:
1. Read current about.md content
2. Review .cursorrules for style guidelines
3. Make requested changes following guidelines
4. Ensure:
   - Headings use sentence case (except H1)
   - No unnecessary hyphens
   - No Oxford commas in lists
   - Natural, conversational tone
5. Preview changes with you
6. Commit and push if approved

## About Page Structure

### Current Sections:
1. **Hero header** - Name, title, subtitle
2. **Main content** - Bio and background
3. **My unique skillset** - Hard and soft skills
4. **Things I love** - Personal interests, photography business
5. **Photography grid** - 9 photos in responsive grid

### File Location:
`/Users/alysaandrews/Documents/docs/aly-andrews.github.io/about.md`

## Style Guidelines (from .cursorrules)

### Hyphenation:
- ✅ Keep: "step-by-step"
- ❌ Remove: "hands-on" → "hands on", "self-directed" → "self directed"
- Use natural phrasing without hyphens when possible

### Headings:
- **H1**: Title case (e.g., "About Me: My Journey")
- **H2-H6**: Sentence case (e.g., "My unique skillset")

### Punctuation:
- No Oxford commas: "writing, editing and producing"
- Avoid semicolons, use periods or separate sentences

### Tone:
- Natural, conversational language
- Clear, simple phrasing
- Write how you'd speak aloud

## Common Updates

### Update bio text:
```markdown
<section class="about-content about-content-creative">
  <div class="container">
    <p>Your updated bio text here...</p>
  </div>
</section>
```

### Update photography grid images:
Images are in `/assets/images/photography/`
- Files: 1.jpg through 9.jpg (and 7.png)
- Use descriptive alt text for each
- Maintain responsive grid structure

### Update skills section:
```markdown
<div class="experience-section experience-section-skills">
  <h2>My unique skillset</h2>
  <p>Updated skills description...</p>
</div>
```

## Image Guidelines

### Adding new photos:
1. Upload to `assets/images/photography/`
2. Name clearly: `portrait-session.jpg`
3. Update references in about.md
4. Use descriptive alt text

### Alt text format:
```html
<img src="{{ '/assets/images/photography/1.jpg' | relative_url }}" 
     alt="Portrait photography by Aly Anne Photography">
```

## Troubleshooting

**Images not displaying:**
- Check file path matches exactly
- Verify image uploaded to correct folder
- Check for typos in filename
- Use Liquid syntax: `{{ '/path' | relative_url }}`

**Layout broken:**
- Don't remove div wrappers or classes
- Keep existing CSS class names
- Test locally first: `./script/preview.sh`

**Content too long:**
- Keep paragraphs concise (3-4 sentences)
- Break up large blocks with subheadings
- Use bullet points for lists

## Preview Before Deploying

```bash
cd /Users/alysaandrews/Documents/docs/aly-andrews.github.io
./script/preview.sh
# Visit http://127.0.0.1:4000/about
```

## Related Workflows
- [@deploy/deploy-to-production.md](../deploy/deploy-to-production.md) - Deploy changes
- [@content/update-experience.md](update-experience.md) - Update experience page
- [@git/quick-commit.md](../git/quick-commit.md) - Quick commit

## Quick Reference

**File:** `about.md`
**Live URL:** https://aly-andrews.github.io/about
**Style Guide:** `.cursorrules` in repo root
**Images:** `assets/images/photography/` and `assets/images/about/`
