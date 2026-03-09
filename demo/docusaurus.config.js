// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KhanLab Theme',
  tagline: 'Dark theme for Docusaurus. Syne and IBM Plex. Cyan accent. MIT.',
  favicon: 'img/favicon.ico',
  url: 'https://the-khan-labs.github.io',
  baseUrl: '/khanlab-docusaurus-theme/',
  organizationName: 'The-Khan-Labs',
  projectName: 'khanlab-docusaurus-theme',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content:
          'KhanLab Docusaurus Theme - Dark, SEO-friendly theme for Docusaurus 3.x. Syne and IBM Plex fonts. Cyan accent. Perfect for documentation sites and developer portals.',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: { sidebarPath: './sidebars.js' },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      },
    ],
  ],
  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content:
          'docusaurus theme, dark theme, documentation theme, docusaurus 3, developer documentation, open source, Syne, IBM Plex',
      },
    ],
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'KhanLab Theme',
      items: [
        { type: 'docSidebar', sidebarId: 'docs', position: 'left', label: 'Docs' },
        { href: 'https://github.com/The-Khan-Labs/khanlab-docusaurus-theme', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Repo',
          items: [
            { label: 'GitHub', href: 'https://github.com/The-Khan-Labs/khanlab-docusaurus-theme' },
          ],
        },
      ],
      copyright: 'KhanLab Theme · MIT',
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash'],
    },
  },
};

export default config;
