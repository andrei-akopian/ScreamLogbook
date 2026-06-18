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

---

Apparently I wrote notes twice. TODO merge.

[Official Website](https://pptr.dev/)

Alternatives:
- [PhantomJS headless browser](https://phantomjs.org/)
- [SlimerJS for Firefox](https://slimerjs.org/)

Library for browser manipulation. Supports both Firefox and Chrome.


```js
import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://developer.chrome.com/');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  // Type into search box
  await page.type('.devsite-search-field', 'automate beyond recorder');

  // Wait and click on first result
  const searchResultSelector = '.devsite-result-item-link';
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  // Locate the full title with a unique string
  const textSelector = await page.waitForSelector(
    'text/Customize and automate',
  );
  const fullTitle = await textSelector?.evaluate(el => el.textContent);

  // Print the full title
  console.log('The title of this blog post is "%s".', fullTitle);

  await browser.close();
})();
```

```js
const browser = await puppeteer.launch({
  browser: 'firefox',
});
```
