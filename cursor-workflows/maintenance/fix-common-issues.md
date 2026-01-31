# Fix Common Issues

## Purpose
Troubleshoot and fix common problems with the website, git, Jekyll, or deployment

## When to Use
- Site won't build or serve locally
- Images not displaying
- Git errors or conflicts
- Push rejected or authentication failed
- GitHub Pages build failed
- CSS or layout broken
- Any error messages

## Pre-written Prompt

```
I'm getting this error in the aly-andrews.github.io repository: [PASTE ERROR MESSAGE]. Help me diagnose the issue, explain what's causing it, and fix it step by step. Show me what commands to run and verify the fix worked.
```

## Common Issues & Solutions

### 1. Site Won't Build or Serve

**Error: "Ruby version too old" or "ffi requires Ruby 3.0+"**

**Solution:**
```bash
# Check Ruby version
ruby -v

# If shows 2.6.x, install Ruby 3
brew install ruby

# Restart Terminal
ruby -v  # Should show 3.x

# Reinstall gems
cd /Users/alysaandrews/Documents/docs/aly-andrews.github.io
bundle install
```

**Error: "Could not find gem" or "bundle install failed"**

**Solution:**
```bash
# Clean and reinstall
rm -rf vendor/bundle .bundle
bundle config set --local path 'vendor/bundle'
bundle install
```

**Error: "Jekyll command not found"**

**Solution:**
```bash
# Install Jekyll
bundle install

# Always use bundle exec
bundle exec jekyll serve  # Not just: jekyll serve
```

### 2. Git Push Rejected or Authentication Failed

**Error: "could not read Username" or "Device not configured"**

**Solution:**
```bash
# Run push from Terminal (not Cursor)
cd /Users/alysaandrews/Documents/docs/aly-andrews.github.io
git push origin main
```

**Error: "Updates were rejected" or "non-fast-forward"**

**Solution:**
```bash
# Pull latest changes first
git pull origin main

# If conflicts, resolve them
# Then push again
git push origin main
```

**Error: "Authentication failed"**

**Solution:**
```bash
# Check GitHub login
gh auth status

# If not logged in
gh auth login

# Or use personal access token
# Generate at: github.com/settings/tokens
```

### 3. Images Not Displaying

**Symptoms: Placeholder shows instead of image**

**Solution checklist:**
```bash
# 1. Check file exists
ls -la assets/images/your-image.jpg

# 2. Check filename matches exactly (case-sensitive!)
# "Photo.jpg" ≠ "photo.jpg"

# 3. Check Liquid syntax
# Correct: {{ '/assets/images/photo.jpg' | relative_url }}
# Wrong: /assets/images/photo.jpg

# 4. Check image isn't in .gitignore
git status  # Should show image as tracked

# 5. Test locally
./script/preview.sh
# Visit http://127.0.0.1:4000
```

**Common mistakes:**
- Filename typo or wrong case
- Forgot to commit/push image file
- Wrong path in markdown
- Image file is too large (GitHub has 100MB limit)

### 4. CSS or Layout Broken

**Symptoms: Page looks unstyled or broken**

**Solution:**
```bash
# 1. Check for CSS syntax errors
# Look in: assets/css/main.css

# 2. Clear Jekyll cache
bundle exec jekyll clean
bundle exec jekyll serve

# 3. Hard refresh browser
# Mac: Cmd+Shift+R
# Windows: Ctrl+Shift+R

# 4. Check browser console for errors
# Right-click → Inspect → Console tab
```

**Common causes:**
- Missing closing brace `}` in CSS
- Deleted required CSS class
- Removed important HTML wrapper divs
- Typo in class name

### 5. Merge Conflicts

**Error: "Automatic merge failed; fix conflicts"**

**Solution:**
```bash
# 1. See conflicted files
git status

# 2. Open conflicted files, look for:
<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> branch-name

# 3. Edit file to resolve (remove markers, keep what you want)

# 4. Stage resolved files
git add resolved-file.md

# 5. Complete merge
git commit -m "Resolve merge conflicts"
git push origin main
```

**Avoid conflicts:**
- Pull before making changes: `git pull origin main`
- Commit frequently
- Work in feature branches

