# Pixi.js

1. Pixi.js is not a "game engine" but a "reendering engine" consequently it doesn't have basic features like collision detection.

[Github](https://github.com/pixijs/pixijs)

Mouse Events:
```js
app.stage.eventMode = "static";
app.stage.hitArea = app.screen;
app.stage.on('pointermove', event => {
    console.log(event.global.x, event.global.y)
});
```

Ticker
```js
app.ticker.add((delta) => {
  let fraction_of_second = delta.deltaTime;
});
```
