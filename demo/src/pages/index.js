import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

export default function Home() {
  const demoUrl = 'https://the-khan-labs.github.io/khanlab-docusaurus-theme/';
  const repoUrl = 'https://github.com/The-Khan-Labs/khanlab-docusaurus-theme';

  const share = () => {
    if (navigator.share) {
      navigator.share({
        title: 'KhanLab Docusaurus Theme',
        text: 'Dark minimal theme for Docusaurus — free & open source',
        url: demoUrl,
      }).catch(() => copyUrl(demoUrl));
    } else {
      copyUrl(demoUrl);
    }
  };

  const copyUrl = (url) => {
    navigator.clipboard.writeText(url).then(() => {
      const btn = document.getElementById('shareBtn');
      if (btn) {
        const orig = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = orig; }, 2000);
      }
    });
  };

  return (
    <Layout title="KhanLab Theme" description="Dark minimal theme for Docusaurus. Syne + IBM Plex, cyan accent. Free & open source.">
      <main className="main-home">
        <div className="hero">
          <h1 className="hero__title">
            KhanLab <span className="hero__accent">Theme</span>
          </h1>
          <p className="hero__tagline">
            Dark minimal theme for Docusaurus. Syne + IBM Plex, cyan accent. Free & open source.
          </p>
          <div className="hero__buttons">
            <Link to={useBaseUrl('/docs/intro')} className="hero__btn hero__btn--primary">
              View Demo →
            </Link>
            <a href={repoUrl} className="hero__btn hero__btn--secondary" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <button className="hero__btn hero__btn--secondary" onClick={share} id="shareBtn">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
              </svg>
              Share
            </button>
          </div>
        </div>

        <section className="features">
          <h2>Why this theme?</h2>
          <div className="features__grid">
            <div className="feature">
              <strong>Typography</strong>
              <p>Syne for headings, IBM Plex Sans for body, IBM Plex Mono for code.</p>
            </div>
            <div className="feature">
              <strong>Colors</strong>
              <p>Dark base (#0a0a0f), cyan accent (#22d3ee) for links and highlights.</p>
            </div>
            <div className="feature">
              <strong>Sidebar</strong>
              <p>Collapsed by default, uppercase section headers, easy to scan.</p>
            </div>
            <div className="feature">
              <strong>Code & tables</strong>
              <p>Dracula-inspired syntax highlighting, clean tables with hover states.</p>
            </div>
          </div>
          <p className="features__cta">
            <Link to={useBaseUrl('/docs/showcase')}>See the showcase</Link> — tables, code blocks, lists. <Link to={useBaseUrl('/docs/install')}>Install guide</Link>.
          </p>
        </section>
      </main>
    </Layout>
  );
}
