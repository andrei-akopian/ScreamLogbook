# Docker

```zsh
docker build -t <image_name> .
docker run --name <container_name> <image_name>
```

## Tempalte

```lang-dockerfile
# Stage 1: Build stage (optional - for multi-stage builds)
FROM alpine
# other common FROM sources (technically any image would work):
# alpine, ubuntu, base, python:slim, https://hub.docker.com/search?badges=official

WORKDIR /app  
# docker RUN cd doesn't actually switch dirs, use WORKDIR instead

# Copy source code
COPY . .  
# everything except .dockerignore

RUN make

# which ports to expose
EXPOSE 3000
# but then the ports need to be mapped.
# docker run -p 3000:3000 myapp     # Manual mapping
# docker run -P myapp  # automap if possible
USER serverrunner
# switch to non root user for security

ENTRYPOINT ["echo", "Hello"]
CMD ["echo", "Hello"]
```

Ignore file (necessary)
```
# .dockerignore
#! .gitignore
# include gitignore
# Dependencies (reinstalled inside container anyway)
node_modules
npm-debug.log

# Environment files
.env
.env.local

# Git
.git
.gitignore

# Docker files
Dockerfile
.dockerignore

# IDE files
.vscode
.idea

# OS files
.DS_Store
Thumbs.db

# Logs
*.log
logs/

# Build outputs
dist/
build/
```
