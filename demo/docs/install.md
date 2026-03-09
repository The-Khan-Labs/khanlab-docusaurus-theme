---
sidebar_position: 2
---

# Install

## 1. Copy the CSS

```bash
cp custom.css your-site/src/css/
```

Or download the file from the repo and drop it into `src/css/`.

## 2. Add to config

In `docusaurus.config.js`, under the classic preset:

```js
theme: {
  customCss: './src/css/custom.css',
},
```

## 3. Dark mode (optional)

```js
colorMode: {
  defaultMode: 'dark',
  respectPrefersColorScheme: true,
},
```

That's it. Rebuild and you're done.
