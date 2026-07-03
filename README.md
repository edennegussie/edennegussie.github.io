# Eden N. Mekuria — Portfolio

Frontend-only portfolio site built with React, TypeScript, Vite, and Tailwind CSS.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (included with Node.js)

## Setup

Clone the repository, then install dependencies:

```bash
git clone https://github.com/edennegussie/edennegussie.github.io.git
cd edennegussie.github.io
npm install
```

## Run locally (development)

Start the dev server with hot reload:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Production build

Build optimized static files into the `dist/` folder:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Then open the URL shown in the terminal (usually [http://localhost:4173](http://localhost:4173)).

## Project structure

```
src/
  components/   # UI sections (Hero, Projects, Experience, etc.)
  data.ts       # Portfolio content (projects, experience, skills)
  App.tsx       # Main layout
public/         # Static assets (CV PDF, screenshots, favicon)
```

To update copy or project details, edit `src/data.ts`.

## Deploy to GitHub Pages

Repository: [edennegussie/edennegussie.github.io](https://github.com/edennegussie/edennegussie.github.io)

Live site: **https://edennegussie.github.io**

### Automatic deploy (recommended)

1. On GitHub, open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to the `main` branch. The workflow in `.github/workflows/deploy.yml` builds and deploys the site.

You can also run the workflow manually from the **Actions** tab.

### Manual deploy

```bash
npm run deploy
```

This builds the site and publishes `dist/` with the `gh-pages` package.

### CV PDF on the live site

PDF files are gitignored locally. To include your CV on the deployed site, either:

- place `CV_Eden_SoftwareDeveloper.pdf` in `public/` before pushing (and temporarily allow it in git), or
- host the PDF elsewhere and update `cvUrl` in `src/data.ts`.

## Deploy elsewhere

After `npm run build`, deploy the contents of `dist/` to any static host (Vercel, Netlify, etc.).
