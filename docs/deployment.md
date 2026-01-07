# Deployment Guide

## Overview

This guide covers deployment procedures for the NexClinical website across all environments.

## Prerequisites

- Node.js 20+
- pnpm 8+
- Git
- Vercel account
- Render account
- Neon account
- Cloudflare account (for R2 + CDN)

## Environment Setup

### Development (Local)

#### Frontend
```bash
cd apps/frontend
cp .env.example .env.local
pnpm install
pnpm dev
```

**Environment Variables (.env.local)**:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-dev-token
RESEND_API_KEY=your-resend-key
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-turnstile-key
TURNSTILE_SECRET_KEY=your-turnstile-secret
```

#### CMS (Strapi)
```bash
cd apps/cms
cp .env.example .env
pnpm install
pnpm develop
```

**Environment Variables (.env)**:
```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=generate-with-openssl
API_TOKEN_SALT=generate-with-openssl
ADMIN_JWT_SECRET=generate-with-openssl
TRANSFER_TOKEN_SALT=generate-with-openssl
JWT_SECRET=generate-with-openssl

DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=nexclinical_dev
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres
DATABASE_SSL=false

# Cloudflare R2 (or use local for dev)
AWS_ACCESS_KEY_ID=your-r2-access-key
AWS_SECRET_ACCESS_KEY=your-r2-secret
AWS_REGION=auto
AWS_ENDPOINT=https://your-account-id.r2.cloudflarestorage.com
AWS_BUCKET=nexclinical-media-dev
AWS_PUBLIC_URL=https://media-dev.nexclinical.com
```

**Generate secrets**:
```bash
# Generate random keys
openssl rand -base64 32
```

#### Database (Postgres)
Use Docker Compose:
```yaml
# docker-compose.yml
version: '3.8'
services:
  postgres:
    image: postgres:15-alpine
    ports:
      - '5432:5432'
    environment:
      POSTGRES_DB: nexclinical_dev
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    volumes:
      - postgres-data:/var/lib/postgresql/data

volumes:
  postgres-data:
```

```bash
docker-compose up -d
```

### Staging

#### Neon Database (Staging Branch)
1. Create staging branch from main in Neon dashboard
2. Copy connection string (pooled)

#### Strapi on Render (Staging)
1. Create new Web Service:
   - Name: `nexclinical-strapi-staging`
   - Environment: `Node`
   - Build Command: `cd apps/cms && pnpm install && pnpm build`
   - Start Command: `cd apps/cms && pnpm start`
   - Plan: Starter (or higher)
2. Add environment variables (same as dev but with staging values)
3. Set custom domain: `staging-api.nexclinical.com`
4. Configure health check path: `/api/health` (create custom endpoint)

**Environment Variables (Render)**:
```env
HOST=0.0.0.0
PORT=10000
NODE_ENV=production

# Generate new secrets for staging
APP_KEYS=...
API_TOKEN_SALT=...
ADMIN_JWT_SECRET=...
TRANSFER_TOKEN_SALT=...
JWT_SECRET=...

# Neon staging connection (pooled)
DATABASE_CLIENT=postgres
DATABASE_HOST=ep-xxx-pooler.us-east-2.aws.neon.tech
DATABASE_PORT=5432
DATABASE_NAME=nexclinical
DATABASE_USERNAME=nexclinical_user
DATABASE_PASSWORD=your-neon-password
DATABASE_SSL=true

