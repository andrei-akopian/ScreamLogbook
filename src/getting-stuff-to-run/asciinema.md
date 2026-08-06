# ASCII Cinema

[Official Docs](https://docs.asciinema.org/getting-started/#__tabbed_1_4)

## Start

`asciinema rec demo.cast` 

Concerning storage: if you have a fancy oh my zsh theme with a ticking time display, that will fill up some memory (though slowly).

### Recording Shell with custom theme

`bash --noprofile --norc`

So for `asciinema rec -c <command> <output.cast>` you can run

`asciinema rec --command "bash --noprofile --norc" demo.cast`

or shorter

`asciinema rec --c "bash --noprofile --norc" demo.cast`

## End

`ctrl+d` or `exit` (similar to tmux, etc.)

## Play

`asciinema rec demo.cast`

## Conversion

For gifs: [asciinema gif generator - `agg`](https://docs.asciinema.org/manual/agg/) with `agg demo.cast first.gif`
