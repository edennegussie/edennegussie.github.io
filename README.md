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

Build optimized static files into the `docs/` folder:

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

The production build outputs to the `docs/` folder (not `dist/`).

### Setup on GitHub

1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **main** and folder **/docs**.

### Publish updates

```bash
npm run build
git add docs/
git commit -m "Update site build"
git push
```

Or use the shortcut:

```bash
npm run deploy
```

Then commit and push the updated `docs/` folder.

### CV PDF on the live site

PDF files are gitignored locally. To include your CV on the deployed site, either:

- place `EdenCV.pdf` in `public/` before building (and temporarily allow it in git), or
- host the PDF elsewhere and update `cvUrl` in `src/data.ts`.

## Deploy elsewhere

After `npm run build`, deploy the contents of `docs/` to any static host (Vercel, Netlify, etc.).
