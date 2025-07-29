# working with File System in Python

Main libraries:
- `import os` ([os docs](https://docs.python.org/3/library/os.html))
- `import pathlib` ([pathlib docs](https://docs.python.org/3/library/pathlib.html))

Setup
- For pathlib operations of file system, `Path("the/path/string.txt")`
- For pathlib operations of file path use `PurePath("the/path/string.txt")`

## R/W on known paths



## Check if stuff even exists

- `os.path.exists(file_path_os)` (check if path exists)
- `os.path.isfile(file_path_os)` check if thing is a file (not dir)
- `Path.exists()`
  - `Path.mkdir(parents=True)`

## Parsing

- `os.path.split()`
- `path = pathlib.PurePath("path/goes/here.txt")` [Pathlib](https://docs.python.org/3/library/pathlib.html#methods-and-properties) accessing individual components
  - `PurePath.anchor` (root baisically)
  - `PurePath.name` -> `filename.txt`
  - `PurePath.suffix` -> `.txt`
  - `PurePath.stem` -> `filename` without suffix