# Cloudflare R2 staging
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_REGION=auto
AWS_ENDPOINT=https://your-account-id.r2.cloudflarestorage.com
AWS_BUCKET=nexclinical-media-staging
AWS_PUBLIC_URL=https://media-staging.nexclinical.com
```

#### Frontend on Vercel (Staging)
1. Connect GitHub repo to Vercel
2. Import project
3. Root Directory: `apps/frontend`
4. Framework Preset: Next.js
5. Install Command: `pnpm install --frozen-lockfile`
6. Build Command: `pnpm build`
7. Output Directory: `.next`
8. Node Version: 20.x

**Environment Variables (Vercel - Staging)**:
```env
NEXT_PUBLIC_SITE_URL=https://staging.nexclinical.com
NEXT_PUBLIC_STRAPI_URL=https://staging-api.nexclinical.com
STRAPI_API_TOKEN=your-staging-token
RESEND_API_KEY=your-resend-key
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-turnstile-key
TURNSTILE_SECRET_KEY=your-turnstile-secret
```

**Custom Domain**:
- Add `staging.nexclinical.com` in Vercel dashboard
- Update DNS: CNAME → `cname.vercel-dns.com`

### Production

#### Neon Database (Production)
1. Use main branch
2. Enable point-in-time recovery
3. Set up automated backups
4. Copy pooled connection string

#### Strapi on Render (Production)
1. Create new Web Service:
   - Name: `nexclinical-strapi-prod`
   - Same settings as staging
   - Plan: Professional (for always-on, autoscaling)
2. Add environment variables (production values)
3. Set custom domain: `api.nexclinical.com`
4. Enable auto-deploy from `main` branch

**Environment Variables (Render - Production)**:
```env
HOST=0.0.0.0
PORT=10000
NODE_ENV=production

# Generate NEW secrets for production
APP_KEYS=...
API_TOKEN_SALT=...
ADMIN_JWT_SECRET=...
TRANSFER_TOKEN_SALT=...
JWT_SECRET=...

# Neon production connection (pooled)
DATABASE_CLIENT=postgres
DATABASE_HOST=ep-xxx-pooler.us-east-2.aws.neon.tech
DATABASE_PORT=5432
DATABASE_NAME=nexclinical
DATABASE_USERNAME=nexclinical_user
DATABASE_PASSWORD=your-neon-password
DATABASE_SSL=true

