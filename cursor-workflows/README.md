# Cursor Workflows

A collection of reusable workflow prompts for common tasks. These live in the website repo (aly-andrews.github.io). Use `@cursor-workflows/[category]/[file].md` in Cursor to quickly execute these workflows.

## Quick Reference

### Deploy Workflows
- **[@deploy/deploy-to-production.md](deploy/deploy-to-production.md)** - Commit, push to main, deploy to GitHub Pages
- **[@deploy/create-and-deploy-branch.md](deploy/create-and-deploy-branch.md)** - Create new branch, make changes, deploy
- **[@deploy/merge-branch-to-main.md](deploy/merge-branch-to-main.md)** - Merge branch into main and push live

### Git Workflows
- **[@git/branch-management.md](git/branch-management.md)** - Create, switch, and manage branches
- **[@git/quick-commit.md](git/quick-commit.md)** - Fast commit and push workflow
- **[@git/undo-commands.md](git/undo-commands.md)** - Undo commits, changes, or mistakes

### Content Update Workflows
- **[@content/update-about-page.md](content/update-about-page.md)** - Update about page with style guidelines
- **[@content/add-portfolio-item.md](content/add-portfolio-item.md)** - Add new work to portfolio
- **[@content/update-experience.md](content/update-experience.md)** - Update experience/resume page

### Maintenance Workflows
- **[@maintenance/cleanup-branches.md](maintenance/cleanup-branches.md)** - Delete old merged branches
- **[@maintenance/update-dependencies.md](maintenance/update-dependencies.md)** - Update Jekyll and dependencies
- **[@maintenance/fix-common-issues.md](maintenance/fix-common-issues.md)** - Troubleshoot common problems

## How to Use

1. In Cursor, type `@` to bring up the context menu
2. Navigate to or search for `cursor-workflows/[workflow-file].md`
3. The AI will read the workflow instructions and execute them
4. Or simply type your request and @ mention the relevant workflow for context

## Workflow Structure

Each workflow file contains:
- **Purpose** - What this workflow accomplishes
- **When to Use** - Scenarios where you'd use this
- **Pre-written Prompt** - Ready-to-use instructions for AI
- **Steps Checklist** - What the AI will do
- **Common Commands** - Reference commands
- **Troubleshooting** - Common issues and solutions

## Custom Workflows

Feel free to add your own workflow files following the same structure. Keep them organized in the appropriate category folder.
