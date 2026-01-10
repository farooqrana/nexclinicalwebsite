# Payload CMS + Vercel Deployment Guide

## What Changed

Instead of running Payload CMS as a separate server, it's now **integrated directly into the Next.js app**. This makes it deployable to Vercel.

## Current Setup

### Architecture
```
Next.js App (Vercel)
├── Frontend pages (/, /services/*, etc.)
├── /admin → Payload CMS Admin UI
└── /api → Payload CMS REST API
```

**Admin Panel**: https://nexclinical.com/admin  
**API**: https://nexclinical.com/api

### Files Added
1. `apps/frontend/app/(payload)/admin/[[...segments]]/route.ts` - Admin UI route
2. `apps/frontend/app/(payload)/api/[[...segments]]/route.ts` - REST API route
3. `apps/frontend/payload.config.ts` - Payload configuration

### Dependencies Added
- `payload@beta` - CMS engine
- `@payloadcms/db-mongodb@beta` - MongoDB adapter
- `@payloadcms/next@beta` - Next.js integration
- `@payloadcms/richtext-slate@beta` - Rich text editor

## Database Options for Vercel

### Option 1: MongoDB Atlas (Recommended)
**Cost**: Free for up to 512MB  
**Setup**: 5 minutes

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create free cluster
3. Create database user
4. Whitelist IP: `0.0.0.0/0` (allow from anywhere)
5. Get connection string:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/nexclinical-cms
   ```

6. Add to Vercel environment variables:
   ```
   DATABASE_URI=mongodb+srv://username:password@cluster.mongodb.net/nexclinical-cms
   PAYLOAD_SECRET=your-super-secret-key-change-this-123456789
   NEXT_PUBLIC_SERVER_URL=https://nexclinical.com
   ```

### Option 2: Vercel Postgres + Payload (Alternative)
Payload CMS 3.0 supports PostgreSQL via `@payloadcms/db-postgres`

**Cost**: Free tier available  
**Setup**: 10 minutes

1. Create Vercel Postgres database in your project
2. Change adapter in `payload.config.ts`:
   ```typescript
   import { postgresAdapter } from '@payloadcms/db-postgres'
   
   db: postgresAdapter({
     pool: {
       connectionString: process.env.POSTGRES_URL,
     },
   })
   ```

3. Install dependency:
   ```bash
   pnpm add @payloadcms/db-postgres
   ```

## Local Development

### With MongoDB Atlas (No Local MongoDB Needed)
```bash
# 1. Update .env.local with MongoDB Atlas connection string
DATABASE_URI=mongodb+srv://your-connection-string
PAYLOAD_SECRET=dev-secret-12345
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# 2. Start dev server
cd apps/frontend
pnpm dev

# 3. Access admin panel
# http://localhost:3000/admin
```

### With Local MongoDB (If Installed)
```bash
# 1. Start MongoDB
mongod

# 2. Start dev server
cd apps/frontend
pnpm dev

# 3. Access admin panel
# http://localhost:3000/admin
```

## Vercel Deployment

### Step 1: Set Environment Variables in Vercel

```bash
vercel env add DATABASE_URI
# Paste: mongodb+srv://username:password@cluster.mongodb.net/nexclinical-cms

vercel env add PAYLOAD_SECRET
# Paste: your-super-secret-key-at-least-32-chars-long

vercel env add NEXT_PUBLIC_SERVER_URL
# Paste: https://nexclinical.com (or your domain)
```

Or in Vercel Dashboard:
1. Go to your project
2. Settings → Environment Variables
3. Add:
   - `DATABASE_URI` (production + preview)
   - `PAYLOAD_SECRET` (production + preview)
   - `NEXT_PUBLIC_SERVER_URL` (production + preview)

### Step 2: Deploy

```bash
cd apps/frontend
vercel --prod
```

Or push to GitHub (auto-deploys via webhook).

### Step 3: Create Admin User

1. Go to `https://nexclinical.com/admin`
2. First user created is automatically admin
3. Enter email and password
4. Access CMS!

## Testing CMS Functionality

### Test 1: Access Admin Panel
```
URL: http://localhost:3000/admin (local)
     https://nexclinical.com/admin (production)
     
Expected: Payload CMS login screen
```

