# LittleJS

[LittleJS Github Repository](https://github.com/KilledByAPixel/LittleJS)

```bash
curl https://raw.githubusercontent.com/KilledByAPixel/LittleJS/refs/heads/main/dist/littlejs.js > littlejs.js
```

```html
<!DOCTYPE html><head>
<title>LittleJS Hello World Demo</title>
<meta charset=utf-8>
</head><body>

<script src=littlejs.js></script>
<script src=game.js></script>
```

```bash
curl https://raw.githubusercontent.com/KilledByAPixel/LittleJS/refs/heads/main/examples/empty/game.js > game.js
```

# js13k build and build.js

Download the `build.js` script from the LittleJS repo, and `chmod +x build.js` to give it execution permissions. (Or just run it with `node`)

`build.js` won't work out of the box, go in and edit the variables at the top.

Issues:
- Some `npx <tool>` fails to run. Look it up on [npmjs.com](https://www.npmjs.com/) and install globally via `npm`. eg. I had issues with [Uglify JS](https://www.npmjs.com/package/uglify-js).
- If the `game.zip` is not appearing, chech if `ect` ([efficient compression tool](https://github.com/fhanau/Efficient-Compression-Tool)) is installed (`which ect`). [see my notes on compiling `ect`](./random_libraries/ect.md)
