#!/usr/bin/env bash
# Preview the site locally. Run from the aly-andrews.github.io folder.
cd "$(dirname "$0")"
echo "Building..."
bundle exec jekyll build
echo ""
echo "Starting server at http://127.0.0.1:4000/"
echo "Open that URL in your browser. Press Ctrl+C to stop."
echo ""
bundle exec jekyll serve --port 4000 --host 127.0.0.1
