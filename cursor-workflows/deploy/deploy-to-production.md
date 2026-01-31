# Deploy to Production

## Purpose
Deploy current changes to the live website at aly-andrews.github.io

## When to Use
- After making content updates, bug fixes, or feature additions
- When changes have been tested locally and are ready to go live
- When you need to push committed changes to production

## Pre-written Prompt

```
Review my current changes in the aly-andrews.github.io repository, create a descriptive commit message following best practices, commit all staged changes, push to the main branch on GitHub, and confirm when GitHub Pages deployment is initiated. If there are any unstaged changes, show them to me first.
```

## Steps Checklist

The AI will:
1. Run `git status` to check current state
2. Show any unstaged changes for review
3. Stage all relevant changes with `git add`
4. Create a descriptive commit message based on the changes
5. Commit with `git commit -m "[message]"`
6. Push to main with `git push origin main`
7. Confirm push success and note that GitHub Pages will rebuild (1-2 minutes)

## Common Commands

```bash
# Check what will be deployed
cd /Users/alysaandrews/Documents/docs/aly-andrews.github.io
git status
git diff

# Deploy
git add .
git commit -m "Your descriptive message"
git push origin main

# Verify deployment
git log -1
```

## Troubleshooting

**Push rejected / authentication failed:**
- Run the push command from your local Terminal (not Cursor)
- Ensure GitHub credentials are configured

**Merge conflicts:**
- Pull latest changes first: `git pull origin main`
- Resolve conflicts, then commit and push

**Changes not appearing on live site:**
- Wait 1-2 minutes for GitHub Pages to rebuild
- Check GitHub Actions tab for build status
- Hard refresh browser (Cmd+Shift+R on Mac)

## Site URL
https://aly-andrews.github.io
