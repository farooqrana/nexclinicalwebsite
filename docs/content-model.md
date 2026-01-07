# Content Model

## Overview

This document defines the Strapi content types and components for NexClinical. The model mirrors the existing site structure while enabling flexible page composition.

## Content Types

### Single Types

Single types represent unique pages or global content.

#### Home
- **API ID**: `home`
- **Fields**:
  - Hero Section (component)
  - Features Section (component)
  - Benefits Section (component)
  - Comparison Section (component)
  - Testimonials (relation to Testimonials collection)
  - How It Works (component)
  - Specialties (component)
  - FAQ Preview (component - first 5-6 FAQs)
  - Final CTA (component)
  - SEO (component)

#### About
- **API ID**: `about`
- **Fields**:
  - Hero (component)
  - Content Sections (dynamic zone)
  - Team (optional repeatable component)
  - SEO (component)

#### Contact
- **API ID**: `contact`
- **Fields**:
  - Hero (component)
  - Contact Information (component)
  - Calendly Link (text)
  - SEO (component)

#### Pricing
- **API ID**: `pricing`
- **Fields**:
  - Hero (component)
  - Pricing Tiers (repeatable component)
  - FAQ Section (component)
  - CTA (component)
  - SEO (component)

#### Layout
- **API ID**: `layout`
- **Fields**:
  - Logo (media)
  - Navigation Items (repeatable component)
  - Footer Links (repeatable component)
  - Contact Info (phone, email)
  - Social Links (repeatable component)
  - CTA Button (component)

#### Privacy Policy
- **API ID**: `privacy-policy`
- **Fields**:
  - Title (text)
  - Content (rich text)
  - Last Updated (date)
  - SEO (component)

#### Terms of Use
- **API ID**: `terms-of-use`
- **Fields**:
  - Title (text)
  - Content (rich text)
  - Last Updated (date)
  - SEO (component)

### Collection Types

Collections represent repeatable content items.

#### Services
- **API ID**: `services`
- **Fields**:
  - Title (text) - e.g., "Patient Scheduling"
  - Slug (UID from title)
  - Hero (component)
  - Overview (rich text)
  - Key Benefits (repeatable component)
  - Content Sections (dynamic zone)
  - Related Services (relation)
  - CTA (component)
  - SEO (component)
  - Published At (datetime)

**Examples**: 
- Patient Scheduling
- Authorization & Verification
- Medical Assistant / Clinical Support

#### Blog Posts / Resources
- **API ID**: `posts`
- **Fields**:
  - Title (text)
  - Slug (UID from title)
  - Excerpt (text)
  - Featured Image (media)
  - Content (rich text)
  - Author (text)
  - Published At (datetime)
  - Category (relation to Categories)
  - SEO (component)

#### Categories
- **API ID**: `categories`
- **Fields**:
  - Name (text)
  - Slug (UID from name)
  - Description (text)

#### FAQs
- **API ID**: `faqs`
- **Fields**:
  - Question (text)
  - Answer (rich text)
  - Order (integer)
  - Category (enumeration: General, Scheduling, Authorization, Billing, Technical)
  - Show on Homepage (boolean)

#### Testimonials
- **API ID**: `testimonials`
- **Fields**:
  - Name (text)
  - Title/Role (text) - e.g., "Dr. Rebecca S"
  - Practice Type (text) - e.g., "Primary Care Practice"
  - Content (text)
  - Rating (integer, 1-5)
  - Featured (boolean)
  - Order (integer)

#### Redirects
- **API ID**: `redirects`
- **Fields**:
  - From Path (text) - e.g., "/old-page"
  - To Path (text) - e.g., "/new-page"
  - Type (enumeration: 301, 302)
  - Enabled (boolean)

## Shared Components

### Hero
- **Fields**:
  - Heading (text)
  - Subheading (text)
  - Description (text)
  - Background Image (media - optional)
  - Primary CTA (component: Button)
  - Secondary CTA (component: Button - optional)

### Button
- **Fields**:
  - Text (text)
  - URL (text)
  - Style (enumeration: primary, secondary, ghost)
  - Opens in New Tab (boolean)

### Feature
- **Fields**:
  - Icon (media or icon name)
  - Title (text)
  - Description (text)
  - Link (component: Button - optional)

