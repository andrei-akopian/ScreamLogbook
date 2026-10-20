
png to icon
```
magick convert -resize x16 -gravity center -crop 16x16+0+0 input.png -flatten -colors 256 -background transparent output/favicon.ico
```

```
convert <your-image-here> -define icon:auto-resize=256,64,48,32,16 favicon.ico
```
