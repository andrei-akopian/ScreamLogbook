# Libpng

[Download source](https://libpng.org/pub/png/libpng.html)

Warning, the `configure` and other files have carriage retrun `\r` characters. You need to remove them, because sh hates them.

To remove carriage returns

`sed -i.bak 's/\r$//g' <filename>`

`sed -i.bak 's/\r$//g' configure`

```
./configure
make check
make install
```
