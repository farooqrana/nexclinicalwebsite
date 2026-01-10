# Sanity CMS Setup & Frontend Integration Guide

**Purpose**: Step-by-step guide to connect NexClinical frontend to Sanity CMS, aligned with WordPress→Next.js+Sanity Migration Checklist

---

## 🎯 Overview

This guide implements **Phase 3-5** of the WordPress migration checklist:
- ✅ Phase 3: Sanity CMS Setup (schemas already defined)
- 🔄 Phase 4: Frontend Build (connecting to CMS)
- 🔄 Phase 5: Content Migration (populating Sanity)

---

## Step 1: Create Sanity Project

### 1.1 Sign Up / Log In
1. Visit https://www.sanity.io/manage
2. Sign up with GitHub, Google, or email
3. Verify your email

### 1.2 Create New Project
```
Click "Create new project"
├─ Project name: "NexClinical"
├─ Dataset: "production"
├─ Project template: "Clean project"
└─ Region: Select closest to your users (US, EU, Asia)
```

### 1.3 Copy Project ID
```
After creation, you'll see:
├─ Project ID: abc123xyz (example)
└─ Save this! You'll need it for .env files
```

---

## Step 2: Configure Environment Variables

### 2.1 Frontend (.env.local)
```bash
# Location: apps/frontend/.env.local

# Replace 'your-project-id' with your actual Sanity project ID
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Optional: For draft preview mode
SANITY_API_READ_TOKEN=
```

### 2.2 Sanity Studio (.env.local)
```bash
# Location: apps/sanity-studio/.env.local

# Same project ID as frontend
SANITY_STUDIO_PROJECT_ID=abc123xyz
SANITY_STUDIO_DATASET=production
```

---

## Step 3: Deploy Sanity Studio

### 3.1 Install Dependencies
```bash
cd apps/sanity-studio
pnpm install
```

### 3.2 Deploy to Sanity Cloud
```bash
# Deploy studio to https://nexclinical.sanity.studio
pnpm sanity deploy

# Follow prompts:
├─ Studio hostname: nexclinical (or your-name)
├─ Confirm deployment
└─ Studio URL: https://nexclinical.sanity.studio
```

### 3.3 Or Run Locally
```bash
# Alternative: Run studio locally during development
cd apps/sanity-studio
pnpm dev

# Studio accessible at: http://localhost:3333
```

---

## Step 4: Populate Initial Content

### 4.1 Create Global Settings
```
1. Open Sanity Studio (cloud or localhost:3333)
2. Click "Global Settings" in sidebar
3. Fill in:
   ├─ Site Name: "NexClinical"
   ├─ Tagline: "Virtual Medical Support For Small Practices"
   ├─ Main Phone: "(516) 886-6137"
   ├─ Main Email: "hello@nexclinical.com"
   ├─ Primary Color: "#0284c7"
   └─ Social Links: Add Facebook, LinkedIn, Instagram URLs
4. Click "Publish"
```

### 4.2 Create Services (Minimum 3)
```
Service 1:
├─ Title: "Patient Scheduling"
├─ Slug: "patient-scheduling"
├─ Description: "We handle all your incoming calls, patient reminders, and scheduling..."
├─ Icon: "phone" (or upload icon)
├─ Featured: ✓
└─ Publish

Service 2:
├─ Title: "Authorization & Verification"
├─ Slug: "authorization-verification"
├─ Description: "Prior auths, benefits verification & eligibility checks completed..."
└─ Publish

Service 3:
├─ Title: "Clinical Support"
├─ Slug: "clinical-support"
├─ Description: "Leave by 5pm. Have your EHR charting, prescription refills..."
└─ Publish
```

### 4.3 Create Homepage (Page Builder)
```
1. Click "Pages" → "Create new page"
2. Set:
   ├─ Title: "Home"
   ├─ Slug: "home"
   └─ Page Builder: Add blocks

3. Add Hero Block:
   ├─ Heading: "Virtual Medical Support For Small Practices"
   ├─ Description: "Have insurance authorizations, patient scheduling, & clinical notes handled..."
   ├─ CTA Text: "Book Consultation"
   ├─ CTA Link: "https://calendly.com/nexclinical/15min"
   └─ Background Style: "gradient"

4. Add Services Block:
   ├─ Title: "Run Your Practice, Not Your Paperwork"
   ├─ Description: "Practices lose hours every day..."
   ├─ Services: Select the 3 services created above
   └─ Layout: "grid" (3 columns)

5. Add Stats Block:
   ├─ Stats Item 1: Value="150+", Label="Practices Served"
   ├─ Stats Item 2: Value="40%", Label="No-Show Reduction"
   ├─ Stats Item 3: Value="<1%", Label="Denial Rate"
   ├─ Stats Item 4: Value="20+hrs", Label="Saved per Week"
   └─ Background: "gray"

6. Publish
```

