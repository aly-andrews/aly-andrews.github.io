# Create and Deploy Branch

## Purpose
Create a new feature branch, make changes, commit, and optionally deploy to test or merge to main

## When to Use
- Starting work on a new feature or significant update
- Want to test changes in isolation before deploying to production
- Following git best practices with feature branches

## Pre-written Prompt

```
Create a new branch called [BRANCH_NAME] from main in the aly-andrews.github.io repository, make the following changes: [DESCRIBE CHANGES], commit with a descriptive message, and push the branch to GitHub. Show me the branch status when done.
```

## Steps Checklist

The AI will:
1. Ensure you're on main branch and it's up to date
2. Create new branch: `git checkout -b [branch-name]`
3. Make requested changes to files
4. Stage changes: `git add [files]`
5. Commit with descriptive message
6. Push branch: `git push -u origin [branch-name]`
7. Provide next steps for testing or merging

## Common Commands

```bash
# Create and switch to new branch
cd /Users/alysaandrews/Documents/docs/aly-andrews.github.io
git checkout main
git pull origin main
git checkout -b feature/new-feature

# Make changes, then commit and push
git add .
git commit -m "Add new feature"
git push -u origin feature/new-feature

# View branches
git branch -a
```

## Branch Naming Conventions

Use these prefixes:
- `feature/` - New features (e.g., `feature/contact-form`)
- `fix/` - Bug fixes (e.g., `fix/mobile-nav`)
- `update/` - Content updates (e.g., `update/about-page`)
- `style/` - Style/design changes (e.g., `style/hero-section`)

## Troubleshooting

**Branch already exists:**
- Use a different name or delete old branch: `git branch -d old-branch`

**Can't switch branches (uncommitted changes):**
- Commit changes first, or stash: `git stash`

**After pushing, what's next?**
- Test locally: `./script/preview.sh`
- Merge to main when ready: see `@merge-branch-to-main.md`
- Or create pull request on GitHub for review

## Related Workflows
- [@deploy/merge-branch-to-main.md](merge-branch-to-main.md) - Merge this branch to production
- [@git/branch-management.md](../git/branch-management.md) - More branch operations
