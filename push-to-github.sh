#!/bin/bash

# Script to push changes to GitHub
# Run this in your Terminal: bash push-to-github.sh

cd /Users/alysaandrews/Documents/docs/aly-andrews.github.io

echo "Checking current branch..."
git branch --show-current

echo ""
echo "Checking if there are changes to push..."
git status

echo ""
echo "Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo "Your site will update at: https://aly-andrews.github.io"
    echo "It may take 1-2 minutes for GitHub Pages to rebuild."
else
    echo ""
    echo "❌ Push failed. Check your internet connection and try again."
fi
