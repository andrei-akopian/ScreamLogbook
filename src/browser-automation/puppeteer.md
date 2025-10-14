# Puppeteer

[Puppeteer Website](https://pptr.dev/)

## Doing part of the work Manually

[How to use Puppeteer in conjunction with manual, human activity? on r/node](https://www.reddit.com/r/node/comments/d0uggx/how_to_use_puppeteer_in_conjunction_with_manual/)

```
/* automated stuff */

// do your manual work here
await page.waitForElement('.trigger-element',{ timeout: 100_000 })) // a selector that only appears after your manual work is done

/* continue automated stuff */
```

You can trigger continuation with.

```
let element = document.createElement("div");
element.className = "trigger-element";
element.style.display = "none";
document.body.appendChild(element);
```

```
((s)=>{
let element = document.createElement("div");
element.className = s;
element.style.display = "none";
document.body.appendChild(element);
})("trigger-element"); // change name here
```
