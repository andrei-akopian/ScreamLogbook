# Common LISP

[Common LISP language specification](https://www.lispworks.com/documentation/HyperSpec/Front/Contents.htm) (though [CL-Community-Spec](https://cl-community-spec.github.io/pages/index.html) has better rendering).

## Compilers

[Steel Bank Common Lisp](https://www.sbcl.org/)

Alias with `rlwrap` (readline) for marginally better repl experience.

```bash
# .bashrc or .zshrc alias
# Steel Bank Common Lisp
alias sbcl="rlwrap sbcl"
```

Note: on MacOs install with brew. Otherwise it throws some kind of allocation memory issues, and asks for permissions.

## Resources

[Common Lisp: A Gentle Introduction to Symbolic Computation](https://www.cs.cmu.edu/~dst/LispBook/)

[A Road to Common Lisp](https://stevelosh.com/blog/2018/08/a-road-to-common-lisp/)

[Land of LISP](http://landoflisp.com/)

## Messing With Things

```lisp
(EVAL (let ((var1 1) (var2 1)) (CONS '+ `(,var1 ,var2))))
```
