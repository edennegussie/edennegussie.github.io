# Eden N. Mekuria — Portfolio

Frontend-only portfolio site built with React, TypeScript, Vite, and Tailwind CSS.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (included with Node.js)

## Setup

Clone or download the project, then install dependencies:

```bash
cd portfolio
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

## Deploy

After `npm run build`, deploy the contents of `dist/` to any static host (Vercel, Netlify, GitHub Pages, etc.).
