# Maven

```bash
mvn validate
mvn compile
```

reformatter:

```bash
mvn spotless:apply -pl code    # reformat every file in place
mvn spotless:check -pl code    # just check, don't modify (fails if not formatted)
```
