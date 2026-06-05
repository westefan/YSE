## Commit Convention

YSE uses an adapted version of [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). The structure is the same:

```
<type>[optional scope]: <description>

[optional body]
```

### Types

| Type | Use for |
|------|---------|
| `article` | New article added |
| `edit` | Corrections, rewrites, or expansions to an existing article |
| `fix` | Typos, broken links, factual corrections |
| `structure` | Changes to layout, navigation, or site organization |
| `resource` | Additions or updates to the reading list or blog/site references |
| `meta` | Changes to the contributing guide, README, or repo configuration |

### Examples

```
article: add "How AI is reshaping software engineering"
edit(how-ai-reshaping): shorten code review section
fix: correct broken link in reading list
resource: add The Pragmatic Engineer to blogs section
meta: update contribution guide with commit types
```

### Scope

Scope is optional but recommended for `edit` and `fix` commits — use the article's filename or section name to make the history scannable.
