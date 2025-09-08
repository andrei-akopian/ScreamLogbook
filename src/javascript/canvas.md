# Canvas API


```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(0, 0, canvas.widht, canvas.height);
```

### ImageData
[MDN Docs on ImageData](https://developer.mozilla.org/en-US/docs/Web/API/ImageData)

```js
let data = ctx.getImageData(x,y,w,h);
data = data.forEach((element,index,array)=>((index)%4==0? 255 : element));
ctx.putImageData(data,x,y);
```

Creating ImageData
```js
let len = width * height * 4;
let data = new Uint8ClampedArray(len);
for (let i = 0; i < len; i+=4) {
  let color = Math.random() < (0.5) ? 255 : 0;
  data[i+0] = color;
  data[i+1] = color;
  data[i+2] = color;
}
return new ImageData(data,width,height);
```