---

## Step 5: Connect Frontend to Sanity

### 5.1 Test Sanity Connection
```bash
cd apps/frontend

# Create a test script to verify connection
node -e "
const { createClient } = require('@sanity/client');
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true,
});

client.fetch('*[_type == \"globalSettings\"][0]')
  .then(data => console.log('✅ Connected!', data))
  .catch(err => console.error('❌ Error:', err));
"
```

### 5.2 Update Homepage Component

**File**: `apps/frontend/app/page.tsx`

```typescript
import { getPageBySlug, getGlobalSettings, getAllServices } from '@/sanity/lib/queries';

export default async function HomePage() {
  // Fetch data from Sanity
  const settings = await getGlobalSettings();
  const page = await getPageBySlug('home');
  const services = await getAllServices();

  // Extract hero block from page builder
  const heroBlock = page?.pageBuilder?.find(b => b._type === 'hero');
  const statsBlock = page?.pageBuilder?.find(b => b._type === 'stats');

  return (
    <main className="min-h-screen">
      {/* Hero Section - Now CMS-powered */}
      <section className="bg-gradient-to-br from-blue-50 via-primary-50 to-blue-100 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {heroBlock?.heading || 'Virtual Medical Support For Small Practices'}
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                {heroBlock?.description || 'Default description...'}
              </p>
              <Button size="lg" asChild>
                <a href={heroBlock?.ctaLink || '#'}>
                  {heroBlock?.ctaText || 'Get Started'} →
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - CMS-powered */}
      {statsBlock && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
              {statsBlock.stats?.map((stat: any) => (
                <div key={stat._key} className="text-center">
                  <div className="text-5xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-700 font-semibold mb-1">{stat.label}</p>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section - CMS-powered */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Run Your Practice, Not Your Paperwork
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services?.slice(0, 3).map((service: any) => (
                <Card key={service._id}>
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
```

---

## Step 6: Build Page Builder System

### 6.1 Create Block Renderer Component

**File**: `apps/frontend/components/blocks/BlockRenderer.tsx`

```typescript
import { HeroBlock } from './HeroBlock';
import { ServicesBlock } from './ServicesBlock';
import { StatsBlock } from './StatsBlock';
import { TestimonialsBlock } from './TestimonialsBlock';
import { FAQBlock } from './FAQBlock';
import { CTABlock } from './CTABlock';

interface BlockRendererProps {
  blocks: any[];
}

export function BlockRenderer({ blocks }: BlockRendererProps) {
  if (!blocks || blocks.length === 0) {
    return <div>No content available</div>;
  }

  return (
    <>
      {blocks.map((block) => {
        switch (block._type) {
          case 'hero':
            return <HeroBlock key={block._key} data={block} />;
          case 'services':
            return <ServicesBlock key={block._key} data={block} />;
          case 'stats':
            return <StatsBlock key={block._key} data={block} />;
          case 'testimonials':
            return <TestimonialsBlock key={block._key} data={block} />;
          case 'faq':
            return <FAQBlock key={block._key} data={block} />;
          case 'cta':
            return <CTABlock key={block._key} data={block} />;
          default:
            console.warn(`Unknown block type: ${block._type}`);
            return null;
        }
      })}
    </>
  );
}
```

### 6.2 Create Individual Block Components

**File**: `apps/frontend/components/blocks/HeroBlock.tsx`

