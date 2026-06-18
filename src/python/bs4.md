```py
soup = bs4.BeautifulSoup(html_doc, "html.parser")
```

for longer parses:

```py
try:
    bs4.BeautifulSoup("<div>Test</div>", features="lxml")
    bs4_prefered_parser = "lxml"
except bs4.FeatureNotFound:
    bs4_prefered_parser = "html.parser"
```
