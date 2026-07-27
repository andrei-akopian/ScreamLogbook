`protoc` should be preinstalled

`protoc --python_out=. mything.proto`

---

In python:

```py
from google.protobuf import text_format
import mything_pb2

meta = mything_pb2.BaseMessage()

with open("mythingfile.pb", "r") as f:
    text_format.Parse(f.read(), meta)

print(meta)
```
