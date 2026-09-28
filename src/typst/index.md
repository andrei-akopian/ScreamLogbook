# Typst

## Basic formatting

```typst
#show link: underline
#set text(
  font: "New Computer Modern"
)
#line(width: 60%)

#link("<url>")[<title>]

// footer
#set page(footer: context [
  draft of whatever
  #h(1fr)
  #counter(page).display(
    "1/1",
    both: true,
  )
])
```
