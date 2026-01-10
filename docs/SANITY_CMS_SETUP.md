# Sanity CMS Setup Guide

This guide walks you through setting up Sanity CMS for the NexClinical medical practice website platform.

## 🎯 Overview

Sanity CMS provides:
- **Visual Content Editor** - Client-friendly editing interface
- **Structured Content** - Type-safe schemas for medical practices
- **Real-time Preview** - See changes before publishing (coming soon)
- **Multi-site Ready** - Single CMS for 20+ medical practice sites
- **Zero Maintenance** - Fully managed backend

**Note**: Due to React 19 compatibility, Sanity Studio is deployed separately from the Next.js frontend. The frontend uses Sanity's content API (which works perfectly with React 19).

## 📋 Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)
- Sanity account (free tier available)

## 🚀 Quick Setup (10 Minutes)

### Step 1: Create Sanity Project

1. Go to https://www.sanity.io/manage
2. Click **"Create new project"**
3. Name it: `nexclinical-cms`
4. Choose dataset: `production`
5. Copy your **Project ID** (e.g., `abc123xyz`)

### Step 2: Configure Environment

Update `apps/frontend/.env.local`:

```env
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### Step 3: Start Development

**Option A: Run Studio Locally**

```bash
cd apps/sanity-studio
pnpm install
pnpm dev
```

Access at http://localhost:3333

**Option B: Deploy Studio to Sanity (Recommended)**

```bash
cd apps/sanity-studio
pnpm install
npx sanity deploy
```

Choose a custom subdomain (e.g., `nexclinical`), then access at:
`https://nexclinical.sanity.studio`

### Step 4: Run Frontend

```bash
cd apps/frontend
pnpm dev
```

Frontend at http://localhost:3000

## 📊 Content Types

The CMS includes schemas optimized for medical practice websites:

### Documents (Main Content)

| Content Type | Description | Use Case |
|-------------|-------------|----------|
| **Page** | Website pages with modular sections | Homepage, About, Contact |
| **Blog Post** | Articles with rich content | Health tips, news, updates |
| **Service** | Medical services offered | Patient Scheduling, Insurance |
| **Doctor** | Team member profiles | Physicians, NPs, Staff |
| **Location** | Office locations | Addresses, hours, maps |
| **Category** | Blog categories | Health, News, Tips |
| **Global Settings** | Site-wide configuration | Logo, colors, contact info |

### Page Builder Blocks

Pages use a modular block system:

| Block | Purpose |
|-------|---------|
| **Hero** | Large banner with CTA |
| **Services** | Grid of service cards |
| **Features** | Icon + text features |
| **Testimonials** | Patient reviews |
| **FAQ** | Accordion Q&A |
| **CTA** | Call-to-action banner |
| **Team** | Doctor/staff cards |
| **Contact** | Contact form + map |
| **Rich Text** | Free-form content |

## 🔧 Fetching Content

### Using Query Functions

```typescript
import { 
  getGlobalSettings,
  getAllServices,
  getPageBySlug,
  getDoctorBySlug 
} from '@/sanity'

// In a Server Component
export default async function HomePage() {
  const settings = await getGlobalSettings()
  const services = await getAllServices()
  
  return (
    <div>
      <h1>{settings.siteName}</h1>
      {services.map(service => (
        <ServiceCard key={service._id} {...service} />
      ))}
    </div>
  )
}
```

### Using the Client Directly

```typescript
import { client } from '@/sanity'
import { groq } from 'next-sanity'

const query = groq`*[_type == "service" && featured == true]{
  _id,
  title,
  slug,
  shortDescription,
  icon
}`

const featuredServices = await client.fetch(query)
```

### Rendering Rich Text

```typescript
import { PortableText } from '@/sanity/components'

export default function BlogPost({ content }) {
  return (
    <article>
      <PortableText value={content} />
    </article>
  )
}
```

### Image URLs

```typescript
import { urlFor, getImageUrl } from '@/sanity'

// Simple URL
const imageUrl = urlFor(doctor.photo).width(400).url()

// With options
const optimizedUrl = getImageUrl(service.image, {
  width: 800,
  height: 600,
  quality: 80,
  format: 'webp'
})
```

## 🌐 Deploying to Vercel

### Environment Variables

Add these to your Vercel project:

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | `2024-01-01` |

### CORS Configuration

In Sanity project settings, add your domains:
1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to **API** → **CORS origins**
4. Add:
   - `http://localhost:3000`
   - `https://nexclincalwebsite.vercel.app`
   - Your production domain

