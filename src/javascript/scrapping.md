# Scrapping With JavaScript

[DOM Parser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser) creates a `document` from plaintext html.

[Grabbing the entire HTML document with JS - Stackoverflow](https://stackoverflow.com/questions/817218/how-to-get-the-entire-document-html-as-a-string)
- `'<!DOCTYPE HTML>' + '\n' + document.documentElement.outerHTML`
- `new XMLSerializer().serializeToString(document)`

`new URL("https://example.org/")`
