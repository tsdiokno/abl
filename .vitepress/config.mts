import { defineConfig } from 'vitepress';
import { withPwa } from '@vite-pwa/vitepress';
import footnote from 'markdown-it-footnote';

// Define the base path for GitHub Pages deployment.
// If your repository is named 'abl', set this to '/abl/'
const basePath = '/abl/';

// withPwa wraps the standard VitePress config to inject vite-plugin-pwa
export default withPwa(defineConfig({
  title: "Ang Biblia Ng Lahat (ABL)",
  description: "Independent, offline-ready custom Bible translation and commentary.",
  appearance: false,
  head: [['link', { rel: 'icon', href: `${basePath}favicons/favicon.ico` }]],
  
  // Output to standard dist/ for deployment compatibility
  outDir: './dist',
  
  // Clean URLs for aesthetic routing
  cleanUrls: true,
  ignoreDeadLinks: true,

  base: basePath,
  
  markdown: {
    config: (md) => {
      md.use(footnote);
      
      // Custom plugin to replace [#](# "Subtitle") with a styled subtitle span
      md.core.ruler.push('english_subtitle', (state) => {
        for (const blockToken of state.tokens) {
          if (blockToken.type === 'inline' && blockToken.children) {
            for (let i = 0; i < blockToken.children.length; i++) {
              const token = blockToken.children[i];
              if (token.type === 'link_open' && token.attrGet('href') === '#') {
                const nextToken = blockToken.children[i + 1];
                const closeToken = blockToken.children[i + 2];
                if (
                  nextToken && nextToken.type === 'text' && nextToken.content === '#' &&
                  closeToken && closeToken.type === 'link_close'
                ) {
                  const title = token.attrGet('title');
                  if (title) {
                    const htmlToken = new state.Token('html_inline', '', 0);
                    htmlToken.content = `<span class="english-subtitle">${title}</span>`;
                    blockToken.children.splice(i, 3, htmlToken);
                  }
                }
              }
            }
          }
        }
      });
    }
  },
  
  themeConfig: {
    logo: '/dropcap.svg',
    // Built-in offline MiniSearch indexing for fast text queries
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Roma', link: '/books/roma/roma-1' },
      { text: '1 Korinto', link: '/books/1-korinto/1-korinto-1' },
      { text: 'About', link: '/about/index' }
    ],
    sidebar: [
      {
        text: 'Roma',
        collapsed: false,
        items: Array.from({ length: 16 }, (_, i) => ({
          text: `Roma ${i + 1}`,
          link: `/books/roma/roma-${i + 1}`
        }))
      },
      {
        text: '1 Korinto',
        collapsed: false,
        items: Array.from({ length: 16 }, (_, i) => ({
          text: `1 Korinto ${i + 1}`,
          link: `/books/1-korinto/1-korinto-${i + 1}`
        }))
      },
      {
        text: 'About',
        items: [
          { text: 'About', link: '/about/index' },
          { text: 'Glossary', link: '/about/glossary' }
        ]
      }
    ]
  },
  
  // PWA Configuration
  pwa: {
    registerType: 'autoUpdate',
    injectRegister: 'script',
    manifest: {
      name: 'Ang Biblia Ng Lahat (ABL)',
      short_name: 'ABL',
      description: 'Offline-ready custom Bible translation and commentary.',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: basePath,
      icons: [
        { src: `${basePath}favicons/favicon-196x196.png`, sizes: '196x196', type: 'image/png' },
        { src: `${basePath}favicons/mstile-310x310.png`, sizes: '310x310', type: 'image/png', purpose: 'any maskable' }
      ]
    },
    workbox: {
      // Cache all vital text, content, and assets for offline use
      globPatterns: ['**/*.{js,css,html,png,svg,json,woff2}'],
      maximumFileSizeToCacheInBytes: 5000000,
    }
  }
}));
