# Dragon

https://github.com/mwh/dragon

How to run the dragon cli tool for drag and dropping files.

Dependencies: GTK+ 3, X11 or Wayland

You are required to build it yourself, no binaries are available. Also development seems to have halted with v1.2.0 in 2022. These instructions are for MacOS.

The [official README](https://github.com/mwh/dragon) has great installation instructions.

To start, `cd` into some folder you don't mind having a bit of junk files in. eg. `cd ~/Downloads`

1. `git clone https://github.com/mwh/dragon.git`

2. `cd dragon` to enter the folder with the sourcecode

3. `make` will use the `Makefile` file to compile dragon binary.
    1. Dealing with dependecy issues. Dragon requries GTK+ 3. For MacOS `brew install gtk+3`
    2. You might need to install X or X11 window manager. Just google how to install it.
4. `make install` to but the dragon binary into the bin folder.
5. `dragon` will run dragon and print `Usage: dragon [OPTIONS] FILENAME`
6. `dragon example` will create a window with a drag-and-droppable folder from the `example` folder in the source code directory. (`ls`)
