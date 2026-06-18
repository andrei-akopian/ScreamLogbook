from pathlib import Path
import re

book_dir = Path("src")
summary = book_dir / "SUMMARY.md"

summary_text = summary.read_text()

linked = {
    Path(match).as_posix()
    for match in re.findall(r"\[[^\]]+\]\(([^)]+\.md)\)", summary_text)
}

all_md = {
    p.relative_to(book_dir).as_posix()
    for p in book_dir.rglob("*.md")
    if p.name != "SUMMARY.md"
}

missing = sorted(all_md - linked)

if missing:
    print("Files not referenced in SUMMARY.md:")
    for f in missing:
        print(f"./{f}")
else:
    print("All markdown files are referenced.")

# other direction

missing = sorted(linked - all_md)

if missing:
    print("Non existant files in SUMMARY.md:")
    for f in missing:
        print(f"./{f}")
