# Efficient Compression Tool

Repo: [Efficient Compression Tool](https://github.com/fhanau/Efficient-Compression-Tool)

Created Sat Sep 13 15:38:28 EDT 2025, as of right now last ect update was in 2023.

ect cmake configs are outdated. Use`cmake ../src -DCMAKE_POLICY_VERSION_MINIMUM=3.5`.

then `make` and `make install` as per README instructions.

If you get issue about `fp.h` in `pngpriv.h`. Replace the `include <fp.h>` with `include <math.h>` (inside `/src/libpng/pngpriv.h`)

Build steps are pretty self explanatory with cmake and Xcode.
- install cmake with brew
- Xcode on mac is a known pain, Google everything
