# OpenCode Subagents

[Official Docs](https://opencode.ai/docs/agents/)

Subagents are defined by markdown files that go into `.config/opencode/agents/myagent.md`

Example from the docs:

```md
---
description: Reviews code for quality and best practices
mode: subagent
model: anthropic/claude-sonnet-4-20250514
temperature: 0.1
permission:
  edit: deny
  bash: deny
---

You are in code review mode. Focus on:

- Code quality and best practices
- Potential bugs and edge cases
- Performance implications
- Security considerations

Provide constructive feedback without making direct changes.
```
