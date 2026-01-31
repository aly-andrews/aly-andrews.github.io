# Undo Commands

## Purpose
Safely undo commits, changes, or mistakes in git

## When to Use
- Committed the wrong files
- Made a mistake in your changes
- Want to undo recent commits
- Need to discard uncommitted changes

## Pre-written Prompt

```
Help me undo [DESCRIBE WHAT YOU WANT TO UNDO] in the aly-andrews.github.io repository. Show me what will happen before executing, and use the safest method that won't lose my work.
```

## Common Undo Scenarios

### 1. Undo Uncommitted Changes

**Discard changes to a specific file:**
```bash
git restore file.md              # Newer syntax
git checkout -- file.md          # Older syntax
```

**Discard all uncommitted changes:**
```bash
git restore .                    # Restore all files
git clean -fd                    # Remove untracked files (careful!)
```

**Preview what would be discarded:**
```bash
git diff                         # See changes
git status                       # See status
```

### 2. Unstage Files (Keep Changes)

**Unstage specific file:**
```bash
git restore --staged file.md
git reset HEAD file.md           # Older syntax
```

**Unstage everything:**
```bash
git restore --staged .
git reset HEAD                   # Older syntax
```

### 3. Undo Last Commit (Not Pushed)

**Undo commit but keep changes:**
```bash
git reset HEAD~1                 # Keep files modified
git reset --soft HEAD~1          # Keep files staged
```

**Undo commit and discard changes:**
```bash
git reset --hard HEAD~1          # ⚠️ Destroys changes!
```

**Undo multiple commits:**
```bash
git reset HEAD~3                 # Undo last 3 commits
```

### 4. Change Last Commit Message (Not Pushed)

```bash
git commit --amend -m "New message"
```

**Add forgotten files to last commit:**
```bash
git add forgotten-file.md
git commit --amend --no-edit     # Keep same message
```

### 5. Undo Pushed Commits (Safe Method)

**⚠️ Never use `git reset` on pushed commits!**

Use `git revert` instead:
```bash
# Revert last commit (creates new commit)
git revert HEAD
git push origin main

# Revert specific commit
git revert abc1234
git push origin main
```

### 6. Recover Deleted Branch

```bash
# Find branch's last commit
git reflog

# Recreate branch
git checkout -b recovered-branch abc1234
```

## Decision Tree

```
Did you push to GitHub?
├─ NO
│  ├─ Just want to undo commit? → git reset HEAD~1
│  ├─ Want to discard changes? → git restore file.md
│  └─ Wrong commit message? → git commit --amend
│
└─ YES
   ├─ Need to undo commit? → git revert HEAD
   └─ Don't use reset! → Use revert instead
```

## Safe vs Dangerous Commands

### ✅ Safe (Won't lose work):
- `git restore --staged` - Unstage files
- `git reset HEAD~1` - Undo commit, keep changes
- `git revert` - Undo commit with new commit
- `git stash` - Temporarily save changes

### ⚠️ Dangerous (Can lose work):
- `git reset --hard` - Destroys uncommitted changes
- `git clean -fd` - Deletes untracked files
- `git push --force` - Overwrites remote history
- `git checkout .` - Discards all changes

## Emergency Recovery

**If you accidentally deleted work:**
```bash
# Git keeps history for ~30 days
git reflog                       # See all recent actions
git checkout abc1234             # Go to that state
git cherry-pick abc1234          # Recover specific commit
```

**If you force-pushed by mistake:**
```bash
# Check reflog for previous state
git reflog
git reset --hard HEAD@{2}        # Go back to before force push
```

## Troubleshooting

**"Cannot reset with paths":**
- Use `git restore` instead of `git reset` for files

**"Refusing to lose uncommitted changes":**
- Git is protecting you from data loss
- Commit or stash changes first

**Merge conflict after revert:**
- Edit conflicted files
- `git add .` then `git revert --continue`

**Want to practice safely:**
```bash
# Create test branch first
git checkout -b test-undo
# Try undo commands here
# If it works: git checkout main
# If it fails: git checkout main && git branch -D test-undo
```

## Common Commands Reference

```bash
# Undo uncommitted changes
git restore file.md              # Discard changes to file
git restore .                    # Discard all changes

# Unstage files
git restore --staged file.md     # Unstage specific file
git restore --staged .           # Unstage all

# Undo commits (not pushed)
git reset HEAD~1                 # Undo last commit, keep changes
git commit --amend               # Fix last commit

# Undo commits (pushed)
git revert HEAD                  # Undo with new commit
git revert abc1234               # Undo specific commit

# Temporary save
git stash                        # Save changes temporarily
git stash pop                    # Restore stashed changes
```

## Related Workflows
- [@git/quick-commit.md](quick-commit.md) - Proper commit workflow
- [@git/branch-management.md](branch-management.md) - Branch operations