## 👥 User Roles & Permissions

### Setting Up Client Access

1. Go to Sanity project settings
2. Navigate to **Members**
3. Invite client with **Editor** role

### Editor Permissions (Recommended for Clients)
- ✅ Create/edit content
- ✅ Upload images
- ✅ Publish changes
- ❌ Modify schemas
- ❌ Delete documents (optional)
- ❌ Access settings

## 📁 File Structure

```
apps/
├── frontend/              # Next.js 15 app
│   └── sanity/
│       ├── lib/
│       │   ├── client.ts  # Sanity client setup
│       │   ├── queries.ts # GROQ queries
│       │   └── index.ts
│       └── index.ts       # Main exports
│
└── sanity-studio/         # Sanity Studio (React 18)
    ├── schemas/           # Content type definitions
    │   ├── page.ts
    │   ├── blogPost.ts
    │   ├── service.ts
    │   ├── doctor.ts
    │   ├── location.ts
    │   ├── category.ts
    │   ├── globalSettings.ts
    │   ├── blocks.ts      # Page builder blocks
    │   └── index.ts
    ├── structure.ts       # Desk structure
    ├── sanity.config.ts   # Studio configuration
    ├── sanity.cli.ts      # CLI configuration
    └── package.json
```

## 🔄 Content Migration from WordPress

### Manual Migration (Recommended for Quality)

1. **Export WordPress content** using WP All Export or manual copy
2. **Create content in Sanity Studio** at `/studio`
3. **Upload images** directly in Sanity
4. **Verify links** and formatting

### Automated Migration

For bulk content, use Sanity's migration tool:

```bash
# Install Sanity CLI
npm install -g @sanity/cli

# Create migration script
sanity exec scripts/migrate-from-wp.ts --with-user-token
```

## 📈 SEO Configuration

Each content type includes SEO fields:

- **seoTitle** - Custom title for search engines
- **seoDescription** - Meta description
- **ogImage** - Social sharing image
- **noIndex** - Hide from search engines

### Generating Metadata

```typescript
import { getPageBySlug, getGlobalSettings, urlFor } from '@/sanity'
import type { Metadata } from 'next'

export async function generateMetadata({ params }): Promise<Metadata> {
  const page = await getPageBySlug(params.slug)
  const settings = await getGlobalSettings()
  
  return {
    title: page.seoTitle || page.title,
    description: page.seoDescription || settings.defaultSeoDescription,
    openGraph: {
      images: page.ogImage ? [urlFor(page.ogImage).width(1200).url()] : [],
    },
  }
}
```

## 🧪 Testing CMS Integration

### Verify Connection

```typescript
// In a test file or API route
import { client } from '@/sanity'

export async function GET() {
  const settings = await client.fetch(`*[_type == "globalSettings"][0]`)
  return Response.json({ connected: true, settings })
}
```

### Common Issues

| Issue | Solution |
|-------|----------|
| "Project not found" | Check `NEXT_PUBLIC_SANITY_PROJECT_ID` |
| CORS error | Add domain to Sanity CORS settings |
| Empty data | Ensure content is published in Studio |
| Build error | Run `pnpm build` to check types |

## 🎨 Customizing Sanity Studio

### Adding Custom Branding

Edit `sanity/sanity.config.ts`:

```typescript
export default defineConfig({
  name: 'nexclinical-cms',
  title: 'Your Practice Name CMS',
  // ...
})
```

### Adding Custom Document Actions

```typescript
// In sanity.config.ts
import { defineConfig } from 'sanity'

export default defineConfig({
  // ...
  document: {
    actions: (prev, context) => {
      // Custom actions
      return prev
    },
  },
})
```

## 📚 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/nextjs-app-router-live-preview)
- [Sanity Community Slack](https://slack.sanity.io/)

## ✅ Migration Checklist

Based on your WordPress migration PDF:

- [ ] Create Sanity project
- [ ] Configure environment variables
- [ ] Set up CORS origins
- [ ] Import/recreate pages in Studio
- [ ] Migrate blog posts with dates/slugs
- [ ] Upload optimized images
- [ ] Configure SEO fields
- [ ] Set up client roles
- [ ] Test preview mode
- [ ] Deploy to Vercel
- [ ] Configure production domain
- [ ] Train client on Studio
- [ ] Decommission WordPress

---

**Need Help?** Check the [Sanity documentation](https://www.sanity.io/docs) or the NexClinical project docs.
