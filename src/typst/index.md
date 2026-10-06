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
  head: "header text"
  footer: context [
  draft of whatever
  #h(1fr)
  #counter(page).display(
    "1/1",
    both: true,
  )
])
```
