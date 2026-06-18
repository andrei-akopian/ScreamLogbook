# Ruby

*written June 2025 on MacOS 15.5*

~~brew install ruby~~

MacOS has version 2.6 ruby preinstalled (which is outdated, current>3.0). There is nothing you can do about this.

The brew installation won't work, because the 2.6 binary takes priority over the 3.0, so nothing will work out of the box.

[Stackoverflow thread on this issue](https://stackoverflow.com/questions/39381360/how-do-i-install-ruby-gems-on-mac)

Check paths with `type -a ruby` or `which -a ruby`

Check versions with `ruby --version`, `gem --version`

Which is why you need Ruby Environment Manager:

## Ruby Environment Manager


### rbenv

`brew install rbenv ruby-build`

`rbenv install -l`

`rbenv install <version>`

just follow [Stackoverflow thread on this issue](https://stackoverflow.com/questions/39381360/how-do-i-install-ruby-gems-on-mac), it's to confusing and complicated to explain what is acutally going on.

## RubyGems

[RubyGems.org Website](https://rubygems.org/)

The `gem` package manager comes preinstalled with ruby.

`gem update --system` to update gem

```
ERROR:  While executing gem ... (Gem::FilePermissionError)
    You don't have write permissions for the /Library/Ruby/Gems/2.6.0 directory.
```

MacOS is defaulting to outdated 2.6 ruby. See above.
