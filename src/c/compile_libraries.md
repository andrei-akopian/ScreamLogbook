
## Create static library

write `foo.c` and `foo.h`
```c
// foo.h
#ifndef FOO_H
#define FOO_H
int add(int a, int b); // just the headers
int multiply(int a, int b);
#endif
```

`gcc -c foo.c -o foo.o`

`-c` means compile an object.

`ar rcs libfoo.a foo.o`
- `r` (replace)
- `c` (create archive if it doesn't exist)
- `s` (index to speed things up)

## use static library
`gcc myscript.c -L. -lfoo -o myscript.a`

the `-lfoo` automatically looks for `libfoo` with prefix.
