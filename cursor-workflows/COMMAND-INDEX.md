# Command index (Cursor-friendly)

Use this file like “slash commands”. Copy a command block below into chat, and optionally @ mention the linked workflow file.

## Site build (fastest day to day)

### build-new-page

@cursor-workflows/site-build/new-page.md

Create a new page called [PAGE_NAME] with title [TITLE] and permalink [PERMALINK]. Add it to navigation and apply the site’s existing layout and CSS conventions.

### build-new-section

@cursor-workflows/site-build/new-section.md

Add a new section to [PAGE] called [SECTION_TITLE]. Use the existing creative section styles and keep headings in sentence case.

### build-component-patterns

@cursor-workflows/site-build/component-patterns.md

Add a new reusable section using one of the existing patterns (cards, callouts, testimonials). Keep the markup consistent and mobile friendly.

### build-mobile-ux-pass

@cursor-workflows/site-build/mobile-ux-pass.md

Do a mobile UX pass across key pages (home, about, work, experience, contact). Fix overflow, tap targets, spacing, and focus states. Keep changes minimal and consistent with current design.

### build-image-add

@cursor-workflows/site-build/add-image-and-alt-text.md

Add an image at [PATH] to [PAGE] with correct Liquid path syntax and strong alt text. Confirm it won’t be cropped unexpectedly.

### build-preview-locally

@cursor-workflows/site-build/preview-locally.md

Give me the exact commands to preview locally and a checklist of what to verify before deploying.

## Deploy and Git (when you need it)

### deploy

@cursor-workflows/deploy/deploy-to-production.md

Review changes, commit with a descriptive message, and deploy to GitHub Pages.

### merge-branch

@cursor-workflows/deploy/merge-branch-to-main.md

Merge [BRANCH_NAME] into main, push, then clean up the branch.

### git-quick-commit

@cursor-workflows/git/quick-commit.md

Fast commit and push for small changes.

