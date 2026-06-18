# PDF in Python

Libraries:
- [fpdf2](https://py-pdf.github.io/fpdf2/index.html) for creating PDFs

## fpdf2

[Docs](https://py-pdf.github.io/fpdf2/PageBreaks.html)

```py
from fpdf import FPDF

pdf = FPDF()
pdf.add_page()
pdf.set_font("helvetica", style="B", size=16)
pdf.cell(40, 10, "Hello World!")
pdf.output("tuto1.pdf")
```
