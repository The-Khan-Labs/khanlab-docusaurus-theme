---
sidebar_position: 2
---

# Showcase

Sample content so you can see how the theme renders. Tables, code, lists — the usual doc stuff.

## Tables

How a typical reference table looks:

| Command | Description |
|---------|-------------|
| `npm run build` | Build the site for production |
| `npm run start` | Start dev server with hot reload |
| `npm run serve` | Serve the built site locally |

Another example — with more columns:

| Component | Version | Notes |
|-----------|---------|-------|
| Docusaurus | 3.9.2 | Core framework |
| React | 18.x | UI layer |
| Node | 20+ | Required runtime |

## Code blocks

Bash:

```bash
# Copy the theme into your project
cp custom.css my-docs/src/css/

# Add to docusaurus.config.js
# theme: { customCss: './src/css/custom.css' }
```

JavaScript:

```js
export default {
  theme: {
    customCss: './src/css/custom.css',
  },
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
  },
};
```

## Inline code

Use `custom.css` in your project. Set `--accent` to change the highlight color.

## Lists

Unordered:

- Syne for headings
- IBM Plex Sans for body
- IBM Plex Mono for code

Ordered:

1. Copy `custom.css` to `src/css/`
2. Add it to your config
3. Rebuild

## Headings

### H3 — Section

Smaller sections use this size.

### H4 — Subsection

Even smaller for nested content.

## Blockquote

> The theme is just CSS. No JavaScript, no plugins. Drop it in and it works.

## Summary

That's how tables, code, lists, and headings look. If this matches what you want for your docs, grab the theme from the repo and follow the [Install](/docs/install) guide.
