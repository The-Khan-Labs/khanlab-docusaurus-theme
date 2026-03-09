---
sidebar_position: 3
title: Install KhanLab Docusaurus Theme
description: How to install the KhanLab dark theme in your Docusaurus 3 site. Copy custom.css and add to config.
keywords:
  - docusaurus install
  - docusaurus theme install
  - dark theme setup
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
