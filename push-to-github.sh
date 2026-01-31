#!/bin/bash

# Script to push changes to GitHub
# Run this in your Terminal: bash push-to-github.sh

# #region agent log
LOG="/Users/alysaandrews/Documents/docs/.cursor/debug.log"
_log() {
  # NDJSON line (best effort, no secrets)
  echo "$1" >> "$LOG" 2>/dev/null || true
}
_ts() { date +%s000; }
# #endregion

cd /Users/alysaandrews/Documents/docs/aly-andrews.github.io

echo "Checking current branch..."
git branch --show-current

# #region agent log
BRANCH="$(git branch --show-current 2>/dev/null || echo "unknown")"
REMOTE_PUSH="$(git remote get-url --push origin 2>/dev/null || echo "unknown")"
CREDS_HELPER="$(git config --show-origin --get credential.helper 2>/dev/null | tr '\n' ' ' | cut -c1-300)"
GIT_VER="$(git --version 2>/dev/null || echo "unknown")"
OS_VER="$(uname -a 2>/dev/null || echo "unknown")"
_log "{\"timestamp\":$(_ts),\"sessionId\":\"debug-session\",\"runId\":\"run1\",\"hypothesisId\":\"A\",\"location\":\"push-to-github.sh:prep\",\"message\":\"push_prep\",\"data\":{\"cwd\":\"$(pwd)\",\"branch\":\"$BRANCH\",\"remotePush\":\"$REMOTE_PUSH\",\"gitVersion\":\"$GIT_VER\",\"os\":\"$OS_VER\"}}"
_log "{\"timestamp\":$(_ts),\"sessionId\":\"debug-session\",\"runId\":\"run1\",\"hypothesisId\":\"B\",\"location\":\"push-to-github.sh:prep\",\"message\":\"credential_helper\",\"data\":{\"credentialHelper\":\"${CREDS_HELPER//\"/\\\"}\"}}"
# #endregion

echo ""
echo "Checking if there are changes to push..."
git status

echo ""
echo "Pushing to GitHub..."
PUSH_OUT="$(git push origin main 2>&1)"
PUSH_EXIT=$?
echo "$PUSH_OUT"

# #region agent log
OUT_ONE_LINE="$(printf '%s' "$PUSH_OUT" | tr '\n' ' ' | cut -c1-800)"
OUT_ONE_LINE="${OUT_ONE_LINE//\"/\\\"}"
_log "{\"timestamp\":$(_ts),\"sessionId\":\"debug-session\",\"runId\":\"run1\",\"hypothesisId\":\"C\",\"location\":\"push-to-github.sh:push\",\"message\":\"push_result\",\"data\":{\"exitCode\":$PUSH_EXIT,\"output\":\"$OUT_ONE_LINE\"}}"
# #endregion

if [ $PUSH_EXIT -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo "Your site will update at: https://aly-andrews.github.io"
    echo "It may take 1-2 minutes for GitHub Pages to rebuild."
else
    echo ""
    echo "❌ Push failed. Check your internet connection and try again."
fi
