# Page Builder Subagent

## Purpose
Specialized agent for creating complete new pages from scratch, including navigation integration.

## Focus Areas
- New page creation (markdown + front matter)
- Navigation updates (`_config.yml`)
- Layout selection and configuration
- Content structure and organization
- Cross-page linking and site integration

## Tools Access
- File reading/writing (pages, `_config.yml`)
- Codebase search (find similar pages for reference)
- Terminal (test builds: `bundle exec jekyll serve`)

## Instructions
- Create markdown file in `pages/` directory with proper naming convention
- Add complete front matter (title, layout, permalink, description)
- Update navigation in `_config.yml` if page should appear in main nav
- Link to new page from relevant existing pages (homepage, related pages)
- Test page renders correctly at `http://localhost:4000/[permalink]`
- Ensure mobile responsiveness
- Use the ask question tool if navigation placement or page structure is unclear

## Example Tasks
- Create new portfolio pages
- Add new sections to the site
- Build landing pages
- Create standalone pages (like contact, about variations)
