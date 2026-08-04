# Curling Releases

Find and copy the url of a github release pack you want to install. Then run curl with `-L` to ensure it follows redirects (the github `.gz` files tend to be behind redirects if you copy their download links off release page.)

`curl -LO <url>` then `tar -xzf archive.tar.gz`

(for non-tared files, you can curl directly into `$PATH` or `~/.local/bin` via `curl -Lo ~/.local/bin/<binary> <url>`)

Then put into `$PATH` via `mv <binary> ~/.local/bin/<binary>`.
