# NexClinical Website Rebuild

Modern, secure, and performant rebuild of nexclinical.com with headless CMS architecture.

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **CMS**: Strapi (self-hosted on Render)
- **Database**: PostgreSQL 15+ (Neon serverless)
- **Media**: Cloudflare R2 + CDN
- **Hosting**: Vercel (frontend), Render (Strapi)
- **State Management**: React Query (minimal)
- **Forms**: Next.js Server Actions + Resend

## Architecture

This is a monorepo using Turborepo with the following structure:

```
nexclinical-rebuild/
├── apps/
│   ├── frontend/          # Next.js 15 App Router application
│   └── cms/               # Strapi CMS instance
├── packages/
│   ├── types/             # Shared TypeScript types from Strapi
│   └── ui/                # Shared design tokens & utilities
└── docs/                  # Project documentation
```

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 8+
- Docker (for local Strapi/Postgres)

### Installation

```bash
# Install dependencies
pnpm install

# Run all apps in dev mode
pnpm dev
```

### Development URLs

- Frontend: http://localhost:3000
- Strapi Admin: http://localhost:1337/admin

## Documentation

See [docs/](./docs/) for comprehensive documentation:

- [Architecture](./docs/architecture.md)
- [Content Model](./docs/content-model.md)
- [Deployment](./docs/deployment.md)
- [Security](./docs/security.md)
- [Performance](./docs/performance.md)

## Project Goals

- ✅ 100% custom, secure, and maintainable
- ✅ Fast load times (Core Web Vitals optimized)
- ✅ Mobile-first responsive design
- ✅ Content management without dev deploys
- ✅ Reduced attack surface vs WordPress
- ✅ Modern design with existing brand identity

## License

Proprietary - NexClinical © 2026
