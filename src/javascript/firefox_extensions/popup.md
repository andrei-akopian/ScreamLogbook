# Popup

For devtools, open `about:debugging#/runtime/this-firefox` > Inspect

[Popup MDN docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)

## Page Action
[Page action](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) (and [Address bar button](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)) are *tab specific*. ~~The code for them is written in `popup.js` (browser-action script).~~ idk yet where it goes.

The main methods are
- [setPopup](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/setPopup) to specific html file to use
- [onClicked](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked)
- `browser.pageAction.show(tabId)` and `browser.pageAction.hide(tabId)`
to get tabId use `browser.tabs.query({ active: true, currentWindow: true })[0].id`
