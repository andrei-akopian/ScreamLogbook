```py
logging.basicConfig(
    level=logging.INFO,
    format="%(levelname)s: %(message)s",
    handlers=[
            logging.FileHandler('app.log'),
            logging.StreamHandler(),
        ]
)
logger = logging.getLogger(__name__)
```
