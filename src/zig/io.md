# Zig File IO

```zig
const std = @import("std");
pub fn main() !void {
    const cwd = std.fs.cwd();
    const file = try cwd.createFile("example.txt", .{});
    defer file.close();
    const content = "Hello, Zig File I/O!\n";
    try file.writeAll(content);
    std.debug.print("File written successfully.\n", .{});
}
```
