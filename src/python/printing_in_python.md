# Printing in Python
list of tricks for advanced output to the terminal

Created July 28th 2025 for Python 3.13.0

## Default Print

### Color

## Libraries

### Pretty Print

```py
import pprint as pp
```

### Pretty Print Plus Plus

Just better Pretty Print, though less supported.

[Github](https://github.com/wolever/pprintpp) (400 stars, last update in 2020)

### IceCream

Print for Debugging, automatically prints the variable being printed.

```py
from icecream import ic
ic() # will print it's own filename and line number
ic(max(3.141,6.283)) # ic| max(3.141,6.283): 6.283
```

[Github](https://github.com/gruns/icecream)

### Rich

Powerful library for working with text in the terminal.

[Docs](https://rich.readthedocs.io/en/stable/introduction.html)

```py
from rich.pretty import pprint
pprint(locals())
```

`pip install rich`

### SetPrint
