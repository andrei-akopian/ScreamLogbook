# Web Requests and Scrapping

[HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- `200` is success
- `404` is not found
- `1XX` is information
- `2XX` is success
- `3XX` is redirect and other annoynaces
- `4XX` and `5XX` are failures

# Curl

[Curl.se](https://curl.se/)

`curl https://example.com`

# Python

```py
import requests
r = requests.get('https://example.com/')
print(r.text) # HTML as string
print(r.status_code) # <int>
```

## Beautiful Soup

[Docs for Beautiful Soup 4](https://beautiful-soup-4.readthedocs.io/en/latest/)

```py
from bs4 import BeautifulSoup
soup = BeautifulSoup(html_doc, 'html.parser')
```
