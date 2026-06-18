# Profiling .zshrc

If your terminal takes a long time to show the first prompt, it is because sourcing your `.zshrc` is slow.

`.zshrc` is a shell script that runs every time you open a new terminal. It is a hidden file in the home folder: `~/.zshrc` It is used by package managers and other shell tools to configure themselves before hand. Consequently, you will see a lot of `conda`, `nvm`, etc. in there.

Run `source` is the equivalent of import. So `source ~/.zshrc` will re-load your shell.

Trivia: The "rc" stands for "RUNCOM" according to wikipedia [Wikipedia](https://en.wikipedia.org/wiki/Unix_shell#Early_shells). Other shells like bash also have `.bashrc` files.

---

## How to Profile

Time stamped echos:
```sh
echo "Start $(date +%s%N)ns" # nanoseconds, 9 places after the second
# ... suspects go here ...
echo "end   $(date +%s%N)ns"
```

`time [utility]` is usefull for timing the execution time of a single function.
`time sh test.sh` with a suspect line in test.sh will print the execution time.

To print a nice table with breakdown of time consuming functions use (scroll to the top of the output):
```zsh
zmodload zsh/zprof
# zshrc here
zprof
```
Warning: zprof is wierd and actually adds up the number of calls if you run `source ~/.zshrc` again in the same terminal session.

Comment out the thing that is taking up time, and see how fast the startup is. Then decide whether to remove it or speed it up or keep it.
```
# source $ZSH/oh-my-zsh.sh # 90% of my time
```

## What to look for

`source` means a whole additional script is being run, which could have plenty of time consuming stuff hidden inside. Btw. `.` is an alias for `source` so if you see a `. "script.sh"`, make sure to go after it.

Package managers. Whereever there is a package manager, there will be `source` and other time consuming stuff.
- Install lazy loading plugin from [here.](https://github.com/qoomon/zsh-lazyload) It uses lazy loading (loads only once needed.)
- `conda` initialization is infamously slow. [See this reddit comment for a lazy loader](https://www.reddit.com/r/zsh/comments/qmd25q/lazy_loading_conda/)
- `nvm` is a common suspect. Google how to lazy load it as well.

Terminal customizers, such as `oh-my-zsh`. They are the main consumers of loading time, and and supposed to be. Look into tweaking them or using a different one if they are to slow. Google possible solutions [here is one for oh-my-zsh](https://www.joshyin.cc/blog/speeding-up-zsh).

### From the Profiler output

Look at the top 10 lines of the zprof output.

`compdump` and `compinit` and `compaudit` are shell completions (when you press tab and it show you available commands). They are the the heaviest suspect. They run only once, and remove them if possible. I have found them being run multiple times on multiple occasions.
- Open the `.zshrc` file in a text editor and `Ctrl+F` for `compinit` and just the word `completions`. Even if `compinit` is not in the file, package managers often attach comments.
- Not all completions are guilty. For example `[ -s "/Users/me/.bun/_bun" ] && source "/Users/me/.bun/_bun"` (bun's completion) doesn't call compinit and is very fast when measured with `time` or `echo "$(date +%s%N)"`


### What Not to Look For

`export` is fast. Unlike `source`, `export` doesn't execute anything.

Powerlevel10k is famously fast.

## More Resources

- https://www.mikekasberg.com/blog/2025/05/29/optimizing-zsh-init-with-zprof.html
- https://github.com/romkatv/zsh-bench?tab=readme-ov-file#summary
- https://www.dribin.org/dave/blog/archives/2024/01/01/zsh-performance/
- https://kasad.com/blog/zsh-profiling/
- https://alextheobold.com/posts/profiling_zsh/
