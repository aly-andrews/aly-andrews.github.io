#!/usr/bin/env bash
# Preview Jekyll site locally. Run from repo root or pass repo path.
# Logs for diagnostics (writes to repo _preview_debug.log so we can read even from Cursor).
# Requires Ruby 3.0+ (Jekyll 4.x and dependencies like ffi need Ruby 3+).

LOG="/Users/alysaandrews/Documents/docs/.cursor/debug.log"
REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PREVIEW_LOG="$REPO_DIR/_preview_debug.log"
cd "$REPO_DIR"

# #region agent log
_log() { echo "$1" >> "$LOG" 2>/dev/null; echo "$1" >> "$PREVIEW_LOG" 2>/dev/null; }
_log "{\"timestamp\":$(date +%s)000,\"message\":\"preview_script_start\",\"data\":{\"cwd\":\"$REPO_DIR\",\"ruby\":\"$(ruby -v 2>/dev/null || echo 'none')\",\"brewInPath\":$(command -v brew >/dev/null 2>&1 && echo true || echo false),\"pathPreview\":\"${PATH:0:200}\"},\"hypothesisId\":\"H4\",\"sessionId\":\"debug-session\",\"runId\":\"run1\"}"
# #endregion

# Require Ruby 3.0+ (ffi and Jekyll 4.x deps need it)
RUBY_V=$(ruby -e 'puts RUBY_VERSION' 2>/dev/null || echo "0.0.0")
MAJOR=$(echo "$RUBY_V" | cut -d. -f1)
# If current Ruby is too old but Homebrew Ruby is available, use it (PATH often has system Ruby first)
if [ "$MAJOR" -lt 3 ] 2>/dev/null && command -v brew >/dev/null 2>&1; then
  BREW_PREFIX=$(brew --prefix 2>/dev/null)
  if [ -n "$BREW_PREFIX" ] && [ -x "$BREW_PREFIX/opt/ruby/bin/ruby" ]; then
    export PATH="$BREW_PREFIX/opt/ruby/bin:$BREW_PREFIX/bin:$PATH"
    RUBY_V=$("$BREW_PREFIX/opt/ruby/bin/ruby" -e 'puts RUBY_VERSION' 2>/dev/null)
    MAJOR=$(echo "$RUBY_V" | cut -d. -f1)
  fi
fi
if [ "$MAJOR" -lt 3 ] 2>/dev/null; then
  echo "Ruby 3.0+ is required for Jekyll 4.x. Current: $RUBY_V"
  if ! command -v brew >/dev/null 2>&1; then
    echo ""
    echo "Homebrew (brew) is not installed. Install it first, then install Ruby:"
    echo "  1. Install Homebrew: https://brew.sh"
    echo "     Run this in Terminal:"
    echo '     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'
    echo "  2. Restart Terminal, then run: brew install ruby"
    echo "  3. Restart Terminal again, then run this script."
  else
    echo "Install Ruby 3 with: brew install ruby"
    echo "Then restart your terminal so 'ruby' points to the new version, and run this script again."
  fi
  # #region agent log
  _log "{\"timestamp\":$(date +%s)000,\"message\":\"ruby_version_too_old\",\"data\":{\"rubyVersion\":\"$RUBY_V\",\"required\":\"3.0+\",\"brewFound\":$(command -v brew >/dev/null 2>&1 && echo true || echo false)},\"hypothesisId\":\"H5\",\"sessionId\":\"debug-session\",\"runId\":\"run1\"}"
  # #endregion
  exit 1
fi

bundle config set --local path 'vendor/bundle' 2>/dev/null || true
BUNDLE_OUTPUT=$(bundle install 2>&1)
EXIT_INSTALL=$?
# One-line tail of output for log (newlines -> space)
BUNDLE_TAIL=$(echo "$BUNDLE_OUTPUT" | tail -30 | tr '\n' ' ' | sed 's/"/\\"/g')

# #region agent log
_log "{\"timestamp\":$(date +%s)000,\"message\":\"bundle_install_done\",\"data\":{\"exitCode\":$EXIT_INSTALL,\"outputTail\":\"$BUNDLE_TAIL\"},\"hypothesisId\":\"H1\",\"sessionId\":\"debug-session\",\"runId\":\"run1\"}"
# #endregion

if [ $EXIT_INSTALL -ne 0 ]; then
  echo "bundle install failed (exit $EXIT_INSTALL). Check the output above."
  exit $EXIT_INSTALL
fi

# #region agent log
_log "{\"timestamp\":$(date +%s)000,\"message\":\"jekyll_serve_start\",\"data\":{},\"hypothesisId\":\"H5\",\"sessionId\":\"debug-session\",\"runId\":\"run1\"}"
# #endregion

# Prefer binstub to avoid Bundler 4 exec issues; fallback to bundle exec
JEKYLL_BIN=$(find "$REPO_DIR/vendor/bundle/ruby" -type f -name jekyll -path '*/bin/*' 2>/dev/null | head -1)
if [ -n "$JEKYLL_BIN" ] && [ -x "$JEKYLL_BIN" ]; then
  exec "$JEKYLL_BIN" serve
else
  exec bundle exec jekyll serve
fi
