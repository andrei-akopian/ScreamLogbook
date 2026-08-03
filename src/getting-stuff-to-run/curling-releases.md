# Curling Releases

Find and copy the url of a github release pack you want to install. Then run curl with `-L` to ensure it follows redirects (the github `.gz` files tend to be behind redirects if you copy their download links off release page.)

`curl -LO <url>` then `tar -xzf archive.tar.gz`

Then put into `$PATH` via `mv <binary> ~/.local/bin/<binary>`.
