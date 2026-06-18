.PHONY: default

default:
	python3 link_checker.py
	rg "TODO" src
	mdbook build
