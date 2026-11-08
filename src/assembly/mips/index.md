# MIPS Assembly

Resources: [MIPS Book](https://www.robertwinkler.com/projects/mips_book/mips_book.html)

Reference: [MIPS Reference Data](https://raw.githubusercontent.com/rswinkle/mips_book/master/references/MIPS_Green_Sheet.pdf)

## Chores

```
  li   $v0, 10     # exit syscall
  syscall
```

## Registers

Most of this stuff is more convention than hard rules.

| Range | Purpose |
| - | - |
| `$v0-$v1` | to store syscall code |
| `$a0-$a3` | syscall arguments |
| `$t0-$t7` | temp |

## Stack

`sw/lw`

## Functions

Arguments into `$f12-f14`, output in `$f0-$f2` by convention.
