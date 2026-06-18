# Sentiment Analysis

[Wikipedia](https://en.wikipedia.org/wiki/Sentiment_analysis)

Python libraries:
- [Textblob](https://textblob.readthedocs.io/en/dev/)
- [Natural Language Toolkit (NLTK)](https://www.nltk.org/)
- Don't use [pattern](https://github.com/clips/pattern/wiki) (no longer maintained)

```py
from textblob import TextBlob

blob = TextBlob(text)

for sentence in blob.sentences:
    print(sentence.sentiment) # sentiment.polarity sentiment.subjectivity
```

Polarity
: connotation +positive vs -negative (+happy vs -sad)

Subjectivity
: +objective vs -subjective (+fact vs -opinion)

## More materials

- [Word Lists and Sentiment Analysis by Neal Caren](https://nealcaren.org/lessons/wordlists/) with [AFINN](https://www2.imm.dtu.dk/pubdb/pubs/6010-full.html) ([python library](https://github.com/fnielsen/afinn))

- [Sentiment Analysis Word Lists Dataset by Prajwal Kanade on Kaggle](https://www.kaggle.com/datasets/prajwalkanade/sentiment-analysis-word-lists-dataset)
