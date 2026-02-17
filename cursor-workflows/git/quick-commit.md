# Quick Commit

## Purpose
Fast commit and push workflow for small changes and updates

## When to Use
- Making quick content updates
- Fixing typos or small bugs
- Want to save work quickly to GitHub
- Simple changes that don't need a feature branch

## Pre-written Prompt

```
Review my current changes in the aly-andrews.github.io repository, create a concise but descriptive commit message, commit the changes, and push to the current branch. Show me what's being committed first.
```

## Steps Checklist

The AI will:
1. Check current branch: `git branch --show-current`
2. Show changes: `git status` and `git diff --stat`
3. Preview what will be committed
4. Stage relevant changes
5. Create descriptive commit message
6. Commit and push in one flow
7. Confirm push success

## Common Commands

```bash
cd /Users/alysaandrews/Documents/docs/aly-andrews.github.io

# Quick commit flow
git status                           # See what changed
git add .                            # Stage all changes
git commit -m "Update about page"    # Commit with message
git push origin main                 # Push to GitHub

# Even faster (stages all tracked files)
git commit -am "Your message"
git push

# Stage specific files only
git add file1.md file2.css
git commit -m "Update specific files"
git push
```

## Commit Message Best Practices

### Good commit messages:
- "Add mobile hamburger menu to navigation"
- "Fix broken link on contact page"
- "Update experience page with new role"
- "Improve photography grid layout for mobile"

### Avoid:
- "Update" (too vague)
- "Fix stuff" (not descriptive)
- "Changes" (says nothing)
- "asdf" or "temp" (unprofessional)

### Format:
```
[Action verb] [what changed] [optional: why]

Examples:
- Add skip-to-content link for accessibility
- Fix navigation overflow on mobile devices
- Update about page photo and bio
- Remove deprecated PDF embed code
```

## Quick Workflows

**For content updates:**
```bash
git add content/*.md
git commit -m "Update [page name] content"
git push
```

**For style changes:**
```bash
git add assets/css/*.css
git commit -m "Improve [component] styling"
git push
```

**For multiple related changes:**
```bash
git add .
git commit -m "Implement [feature name]: [brief description]"
git push
```

## Troubleshooting

**Nothing to commit:**
- No changes have been made
- Changes are in ignored files (.gitignore)
- Run `git status` to verify

**Push rejected:**
- Someone else pushed first: `git pull origin main`
- On wrong branch: `git branch --show-current`
- Authentication issue: Push from local Terminal

**Committed but want to change message:**
```bash
# If NOT pushed yet
git commit --amend -m "New better message"

# If already pushed, don't amend (creates conflicts)
# Just make a new commit if needed
```

**Accidentally committed wrong files:**
```bash
# Before pushing
git reset HEAD~1              # Undo commit, keep changes
git restore --staged file.md  # Unstage specific file
git commit -m "Correct message"

# After pushing - see @git/undo-commands.md
```

## Speed Tips

1. **Use git aliases** (add to ~/.zshrc):
```bash
alias gs='git status'
alias ga='git add'
alias gc='git commit -m'
alias gp='git push'
alias gac='git add . && git commit -m'

# Then use: gac "Your message" && gp
```

2. **Stage and commit together:**
```bash
git commit -am "Message"  # Only for tracked files
```

3. **Use the existing push script:**
```bash
bash /Users/alysaandrews/Documents/docs/aly-andrews.github.io/script/push-to-github.sh
```

## Related Workflows
- [@deploy/deploy-to-production.md](../deploy/deploy-to-production.md) - Full deployment workflow
- [@git/undo-commands.md](undo-commands.md) - Fix commit mistakes
