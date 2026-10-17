# Vignesh N — Portfolio

Modern, animated, dark-first portfolio built with **Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Spline (3D), Resend, and Vercel Analytics**.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript) ![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss) ![License](https://img.shields.io/badge/license-MIT-green)

## Features

- ⚡ Next.js 15 App Router + React 19
- 🎨 Tailwind CSS with custom design tokens (HSL CSS vars)
- 🌓 Dark / Light mode toggle (`next-themes`)
- 🎞 Framer Motion scroll + enter animations
- 🧊 3D interactive hero via Spline
- 🧩 Projects with category filtering
- 📝 MDX-ready blog section (`/blog`)
- 📬 Contact form with Resend email delivery
- 📄 Downloadable PDF resume
- 📊 Live GitHub stats, streak, top languages & contribution graph
- 💬 Testimonials section
- 📈 Vercel Analytics + Speed Insights
- 🔍 Full SEO + Open Graph metadata

## Tech stack

| Layer       | Tech                                             |
| ----------- | ------------------------------------------------ |
| Framework   | Next.js 15 (App Router), React 19                |
| Language    | TypeScript                                       |
| Styling     | Tailwind CSS, CSS variables, `tailwind-merge`    |
| Animation   | Framer Motion                                    |
| 3D          | `@splinetool/react-spline`                       |
| Email       | Resend                                           |
| Icons       | `lucide-react`                                   |
| Toasts      | `sonner`                                         |
| Analytics   | `@vercel/analytics`, `@vercel/speed-insights`    |
| Hosting     | Vercel (recommended), GitHub Pages/Netlify ok    |

## Run locally

Prereqs: Node.js **18.18+** (Node 20+ recommended).

```bash
# 1. Install dependencies
npm install

# 2. Copy env template and fill in values (optional for dev)
cp .env.example .env.local

# 3. Start dev server
npm run dev
```

Open http://localhost:3000.

> The contact form works without `RESEND_API_KEY` — submissions are logged to the server console in dev.

## Environment variables

Create `.env.local` from `.env.example`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=vignesh.nainamalai@gmail.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
NEXT_PUBLIC_SITE_URL=https://vignesh-n.vercel.app
NEXT_PUBLIC_GITHUB_USERNAME=Vignesh-n
```

Get a free Resend API key at https://resend.com (3,000 emails/month free).

## Project structure

```
app/
  api/contact/route.ts    # Contact form → Resend
  blog/                   # Blog index + [slug]
  layout.tsx              # Root layout, fonts, providers
  page.tsx                # Home page composition
  globals.css             # Tailwind + design tokens
components/
  providers/              # ThemeProvider
  sections/               # Hero, About, Experience, Projects, Skills,
                          # GithubStats, Testimonials, Contact
  ui/                     # Navbar, Footer, ThemeToggle, SectionHeading
lib/
  data.ts                 # ALL resume content — edit here
  utils.ts
public/
  Vignesh_N_Resume.pdf    # Downloadable CV (drop your PDF here)
```

**All resume content lives in `lib/data.ts`** — change your name, experience, projects, skills, testimonials there.

## Customize

1. **Replace resume PDF**: drop your file at `public/Vignesh_N_Resume.pdf` (keep the filename or update `siteConfig.resumeUrl` in `lib/data.ts`).
2. **Change 3D scene**: swap the Spline URL in `components/sections/hero.tsx` — visit https://spline.design, remix a scene, click Export → Code → React, copy the `.splinecode` URL.
3. **Update colors**: tweak CSS variables in `app/globals.css` (`--primary`, `--accent`).
4. **GitHub username**: set `NEXT_PUBLIC_GITHUB_USERNAME` and update `siteConfig.githubUsername`.
5. **Blog content**: either keep the in-memory posts in `lib/data.ts` or integrate Contentlayer / `next-mdx-remote` for MDX.

## Deploy to Vercel (recommended)

### Option A — one-click via GitHub

1. Push to GitHub (see next section).
2. Go to https://vercel.com/new, import your repo.
3. Framework preset is auto-detected as **Next.js**.
4. Add the env vars from `.env.example` under **Project Settings → Environment Variables**.
5. Click **Deploy**. Done — you get `https://<project>.vercel.app`.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel        # follow prompts (first deploy)
vercel --prod # production deploy
```

### Custom domain

Project → **Settings → Domains** → add `yourname.dev`. Vercel issues a free SSL cert and handles DNS instructions.

## Push to GitHub

From the project root:

```bash
git init
git add .
git commit -m "feat: initial portfolio"
git branch -M main

# Create a new empty repo on GitHub first, then:
git remote add origin https://github.com/<your-username>/vignesh-portfolio.git
git push -u origin main
```

Or with the `gh` CLI (one-liner):

```bash
gh repo create vignesh-portfolio --public --source=. --remote=origin --push
```

## Other hosting options

### GitHub Pages (static export)

Add to `next.config.mjs`:

```js
output: "export",
images: { unoptimized: true },
```

Then:

```bash
npm run build
# Push the `out/` directory to the `gh-pages` branch (or use a GitHub Actions workflow).
```

> Note: static export disables API routes — the contact form will need a 3rd-party form service (e.g. Formspree) instead of `/api/contact`.

### Netlify

- Build command: `next build`
- Publish dir: `.next`
- Install `@netlify/plugin-nextjs` for full SSR + API route support.

### Cloudflare Pages

- Build command: `npx @cloudflare/next-on-pages@1`
- Build output: `.vercel/output/static`

## Scripts

| Command         | Purpose                 |
| --------------- | ----------------------- |
| `npm run dev`   | Start dev server        |
| `npm run build` | Production build        |
| `npm run start` | Run production build    |
| `npm run lint`  | ESLint                  |

## License

MIT — do whatever you want, attribution appreciated.
