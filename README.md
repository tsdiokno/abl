# Ang Biblia Ng Lahat (ABL)

Ito ang ABL -- Ang Bibliya Ng Lahat. Isang bago, libre, at open-source na salin ng Biblia sa wikang Tagalog. Sinalin mula sa Ingles (CSB, LEB, at Berean Interlinear Bible). Puro, tapat, at madaling mabasa.

---

## Para Sa Mga Mambabasa (For Casual Readers)

Ang ABL ay isang makabagong digital na salin ng Bibliya na madaling basahin at gamitin kahit walang internet connection (Offline-Ready).

### Paano Gamitin:
1. **Basahin Online**: Maaari mo itong buksan sa iyong browser para basahin agad.
2. **Basahin Offline (PWA)**: Ang website na ito ay isang Progressive Web App (PWA). Pwede mo itong i-install sa iyong telepono, tablet, o computer bilang isang regular na app:
   - **Sa Mobile (Chrome/Safari)**: I-tap ang "Share" o ang menu button (⋮) at piliin ang "Add to Home Screen".
   - **Sa Desktop (Chrome/Edge)**: May makikitang "Install" icon sa kanang bahagi ng address bar (URL). I-click ito upang i-install.
3. **Mabilis na Paghahanap**: Gamitin ang search bar upang mabilis na mahanap ang mga paborito mong talata, kahit ikaw ay offline.

Ang teksto ng ABL ay **libre** upang basahin, kopyahin, at ipamigay sa ilalim ng lisensyang CC BY-NC-ND 4.0.

---

## Para Sa Mga Developers (For Developers)

This project is built using [VitePress](https://vitepress.dev/) as a statically generated site with deep offline support powered by `vite-plugin-pwa` and Workbox. The text content is authored entirely in standard Markdown.

### Tech Stack
- **Framework**: VitePress (Vue-based Static Site Generator)
- **Offline/PWA**: vite-plugin-pwa + Workbox
- **Search**: Built-in local MiniSearch (fully offline compatible)
- **Markdown Parsing**: `markdown-it` with custom plugins for footnotes and English subtitle annotations.

### Getting Started

#### Prerequisites
- Node.js (v18 or higher)
- npm or bun

#### Installation
Clone the repository and install the dependencies:
```bash
npm install
```

#### Development
To start the local development server:
```bash
npm run dev
```

#### Build & Preview
To build the static site for production:
```bash
npm run build
```
This will generate the output in the `dist` directory. You can preview the built site locally using:
```bash
npm run preview
```
_Note: If using VitePress default scripts, preview might be mapped to a specific command like `vitepress preview`._

### Content Structure
The Bible books and chapters are stored as raw markdown files inside the `/books` directory.
- `books/roma/roma-1.md`
- `books/1-korinto/1-korinto-1.md`

The project uses a custom Markdown parser configuration in `/.vitepress/config.mts` to handle footnotes (e.g., `[^1]`) and custom English subtitle annotations under the main headings (using the syntax `[#](# "Subtitle Text")`).

### Contributions
Being an open-source project, suggestions and pull requests for text accuracy, typo corrections, or UI improvements are highly welcome!
