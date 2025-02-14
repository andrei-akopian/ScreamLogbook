# Dealing with Secrets

Never ever hardcode snsitive information, especially when publishing it. Put whatever holds the secrets into `.gitignore`.

TOC:
- [dotenv (Python)](#dotenv)

## Dotenv

```
L main.py
L .env
```

```bash
PASSWORD=password1234
```

```py
import os # necessary
from dotenv import load_dotenv

load_dotenv('.env') # Loads into OS

password = os.getenv('PASSWORD') # Gets from the OS
```

(`os.getenv("HOME")` is Bash environmental variables `$ env`)

## YAML