```typescript
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/client';

export function HeroBlock({ data }: { data: any }) {
  const { heading, description, ctaText, ctaLink, image, backgroundStyle } = data;

  return (
    <section className={`pt-32 pb-20 md:pt-40 md:pb-32 ${
      backgroundStyle === 'gradient' 
        ? 'bg-gradient-to-br from-blue-50 via-primary-50 to-blue-100'
        : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-primary-600 leading-tight">
              {heading}
            </h1>
            {description && (
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {description}
              </p>
            )}
            {ctaText && ctaLink && (
              <Button size="lg" className="bg-primary-600 text-white hover:bg-primary-700" asChild>
                <a href={ctaLink}>{ctaText} →</a>
              </Button>
            )}
          </div>
          {image && (
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={urlFor(image).width(800).url()}
                  alt={heading}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
```

**File**: `apps/frontend/components/blocks/ServicesBlock.tsx`

```typescript
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export function ServicesBlock({ data }: { data: any }) {
  const { title, description, selectedServices, layout } = data;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {title && (
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gray-900">
                {title}
              </h2>
              {description && (
                <p className="text-xl text-gray-600">{description}</p>
              )}
            </div>
          )}
          <div className={`grid ${layout === 'grid' ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-8`}>
            {selectedServices?.map((service: any) => (
              <Card key={service._id} className="border-0 shadow-md hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  {service.slug && (
                    <Link 
                      href={`/services/${service.slug.current}`}
                      className="text-primary-600 font-semibold hover:underline"
                    >
                      Learn more →
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## Step 7: Test CMS Integration

### 7.1 Restart Development Server
```bash
cd apps/frontend
pnpm dev
```

### 7.2 Verify Content Loading
1. Visit http://localhost:3000
2. Check browser console for errors
3. Verify hero heading shows Sanity content
4. Verify services cards display from CMS

### 7.3 Test Live Editing
1. Open Sanity Studio
2. Edit homepage hero heading
3. Click "Publish"
4. Refresh website (should see changes in 5-10 seconds)

---

## Step 8: Configure CORS (Important!)

### 8.1 Add Allowed Origins in Sanity
```
1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to "API" → "CORS Origins"
4. Click "Add CORS origin"
5. Add:
   ├─ http://localhost:3000 (development)
   ├─ http://localhost:3333 (studio)
   ├─ https://nexclincalwebsite.vercel.app (production)
   └─ https://nexclinical.sanity.studio (if deployed)
6. Save
```

---

## Step 9: Set Up Webhooks for Auto-Revalidation

### 9.1 Create Webhook Endpoint

**File**: `apps/frontend/app/api/revalidate/route.ts`

```typescript
import { revalidatePath, revalidateTag } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');

  // Verify secret token
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  try {
    const body = await request.json();
    
    // Revalidate based on document type
    if (body._type === 'page') {
      revalidatePath(`/${body.slug?.current || ''}`);
    } else if (body._type === 'service') {
      revalidatePath('/services');
      revalidatePath(`/services/${body.slug?.current}`);
    } else {
      // Revalidate everything
      revalidatePath('/', 'layout');
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating', error: String(err) },
      { status: 500 }
    );
  }
}
```

### 9.2 Configure Webhook in Sanity
```
1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to "API" → "Webhooks"
4. Click "Create webhook"
5. Configure:
   ├─ Name: "Vercel ISR Revalidation"
   ├─ URL: https://nexclincalwebsite.vercel.app/api/revalidate?secret=YOUR_SECRET
   ├─ Dataset: "production"
   ├─ Trigger on: create, update, delete
   ├─ HTTP method: POST
   └─ API version: v2021-03-25
6. Save
```

### 9.3 Generate and Add Secret
```bash
# Generate random secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Add to .env.local
REVALIDATE_SECRET=your-generated-secret-here

# Also add to Vercel environment variables in dashboard
```

---

## Step 10: Verify Full Workflow

### 10.1 Content Update Test
```
1. Edit content in Sanity Studio
2. Click "Publish"
3. Wait 5-10 seconds
4. Refresh website
5. Verify changes appear (without redeploying!)
```

### 10.2 New Page Creation Test
```
1. In Sanity Studio, create new page
2. Add blocks (Hero, Services, CTA)
3. Set slug: "test-page"
4. Publish
5. Visit: http://localhost:3000/test-page
6. Verify page renders with your blocks
```

---

## 🎯 Success Checklist

- [ ] Sanity project created with ID
- [ ] Environment variables configured (both apps)
- [ ] Sanity Studio deployed or running locally
- [ ] Global Settings populated
- [ ] At least 3 services created
- [ ] Homepage created with blocks
- [ ] Frontend connected to Sanity (data fetching)
- [ ] Homepage displays CMS content
- [ ] CORS configured for all domains
- [ ] Webhook configured for auto-revalidation
- [ ] Content changes reflect on website within 10 seconds
- [ ] No console errors in browser

---

## 🐛 Troubleshooting

### Error: "Invalid project ID"
```
Check:
1. .env.local has correct NEXT_PUBLIC_SANITY_PROJECT_ID
2. Restart dev server after changing .env
3. Project ID matches Sanity dashboard
```

### Error: "CORS policy blocked"
```
Fix:
1. Go to Sanity project → API → CORS
2. Add http://localhost:3000
3. Add your production domain
4. Save and retry
```

### Error: "Cannot find module '@sanity/client'"
```
Fix:
cd apps/frontend
pnpm install
```

### Content not updating after publish
```
Check:
1. Webhook is configured in Sanity
2. REVALIDATE_SECRET matches in .env and webhook URL
3. Check Vercel logs for webhook hits
4. Try manual revalidation: visit /api/revalidate?secret=YOUR_SECRET
```

---

## 📚 Next Steps

After completing this setup:
1. ✅ Day 1-2: Homepage connected to CMS
2. ⏭️ Day 3: Build remaining page blocks
3. ⏭️ Day 4: Contact form API integration
4. ⏭️ Day 5: Image optimization + documentation

See [FRONTEND_ENHANCEMENT_PLAN.md](./FRONTEND_ENHANCEMENT_PLAN.md) for full roadmap.
