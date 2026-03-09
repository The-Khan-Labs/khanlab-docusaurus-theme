---
sidebar_position: 4
---

# Customize

The theme uses CSS variables. Override them in your own `custom.css` if you want:

| Variable | Default | Purpose |
|----------|---------|---------|
| `--accent` | #22d3ee | Links, active states, accent color |
| `--bg-base` | #0a0a0f | Background |
| `--text-primary` | #f4f4f5 | Main text |
| `--font-display` | Syne | Headings |
| `--font-body` | IBM Plex Sans | Body text |

Example — change accent to purple:

```css
:root {
  --accent: #a78bfa;
  --accent-glow: rgba(167, 139, 250, 0.15);
}
```
