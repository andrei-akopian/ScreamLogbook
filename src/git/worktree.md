# Git Worktree

`git worktree add <path> [<branch>]`

warning, worktrees are not added to gitignore automatically, make sure to add them. `echo ".worktree" >> .gitignore`

```
.git
.gitignore
.worktrees
L tree1
```

so usually
```sh
mkdir .worktree
echo ".worktree" >> .gitignore
git worktree add .worktree/tree2 main
```
