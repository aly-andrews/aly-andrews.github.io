#!/usr/bin/env bash
# Run from aly-andrews.github.io root (this repo). Pushes the engine branch with current engine work.

set -e
cd "$(dirname "$0")/.."

echo "Repo: $(pwd)"
echo "Branch: $(git rev-parse --abbrev-ref HEAD)"
echo "Uncommitted:"
git status --short

git checkout -b engine 2>/dev/null || git checkout engine
git add docs/article-engine-to-portfolio.md \
  assets/css/main.css \
  cursor-workflows/site-build/component-patterns.md
git add -u cursor-workflows/content/ 2>/dev/null || true
git add -A

if git diff --staged --quiet; then
  echo "Nothing to commit (working tree clean or already committed)."
else
  git commit -m "Engine: accordion, callout variants, checklist, CTA block; move article-engine-to-portfolio to docs/"
fi

git push -u origin engine
echo "Done. engine branch pushed to origin."
