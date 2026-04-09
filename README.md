# MedocBills Healthcare

Modern healthcare revenue cycle management and medical billing website built with React, Vite, and Tailwind CSS.

## Live Demo

- Website: [www.medocbills.com](https://www.medocbills.com)

## Preview

![MedocBills Main Page](public/main.png)

## Project Description

MedocBills is a frontend web application for a medical billing and healthcare revenue management company.  
It presents billing, coding, credentialing, compliance, and RCM service offerings, along with trust-building content such as success metrics, testimonials, medical specialties coverage, client-focused workflows, and career opportunities.

The project is implemented as a single-page React app with route-based pages, SEO metadata management, and reusable UI components for a responsive, animation-rich user experience.

## Key Features

- 🧭 Multi-page SPA routing for Home, Services, Contact, About, Career, and Clients pages
- 🏥 Healthcare/RCM-focused service presentation (billing, coding, credentialing, VOB, prior auth, patient billing)
- 🎞️ Interactive UI with hero sliders, testimonial carousel, animated sections, and counters
- 📬 Contact and callback forms with client-side validation and submission states
- 💼 Career portal with live search/filter across job listings
- 🩺 Medical specialties grid and healthcare-system-focused RCM process sections
- 🔍 SEO implementation with per-page meta tags, canonical URLs, Open Graph/Twitter tags
- 🧠 Structured data (JSON-LD) for organization, FAQ, medical business, and job postings
- 📱 Responsive navigation with mobile menu behavior and accessible UI semantics
- 🚀 Production build optimizations via Vite + Terser + vendor chunk splitting

## Tech Stack

### Core Framework
- `react`
- `react-dom`
- `react-router-dom`
- `typescript`
- `vite`

### UI, Styling, and Motion
- `tailwindcss`
- `@tailwindcss/vite`
- `framer-motion`
- `lucide-react`
- `@heroicons/react`
- `clsx`
- `tailwind-merge`

### SEO and UX Utilities
- `react-helmet-async`
- `react-toastify`

### Build, Lint, and Tooling
- `@vitejs/plugin-react`
- `vite-bundle-analyzer`
- `terser`
- `eslint`
- `@eslint/js`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `globals`
- `@types/react`
- `@types/react-dom`
- `@types/node`
- `@types/react-helmet-async`


## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

App runs on the Vite default local URL (typically `http://localhost:5173`).

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

From `package.json`:

- `npm run dev` - start Vite dev server
- `npm run build` - install dependencies (`--legacy-peer-deps`) and create production build
- `npm run lint` - run ESLint on the project
- `npm run preview` - preview the built app locally

> Note: `npm start` is not currently defined in this project.

## Deployment

This project is configured for **Vercel** deployment.

### Current Hosting Configuration

Defined in `vercel.json`:

- Framework: `vite`
- Install command: `npm install --force`
- Build command: `npm install --force && npm run build`
- Output directory: `dist`
- SPA rewrites enabled: all routes rewrite to `/` for client-side routing

### Deploy Steps (Vercel)

1. Push the repository to GitHub/GitLab/Bitbucket.
2. Import the project in Vercel.
3. Vercel detects `vercel.json` and applies the custom commands automatically.
4. Deploy and verify routes such as `/services`, `/about`, `/career`, `/clients`.

## Screenshots


- Main homepage preview:

![Main Homepage](public/main.png)


## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch (`feature/your-feature-name`).
3. Commit clear, scoped changes.
4. Run checks before opening a PR:
   - `npm run lint`
   - `npm run build`
5. Open a pull request with a concise summary and test notes.

> **Made with ❤️ by Syed Muhammad Uzair**
