# Web Requests and Scrapping

[HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

# Curl

[Curl.se](https://curl.se/)

`curl https://example.com`

# Python

```py
import requests
r = requests.get('https://example.com/')
print(r.text)
print(r.status_code)
```

## Beautiful Soup

[Docs for Beautiful Soup 4](https://beautiful-soup-4.readthedocs.io/en/latest/)

```py
from bs4 import BeautifulSoup
soup = BeautifulSoup(html_doc, 'html.parser')
```
