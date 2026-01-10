# Payload CMS Setup & Testing Guide

## Quick Start (Local Development)

### Prerequisites
- Node.js 20+
- MongoDB (local or Atlas connection)
- pnpm

### Installation (5 minutes)

```bash
# 1. Navigate to CMS folder
cd C:\Nexclinical\nexclinical-rebuild\apps\cms

# 2. Install dependencies
pnpm install

# 3. Configure environment
cp .env.example .env.local

# 4. Start CMS development server
pnpm dev
```

### Access CMS Admin Panel
- **URL**: http://localhost:3001/admin
- **First Access**: Create admin user (email, password)
- **Dashboard**: Manage all collections

---

## Testing Customization Scenarios

### Test 1: Color Customization

**Objective**: Change brand colors and verify they apply globally

**Steps**:
1. Open CMS Admin: http://localhost:3001/admin
2. Navigate to **Branding** collection
3. Create entry (or edit existing):
   - Primary Color: `#e11d48` (red)
   - Secondary Color: `#8b5cf6` (purple)
   - Accent Color: `#06b6d4` (cyan)
4. Save & Publish
5. Check frontend - colors should update on next load
6. **Result**: No code deployment needed ✅

**WordPress Comparison**: Would require theme customizer or custom CSS plugin

---

### Test 2: Font Customization

**Objective**: Change typography without code

**Steps**:
1. In CMS Admin → **Branding**
2. Update fonts:
   - Heading Font: `playfair` (Playfair Display)
   - Body Font: `plus-jakarta` (Plus Jakarta Sans)
   - Base Font Size: `18` (from 16)
   - Line Height: `1.75` (from 1.5)
3. Save & Publish
4. Check frontend - fonts should update
5. **Result**: No code deployment needed ✅

**Available Fonts**:
- Headings: Inter, Poppins, Playfair Display, DM Serif Display
- Body: Inter, Plus Jakarta Sans, Space Mono

---

### Test 3: Page Content Management

**Objective**: Add/edit pages without touching code

**Steps**:
1. In CMS Admin → **Pages**
2. Create new page:
   ```
   Title: "Clinical Services"
   Slug: "clinical-services"
   Status: "Published"
   Hero Section:
     - Enabled: YES
     - Title: "Our Clinical Services"
     - Subtitle: "Comprehensive support for your practice"
     - CTA Text: "Get Started"
     - CTA Link: "/contact"
   Content Sections:
     - Add section of type "Rich Text"
     - Content: "We provide 24/7 clinical support..."
   ```
3. Save & Publish
4. Page is live at `http://nexclinical.com/clinical-services`
5. **Result**: New page without any code changes ✅

---

### Test 4: Image Management

**Objective**: Upload and manage images via CMS

**Steps**:
1. In CMS Admin → **Media**
2. Upload image:
   - Select file (JPEG, PNG, WebP, SVG)
   - Title: "Hero Background"
   - Alt Text: "Medical clinic reception area"
   - Category: "Hero"
3. Use in page:
   - Edit page → Hero Section → Background Image
   - Select uploaded image
   - Save & Publish
4. Image appears on frontend
5. **Result**: Image management without FTP access ✅

---

### Test 5: SEO Meta Tags

**Objective**: Manage SEO without code

**Steps**:
1. In CMS Admin → **Pages**
2. Edit page → SEO & Meta tab:
   ```
   Meta Title: "Clinical Support Services - NexClinical"
   Meta Description: "Expert clinical support for medical practices"
   Meta Keywords: "clinical support, medical services, healthcare"
   Canonical URL: "https://nexclinical.com/clinical-support"
   ```
3. Save & Publish
4. Page shows in search engines with custom tags
5. **Result**: Full SEO control without developer ✅

---

### Test 6: Multi-User Access (Role-Based)

**Objective**: Give clients/team members CMS access

**Steps**:
1. In CMS Admin → **Users**
2. Create users:
   ```
   User 1:
     - Email: editor@client.com
     - Role: "Editor"
     - Can: Create/edit pages, upload media
     - Cannot: Manage users, delete branding
   
   User 2:
     - Email: admin@agency.com
     - Role: "Admin"
     - Can: Full access (manage users, collections, everything)
   ```
3. Share login with team
4. Each user sees appropriate permissions
5. **Result**: Secured collaborative editing ✅

---

### Test 7: Draft & Publish Workflow

**Objective**: Preview before going live

**Steps**:
1. In CMS Admin → **Pages**
2. Create page with Status: **Draft**
3. Add content, upload images
4. Page is NOT visible on frontend (draft only)
5. Preview in CMS: See how it looks
6. Change Status to **Published**
7. Page now visible on frontend
8. **Result**: Safe content staging ✅

