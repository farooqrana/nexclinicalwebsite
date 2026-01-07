# NexClinical Architecture

## Overview

NexClinical is a modern JAMstack marketing site with headless CMS architecture, designed for security, performance, and ease of content management.

## Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + shadcn/ui
- **Data Fetching**: React Server Components + React Query
- **Rendering**: Static Site Generation (SSG) + Incremental Static Regeneration (ISR)
- **Images**: Next/Image with automatic optimization (AVIF/WebP)
- **Forms**: Server Actions + Resend for transactional email

### Backend/CMS
- **CMS**: Strapi 4.x (self-hosted, headless)
- **Database**: PostgreSQL 15+ (Neon serverless)
- **Media Storage**: Cloudflare R2 (S3-compatible)
- **CDN**: Cloudflare CDN for media assets
- **API**: Strapi REST API (with webhook-triggered revalidation)

### Hosting & Infrastructure
- **Frontend**: Vercel (edge network, serverless functions)
- **CMS/API**: Render (always-on container)
- **Database**: Neon (serverless Postgres with branching)
- **CDN**: Cloudflare (media + WAF)
- **Domains**: 
  - www.nexclinical.com → Vercel
  - api.nexclinical.com → Render (Strapi) via Cloudflare proxy

## Architecture Diagram

```
┌─────────────────┐
│   User Browser  │
└────────┬────────┘
         │ HTTPS
         ▼
┌─────────────────────────────────┐
│  Cloudflare CDN + WAF           │
│  - Static assets                │
│  - Media (R2)                   │
│  - DDoS protection              │
└──────┬──────────────────┬───────┘
       │                  │
       │ CDN              │ API requests
       ▼                  ▼
┌──────────────┐   ┌──────────────────┐
│   Vercel     │   │  Render          │
│   (Next.js)  │   │  (Strapi CMS)    │
│              │   │                  │
│   - SSG/ISR  │   │  - Content API   │
│   - Edge     │◄──┤  - Admin UI      │
│   - Functions│   │  - Webhooks      │
└──────────────┘   └────────┬─────────┘
                            │
                            ▼
                   ┌────────────────┐
                   │  Neon Postgres │
                   │  (Database)    │
                   └────────────────┘
```

## Data Flow

### Content Publishing
1. Editor updates content in Strapi admin (api.nexclinical.com/admin)
2. Content saved to Neon Postgres
3. Strapi webhook triggers Vercel revalidation
4. Next.js rebuilds affected pages (ISR)
5. Updated pages served from edge CDN

### Page Rendering
1. User requests page → Cloudflare CDN
2. If cached: serve from edge (< 50ms)
3. If not: Vercel serves pre-rendered page (ISR/SSG)
4. Static assets served from Cloudflare R2 CDN

### Forms (Contact/Demo)
1. User submits form → Server Action
2. Validation + spam protection (Turnstile)
3. Email sent via Resend
4. Optional: log to CRM/database

## Why This Stack?

### vs WordPress (Current)
- **Security**: Smaller attack surface, no plugin vulnerabilities
- **Performance**: Pre-rendered pages (edge-cached) vs PHP per-request
- **Stability**: Immutable deploys, no runtime plugin conflicts
- **Developer Experience**: Type-safe, modern tooling
- **Scalability**: Edge CDN + serverless vs vertical scaling

### Key Benefits
- **Speed**: Pages load in < 1s (pre-rendered + edge cache)
- **Security**: Decoupled frontend, minimal backend exposure, WAF
- **Reliability**: Immutable builds, atomic deploys, instant rollback
- **Editor Experience**: Modern CMS UI with structured content
- **Mobile Performance**: Optimized images, code splitting, responsive by default

## Security Architecture

### Frontend (Vercel)
- Strict Content Security Policy (CSP)
- Security headers (HSTS, X-Frame-Options, etc.)
- Subresource Integrity (SRI) for external scripts
- Input sanitization for CMS content

### Backend (Strapi/Render)
- IP allowlist for /admin (VPN/office only)
- Rate limiting on auth endpoints
- Role-based access control (RBAC)
- Audit logging
- Regular security patches

### Infrastructure
- WAF (Cloudflare) for DDoS/bot protection
- HTTPS everywhere (TLS 1.3)
- Secrets in managed vaults (Vercel env vars, Render secrets)
- Database backups (automated daily + PITR)

## Performance Strategy

### Build-Time Optimizations
- Static page generation (SSG) for marketing pages
- Image optimization (Next/Image → AVIF/WebP)
- Code splitting (automatic with Next.js)
- Font subsetting + preload

### Runtime Optimizations
- Edge caching (Cloudflare + Vercel Edge)
- ISR for content pages (stale-while-revalidate)
- Prefetch critical resources
- Lazy load below-the-fold content

### Monitoring
- Core Web Vitals tracking (Vercel Analytics)
- Lighthouse CI in PR checks (budget enforcement)
- Real User Monitoring (RUM) - optional
- Uptime monitoring (api + frontend)

## Environments

### Development
- Local Next.js (localhost:3000)
- Local Strapi + Postgres (Docker Compose)
- Hot reload, source maps

### Staging
- Vercel preview deployments
- Staging Strapi on Render (staging.api.nexclinical.com)
- Neon staging branch
- Seeded test content

### Production
- Vercel production (www.nexclinical.com)
- Strapi on Render (api.nexclinical.com)
- Neon production database
- Cloudflare CDN + WAF

## Disaster Recovery

- **Database**: Automated daily backups + point-in-time recovery (Neon)
- **Media**: R2 versioning enabled, lifecycle policies
- **Code**: Git version control, atomic Vercel deploys
- **Rollback**: Instant via Vercel dashboard or CLI
- **RTO/RPO**: < 5 minutes / < 15 minutes

## Future Considerations

- Multi-language support (i18n via Next.js)
- A/B testing (Vercel Edge Middleware)
- Personalization (geolocation, user segments)
- Advanced analytics (PostHog/Amplitude)
- GraphQL layer if complex query patterns emerge

## References

- [Content Model](./content-model.md)
- [Deployment Guide](./deployment.md)
- [Security Checklist](./security.md)
- [Performance Budget](./performance.md)
