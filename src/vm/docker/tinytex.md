# Setup TinyTex in Docker

Alpine won't work. It uses musl standard library, and its architecture + musl might not be supported. You have to use something glibc based, like Ubuntu.

Pull and startup ubuntu image.

`sudo apt install perl`

`sudo apt install xz-utils`

`curl -sL "https://tinytex.yihui.org/install-bin-unix.sh" | sh`

It should install now.

`ls -a` and `ls bin` should show that a `bin` folder has appeared with lots of useful stuff. It might not be in `$PATH` though, but the executeables temselves `./bin/pdflatex test.tex` should work.
