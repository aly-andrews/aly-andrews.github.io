# Cleanup Branches

## Purpose
Delete old merged branches from local and remote repository to keep the repo clean

## When to Use
- After successfully merging feature branches
- When branches are no longer needed
- During regular repository maintenance
- GitHub shows "not merged" for already-merged branches

## Pre-written Prompt

```
Show me all branches in the aly-andrews.github.io repository (local and remote), identify which ones are already merged into main, and help me safely delete the merged branches both locally and on GitHub. Confirm each deletion before proceeding.
```

## Steps Checklist

The AI will:
1. List all branches: `git branch -a`
2. Check which are merged: `git branch --merged main`
3. Compare commits between branches and main
4. Show safe-to-delete branches
5. Confirm deletions with you
6. Delete locally: `git branch -d [branch]`
7. Delete on GitHub: `git push origin --delete [branch]`
8. Confirm cleanup complete

## Safe Cleanup Process

### Step 1: See all branches
```bash
cd /Users/alysaandrews/Documents/docs/aly-andrews.github.io
git branch -a
```

### Step 2: Check which are merged
```bash
# Branches merged into main
git branch --merged main

# Check if branch differs from main
git diff main..branch-name --stat
```

### Step 3: Delete merged branches

**Delete local branch (safe):**
```bash
git branch -d branch-name     # Safe delete (prevents deleting unmerged work)
git branch -D branch-name     # Force delete (use carefully!)
```

**Delete remote branch (GitHub):**
```bash
git push origin --delete branch-name
```

**Delete multiple branches:**
```bash
# Delete multiple local branches
git branch -d branch1 branch2 branch3

# Delete multiple remote branches
git push origin --delete branch1 branch2 branch3
```

## Branch Status Guide

### ✅ Safe to Delete:
- Fully merged into main
- `git diff main..branch` shows no differences
- Work is preserved in main branch
- No longer actively working on it

### ⚠️ Check First:
- Old branches you don't remember
- Branches with "not merged" warning on GitHub (could be older than main)
- Branches with similar names to active work

### ❌ Don't Delete:
- `main` branch (your production branch!)
- Currently checked out branch
- Active work in progress
- Unmerged changes you want to keep

## Common Scenarios

### Scenario 1: Branch shows "not merged" on GitHub
This happens when:
- Branch is older than main (main has moved forward)
- Branch's commits are in main but from different merge

**Solution:**
```bash
# Check if branch's work is in main
git log main..old-branch --oneline

# If output is empty or shows old commits → safe to delete
git branch -d old-branch
git push origin --delete old-branch
```

### Scenario 2: Recently merged branch
```bash
# Just merged feature-branch into main
git checkout main
git branch -d feature-branch           # Delete local
git push origin --delete feature-branch # Delete remote
```

### Scenario 3: Mass cleanup
```bash
# See all merged branches (excluding main)
git branch --merged main | grep -v "main"

# Delete them all (review list first!)
git branch --merged main | grep -v "main" | xargs git branch -d

# Delete remote branches (review list first!)
git branch -r --merged main | grep -v "main" | sed 's/origin\///' | xargs -n 1 git push origin --delete
```

## What You Recently Cleaned Up

Based on your recent work:
- ✅ `uxupdate` - UX improvements, merged into main
- ✅ `experience` - Experience page work, merged
- ✅ `responsive` - Responsive design, merged

## Branches Still Remaining

Check if these need cleanup:
- `landing-page` - On GitHub
- `develop` - Local only
- `feature/polish-hero-section` - Local only
- `resume` - Local only

## Troubleshooting

**"Error: branch not fully merged":**
```bash
# Git is protecting you from data loss
# Option 1: Check what's different
git diff main..branch-name

# Option 2: If you're sure, force delete
git branch -D branch-name
```

**"Error: remote ref does not exist":**
- Branch already deleted on GitHub
- Or branch was never pushed
- Safe to ignore, just delete local branch

**"Cannot delete checked out branch":**
```bash
# Switch to main first
git checkout main
git branch -d other-branch
```

**Want to recover deleted branch:**
```bash
# Find branch in reflog
git reflog

# Recreate from commit hash
git checkout -b recovered-branch abc1234
```

## Automation Options

### Create cleanup alias (add to ~/.zshrc):
```bash
alias git-cleanup='git branch --merged main | grep -v "main" | xargs git branch -d'
```

### Use script:
```bash
# Save as cleanup-branches.sh
#!/bin/bash
cd /Users/alysaandrews/Documents/docs/aly-andrews.github.io
echo "Merged branches (safe to delete):"
git branch --merged main | grep -v "main"
read -p "Delete these branches? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  git branch --merged main | grep -v "main" | xargs git branch -d
  echo "Local branches cleaned up!"
fi
```

## Best Practices

1. **Regular cleanup** - Do this monthly or after major milestones
2. **Merge then delete** - Delete branches right after merging
3. **Keep main clean** - Don't accumulate old branches
4. **Document long-term branches** - If keeping a branch long-term, note why

## Quick Commands Reference

```bash
# List branches
git branch -a                          # All branches
git branch --merged main               # Merged into main
git branch --no-merged main            # Not merged

# Delete branches
git branch -d branch-name              # Delete local (safe)
git branch -D branch-name              # Delete local (force)
git push origin --delete branch-name   # Delete remote

# Check before deleting
git diff main..branch-name --stat      # See differences
git log main..branch-name --oneline    # See commits
```

## Related Workflows
- [@git/branch-management.md](../git/branch-management.md) - Branch operations
- [@deploy/merge-branch-to-main.md](../deploy/merge-branch-to-main.md) - Merge workflow
- [@git/undo-commands.md](../git/undo-commands.md) - Recover deleted branch

## Quick Reference

**Repository:** `/Users/alysaandrews/Documents/docs/aly-andrews.github.io`
**Production Branch:** `main`
**GitHub:** https://github.com/aly-andrews/aly-andrews.github.io
