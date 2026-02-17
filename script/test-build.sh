#!/bin/bash
# Test script to verify Jekyll build with baseurl works correctly

# Log configuration
LOG_FILE="/Users/alysaandrews/Documents/docs/.cursor/debug.log"
SERVER_ENDPOINT="http://127.0.0.1:7242/ingest/7f70f37f-c318-4f75-984c-1256fe65a7bc"

log_entry() {
  local location="$1"
  local message="$2"
  local data="$3"
  echo "{\"sessionId\":\"debug-session\",\"runId\":\"test-build\",\"location\":\"$location\",\"message\":\"$message\",\"data\":$data,\"timestamp\":$(date +%s)000}" >> "$LOG_FILE"
}

# Hypothesis A: Testing baseurl configuration
log_entry "test-build.sh:18" "Starting Jekyll build test" '{"baseurl":"/8","hypothesisId":"A"}'

echo "Building Jekyll with baseurl /8..."
bundle exec jekyll build --baseurl /8 2>&1 | tee build-output.log

BUILD_EXIT=$?
log_entry "test-build.sh:24" "Jekyll build completed" "{\"exitCode\":$BUILD_EXIT,\"hypothesisId\":\"A\"}"

# Hypothesis A: Check if _site was created
if [ -d "_site" ]; then
  SITE_FILES=$(find _site -type f | wc -l)
  log_entry "test-build.sh:30" "Site directory exists" "{\"fileCount\":$SITE_FILES,\"hypothesisId\":\"A\"}"
  
  # Check index.html for proper baseurl usage
  if [ -f "_site/index.html" ]; then
    CSS_REFS=$(grep -o 'href="[^"]*\.css' _site/index.html | head -5)
    JS_REFS=$(grep -o 'src="[^"]*\.js' _site/index.html | head -5)
    IMG_REFS=$(grep -o 'src="[^"]*\.\(jpg\|png\|gif\)' _site/index.html | head -5)
    
    log_entry "test-build.sh:39" "Asset references in index.html" "{\"css\":\"$CSS_REFS\",\"js\":\"$JS_REFS\",\"img\":\"$IMG_REFS\",\"hypothesisId\":\"A,D\"}"
  else
    log_entry "test-build.sh:42" "index.html not found" '{"hypothesisId":"A,E"}'
  fi
else
  log_entry "test-build.sh:45" "Site directory missing" '{"hypothesisId":"A,E"}'
fi

# Hypothesis D: Check navigation links
if [ -f "_site/index.html" ]; then
  NAV_LINKS=$(grep -o 'href="/[^"]*"' _site/index.html | head -10)
  log_entry "test-build.sh:52" "Navigation links in index.html" "{\"links\":\"$NAV_LINKS\",\"hypothesisId\":\"D\"}"
fi

echo "Test build complete. Check logs at: $LOG_FILE"
