# Next.js Frontend Application

Modern Next.js 15 application with TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- ⚡ Next.js 15 (App Router)
- 🎨 Tailwind CSS + shadcn/ui components
- 📝 TypeScript strict mode
- 🔍 SEO optimized with metadata API
- 🖼️ Optimized images (AVIF/WebP)
- 🔒 Security headers configured
- 📊 Performance optimized (ISR/SSG)

## Getting Started

### Install Dependencies
```bash
pnpm install
```

### Run Development Server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
pnpm build
pnpm start
```

## Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-api-token
```

## Project Structure

```
app/
├── layout.tsx          # Root layout with fonts
├── page.tsx            # Home page
├── globals.css         # Global styles
└── (routes)/           # App routes
    ├── services/
    ├── pricing/
    └── contact/

components/
├── ui/                 # shadcn/ui components
└── sections/           # Page sections

lib/
├── utils.ts           # Utility functions
└── strapi.ts          # Strapi API client
```

## Adding shadcn/ui Components

```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

## Performance

- All pages are statically generated (SSG) or use ISR
- Images are automatically optimized
- Fonts are self-hosted and optimized
- Critical CSS is inlined
- JavaScript is code-split automatically

## Security

- Security headers configured
- CSP (Content Security Policy)
- HTTPS only in production
- Input validation with Zod
- Sanitized CMS content

## Deployment

Designed for Vercel:
```bash
vercel deploy
```

See [deployment docs](../../docs/deployment.md) for details.
