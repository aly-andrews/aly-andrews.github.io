# Monthly maintenance routine

1. `bundle update github-pages`
2. `bundle install`
3. `bundle lock --add-platform x86_64-linux`
4. `git add Gemfile.lock`
5. `git commit -m "Monthly gem update + platform fix"`
6. `git push`
