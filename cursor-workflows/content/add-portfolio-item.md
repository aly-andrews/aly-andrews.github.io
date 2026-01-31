# Add Portfolio Item

## Purpose
Add a new project or work sample to the portfolio on the work.md page

## When to Use
- Completed a new project to showcase
- Have new work samples to add
- Want to feature recent accomplishments
- Updating portfolio with latest work

## Pre-written Prompt

```
Add a new portfolio item to the work page (work.md) in the aly-andrews.github.io repository. Project details: [PROJECT NAME], [DESCRIPTION], [TYPE: article/video/documentation], [TECHNOLOGIES/TOOLS USED]. Follow the existing portfolio item structure and styling. Create placeholder for project image and show me where to upload it.
```

## Steps Checklist

The AI will:
1. Read current work.md structure
2. Identify where to add new item
3. Create new portfolio section following existing format
4. Include:
   - Project title
   - Description
   - Image placeholder with upload instructions
   - Technologies/tools used
   - Link to live work or samples (if available)
5. Add image placeholder reference
6. Preview changes
7. Commit if approved

## Work Page Structure

### File Location:
`/Users/alysaandrews/Documents/docs/aly-andrews.github.io/work.md`

### Current Portfolio Items:
1. **Skio documentation** - Help center articles and video scripts
2. **Style guides** - Article and video style guides
3. **Training programs** - Educational content development

### Standard Item Format:
```markdown
<div id="project-id" class="work-section-creative">
  <div class="work-section-header">
    <div class="work-image-large">
      <div class="image-placeholder work-placeholder-large">
        <p>Project Name</p>
        <p class="placeholder-hint">Upload to: assets/images/portfolio/project-name.jpg</p>
      </div>
    </div>
    <div class="work-section-intro">
      <h2>Project title</h2>
      <p>Project description and overview...</p>
    </div>
  </div>
  
  <div class="work-examples-creative">
    <!-- Add specific examples here -->
  </div>
</div>
```

## Image Guidelines

### Upload Location:
`/Users/alysaandrews/Documents/docs/aly-andrews.github.io/assets/images/portfolio/`

### Naming Convention:
- Use lowercase with hyphens
- Descriptive names
- Examples:
  - `project-main.jpg` - Main project image
  - `screenshot-feature.jpg` - Feature screenshot
  - `video-thumbnail.jpg` - Video thumbnail

### Image Sizes:
- **Large images**: ~1200px wide
- **Thumbnails**: ~400-600px wide
- **Format**: JPG for photos, PNG for screenshots with text

## Content Guidelines

### Project Description:
- Start with what problem it solved
- Explain your role and responsibilities
- Highlight key technologies or tools
- Include measurable results if possible

### Good Example:
```markdown
<p>Created comprehensive help center articles and video scripts for Skio, 
a subscription management platform for Shopify merchants. Work included 
developing both written documentation and video content to help merchants 
understand and use subscription features effectively.</p>
```

### Include:
- ✅ What you created
- ✅ Who it was for
- ✅ Technologies/tools used
- ✅ Impact or results
- ✅ Your specific contributions

### Avoid:
- ❌ Vague descriptions ("worked on stuff")
- ❌ Too much technical jargon
- ❌ Overly long paragraphs
- ❌ Passive voice

## Style Guidelines

Follow .cursorrules:
- Sentence case for H2 headings
- Minimal hyphens (natural phrasing)
- No Oxford commas
- Clear, conversational tone

## Types of Portfolio Items

### Technical Writing:
- Documentation sets
- API references
- User guides
- Help center articles
- Style guides

### Video Content:
- Educational videos
- Tutorial series
- Product demos
- Training materials

### Content Strategy:
- Content frameworks
- Process documentation
- Style guide development
- Team training programs

## Adding Links

### Internal work samples:
```markdown
<a href="{{ '/assets/documents/sample.pdf' | relative_url }}">View sample</a>
```

### External links:
```markdown
<a href="https://example.com/work" target="_blank" rel="noopener">View live</a>
```

## Troubleshooting

**Where should I add the new item?**
- Add after existing projects
- Maintain chronological order (newest first)
- Keep consistent spacing and structure

**Images not showing:**
- Check image uploaded to `assets/images/portfolio/`
- Verify filename matches exactly (case-sensitive)
- Use correct Liquid syntax for paths

**Layout looks broken:**
- Keep all CSS classes intact
- Don't modify div structure
- Preview locally first: `./script/preview.sh`

## Preview Changes

```bash
cd /Users/alysaandrews/Documents/docs/aly-andrews.github.io
./script/preview.sh
# Visit http://127.0.0.1:4000/work
```

## Quick Checklist

Before deploying:
- [ ] Project description is clear and concise
- [ ] Images uploaded to correct folder
- [ ] Image paths are correct
- [ ] Links work (if any)
- [ ] Follows style guidelines (sentence case, no hyphens, etc.)
- [ ] Previewed locally
- [ ] Looks good on mobile (check responsive design)

## Related Workflows
- [@deploy/deploy-to-production.md](../deploy/deploy-to-production.md) - Deploy changes
- [@content/update-about-page.md](update-about-page.md) - Update about page
- [@git/quick-commit.md](../git/quick-commit.md) - Quick commit

## Quick Reference

**File:** `work.md`
**Live URL:** https://aly-andrews.github.io/work
**Images:** `assets/images/portfolio/`
**Style Guide:** `.cursorrules`
