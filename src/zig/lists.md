# Lists and Arrays

[Zig Guide](https://zig.guide/language-basics/arrays)

```zig
const a = [5]u8{ 'h', 'e', 'l', 'l', 'o' };
const b = [_]u8{ 'w', 'o', 'r', 'l', 'd' };
std.debug.print("{any}", .{a});
```
