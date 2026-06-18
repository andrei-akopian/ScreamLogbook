# OPTical ARchiver (optar)

If you are building optar yourself, [**download from github**](https://github.com/colindean/optar) (`git clone https://github.com/colindean/optar`)

[Outdated Website](http://ronja.twibright.com/optar/)

## Dependencies
- [Libpng](https://libpng.org/pub/png/libpng.html) (see [compiling libpng](./random_libraries/libpng.md))
- ImageMagick

## Compiling

`make` will compile everything

`make install` (`sudo make install` if necessary) will install `optar`, `uoptar`, and `pgm2ps` into bin. (`/usr/local/bin`) you can check that with `which [command]`.

### pgm2ps

`pgm2ps` is actually a shell script. You can open it in a plaintext editor and edit it.

Run `which pgm2ps`, and edit it using any editor. (eg. `vi $(which pgm2ps)`)
- solve outdated imagemagic warning (see below)
- change from A4 to US Letter formats (see below)

## Writing (Encoding)

`optar <input file> [filename base]` (filename base is basically output file name without an extension)

This will roduce a `filename-base.pgm` file. [PGM](https://netpbm.sourceforge.net/doc/pgm.html) is a "grayscale image format".

### Converting pgm2ps Stage

`pgm2ps <file.pgm>` or `pgm2ps *.pgm` to convert ALL `.pgm` files in the directory into printable PostScript (`.ps`).

If there is a warning about `magick` and `covert`. Run `which pgm2ps`, (pgm2ps is just a shell script) and `vi <path>`. Then replace `covert` command with `magick`.

### A4 and US Letter changes

If you want to change to A4 (default) or US Letter, you have to edit `which pgm2ps` file. Substitute the following equations as described in comments within pgm2ps:
- US Letter: 573.84x755.28+19.08+18.36
- A4: 556.56x807.12+19.22+17.44

PostScript (`.ps`) is the file format printers use for printing. Gimp can open `.ps` and `.pgm` file formats, for checking if they are ok.

## Reading (Decoding)

Just [check the docs](https://github.com/colindean/optar?tab=readme-ov-file#decoding-reading)

You will need an industrial grade scanner for this.

`unoptar <format-specs> filename-base > outputfile`
