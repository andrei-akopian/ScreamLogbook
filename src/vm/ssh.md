# SSH

## Key Generation

`ssh-keygen -t <type>` eg. `ssh-keygen -t ed25519`

## Port Forwarding

`ssh -L 5000:localhost:5000 user@example.com`

## File Transfer

### SCP

`scp myfile.txt user@example.com:/home/user/myfile.txt`

`scp myfolder user@example.com:/home/user/myfolder`

### rsync

`rsync -avz source/ user@remote:/destination/`

### rclone using SFTP

```bash
rclone config
# choose "sftp" as the storage type, then provide host, user, key/password, port, etc.
```

```bash
rclone sync /local/path mysftpremote:/remote/path
```
