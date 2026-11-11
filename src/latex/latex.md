# LaTeX
aka Tex, MathJax

`Ctrl+F` to search.
`pdflatex file.tex` to compile

Symbol lookup:
- [Detexify](https://detexify.kirelabs.org/classify.html) (for symbols)
- [QuickRef.ME](https://quickref.me/latex) (for general math)
- [MathJax Basic Tutorial and Quick Reference](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)

### Front Matters

```tex
% metadata
\documentclass{article}
\title{Test}
\author{Me}
\date{\today}
% displayed
\begin{document}
\maketitle
\end{document}
```

- [documentclasses Stackexchange Discussion](https://tex.stackexchange.com/questions/782/what-are-the-available-documentclass-types-and-their-uses), main classes `article, proc, minimal, report, book, slides, memoir, letter, beamer`

### Basic Math

```tex
\begin{cases}
    1 & \text{if} a=b \\
    0 & \text{if} a\not=b
\end{cases}
```

## Resources
- [Not So Short Introduction to LaTeX](https://tobi.oetiker.ch/lshort/lshort.pdf)

## Tables
```tex
\begin{center}
\begin{tabular}{ c c c }
 cell1 & cell2 & cell3 \\ 
 cell4 & cell5 & cell6 \\  
 cell7 & cell8 & cell9    
\end{tabular}
\end{center}
```

## Code

```tex
\def\code#1{\texttt{#1}} % then use \code{...}
% see https://tex.stackexchange.com/questions/36030/how-to-make-a-single-word-look-as-some-code
```

### Algorithms

[Algorithms](https://www.overleaf.com/learn/latex/Algorithms)

```latex
\usepackage{algpseudocode}
\begin{algorithmic}[1] % the [1] (or [n]) numbers every nth line
\Function{\textsc{MyFunction}}{}
\State $i \gets 10$
\If{$i\geq 5$} \Comment{Compare $i$ and $5$} 
    \State $i \gets i-1$
\Elsif{$i > 8$}
    \If{$i\leq 3$}
        \State $i \gets i+2$
    \EndIf
\EndIf
\EndFunction
\end{algorithmic}
```

## Images

### SVG

https://tex.stackexchange.com/questions/2099/how-to-include-svg-diagrams-in-latex

```latex
\usepackage{svg}
\begin{document}
\includesvg{some_svg_file}
\end{document}
```

### Tikz

```tex
\usepackage{tikz}
```

```tex
\begin{figure}[htbp]
    \centering
    \resizebox{0.65\textwidth}{!}{
        \input{myimage} % omit .tex
    }
    \caption{my figure name}
    \label{f:figurename}
\end{figure}
```