### 6. GitHub Pages Build Failed

**Check build status:**
1. Go to GitHub repository
2. Click "Actions" tab
3. Look for failed builds (red X)
4. Click to see error details

**Common causes:**
- Syntax error in markdown or HTML
- Invalid Liquid template syntax
- Missing dependency in Gemfile
- File path errors

**Solution:**
```bash
# Test build locally first
bundle exec jekyll build

# If succeeds locally but fails on GitHub:
# - Check GitHub Pages build log for specific error
# - Verify all files are committed and pushed
# - Check Gemfile matches GitHub Pages requirements
```

### 7. Changes Not Appearing on Live Site

**Symptoms: Pushed to GitHub but site not updated**

**Solution:**
1. **Wait 1-2 minutes** - GitHub Pages takes time to rebuild
2. **Check GitHub Actions** - Verify build succeeded
3. **Hard refresh browser** - Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
4. **Check you pushed to main** - `git log origin/main -1`
5. **Verify file committed** - `git log --follow filename.md`

**Clear browser cache:**
```bash
# Chrome/Edge: Settings → Privacy → Clear browsing data
# Safari: History → Clear History
```

### 8. Port Already in Use (Jekyll Serve)

**Error: "Address already in use - bind(2)"**

**Solution:**
```bash
# Kill process on port 4000
lsof -ti:4000 | xargs kill -9

# Or use different port
bundle exec jekyll serve --port 4001
```

### 9. Permission Denied Errors

**Error: "Permission denied" or "Operation not permitted"**

**Solution:**
```bash
# For git operations - run in Terminal (not Cursor)
# For file operations - check file permissions
ls -la filename

# Fix permissions if needed
chmod 644 file.md  # Regular file
chmod 755 script.sh  # Executable script
```

## Diagnostic Commands

### Check everything is working:
```bash
cd /Users/alysaandrews/Documents/docs/aly-andrews.github.io

# Ruby version (need 3.0+)
ruby -v

# Git status
git status
git log -1

# Jekyll version
bundle exec jekyll -v

# Test build
bundle exec jekyll build

# Test serve
bundle exec jekyll serve
```

### Get detailed error info:
```bash
# Verbose Jekyll build
bundle exec jekyll build --verbose

# Full git status
git status --verbose

# Check remote
git remote -v
git branch -a
```

## When to Ask for Help

If you've tried these solutions and still have issues:

1. **Copy exact error message** - Full error output
2. **Note what you were doing** - What command or action caused it
3. **Check if reproducible** - Does it happen every time?
4. **Note your environment** - Ruby version, OS version, etc.
5. **Check git status** - `git status` output
6. **Check recent changes** - `git log -3 --oneline`

Include this info when asking for help from Cursor or online.

## Prevention Tips

1. **Test locally before deploying** - Always run `./script/preview.sh`
2. **Commit often** - Small, frequent commits are easier to debug
3. **Pull before push** - `git pull origin main` prevents conflicts
4. **Use feature branches** - Isolate risky changes
5. **Keep dependencies updated** - Quarterly maintenance
6. **Back up work** - Git commits are your backup

## Quick Recovery

**If everything is broken:**
```bash
# 1. Go back to last working commit
git log --oneline  # Find last good commit
git checkout abc1234

# 2. Test if this works
./script/preview.sh

# 3. If it works, create recovery branch
git checkout -b recovery
git push -u origin recovery

# 4. Investigate what broke on main
git checkout main
git diff abc1234..HEAD  # See what changed
```

## Related Workflows
- [@git/undo-commands.md](../git/undo-commands.md) - Undo mistakes
- [@maintenance/update-dependencies.md](update-dependencies.md) - Update Jekyll/gems
- [@deploy/deploy-to-production.md](../deploy/deploy-to-production.md) - Deployment workflow

## Quick Reference

**Preview script:** `./script/preview.sh`
**Build command:** `bundle exec jekyll build`
**Serve command:** `bundle exec jekyll serve`
**Local URL:** http://127.0.0.1:4000
**Live URL:** https://aly-andrews.github.io
**GitHub Actions:** https://github.com/aly-andrews/aly-andrews.github.io/actions
