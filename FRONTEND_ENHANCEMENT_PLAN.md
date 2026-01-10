# NexClinical Frontend Enhancement Plan

**Goal**: Transform static site into CMS-powered, template-ready platform per WordPress migration checklist

---

## ✅ Current State (Already Built)

### Pages
- ✅ Homepage with hero, services, testimonials, stats
- ✅ /about - Company information
- ✅ /services/* - Patient scheduling, authorization, clinical support
- ✅ /pricing - Service pricing tiers  
- ✅ /how-it-works - Process explanation
- ✅ /faqs - FAQ accordion
- ✅ /contact - Contact page
- ✅ /resources/* - Revenue cycle, website/marketing, answering service

### Components
- ✅ Hero section
- ✅ Stats grid (4 columns)
- ✅ Service cards (3 column grid)
- ✅ Testimonial carousel
- ✅ "How It Works" timeline
- ✅ Before/After comparison
- ✅ FAQ accordion
- ✅ CTA sections
- ✅ Footer with links

### Tech Stack
- ✅ Next.js 15 + App Router
- ✅ React 19
- ✅ Tailwind CSS
- ✅ shadcn/ui components
- ✅ Sanity schemas defined (7 content types + 9 blocks)

---

## 🎯 Phase 1: Connect Homepage to Sanity (Priority)

### Make Current Homepage CMS-Editable

**Hero Section** → Sanity Hero Block
```typescript
Current (hardcoded):
<h1>Virtual Medical Support For Small Practices</h1>
<p>Have insurance authorizations, patient scheduling...</p>
<Button>Book Consultation</Button>

New (Sanity-powered):
const page = await getPageBySlug('home');
const heroBlock = page.pageBuilder.find(b => b._type === 'hero');
<h1>{heroBlock.heading}</h1>
<p>{heroBlock.description}</p>
<Button href={heroBlock.ctaLink}>{heroBlock.ctaText}</Button>
```

**Stats Section** → Sanity Data
```typescript
Current (hardcoded):
<div>150+ Practices Served</div>
<div>40% No-Show Reduction</div>

New (Sanity-powered):
const settings = await getGlobalSettings();
{settings.stats.map(stat => (
  <div key={stat._key}>
    <div>{stat.value}</div>
    <p>{stat.label}</p>
  </div>
))}
```

**Services Cards** → Sanity Services
```typescript
Current (hardcoded):
<Card>Never Miss a Patient Call</Card>
<Card>Faster Approvals, Fewer Delays</Card>

New (Sanity-powered):
const services = await getAllServices();
{services.map(service => (
  <Card key={service._id}>
    <h3>{service.title}</h3>
    <p>{service.description}</p>
  </Card>
))}
```

---

## 📝 Phase 2: Implement Page Builder

### Enable Non-Developers to Build Pages

**Current**: Pages are hardcoded React components  
**Goal**: Pages are assembled from Sanity blocks

**Example - Create New Landing Page:**
```
Without Page Builder (Developer Required):
1. Create new file: app/new-page/page.tsx
2. Write JSX code for layout
3. Style components
4. Deploy via Git
Time: 2-4 hours

With Page Builder (Marketing Team):
1. Log into Sanity Studio
2. Click "Create Page"
3. Drag & drop blocks (Hero, Services, Testimonials)
4. Fill content
5. Publish
Time: 15 minutes
```

**Implementation**:
```typescript
// app/[slug]/page.tsx (Dynamic route)
export default async function DynamicPage({ params }) {
  const page = await getPageBySlug(params.slug);
  
  return (
    <main>
      {page.pageBuilder.map(block => {
        switch(block._type) {
          case 'hero': return <HeroBlock data={block} />;
          case 'services': return <ServicesBlock data={block} />;
          case 'testimonials': return <TestimonialsBlock data={block} />;
          case 'faq': return <FAQBlock data={block} />;
          case 'cta': return <CTABlock data={block} />;
          default: return null;
        }
      })}
    </main>
  );
}
```

---

## 🖼️ Phase 3: Image Optimization via Sanity

### Move Images from `/public` to Sanity CDN

**Benefits**:
- ✅ Auto image optimization (WebP, responsive)
- ✅ Smart cropping per device
- ✅ CDN delivery (faster globally)
- ✅ Easy image updates via CMS

**Migration**:
```
Current:
/public/hero-illustration.svg
/public/logo.svg

New (Sanity):
<Image src={urlFor(globalSettings.logo).url()} />
<Image src={urlFor(heroBlock.image).width(800).url()} />
```

---

## 📧 Phase 4: Contact Form Backend

### Wire Contact Form to API Route

**Current State**: `/contact` page exists, form likely static  
**Goal**: Working email delivery

**Implementation**:
```typescript
// app/contact/page.tsx
<form action="/api/contact" method="POST">
  <input name="name" required />
  <input name="email" type="email" required />
  <input name="phone" />
  <textarea name="message" required />
  <button type="submit">Send Message</button>
</form>

// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.formData();
  
  // Validate
  const email = data.get('email');
  if (!email) return Response.json({ error: 'Email required' }, { status: 400 });
  
  // TODO: Send email (Resend later)
  // For now: Log or store in Sanity
  
  return Response.json({ success: true });
}
```

---

## 🔍 Phase 5: SEO Metadata from Sanity

### Dynamic Meta Tags Per Page

**Current**: Likely static or missing metadata  
**Goal**: SEO fields editable in Sanity

**Implementation**:
```typescript
// app/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const page = await getPageBySlug(params.slug);
  
  return {
    title: page.seoTitle || page.title,
    description: page.seoDescription,
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      images: [page.seoImage ? urlFor(page.seoImage).url() : null],
    },
  };
}
```

---

## 📋 Checklist Alignment (WordPress Migration PDF)

| Phase | Status | Notes |
|-------|--------|-------|
| Phase 0: Internal Alignment | ✅ | Next.js + Sanity + Vercel locked in |
| Phase 1: Audit WordPress | N/A | Not migrating existing WP site |
| Phase 2: Content Mapping | ✅ | Sanity schemas match page structure |
| Phase 3: Sanity CMS Setup | ✅ | Schemas defined, Studio ready |
| Phase 4: Frontend Build | 🟡 | Pages built, need CMS connection |
| Phase 5: Content Migration | ⏳ | Connect hardcoded content to Sanity |
| Phase 6: QA & Pre-Launch | ⏳ | After CMS connection |
| Phase 7: Deployment | ✅ | Already on Vercel |
| Phase 8: Client Handoff | ⏳ | Need CMS training docs |
| Phase 9: Decommission WP | N/A | Not applicable |

**Current Phase**: **Phase 4-5** (Frontend → CMS connection)

---

## 🚀 Execution Plan (Next 5 Days)

### ✅ Day 1: Block Components (COMPLETED)
```
Tasks:
✅ Created Sanity project (ID: htfikdkh)
✅ Added project ID to all .env files
✅ Built PageBuilder component (dynamic block renderer)
✅ Built HeroBlock.tsx (200+ lines, full implementation)
✅ Built ServicesBlock.tsx (grid layouts: 2/3/4 columns)
✅ Created 7 stub blocks (Features, Testimonials, FAQ, CTA, Team, Contact, RichText)
✅ Installed Sanity Studio dependencies
✅ Started Studio at localhost:3333
✅ Validated TypeScript build (no errors)
✅ Committed all work to git

Files Created:
- apps/frontend/components/blocks/PageBuilder.tsx
- apps/frontend/components/blocks/HeroBlock.tsx
- apps/frontend/components/blocks/ServicesBlock.tsx
- apps/frontend/components/blocks/*.tsx (7 stubs)
- apps/frontend/components/blocks/index.ts

Result: Foundation ready for CMS-powered pages
```

### 🔄 Day 2: Sanity Schemas + Sample Content (IN PROGRESS)
```
Tasks:
1. Create schema files for all content types (Page, GlobalSettings, Service, Testimonial, FAQ)
2. Create schema files for all blocks (hero, services, features, etc.)
3. Populate Global Settings in Studio (company info, stats, contact)
4. Create 3-4 sample services
5. Create sample homepage with Hero + Services blocks
6. Wire homepage to fetch from Sanity and use PageBuilder

Files:
- apps/sanity-studio/schemaTypes/*.ts (all schemas)
- apps/frontend/app/page.tsx (wire to Sanity)
- apps/frontend/lib/sanity.ts (GROQ queries)

Result: Homepage powered by Sanity, content editable in Studio
```

### Day 3: Complete Testimonials + FAQ Blocks
```
Tasks:
1. Replace TestimonialsBlock stub with full carousel implementation
2. Replace FAQBlock stub with accordion implementation  
3. Create sample testimonials in Studio
4. Create sample FAQ items in Studio
5. Test adding testimonials/FAQs to homepage via pageBuilder

Files:
- apps/frontend/components/blocks/TestimonialsBlock.tsx
- apps/frontend/components/blocks/FAQBlock.tsx

Result: Testimonials carousel + FAQ accordion working from CMS
```

### Day 4: Dynamic [slug] Routing
```
Tasks:
1. Create apps/frontend/app/[slug]/page.tsx for dynamic pages
2. Implement generateStaticParams to pre-render all pages
3. Add metadata generation from Sanity SEO fields
4. Test creating new pages in Studio that auto-render
5. Create About page and Services pages in Studio

Files:
- apps/frontend/app/[slug]/page.tsx
- apps/frontend/lib/sanity.ts (add getAllPages query)

Result: Any page created in Studio renders automatically
```

### Day 5: Contact Form + Image Optimization
```
Tasks:
1. Create apps/frontend/app/api/contact/route.ts with Resend
2. Wire contact form with proper validation (Zod)
3. Test email delivery to team
4. Upload hero images to Sanity
5. Replace hardcoded image paths with Sanity CDN URLs
6. Create CMS editing guide PDF for marketing team

Files:
- apps/frontend/app/api/contact/route.ts
- apps/frontend/app/contact/page.tsx
- CMS_EDITING_GUIDE.md (new)

Result: Working contact form + optimized images from Sanity CDN
```

---

## 📊 Progress Tracker

**Last Updated**: January 10, 2026

| Day | Status | Time | Notes |
|-----|--------|------|-------|
| Day 1 | ✅ Complete | 2 hours | Block components created, Studio running |
| Day 2 | 🔄 In Progress | - | Creating schemas + sample content |
| Day 3 | ⏳ Pending | - | Testimonials + FAQ implementation |
| Day 4 | ⏳ Pending | - | Dynamic routing |
| Day 5 | ⏳ Pending | - | Contact form + images |

**Sanity Project Details**:
- Project ID: `htfikdkh`
- Plan: Growth Trial (30 days)
- Studio URL: http://localhost:3333
- Production URL: https://nexclincalwebsite.vercel.app



### For NexClinical Agency Site:
- ✅ Marketing team can edit homepage without developer
- ✅ Add new testimonials in 2 minutes
- ✅ Create new landing pages in 15 minutes
- ✅ Change service descriptions instantly
- ✅ Update stats/metrics without code deploy
- ✅ Contact form emails reach team
- ✅ Images load fast globally (CDN)

### For Doctor Site Templates:
- ✅ Clone NexClinical setup for new client
- ✅ Customize branding (colors, logo) in Sanity
- ✅ Replace content in Studio (no code changes)
- ✅ Deploy to Vercel in 1 day
- ✅ Train client on Sanity in 30 minutes

---

## 📐 Template Strategy (Future)

Once NexClinical site is CMS-powered, create doctor site templates:

### Template 1: Primary Care Doctor
```
Blocks:
- Hero (doctor photo + credentials)
- Services (list of medical services)
- About Doctor (bio + education)
- Insurance Accepted (logos)
- Office Locations (map + hours)
- Contact Form
- Testimonials

Reusable: 95%
Customization: Branding, content, images only
```

### Template 2: Specialist (Psychiatry, Dermatology)
```
Blocks:
- Hero (specialty focus)
- Conditions Treated (grid)
- Treatment Approach (text + image)
- Credentials (certifications, training)
- Contact + Booking
- FAQ (specialty-specific)

Reusable: 90%
Customization: Specialty content
```

### Template 3: Multi-Provider Clinic
```
Blocks:
- Hero (clinic branding)
- Services Overview
- Doctor Profiles (grid, 5-10 doctors)
- Locations (multiple offices)
- Insurance (comprehensive list)
- Contact (per-location forms)

Reusable: 85%
Customization: Multiple doctors, locations
```

---

## 💰 Value Proposition (Post-Implementation)

### Current (Hardcoded):
```
Content Update Process:
1. Email developer: "Change hero text"
2. Developer opens code editor
3. Edit JSX file
4. Git commit & push
5. Wait for Vercel deploy (2-3 min)
6. Verify changes

Time: 15-30 minutes
Cost: Developer time ($75/hr × 0.5hr = $38)
```

### With Sanity CMS:
```
Content Update Process:
1. Log into Sanity Studio
2. Edit text field
3. Click "Publish"
4. Webhook triggers Vercel ISR
5. Changes live in 5 seconds

Time: 1-2 minutes
Cost: $0 (marketing team does it)
Savings: $38 per update
```

**ROI Calculation**:
- Content updates per month: ~20
- Savings per update: $38
- **Monthly savings: $760**
- **Annual savings: $9,120**

Plus: Faster iteration, happier marketing team, more client autonomy.

---

## 🎯 Immediate Next Step

**Should I proceed with Day 1?**

1. Help you create Sanity project
2. Update .env with project ID
3. Convert homepage hero to Sanity
4. Test live editing in Studio

This will prove the concept and show your marketing team the power of CMS-driven content.

**Ready to start?**
