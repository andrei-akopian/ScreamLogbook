# Scalable Vector Graphics

## Tips for Writing SVGs by Hand

Editors:
- [SvgViewer](https://www.svgviewer.dev/)

When entering points for paths and shapes, use `stroke="red" fill="blue" opacity="0.5"` then switch to intended colors.

## Reference

```xml
<path
  d="M 10,30
          A 20,20 0,0,1 50,30
          A 20,20 0,0,1 90,30
          Q 90,60 50,90
          Q 10,60 10,30 z" />
```

- `M` to move to point. `m` to shift to point
- `L` and `l` to draw line
- `H` and `h` and `V` and `v` same as L but horizontal and vertical
- `C\c` and `S\s` are bezier
- `Q\q` and `T\t` is quadratic bezier
- `A\a` is ellipitcal arc. idk how it works