# Cloudflare R2 production
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_REGION=auto
AWS_ENDPOINT=https://your-account-id.r2.cloudflarestorage.com
AWS_BUCKET=nexclinical-media
AWS_PUBLIC_URL=https://media.nexclinical.com
```

#### Frontend on Vercel (Production)
1. Assign production domain
2. Add environment variables (production values)
3. Enable automatic deployments from `main` branch
4. Configure deployment protection if needed

**Environment Variables (Vercel - Production)**:
```env
NEXT_PUBLIC_SITE_URL=https://www.nexclinical.com
NEXT_PUBLIC_STRAPI_URL=https://api.nexclinical.com
STRAPI_API_TOKEN=your-production-token
RESEND_API_KEY=your-resend-key
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-turnstile-key
TURNSTILE_SECRET_KEY=your-turnstile-secret
```

**Custom Domains**:
- Add `nexclinical.com` and `www.nexclinical.com`
- Redirect apex → www (or vice versa)
- Update DNS: 
  - A record @ → 76.76.21.21
  - CNAME www → cname.vercel-dns.com

## Cloudflare Configuration

### R2 Buckets
1. Create buckets:
   - `nexclinical-media-dev`
   - `nexclinical-media-staging`
   - `nexclinical-media` (production)
2. Enable public access (or use signed URLs)
3. Set CORS policy:
```json
[
  {
    "AllowedOrigins": ["https://www.nexclinical.com", "https://api.nexclinical.com"],
    "AllowedMethods": ["GET", "PUT", "POST"],
    "AllowedHeaders": ["*"],
    "MaxAgeSeconds": 3600
  }
]
```

### CDN
1. Create R2 custom domain:
   - `media.nexclinical.com` → production bucket
   - `media-staging.nexclinical.com` → staging bucket
2. Enable caching (respect origin headers)
3. Add cache rules (1 year for immutable assets)

### WAF (Web Application Firewall)
1. Proxy `api.nexclinical.com` through Cloudflare
2. Enable WAF managed rules
3. Rate limiting:
   - `/api/auth/*`: 5 req/min per IP
   - `/admin`: IP allowlist only
4. Bot protection: Challenge on suspicious patterns

## Deployment Workflow

### Automated (CI/CD)

#### On Push to `main`:
1. Run tests and linting
2. Build frontend and CMS
3. Deploy Strapi to Render (auto)
4. Deploy frontend to Vercel (auto)
5. Run smoke tests
6. Notify team (Slack/email)

#### On Pull Request:
1. Create Vercel preview deployment
2. Run Lighthouse CI
3. Comment PR with preview URL + scores

### Manual Deployment

#### Deploy Frontend Only:
```bash
# Via Vercel CLI
cd apps/frontend
vercel --prod
```

#### Deploy CMS Only:
```bash
# Trigger Render deploy
git push origin main
# Or use Render dashboard "Manual Deploy"
```

#### Deploy Both:
```bash
# Push to main triggers both
git push origin main
```

## Rollback Procedures

### Frontend Rollback (Vercel)
1. Go to Vercel dashboard → Deployments
2. Find previous successful deployment
3. Click "..." → "Promote to Production"
4. Instant rollback (< 1 minute)

Or via CLI:
```bash
vercel rollback
```

### CMS Rollback (Render)
1. Go to Render dashboard → Web Service
2. Find previous deploy
3. Click "Redeploy"

Or redeploy a specific commit:
```bash
git revert HEAD
git push origin main
```

### Database Rollback (Neon)
1. Use point-in-time recovery
2. Restore to timestamp before issue
3. Update connection strings if needed

## Webhooks & Revalidation

### Strapi → Vercel Webhook

#### Setup in Strapi:
1. Settings → Webhooks → Add webhook
2. URL: `https://www.nexclinical.com/api/revalidate?secret=YOUR_SECRET`
3. Events: `entry.publish`, `entry.update`, `entry.unpublish`
4. Enabled: Yes

#### Next.js API Route:
```typescript
// apps/frontend/app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  const body = await request.json();
  const { model, entry } = body;

  // Revalidate based on content type
  if (model === 'home') {
    revalidatePath('/');
  } else if (model === 'service') {
    revalidatePath(`/services/${entry.slug}`);
    revalidatePath('/services');
  } else if (model === 'post') {
    revalidatePath(`/blog/${entry.slug}`);
    revalidatePath('/blog');
  }

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
```

## Monitoring

### Uptime Monitoring
- Vercel: Built-in monitoring
- Render: Built-in monitoring
- External: UptimeRobot or Pingdom for both domains

### Performance Monitoring
- Vercel Analytics (Real User Monitoring)
- Lighthouse CI in GitHub Actions
- Core Web Vitals tracking

### Error Tracking
- Sentry for frontend errors
- Strapi error logs in Render
- Cloudflare analytics for WAF blocks

### Alerts
- Uptime alerts → Slack/Email
- Error rate threshold → Sentry alerts
- Performance regression → Lighthouse CI fails

## Backup & Disaster Recovery

### Database Backups
- **Automated**: Neon daily backups + PITR
- **Manual**: Export via `pg_dump` weekly
- **Retention**: 30 days automated, 90 days manual
- **Test restore**: Monthly

### Media Backups
- **R2 versioning**: Enabled (30-day retention)
- **Replication**: Optional (S3 backup bucket)
- **Test restore**: Quarterly

### Code Backups
- **Primary**: GitHub
- **Mirror**: GitLab (optional)
- **Tags**: Semantic versioning on releases

### Recovery Time Objectives
- **Frontend**: < 5 minutes (Vercel rollback)
- **CMS**: < 15 minutes (Render redeploy)
- **Database**: < 30 minutes (Neon restore)
- **Full disaster**: < 2 hours (complete rebuild)

## Security Checklist

- [ ] All secrets rotated from defaults
- [ ] HTTPS enforced everywhere
- [ ] Security headers configured
- [ ] WAF rules active
- [ ] IP allowlist on Strapi admin
- [ ] Rate limiting configured
- [ ] Database SSL enforced
- [ ] Regular dependency updates
- [ ] Backup recovery tested
- [ ] Monitoring alerts active

## Troubleshooting

### Build Failures
- Check build logs in Vercel/Render
- Verify environment variables
- Test locally: `pnpm build`
- Check dependency versions

### Deployment Slow
- Check bundle size (Next.js build output)
- Review ISR/SSG configuration
- Verify CDN caching headers

### Content Not Updating
- Check Strapi webhook logs
- Verify revalidation endpoint
- Manual revalidation: `curl https://www.nexclinical.com/api/revalidate?secret=SECRET`

### Database Connection Issues
- Verify connection string (pooled vs direct)
- Check connection limits
- Review Neon dashboard for errors
- Test connection: `psql [connection-string]`

## Support Contacts

- **Vercel**: support@vercel.com
- **Render**: support@render.com
- **Neon**: support@neon.tech
- **Cloudflare**: support@cloudflare.com
