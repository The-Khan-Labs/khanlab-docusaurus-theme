# KhanLab Docusaurus Theme

**A dark, SEO-friendly theme for Docusaurus 3.x** — Syne and IBM Plex typography, cyan accent, minimal CSS. Perfect for documentation sites, developer portals, and open-source project docs. MIT licensed.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**Live demo:** [the-khan-labs.github.io/khanlab-docusaurus-theme](https://the-khan-labs.github.io/khanlab-docusaurus-theme/)

---

## Why KhanLab Docusaurus Theme?

A lightweight, dark-mode-first Docusaurus theme that improves readability and discoverability for technical documentation. No JavaScript bloat — just clean CSS that works with Docusaurus 3.x out of the box.

| Benefit | Description |
|---------|-------------|
| **SEO-friendly** | Fast, minimal CSS. No bloat. Better Core Web Vitals. |
| **Dark mode first** | Easy on the eyes for long reading sessions. |
| **Typography** | Syne for headings, IBM Plex Sans for body, IBM Plex Mono for code. |
| **Collapsible sidebar** | Clean navigation, uppercase section headers, easy to scan. |
| **Docusaurus 3.x** | Compatible with the latest Docusaurus. |

---

## Quick Start

Add the theme to your Docusaurus site in 3 steps:

```bash
# 1. Copy the theme CSS
cp custom.css your-docusaurus-site/src/css/

# 2. Add to docusaurus.config.js (under presets → classic → theme)
theme: { customCss: './src/css/custom.css' },

# 3. Enable dark mode (optional)
colorMode: { defaultMode: 'dark', respectPrefersColorScheme: true }
```

---

## Features

| Feature | Description |
|---------|-------------|
| **Typography** | Syne (headings), IBM Plex Sans (body), IBM Plex Mono (code) |
| **Colors** | Dark base `#0a0a0f`, cyan accent `#22d3ee` |
| **Sidebar** | Collapsed by default, uppercase section headers, easy to scan |
| **Tables** | Minimal borders, hover states, readable |
| **Code blocks** | Dracula-inspired syntax highlighting, good contrast |

---

## Installation (Detailed)

1. **Copy the CSS** — Download `custom.css` from this repo or clone it, then place it in your Docusaurus project's `src/css/` folder.

2. **Configure Docusaurus** — In `docusaurus.config.js`, add the theme under the classic preset:

   ```js
   theme: { customCss: './src/css/custom.css' }
   ```

3. **Enable dark mode** (optional) — In `themeConfig`:

   ```js
   colorMode: {
     defaultMode: 'dark',
     respectPrefersColorScheme: true,
   }
   ```

4. **Rebuild** — Run `npm run build` or `yarn build`.

See `themeConfig.example.js` for prism (syntax highlighting) and other options.

---

## Use Cases

- **Documentation sites** — API docs, user guides, tutorials
- **Internal wikis** — Team knowledge bases, runbooks
- **Developer portals** — SDK docs, integration guides
- **Homelab docs** — Self-hosted project documentation
- **Open-source project docs** — GitHub Pages, project websites

---

## Customization

The theme uses CSS variables. Override them in your own `custom.css`:

| Variable | Default | Purpose |
|----------|---------|---------|
| `--accent` | `#22d3ee` | Links, active states |
| `--bg-base` | `#0a0a0f` | Background |
| `--font-display` | Syne | Headings |
| `--font-body` | IBM Plex Sans | Body text |

---

## GitHub Pages Setup

To deploy the demo or your own site: **Settings → Pages → Source: GitHub Actions**

---

## License

MIT. Use it anywhere.

---

## Topics

`docusaurus` · `theme` · `dark-theme` · `documentation` · `open-source` · `developer-tools` · `documentation-site` · `css` · `typography`
