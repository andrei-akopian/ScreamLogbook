# HTML Boilerplate

Sources:
- [HTMLBoilerplates.com](https://htmlboilerplates.com/)

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Template Title</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Description Goes Here" />
        <link rel="stylesheet" type="text/css" href="style.css" />
        <link rel="icon" type="image/svg" href="/images/favicon.svg">
        <!--<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>">-->
    </head>
    <body>
        <h1>Template</h1>
        <script src="index.js"></script>
    </body>
</html>
```

[Fullscreen](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)
```js
// On pressing ENTER call toggleFullScreen method
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    toggleFullScreen(element);
  }
});
function toggleFullScreen(element) {
  if (!document.fullscreenElement) {
    // If the document is not in full screen mode
    // make the video full screen
    element.requestFullscreen();
  } else {
    // Otherwise exit the full screen
    document.exitFullscreen?.();
  }
}
```

## CSS Tricks

```css
a[href*="wikipedia.org"]::before {
    content: "W";
    display: inline-block;
    margin-right: 0.25em;
    font-family: serif;
    font-weight: bold;
    font-size: 0.9em;
}
```

or 

```css
a[href*="wikipedia.org"]::before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-right: 0.25em;
    vertical-align: -0.15em;
    background: url("wikipedia.svg") center / contain no-repeat;
}
```

## Related
- [Canvas API](./javascript/canvas.md)