### Test 2: Create Branding Config
1. Login to admin
2. Collections → Branding
3. Create new entry:
   - Primary Color: `#0284c7`
   - Heading Font: `inter`
   - Site Name: `NexClinical`
4. Save & Publish

### Test 3: Fetch via API
```bash
# Local
curl http://localhost:3000/api/branding

# Production
curl https://nexclinical.com/api/branding
```

Expected response:
```json
{
  "docs": [
    {
      "id": "...",
      "primaryColor": "#0284c7",
      "headingFont": "inter",
      "siteName": "NexClinical",
      ...
    }
  ]
}
```

### Test 4: Create Test Page
1. Collections → Pages
2. Create new page:
   - Title: "Test Page"
   - Slug: "test-page"
   - Status: "Published"
   - Hero Title: "Welcome"
3. Save & Publish

### Test 5: Verify Frontend Integration
```typescript
// In any server component
import { getBranding } from '@/lib/cms-client'

export default async function Page() {
  const branding = await getBranding()
  return <div style={{ color: branding?.primaryColor }}>Hello</div>
}
```

## Troubleshooting

### Issue: "Cannot connect to database"
**Fix**: 
1. Check `DATABASE_URI` is set correctly in environment variables
2. For MongoDB Atlas, ensure IP whitelist includes `0.0.0.0/0`
3. Verify database user has read/write permissions

### Issue: "Admin panel shows 404"
**Fix**:
1. Ensure route files exist in `app/(payload)/admin/[[...segments]]/route.ts`
2. Verify `payload.config.ts` is in the root of the frontend app
3. Clear `.next` cache: `rm -rf .next && pnpm dev`

### Issue: "API returns 500 error"
**Fix**:
1. Check Vercel logs: `vercel logs`
2. Verify `PAYLOAD_SECRET` is set (minimum 32 characters)
3. Check database connection string format

### Issue: Peer dependency warnings (React 19)
**Fix**: These are warnings only and won't break functionality. Payload CMS will update to support React 19 in future releases.

## Cost Comparison

### MongoDB Atlas Free Tier
- Database: 512MB (sufficient for 100+ pages)
- Storage: Unlimited reads/writes
- Cost: $0/month

### MongoDB Atlas Paid (if needed)
- 10GB storage: $0.08/GB/month = $0.80/month
- Unlimited bandwidth
- Cost: <$1/month for small sites

### Vercel Hosting
- Next.js app + Payload CMS: $20/month (Pro tier)
- Already included in existing NexClinical hosting
- No additional cost

### Total: $0-20/month
- 20+ client sites managed
- Unlimited customization
- Zero plugin fees

Compare to WordPress:
- 20 sites × $20/month = $400/month
- Savings: $380/month ($4,560/year)

## Next Steps

1. **Set up MongoDB Atlas** (5 minutes)
   - Create free cluster
   - Get connection string
   - Add to `.env.local`

2. **Test locally** (10 minutes)
   - Start dev server
   - Access `/admin`
   - Create branding config
   - Create test page

3. **Deploy to Vercel** (10 minutes)
   - Add environment variables
   - Deploy: `vercel --prod`
   - Create admin user
   - Verify admin panel works

4. **Integration** (1-2 hours)
   - Update homepage to use CMS data
   - Migrate service pages to CMS
   - Test customization features

5. **Documentation** (30 minutes)
   - Client training guide
   - Admin user manual
   - Customization capabilities

## Admin Panel URLs

**Local Development**: http://localhost:3000/admin  
**Production**: https://nexclinical.com/admin  
**API Documentation**: https://nexclinical.com/api-docs (auto-generated by Payload)

## Collections Reference

| Collection | Purpose | URL |
|-----------|---------|-----|
| **Branding** | Colors, fonts, site info | /api/branding |
| **Pages** | Website pages & content | /api/pages |
| **Media** | Images & files | /api/media |
| **Users** | Admin access control | /api/users |

---

**Status**: ✅ Ready for deployment  
**Estimated Setup Time**: 30 minutes  
**Monthly Cost**: $0-20 (free tier available)

**Next**: Set up MongoDB Atlas and deploy to Vercel
