# 🚀 Quick Start Guide

## What We've Built

A modern, secure, and performant foundation for rebuilding nexclinical.com from WordPress to a custom Next.js + **Sanity CMS** headless architecture.

## ✅ Current Status

- **Frontend**: Next.js 15 with TypeScript, Tailwind CSS, and shadcn/ui ✅
- **CMS**: Sanity CMS with medical practice schemas ✅
- **Studio**: Standalone Sanity Studio app (React 18) ✅
- **Build**: Successfully compiling ✅
- **Deployed**: https://nexclincalwebsite.vercel.app/ ✅

## 📂 Project Location

```
c:\Nexclinical\nexclinical-rebuild\
```

## 🏃 Running the Project

### 1. Start Development Server

```bash
cd c:\Nexclinical\nexclinical-rebuild\apps\frontend
pnpm dev
```

- **Website**: http://localhost:3000
- **Sanity Studio (local)**: http://localhost:3333 (apps/sanity-studio)

### 2. Build for Production

```bash
cd c:\Nexclinical\nexclinical-rebuild\apps\frontend
pnpm build
pnpm start
```

## 🏥 Sanity CMS Setup

See [SANITY_CMS_SETUP.md](./docs/SANITY_CMS_SETUP.md) for complete setup instructions.

**Quick Setup:**
1. Create project at https://www.sanity.io/manage
2. Update `.env.local` with your project ID
3. Access Studio at sanity.io or local dev at `http://localhost:3333`

## 📖 Documentation

All comprehensive documentation is in the `docs/` folder:

| Document | Purpose |
|----------|---------|
| [SANITY_CMS_SETUP.md](./docs/SANITY_CMS_SETUP.md) | **CMS setup and content modeling** |
| [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) | Overview, roadmap, next steps |
| [architecture.md](./architecture.md) | Full stack, hosting, data flow |
| [deployment.md](./deployment.md) | Environment setup, CI/CD |
| [security.md](./security.md) | Security hardening checklist |
| [performance.md](./performance.md) | Optimization strategies |
| [design-system.md](./design-system.md) | Colors, typography, spacing |

## 🎯 Tech Stack

**Frontend**
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui components

**CMS**
- Sanity CMS (Headless)
- GROQ Query Language
- Sanity Studio (Standalone)

**Hosting**
- Frontend: Vercel
- Studio: sanity.io (managed)
- CMS Backend: Sanity Cloud (managed)
- CDN: Sanity Asset CDN

## 📋 Immediate Next Steps

### 1. Continue Building Frontend Pages

Create the following pages in `apps/frontend/app/`:

```
app/
├── services/
│   ├── patient-scheduling/
│   │   └── page.tsx
│   ├── authorization-verification/
│   │   └── page.tsx
│   └── medical-assistant/
│       └── page.tsx
├── pricing/
│   └── page.tsx
├── about/
│   └── page.tsx
├── contact/
│   └── page.tsx
└── faqs/
    └── page.tsx
```

### 2. Add More Components

Install additional shadcn/ui components:

```bash
cd apps/frontend
npx shadcn@latest add accordion
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add form
```

### 3. Configure Sanity CMS

1. Create a Sanity project at https://www.sanity.io/manage
2. Copy your Project ID
3. Update `.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

4. Access Sanity Studio at http://localhost:3333 (apps/sanity-studio)

## 🎨 Design System

The design system is based on the existing NexClinical brand:

**Colors**
- Primary: `#0284c7` (blue)
- Text: Gray scale
- Backgrounds: White and light gray

**Typography**
- Body: Inter
- Headings: Poppins

**Components**
- Button (primary, outline, ghost)
- Card (for features, testimonials)
- Hero sections
- Feature grids

See [design-system.md](./docs/design-system.md) for full details.

## 🔧 Available Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint
pnpm type-check       # TypeScript check

# From root (monorepo)
pnpm dev              # Run all apps
turbo run build       # Build all apps
```

## 🌐 Environment Variables

Create `apps/frontend/.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=
```

See `.env.example` for all variables.

## 📊 Performance Targets

- Lighthouse Score: > 95
- LCP (Largest Contentful Paint): < 2.0s
- FID (First Input Delay): < 50ms
- CLS (Cumulative Layout Shift): < 0.05

Current build is optimized and on track to meet these targets.

## 🔒 Security Features

Already implemented:
- ✅ Security headers (HSTS, CSP, X-Frame-Options)
- ✅ TypeScript strict mode
- ✅ Input validation ready (Zod)
- ✅ Image optimization
- ✅ HTTPS enforcement

## 🤝 Contributing

1. Create a new branch for features
2. Run `pnpm lint` before committing
3. Test build with `pnpm build`
4. Follow the design system

## 📞 Need Help?

- Check [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) for roadmap
- Review [architecture.md](./architecture.md) for system overview
- See [deployment.md](./deployment.md) for hosting setup

## 🎉 What's Working Now

- ✅ Responsive homepage with hero and features
- ✅ Modern design with Tailwind CSS
- ✅ Type-safe TypeScript
- ✅ Optimized fonts (Inter + Poppins)
- ✅ Production build (102 kB JS)
- ✅ SEO metadata
- ✅ Security headers

Ready to build the rest of the site! 🚀
