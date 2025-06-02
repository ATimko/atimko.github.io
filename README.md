
# Portfoilio Project

Created using [Bootstrap 5](https://getbootstrap.com/) using a template for [Github Pages](https://pages.github.com/) and [Jekyll](https://jekyllrb.com/).

* A full Bootstrap 5 theme usable both on Github Pages and with a standalone Jekyll.
* Recompiles Bootstrap from SCSS files, which allows to customize Bootstrap's variables and use Bootstrap themes.
* Full support of Bootstrap's JavaScript plugins.
* Supports all features of Github Pages and Jekyll.

[This template that helped give me a baseline for this project](https://nicolas-van.github.io/bootstrap-4-github-pages/).

# Things to replicate this project locally

* I suggest following the template guide on `Run Jekyll on your computer to speed up testing` section

* Install Ruby (You'll get a installer and you install MSYS2, MSYS2 system update and MSYS2 and MINGW development toolchain)
* Then open command prompt in Windows or type cmd, then you type `gem install jekyll` to get RubyGems packages with jekyll

## Now you're ready to run this project!

* Open up Visual Studios Code and do `bundle install` (This is to bundle and find the Gemfile)
* Then type `bundle exec jekyll serve`

* There are some issues sometimes with jekyll website, when that happens make sure to reset Visual Studios Code and run those commands again

* If there's still issues you can run the command `gem update --system` if RubyGems had updated

* Another problem can be from not having the gem file not being located doing `sudo gem install jekyll` and `sudo gem install jekyll bundler` helps as well