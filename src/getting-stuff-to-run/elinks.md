# Elinks

https://github.com/rkd77/elinks download latest release from releases (as of writing v0.18.0)

`./configure && make && make install`

you might notice `./configure` doesn't work

Run `./autogen.sh` and it `configure` will appear.

`.configure` should produce a list of features that will and won't work based on prerequisite libraries. (Even if some are missing, that should be ok.)

`make` should compile and list bunch of linking (LD and CC) for the above libraries.

`make install` should put the final binary into your `bin` folder.

`elinks` should work now

### Installing Libraries

- ["tre" Regex Library](./random_libraries/tre.md)
