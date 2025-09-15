# Extension Setup

Tooling
- Editor with standard JS highlighting
- [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) cli tool for making Web Extensions (official by mozilla)
   - `brew install web-ext`
- `about:debugging#/runtime/this-firefox` for debugging background.js

### Resources
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
  - [manifest.json docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
- [Mozilla Extension Workshop](https://extensionworkshop.com/)
  - [Github](https://github.com/mozilla/extension-workshop)
- [Firefox-addon Stackoverflow](https://stackoverflow.com/questions/tagged/firefox-addon)
- [Firefox Source Docs](https://firefox-source-docs.mozilla.org/index.html)
- [Awesome Webext Dev](https://github.com/davestewart/awesome-webext-dev)

## Web-ext Running

`web-ext run` opens a test browser. Press R to reloat the test browser.

## Anatomy
```
extension
L icons
  L icon.png
L manifest.json
L background.js // runs on the browser level
L content.js // runs inside the tab, is injected into website's html
L popup
  L index.html // <script src="popup.js"></script>
  L popup.js
```

## Common APIs

### Communication Between Scripts

Communication with content script requires Query. Background to Popup can do normal Messages. (Because there is one background and popup, but content.js in each tab).

<details>
<summary>Relay Code</summary>

```js
// background.js
browser.runtime.onMessage.addListener((message, sender) => {
  if (message.to === "popup") {
    // Send to popup
    browser.runtime.sendMessage({ from: "content", data: message.data });
  }

  if (message.to === "content") {
    // Forward to active tab’s content script
    return browser.tabs.query({ active: true, currentWindow: true })
      .then(tabs => {
        if (tabs[0]) {
          browser.tabs.sendMessage(tabs[0].id, { from: "popup", data: message.data });
        }
      });
  }
});
```

```js
// content.js
browser.runtime.sendMessage({ to: "popup", data: "Hello from content script!" }); // the to: "popup" is read by background for forwarding

browser.runtime.onMessage.addListener((message) => {
  if (message.from === "popup") {
    console.log("Content got:", message.data);
  }
});

```

```js
// popup.js
document.getElementById("send").addEventListener("click", () => {
  browser.runtime.sendMessage({ to: "content", data: "Hello from popup!" });
});

// Listen for content messages
browser.runtime.onMessage.addListener((message) => {
  if (message.from === "content") {
    console.log("Popup got:", message.data);
    document.getElementById("log").textContent = "Popup got: " + message.data;
  }
});

```
</details>

<details>
<summary>Query Code</summary>

```js
// popup.js
async function askContent() {
  let [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  let response = await browser.tabs.sendMessage(tab.id, { type: "GET_INFO" });
  console.log("Got from content:", response);
}

askContent();
```
```js
// content.js
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "GET_INFO") {
    sendResponse("Here is the info from content script");
  }
});
```
</details>

### Downloading

[downloads.download() MDN docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/downloads/download). Also supports saving to within a folder
```js
let downloading = browser.downloads.download({
  url: downloadUrl,
  // or body: "text goes here",
  filename: "Subfolder/file.txt",
  conflictAction: "uniquify",
});
// downloading can then be used for error handling, see docs
```
