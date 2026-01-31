# Branch Management

## Purpose
Manage git branches - create, switch, list, compare, and delete branches

## When to Use
- Need to see all available branches
- Want to switch between branches
- Compare changes between branches
- Check which branch you're currently on

## Pre-written Prompt

```
Show me all branches in the aly-andrews.github.io repository (local and remote), highlight which branch I'm currently on, and show the last commit on each branch. Then help me [create/switch to/delete/compare] [BRANCH_NAME].
```

## Steps Checklist

The AI will:
1. Show current branch: `git branch --show-current`
2. List all branches: `git branch -a`
3. Show branch details with last commits
4. Execute your requested branch operation
5. Confirm the operation completed successfully

## Common Commands

```bash
cd /Users/alysaandrews/Documents/docs/aly-andrews.github.io

# List branches
git branch                    # Local branches
git branch -a                 # All branches (local + remote)
git branch -v                 # With last commit info
git branch --show-current     # Current branch name

# Create branch
git checkout -b new-branch-name     # Create and switch
git branch new-branch-name          # Create only

# Switch branches
git checkout branch-name
git switch branch-name        # Newer syntax

# Compare branches
git diff main...feature-branch          # Changes in feature-branch
git log main..feature-branch --oneline  # Commits in feature-branch

# Delete branches
git branch -d branch-name              # Delete local (safe)
git branch -D branch-name              # Force delete local
git push origin --delete branch-name   # Delete remote

# Rename branch
git branch -m old-name new-name
```

## Branch Status Indicators

When listing branches:
- `*` = Currently checked out branch
- `remotes/origin/` = Remote branches on GitHub
- Branch with same name locally and remotely = synced

## Troubleshooting

**Can't switch branches (uncommitted changes):**
```bash
# Option 1: Commit changes first
git add .
git commit -m "WIP: save changes"

# Option 2: Stash changes temporarily
git stash
git checkout other-branch
# ... do work ...
git checkout original-branch
git stash pop
```

**Branch not showing up:**
```bash
# Fetch latest from GitHub
git fetch origin
git branch -a  # Should show now
```

**Want to see branches more clearly:**
```bash
# Visual branch tree
git log --oneline --graph --all --decorate

# Or use GitHub to view branches in UI
```

**Delete branch error "not fully merged":**
- Branch has commits not in main
- Use `-D` to force delete if you're sure
- Or merge the branch first

## Branch Naming Best Practices

Use descriptive prefixes:
- `feature/` - New functionality
- `fix/` - Bug fixes
- `update/` - Content/dependency updates
- `style/` - Visual/CSS changes
- `refactor/` - Code restructuring
- `test/` - Experimental changes

Examples:
- `feature/mobile-menu`
- `fix/broken-links`
- `update/about-page-content`
- `style/hero-section-redesign`

## Related Workflows
- [@deploy/create-and-deploy-branch.md](../deploy/create-and-deploy-branch.md) - Create feature branch
- [@maintenance/cleanup-branches.md](../maintenance/cleanup-branches.md) - Delete old branches
