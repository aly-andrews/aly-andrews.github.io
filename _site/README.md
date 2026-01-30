# Aly Andrews - Portfolio Website

A modern portfolio website showcasing my work as a Senior Education Content Producer, Technical Writer, and Video Producer.

## About

This is my personal portfolio website, built with Jekyll and hosted on GitHub Pages. It showcases my experience creating educational content, developing scalable content processes, and leading teams at Shopify.

## Local Development (preview branches before merging)

**Requires Ruby 3.0+.** macOS system Ruby is 2.6 and is too old for Jekyll 4.x.

1. **Install Homebrew** (if you don't have it): https://brew.sh  
   In Terminal, run:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. **Restart Terminal**, then install Ruby 3:
   ```bash
   brew install ruby
   ```
3. **Restart Terminal again** (so `ruby` points to the new version), then run the preview steps below.  
   If you already have Ruby 3+ installed via Homebrew but the script still says "Current: 2.6.10", the script will try to use Homebrew's Ruby automatically (no restart needed). Run `./script/preview.sh` again.

Gems install into the project (`vendor/bundle`) so you don't need system Ruby write access.

**Option 1 – one command (recommended)**  
From the repo root, in **Terminal** (not Cursor):

```bash
cd /path/to/aly-andrews.github.io
./script/preview.sh
```

Then open **http://127.0.0.1:4000** in your browser. Use **Ctrl+C** in the terminal to stop the server.

**Option 2 – step by step**

```bash
cd /path/to/aly-andrews.github.io
bundle config set --local path 'vendor/bundle'
bundle install
bundle exec jekyll serve
```

Then open **http://127.0.0.1:4000**. Switch branches with `git checkout <branch>` and restart `bundle exec jekyll serve` to preview that branch.

## Site Structure

- **Home** (`/`) - Hero section and featured work
- **About** (`/about`) - Background, skills, and education
- **Work** (`/work`) - Portfolio samples and project highlights
- **Experience** (`/experience`) - Detailed work history
- **Contact** (`/contact`) - Ways to get in touch

## Technologies

- Jekyll (static site generator)
- GitHub Pages (hosting)
- Custom CSS (responsive design)
