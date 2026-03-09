# KhanLab Docusaurus Theme — Dark Minimal Documentation Theme

> A free, open-source dark theme for Docusaurus. Perfect for documentation sites, wikis, and developer portals. Syne + IBM Plex typography, cyan accent, clean sidebar.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**Live demo:** [the-khan-labs.github.io/khanlab-docusaurus-theme](https://the-khan-labs.github.io/khanlab-docusaurus-theme/)

The demo includes a [Showcase](https://the-khan-labs.github.io/khanlab-docusaurus-theme/docs/showcase) page — tables, code blocks, lists — so you can see exactly how the theme renders before installing.

## Why This Theme?

- **SEO-friendly** — Fast, minimal CSS. No bloat.
- **Dark mode first** — Easy on the eyes for long reading.
- **Professional typography** — Syne for headings, IBM Plex for body and code.
- **Collapsible sidebar** — Clean navigation, less clutter.
- **Docusaurus 3.x compatible** — Works with the latest Docusaurus.

## Quick Start

```bash
# 1. Copy the theme
cp custom.css your-docusaurus-site/src/css/

# 2. Add to docusaurus.config.js (under presets → classic → theme)
theme: { customCss: './src/css/custom.css' },

# 3. Enable dark mode (optional)
colorMode: { defaultMode: 'dark', respectPrefersColorScheme: true }
```

## Features

| Feature | Description |
|---------|-------------|
| **Typography** | Syne (headings), IBM Plex Sans (body), IBM Plex Mono (code) |
| **Colors** | Dark base `#0a0a0f`, cyan accent `#22d3ee` |
| **Sidebar** | Collapsed by default, uppercase section headers, easy to scan |
| **Tables** | Minimal borders, hover states, readable |
| **Code blocks** | Dracula-inspired, good contrast |

## Full Setup

See `themeConfig.example.js` for prism (syntax highlighting) and other options.

## Use Cases

- Documentation sites
- Internal wikis
- Developer portals
- Homelab docs
- Open-source project docs

## License

MIT — use it anywhere, no attribution required (but appreciated).

---

**Keywords:** docusaurus theme, dark theme, documentation theme, open source, developer docs, wiki theme
