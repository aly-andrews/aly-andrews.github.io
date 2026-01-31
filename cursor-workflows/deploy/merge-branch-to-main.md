# Merge Branch to Main

## Purpose
Merge a feature branch into main and deploy to production

## When to Use
- Feature branch work is complete and tested
- Ready to deploy branch changes to live site
- Want to consolidate branch into main and clean up

## Pre-written Prompt

```
Merge the [BRANCH_NAME] branch into main in the aly-andrews.github.io repository. First show me a summary of what changes will be merged, then merge, push to GitHub, and optionally delete the branch if it's no longer needed.
```

## Steps Checklist

The AI will:
1. Show current branch and status
2. Display changes between branch and main: `git diff main...[branch-name] --stat`
3. Switch to main: `git checkout main`
4. Pull latest: `git pull origin main`
5. Merge branch: `git merge [branch-name]`
6. Push to GitHub: `git push origin main`
7. Ask if you want to delete the branch
8. If yes, delete locally and remotely

## Common Commands

```bash
cd /Users/alysaandrews/Documents/docs/aly-andrews.github.io

# Review changes before merging
git checkout main
git diff main...feature-branch --stat
git log main..feature-branch --oneline

# Merge and deploy
git checkout main
git pull origin main
git merge feature-branch
git push origin main

# Clean up branch (optional)
git branch -d feature-branch
git push origin --delete feature-branch
```

## Merge Strategies

**Fast-forward merge (default):**
- Use when branch is ahead of main with no conflicts
- Creates a clean, linear history

**If conflicts occur:**
- Git will pause and show conflicts
- Edit conflicted files manually
- Stage resolved files: `git add [file]`
- Complete merge: `git commit`

## Troubleshooting

**Merge conflicts:**
```bash
# See conflicted files
git status

# After fixing conflicts
git add .
git commit -m "Resolve merge conflicts"
git push origin main
```

**Want to undo merge (before pushing):**
```bash
git merge --abort  # If merge in progress
git reset --hard HEAD~1  # If merge completed but not pushed
```

**Already pushed but want to undo:**
- Don't use `git reset` on pushed commits
- Create a new commit that reverts changes
- See `@git/undo-commands.md` for safe options

## After Merge

1. Verify site builds successfully
2. Check live site: https://aly-andrews.github.io (wait 1-2 minutes)
3. Delete merged branch to keep repo clean
4. Pull changes in any other local clones

## Related Workflows
- [@maintenance/cleanup-branches.md](../maintenance/cleanup-branches.md) - Clean up old branches
- [@git/undo-commands.md](../git/undo-commands.md) - Undo merge if needed
