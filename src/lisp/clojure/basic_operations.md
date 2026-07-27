## Running

### Install
Installation using [brew](https://brew.sh/) in MacOS ([see official guide](clojure.org/guides/install_clojure)):

```
brew trust clojure/tools
brew install clojure/tools/clojure
brew upgrade clojure/tools/clojure
```

### Run `.clj` scripts

`clojure -M script.clj`

Note that `clj` by itself opens repl.

## Vectors

membership checks:
```
(some #{3} (vector 1 2 3)) ;
```

## File I/O

[official docs](https://clojure-doc.org/articles/cookbooks/files_and_directories/)
