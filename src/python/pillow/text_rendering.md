[relevant docs](https://pillow.readthedocs.io/en/stable/reference/ImageFont.html)

```py
from PIL import ImageFont, ImageDraw, Image

with Image.open("hopper.jpg") as image:
    draw = ImageDraw.Draw(image)
    
    # use a bitmap font
    font = ImageFont.load("arial.pil")
    
    draw.text((10, 10), "hello", font=font)
    
    # use a truetype font
    font = ImageFont.truetype("arial.ttf", 15)
    
    draw.text((10, 25), "world", font=font)
```
