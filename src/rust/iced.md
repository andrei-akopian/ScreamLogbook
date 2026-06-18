# Rust Iced Library
 Rust Iced GUI Library

 [Official Github Repo](https://github.com/iced-rs/iced)
 - [Reference](https://docs.rs/iced/latest/iced/)
 - [Examples](https://github.com/iced-rs/iced/tree/master/examples)
 - [Projects that use Iced](https://github.com/iced-rs/awesome-iced)

Guides:
- [by jl710](https://jl710.github.io/iced-guide/index.html)
- [tutorial by fogarecious](https://github.com/fogarecious/iced_tutorial/blob/main/tutorial/first_app.md)

## Basic Widgets

```rust
button("Button").on_press(Message::ButtonPressed)
```

## Layout
The layout is a bunch of nested lists, they way you expect:

```rust
container() // takes one element
column![]
row![]
```
