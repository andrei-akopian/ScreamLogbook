# Scrapping With JavaScript

[DOM Parser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser) creates a `document` from plaintext html.

[Grabbing the entire HTML document with JS - Stackoverflow](https://stackoverflow.com/questions/817218/how-to-get-the-entire-document-html-as-a-string)
- `'<!DOCTYPE HTML>' + '\n' + document.documentElement.outerHTML`
- `new XMLSerializer().serializeToString(document)`

`new URL("https://example.org/")`

## Querries

```js
document.querySelectorAll("h1, h2, h3, h4, h5, h6");
```

## Abstract Objects

Getting position on page
[Stackoverflow](https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element)
[MDN Docs getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
```js
// relative to viewport
var rect = element.getBoundingClientRect(); // read only
console.log(rect.top, rect.right, rect.bottom, rect.left);
// adjust for scroll
rect.left+window.scrollX;
rect.top+window.scrollY
// for reference
window.screen.width;
window.screen.height
```
