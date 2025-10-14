# Markdown To Presentation

```
pandoc -t FORMAT --standalone habits.txt -o habits.html

where FORMAT is either s5, slidy, slideous, dzslides, or revealjs.
```

https://pandoc.org/MANUAL.html#slide-shows

Pandoc can convert markdown into `revealjs` and other formats.

Pandoc markup:
```md
% Title
% Firstname Lastname
% Month Day, Year

# Slide 1

## Subslide 1

slide 2

## Subslide 1
- bullets
- bullet

------------------

# Slide 2
![Lorem Picsum](https://picsum.photos)

```

List of presentation tips:
- easy (and fast) to setup and reset
- avoid overusing words
- people can look either you or the slides at a time
- big font
- QR codes
- top talking speed is 3 words per second
- top comprehension is 1 fact / second
