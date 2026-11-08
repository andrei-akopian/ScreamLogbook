# Typst

## Basic formatting

```typst
#show link: underline
#set text(
  font: "New Computer Modern"
)
#line(length: 60%)

#link("<url>")[<title>]

// footer
#set page(
  header: "header text"
  footer: context [
  draft of whatever
  #h(1fr)
  #counter(page).display(
    "1/1",
    both: true,
  )
])
```

## Templates

### Creating Templates

```typst
#let project(
  title: "",
  authors: (),
  abstract: none,
  body
) = {
  // 1. Document metadata
  set document(title: title, author: authors.map(a => a.name))

  // 2. Page layout and geometry
  set page(
    paper: "us-letter",
    margin: (x: 2cm, y: 2.5cm),
    header: locate(loc => {
      // Header configuration
    }),
    numbering: "1",
  )

  // 3. Typography rules
  set text(font: "Libertinus Serif", size: 11pt, lang: "en")
  set par(justify: true, leading: 0.65em)
  show heading: set text(weight: "bold", font: "Liberation Sans")

  // 4. Front matter / Title rendering
  v(1cm)
  align(center)[
    #text(2em, weight: 700, title)
    #v(1em)
    #grid(
      columns: (1fr,) * calc.min(3, authors.len()),
      gutter: 1em,
      ..authors.map(author => align(center)[
        *#author.name* \
        #author.affiliation \
        #link("mailto:" + author.email)
      ])
    )
  ]
  v(2cm)

  if abstract != none [
    #align(center)[*Abstract*]
    #block(inset: (x: 2cm), abstract)
    #v(1.5cm)
  ]

  // 5. Inject the main content
  body
}
```

### Using Templates

```typst
#import "template.typ": project

#show: project.with(
  title: "Document Title",
  authors: (
    (name: "Jane Doe", affiliation: "University A", email: "jane@example.com"),
  ),
  abstract: [A short summary of the document goes here.],
)

= Introduction
This is the document content. The `show: project.with(...)` rule wraps the entire file's content into the `body` parameter of the `project` function.
```
