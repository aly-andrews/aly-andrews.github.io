# Update Experience Page

## Purpose
Update the experience.md page (resume/work history) with new roles, accomplishments, or skills

## When to Use
- Adding a new job or role
- Updating accomplishments at current position
- Adding new skills or certifications
- Refreshing work history content

## Pre-written Prompt

```
Update the experience page (experience.md) in the aly-andrews.github.io repository. Add/update: [DESCRIBE CHANGES - new role, accomplishments, dates, etc.]. Follow the existing structure with accomplishment tables, maintain style guidelines from .cursorrules, and ensure tables use the styled format with gradient accents. Show me the changes before committing.
```

## Steps Checklist

The AI will:
1. Read current experience.md content
2. Locate where to make changes
3. Add/update content following existing format
4. Ensure accomplishments use styled table format
5. Follow style guidelines (no Oxford commas, sentence case, natural phrasing)
6. Preview changes
7. Commit if approved

## Experience Page Structure

### File Location:
`/Users/alysaandrews/Documents/docs/aly-andrews.github.io/experience.md`

### Current Sections:
1. **Page header** - Title and intro
2. **Work experience** - Chronological job history
3. **Education** - Degrees and certifications
4. **Skills** - Technical and soft skills

### Each Role Contains:
- Company name and location
- Job title and dates
- Role description
- Accomplishments table (styled)

## Accomplishment Table Format

**Use styled tables (not bullet lists):**

```html
<table class="accomplishment-table">
  <thead>
    <tr>
      <th>Accomplishment</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>What you did</td>
      <td>Impact or outcome</td>
    </tr>
  </tbody>
</table>
```

### Good Examples:
```html
<tr>
  <td>Launched 25-video POS series including script writing, SME training and cross-team coordination</td>
  <td>20k deflection savings first week tracked through coupons</td>
</tr>

<tr>
  <td>Grew YouTube channel through organic traffic within the first two years</td>
  <td>Grew to 100,000+ subscribers, earning Silver Plaque recognition</td>
</tr>
```

### Formatting Rules:
- **Accomplishment column**: Action-oriented, what you did
- **Result column**: Quantifiable impact or outcome
- Use "to X" format for growth: "to 100,000+ subscribers" (not "from 40,000 to 100,000")
- Include metrics when possible
- Keep concise but descriptive

## Adding a New Role

### Template:
```html
<article class="experience-item">
  <div class="experience-header">
    <div class="experience-title-group">
      <h3>Job Title</h3>
      <p class="experience-company">Company Name | Location</p>
    </div>
    <p class="experience-dates">Start Date – End Date (or Present)</p>
  </div>
  
  <div class="experience-content">
    <p>Role description and overview of responsibilities...</p>
    
    <div class="experience-highlights">
      <h4>Key accomplishments</h4>
      <table class="accomplishment-table">
        <thead>
          <tr>
            <th>Accomplishment</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First accomplishment</td>
            <td>Impact or result</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</article>
```

## Style Guidelines (from .cursorrules)

### Hyphenation:
- ❌ "self-directed" → ✅ "self directed"
- ❌ "hands-on" → ✅ "hands on"
- ✅ Keep: "step-by-step"

### Headings:
- H1: Title case
- H2-H6: Sentence case
- Example: "Key accomplishments" (not "Key Accomplishments")

### Lists and Punctuation:
- No Oxford commas: "writing, editing and producing"
- Avoid semicolons
- Clear, concise sentences

### Tone:
- Professional but conversational
- Achievement-focused
- Include specific metrics

## Common Updates

### Update dates:
```html
<p class="experience-dates">January 2020 – Present</p>
```

### Add new accomplishment:
Add new `<tr>` row to existing table

### Update role description:
Modify paragraph in `experience-content` section

### Add new skill:
Add to skills section at bottom of page

## Metrics to Include

When possible, include:
- Numbers: subscribers, views, hours watched
- Percentages: growth, improvement, efficiency gains
- Time savings: "20k deflection savings"
- Scale: "25-video series", "92 videos"
- Recognition: awards, certifications, achievements

## Troubleshooting

**Table styling not working:**
- Ensure using class `accomplishment-table`
- Keep `<thead>` and `<tbody>` structure
- Don't remove any table classes

**Layout broken:**
- Keep all div wrappers and classes
- Don't modify HTML structure
- Preview locally first

**Content too wordy:**
- Keep accomplishments concise (1-2 lines)
- Use active voice
- Focus on impact, not just tasks

## Preview Before Deploying

```bash
cd /Users/alysaandrews/Documents/docs/aly-andrews.github.io
./script/preview.sh
# Visit http://127.0.0.1:4000/experience
```

## Quick Checklist

Before deploying:
- [ ] Dates are accurate and formatted consistently
- [ ] Accomplishment tables use styled format
- [ ] Metrics and results are included where possible
- [ ] No Oxford commas or unnecessary hyphens
- [ ] Headings use sentence case (H2+)
- [ ] Content is concise and achievement-focused
- [ ] Previewed locally
- [ ] Mobile-friendly (tables responsive)

## Related Workflows
- [@deploy/deploy-to-production.md](../deploy/deploy-to-production.md) - Deploy changes
- [@content/update-about-page.md](update-about-page.md) - Update about page
- [@git/quick-commit.md](../git/quick-commit.md) - Quick commit

## Quick Reference

**File:** `experience.md`
**Live URL:** https://aly-andrews.github.io/experience
**Style Guide:** `.cursorrules`
**Table Class:** `accomplishment-table`
**Metric Format:** "to X subscribers" (not "from X to Y")
