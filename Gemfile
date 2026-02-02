source "https://rubygems.org"

# Pin Ruby so Netlify uses 2.7.x (Jekyll 3.9 / Liquid 4.x need String#tainted?, removed in Ruby 4.x).
ruby "2.7.8"

# CSV and bigdecimal were removed from Ruby stdlib in Ruby 4.x; keep for future Ruby upgrades.
gem "csv"
gem "bigdecimal"

# Use the GitHub Pages gem set so the site builds on Pages.
# This pins Jekyll and plugin versions to what GitHub Pages supports.
gem "github-pages", group: :jekyll_plugins

# Required for Ruby 4.0+ where csv is no longer in stdlib by default
gem "csv"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data
# gem and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
