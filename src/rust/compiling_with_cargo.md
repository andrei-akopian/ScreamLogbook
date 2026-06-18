## Crazy Target File sizes
Cargo `target` directories are 1GB+ in size for basic projects

To decrease size:
- [Disable features of libraries](https://doc.rust-lang.org/cargo/reference/features.html#the-default-feature)
- [Disable debug](https://users.rust-lang.org/t/is-there-a-way-to-make-the-size-of-whole-project-files-smaller/100758/3)
