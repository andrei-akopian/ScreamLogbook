## Merge two similar folders

`rsync -avun source/ destination/` (note the ending slashes, those are important)

- `-a` archive mode
  - `-a = -rlptgoD`  (recursive + preserve everything)
  - `-r` recursive, `-l` symlinks, `-p` preserve permissions, `-t` preserve modification times, `-g` preserve ownership, `-o` preserve ownder, `-D` Preserve device files and special files
- `-v` verbose, `-vv` very verbose, `-vvv` very very verbose
- `-n` dry run
- `-u` update (skip files that are newer at destination)