---

## What This Proves for Clients

✅ **For Medical Practice Clients**:
- Change colors to match their branding (no designer needed)
- Update content without waiting for developer
- Upload their logos and images
- Manage meta tags for local SEO
- Multiple staff can have login access

✅ **Cost Savings**:
- No extra plugins needed (vs WordPress)
- No hosting bloat
- Faster page loads
- Lower monthly costs

✅ **Customization Without Code**:
- Color scheme: Done ✅
- Typography: Done ✅
- Page content: Done ✅
- Images: Done ✅
- Meta/SEO: Done ✅
- New page types: Requires code update

---

## API Endpoints (For Developers)

All endpoints available at `http://localhost:3001/api`

### Branding API
```bash
# Get branding
GET /api/branding

# Create branding
POST /api/branding
Body: { primaryColor, secondaryColor, ... }

# Update branding
PATCH /api/branding/:id
Body: { primaryColor: "#e11d48" }
```

### Pages API
```bash
# List all published pages
GET /api/pages?where[status][equals]=published

# Get specific page
GET /api/pages?where[slug][equals]=clinical-support

# Create page
POST /api/pages
Body: { title, slug, status, ... }

# Update page
PATCH /api/pages/:id
Body: { title: "New Title" }

# Delete page
DELETE /api/pages/:id
```

### Media API
```bash
# List media
GET /api/media

# Upload media
POST /api/media
Body: FormData with file

# Delete media
DELETE /api/media/:id
```

---

## Frontend Integration Code

Example of how frontend consumes CMS data:

```typescript
// pages/[slug].tsx
import { getPageBySlug, getBranding } from '@/lib/cms-client'

export default async function DynamicPage({ params }) {
  const page = await getPageBySlug(params.slug)
  const branding = await getBranding()

  if (!page) return <div>Page not found</div>

  return (
    <main style={{ color: branding?.textColor }}>
      {/* Hero Section */}
      <section style={{ backgroundColor: branding?.primaryColor }}>
        <h1>{page.heroSection?.title}</h1>
        <p>{page.heroSection?.subtitle}</p>
      </section>

      {/* Content Sections */}
      {page.sections?.map((section) => (
        <Section key={section.id} {...section} />
      ))}
    </main>
  )
}
```

---

## Limitations & Workarounds

### ❌ Can't Do (Without Code Changes)
1. **New section types** (e.g., video gallery)
   - Workaround: Add custom code, redeploy
   - Time: 30-60 minutes

2. **Custom fonts** (only predefined options)
   - Workaround: Add Google Fonts, update config
   - Time: 15 minutes

3. **Advanced CSS** (animations, hover effects)
   - Workaround: Update Tailwind config
   - Time: 30-60 minutes

### ✅ Comparison to WordPress

| Feature | Payload | WordPress |
|---------|---------|-----------|
| Color changes | ✅ No code | ✅ Theme customizer |
| Font changes | ⚠️ Limited | ✅ 1000s options |
| Page builder | ⚠️ Basic | ✅ Elementor, etc. |
| Plugins | ❌ None | ✅ 10,000+ |
| Performance | ✅ Fast | ⚠️ Slower |
| Cost to scale | ✅ Low | ⚠️ High (plugins) |

---

## Production Deployment Checklist

Before going live with Payload CMS:

- [ ] Set strong `PAYLOAD_SECRET` (not dev value)
- [ ] Use MongoDB Atlas (not local)
- [ ] Configure CORS properly
- [ ] Set up HTTPS
- [ ] Configure SMTP for notifications
- [ ] Backup strategy in place
- [ ] Rate limiting configured
- [ ] API authentication tokens setup
- [ ] Monitor error logs
- [ ] Document admin procedures

---

## Support & Resources

- **Payload CMS**: https://payloadcms.com/docs
- **API Documentation**: http://localhost:3001/api-docs (when running)
- **GitHub**: https://github.com/payloadcms/payload
- **Troubleshooting**: See README.md in /apps/cms

---

## Next Phase: Multi-Tenant Platform

Once this pilot is validated:

1. **Build client management system**
   - Assign clients to CMS instances
   - Per-client branding
   - Isolated databases

2. **Create reusable templates**
   - 5-10 proven designs
   - Quick setup for new clients
   - Consistent quality

3. **Automation**
   - Auto-deploy per client
   - Automatic backups
   - Email notifications

---

**Status**: Ready for testing  
**Next Step**: Start CMS with `pnpm dev` and try Test 1