### Feature List
- **Fields**:
  - Heading (text)
  - Subheading (text - optional)
  - Features (repeatable: Feature component)
  - Layout (enumeration: 2-col, 3-col, 4-col)

### Icon Stat
- **Fields**:
  - Icon (media or icon name)
  - Stat (text) - e.g., "40%"
  - Label (text) - e.g., "Reduced No-Show Rate"

### Stats Section
- **Fields**:
  - Heading (text - optional)
  - Stats (repeatable: Icon Stat)

### Comparison Table
- **Fields**:
  - Before Heading (text) - e.g., "Before NexClinical"
  - After Heading (text) - e.g., "Why NexClinical"
  - Items (repeatable component):
    - Before Text (text)
    - After Text (text)

### Testimonial Block
- **Fields**:
  - Testimonial (relation to Testimonials)
  - Show Rating (boolean)
  - Layout (enumeration: card, quote)

### Process Step
- **Fields**:
  - Step Number (integer)
  - Title (text)
  - Description (text)
  - Icon (media - optional)

### How It Works
- **Fields**:
  - Heading (text)
  - Subheading (text - optional)
  - Steps (repeatable: Process Step)

### Specialty Badge
- **Fields**:
  - Name (text) - e.g., "Psychiatry"
  - Icon (media - optional)

### Specialties Section
- **Fields**:
  - Heading (text)
  - Badges (repeatable: Specialty Badge)

### CTA Section
- **Fields**:
  - Heading (text)
  - Description (text - optional)
  - Primary Button (component: Button)
  - Secondary Button (component: Button - optional)
  - Background Style (enumeration: default, accent, gradient)

### FAQ Item
- **Fields**:
  - Question (text)
  - Answer (rich text)

### FAQ Section
- **Fields**:
  - Heading (text)
  - Subheading (text - optional)
  - FAQs (relation to FAQs collection or repeatable FAQ Item)
  - Show All Link (component: Button - optional)

### Media Block
- **Fields**:
  - Media (media - image or video)
  - Caption (text - optional)
  - Alt Text (text)
  - Layout (enumeration: full, contained, background)

### Rich Content
- **Fields**:
  - Content (rich text with markdown support)

### Card
- **Fields**:
  - Image (media - optional)
  - Title (text)
  - Description (text)
  - Link (component: Button - optional)

### Card Grid
- **Fields**:
  - Heading (text - optional)
  - Cards (repeatable: Card)
  - Columns (enumeration: 2, 3, 4)

### SEO
- **Fields**:
  - Meta Title (text, 60 chars max)
  - Meta Description (text, 160 chars max)
  - Canonical URL (text - optional)
  - No Index (boolean)
  - No Follow (boolean)
  - OG Title (text - optional, fallback to Meta Title)
  - OG Description (text - optional, fallback to Meta Description)
  - OG Image (media - optional)
  - Twitter Card (enumeration: summary, summary_large_image)
  - Structured Data (JSON - optional)

## Dynamic Zones

Some content types use dynamic zones for flexible page composition:

### Page Builder (used in About, Services, etc.)
- Rich Content
- Feature List
- Stats Section
- Media Block
- Card Grid
- CTA Section
- FAQ Section
- Testimonials Block

## Content Workflow

1. **Draft**: Content created but not published
2. **Review**: Ready for review (optional state)
3. **Published**: Live on website (webhook triggers revalidation)
4. **Archived**: Removed from site but retained in CMS

## Permissions

- **Public**: Read-only access to published content via API
- **Editor**: Create, update, publish content
- **Admin**: Full access including settings, users, plugins

## Webhooks

- **On Publish**: Trigger Vercel revalidation for affected routes
- **On Unpublish**: Trigger revalidation to remove content
- **On Update**: Trigger revalidation for updated pages

## Migration Notes

Content mapping from WordPress:
- Posts → Services collection + Blog Posts
- Pages → Single types (Home, About, etc.)
- Custom Fields → Strapi components
- Media Library → Cloudflare R2 with URL rewrites

## Future Enhancements

- Multi-language support (i18n plugin)
- Content scheduling (publish/unpublish at specific times)
- Content versioning (draft vs published comparison)
- Workflow approvals (multi-step review process)
