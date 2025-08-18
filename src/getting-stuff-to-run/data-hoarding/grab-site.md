**Currently still can't get it to work.**

# grab-site website archiver

[Github repo](https://github.com/ArchiveTeam/grab-site?tab=readme-ov-file#install-on-macos) by Archive Team

### Installation on Apple Silicon

(on August 2025 for MacOS 15.6 with Python 3.13.0 and grab-site 2.2.7)
`brew update` update homebrew
`brew install libxslt re2 pkg-config` install libraries via homebrew
- libxslt is for XML parsing
- re2 is a regex library
- pkg-config is for compiling libraries (not sure)
`python3 -m venv ~/gs-venv` create python virtual environment, and puts its config at `~/gs-venv`
`PKG_CONFIG_PATH="/usr/local/opt/libxml2/lib/pkgconfig"` make sure pkg-config works before the next step
`~/gs-venv/bin/pip3 install lxml` install lxml library into virtual environment
`~/gs-venv/bin/pip3 install git+https://github.com/ArchiveTeam/grab-site` install **grab-site** from github into the virtual environment.
If it fails to compile due to cchardet being deprecated.

Add `PATH="$PATH:$HOME/gs-venv/bin"` to `~/.zshrc` (or equivalent). Then restart terminal or `source .zshrc`.

## Usage

`gs-server` and see menu at http://127.0.0.1:29000/ (localhost)

`grab-site 'URL'`
