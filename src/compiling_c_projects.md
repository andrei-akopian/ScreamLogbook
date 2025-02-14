# Compiling C Projects

1. Read the damn docs and compilation instructions if available.

### Classic

*Classic* way of compiling almost any project written in C.

```bash
./configure && make && make install
```

Breakdown:

`./configure` executes `configure` file to check dependencies

! Note that `configure` often doesn't exist initially, and a `autogen.sh` (or similar) must be run (`bash autogen.sh`) to generate `configure` and other setup stup steps.

`make`

`make install`

### Docs

Instructions for compiling/building/running are usually in `README.md`, `INSTALLING.md`,  or a similar file. `cat` to read them.

The docs for small projects are usually outdated, files might have been moved around within the source code.

Use `tree` command to see what files there are.

Search for mentioned files in the source code via [fuzzy finder](https://github.com/junegunn/fzf) `fzf` or `find . -name "autogen*"` (`find command options starting/path Regex`)

### C Libraries

`pkg-config --list-all` to see all libraries you have installed.

If you need to install a library, you can compile it yourself using pretty much the same steps here.
