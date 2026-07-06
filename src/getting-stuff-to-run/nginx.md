# nginx

This goes into 
`/etc/nginx/` on unix systems, or use `-c` to set custom path.

ngnix creates background user and process for the server.

chmod the path to static assest for `o=other` users.
`chmod o+x /path/to/static/dir`

[official docs](https://nginx.org/en/docs/)

## Config

```
# /etc/nginx/sites-available/example.com

# set number of workers. auto : workers = cpu cores
worker_processes auto;

# worker process configs
events {}

# http servers config, with global http settings
# http { server{} server{} }

# stream {} 
# mail {}

# classic HTTP to HTTPS redirect
server {
    listen 80;  # ipv4
    listen [::]:80;  # ipv6
    server_name example.com www.example.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com www.example.com;

    # SSL certificates (e.g. from Let's Encrypt)
    ssl_certificate     /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    ssl_protocols       TLSv1.2 TLSv1.3;
    ssl_ciphers         HIGH:!aNULL:!MD5;

    root /var/www/example.com/public;
    index index.html;

    access_log /var/log/nginx/example.com.access.log;
    error_log  /var/log/nginx/example.com.error.log;

    # Serve static files directly
    location /static/ {
        alias /var/www/example.com/static/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # Proxy requests to a backend app (e.g. Node.js, Gunicorn, etc.)
    location / {
        proxy_pass         http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection "upgrade";
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }

    # Basic security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    client_max_body_size 10M;
}
```
