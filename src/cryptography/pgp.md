# PGP

OpenPGP is a standard. GnuPG is the most popular implementation, but there are others like Sequoia PGP.

## Keyservers 

Keyservers are synchronized via the SKS Keyserver Network.

## GPG usage

`gpg --clearsign message.txt`

### Export All Keys

```bash
# Export all public keys
gpg --export --armor > all-public-keys.asc

# Export all private/secret keys (including subkeys)
gpg --export-secret-keys --armor > all-private-keys.asc
```

## Git GPG Signing

Using `git config --global` (or edit `~/.gitconfig`)

set `git config --global commit.gpgsign true` or 

```toml
[commit]
 gpgsign = true
```

`commit.gpgsign` is actually more useful if you want to turn off signing in a repository, `git config commit.gpgsign false`.

### you can also set

same for `user.signingkey <KEY_ID>`

`gpg.format <openpgp/ssh/x509>`
