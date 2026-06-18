# Relative and other Imports in Python

Basic block for importing from elsewhere in github directories.

```py
import sys
from pathlib import Path

github_root = Path.cwd().resolve().parents[2]
sys.path.append(str(github_root))
```
