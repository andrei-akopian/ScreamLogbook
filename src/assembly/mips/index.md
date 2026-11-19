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

Use `jal <label>` to jump to function and `jr $ra` to return.

## Writing to Preallocated space

`la` to link address of memory location

`li` to load integers into variables

`sb <value> <arrayaddr>(<index>)`

`lbu <value> <arrayaddr>(<index>)`

```asm
.data
array: .space 100   # Reserve 100 bytes
.text
main:
    la $t0, array    # Load address of array
    li $t1, 5        # Index
    li $t2, 42       # Value to write

    add $t3, $t0, $t1  # Address of array[5]
    sb $t2, 0($t3)     # array[5] = 42
```
