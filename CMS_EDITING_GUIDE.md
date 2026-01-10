# CMS Editing Guide for NexClinical Website

**For Marketing Team & Content Editors**

---

## 🎯 Overview

This guide shows you how to edit the NexClinical website content without any coding. Everything is managed through **Sanity Studio**, a user-friendly content management system.

**Studio URL**: http://localhost:3333 (Development)  
**Production Studio**: https://nexclinical.sanity.studio (Coming soon)

---

## 🚀 Quick Start

### 1. Access Sanity Studio
- Open your browser and go to http://localhost:3333
- Log in with your Sanity credentials
- You'll see the Studio dashboard with all content types in the left sidebar

### 2. Understanding Content Types

**Pages** → Individual website pages (Home, About, Services, etc.)  
**Services** → Service offerings (Scheduling, Authorization, Clinical Support)  
**Global Settings** → Site-wide content (company info, stats, contact details)  
**Blog Posts** → News and articles (Future)  
**Doctors** → Team member profiles (Future)  
**Locations** → Office locations (Future)

---

## 📝 Editing Existing Content

### Edit the Homepage

1. Click **"Page"** in the left sidebar
2. Click on **"Home"** page
3. Make your changes:
   - Update **Hero Section** heading/subheading
   - Edit **Services Section** text
   - Add/remove blocks using **"Add item"** button
4. Click **"Publish"** (top right)
5. Wait 5-10 seconds
6. Refresh the website → changes appear!

### Edit Global Settings (Stats, Contact Info)

1. Click **"Global Settings"**
2. Edit fields:
   - Site Name
   - Contact Email/Phone
   - Stats (e.g., "150+ Practices Served")
   - Social Media links
3. Click **"Publish"**
4. Changes apply across entire site

### Edit a Service

1. Click **"Service"** in sidebar
2. Select service to edit
3. Update:
   - Title
   - Description
   - Icon (emoji or text)
   - Toggle **"Featured"** to show on homepage
4. Click **"Publish"**

---

## ➕ Creating New Content

### Create a New Page

**Example**: Creating an "About" page

1. Click **"Page"** → **"Create new Page"**
2. Fill in:
   - **Page Title**: `About`
   - **Slug**: Click "Generate" → becomes `about`
   - **Page Sections**: Click "Add item" to add blocks

3. **Add a Hero Block**:
   - Select **"Hero Section"**
   - Heading: `About NexClinical`
   - Subheading: `We help practices reduce admin chaos`
   - CTA Button:
     - Text: `Contact Us`
     - Link: `/contact`
     - Style: `Primary`

4. **Add a Services Section**:
   - Select **"Services Section"**
   - Heading: `Our Services`
   - Display Mode: `Show Featured Services`
   - Columns: `3`

5. **Add an FAQ Section**:
   - Select **"FAQ Section"**
   - Heading: `Common Questions`
   - Click "Add item" under FAQs
   - Question: `How quickly can we get started?`
   - Answer: `Most practices are fully onboarded within 7 days.`

6. **Set SEO Fields** (Optional but recommended):
   - Click **"SEO"** tab
   - SEO Title: `About NexClinical - Virtual Medical Support`
   - Meta Description: `Learn how NexClinical helps small practices reduce administrative workload.`

7. Click **"Publish"**
8. Visit https://nexclincalwebsite.vercel.app/about → page is live!

### Create a New Service

1. Click **"Service"** → **"Create new Service"**
2. Fill in:
   - Title: `Medical Billing Support`
   - Slug: Auto-generated from title
   - Description: `Complete billing and claims management to maximize revenue.`
   - Icon: `💰`
   - Featured: ✅ (Check if you want it on homepage)
3. Click **"Publish"**
4. If "Featured" is checked, it appears on homepage Services grid instantly!

---

## 🧩 Understanding Blocks (Page Sections)

Blocks are reusable sections you can add to any page. Think of them like LEGO bricks for your website.

### Available Blocks

#### 1. **Hero Section**
- Large heading at top of page
- Subheading text
- 1-2 CTA buttons
- Optional background image
- **Best for**: Page intros, landing pages

#### 2. **Services Section**
- Grid of service cards
- Options: Show all, featured only, or custom selection
- 2, 3, or 4 column layouts
- **Best for**: Homepage, services page

#### 3. **Features Section**
- Icon + Title + Description cards
- Highlight key benefits
- **Best for**: Product features, benefits lists

#### 4. **Testimonials Section**
- Customer quotes with photos
- Auto-rotating carousel (4+ testimonials)
- Grid layout (1-3 testimonials)
- 5-star ratings
- **Best for**: Social proof, trust building

#### 5. **FAQ Section**
- Expandable accordion questions
- Clean, organized Q&A
- **Best for**: Support, pricing pages

#### 6. **CTA Section**
- Call-to-action block
- Heading + description + buttons
- Optional background color/image
- **Best for**: Conversion points, end of pages

#### 7. **Team Section**
- Team member cards with photos
- Name, role, bio, credentials
- **Best for**: About page, team page

#### 8. **Contact Section**
- Contact form
- Contact info (phone, email, address)
- Toggle form on/off
- **Best for**: Contact page

#### 9. **Rich Text Section**
- Full rich text editor
- Headings, lists, links, images
- **Best for**: Long-form content, blog posts

---

## 🎨 Best Practices

### Content Writing Tips

**Headlines**:
- Keep under 60 characters
- Be clear and specific
- Use action words ("Get", "Reduce", "Improve")

**Descriptions**:
- 2-3 sentences max
- Focus on benefits, not features
- Use simple language

**CTAs (Call-to-Action)**:
- Be specific: "Book Free Consultation" > "Learn More"
- Create urgency: "Get Started Today"
- Use action verbs

### Page Structure

**Good Homepage Structure**:
1. Hero (intro + CTA)
2. Stats/Social Proof
3. Services (3 cards)
4. Features (benefits)
5. Testimonials
6. FAQ
7. Final CTA

**Good Service Page**:
1. Hero (service intro)
2. Features (how it works)
3. Benefits (what you get)
4. Testimonials
5. CTA

### Image Guidelines

- **Hero images**: 1920x1080px minimum
- **Service icons**: Use emojis or short text (📞, 📋, 🩺)
- **Team photos**: Square format, 500x500px minimum
- **Background images**: High resolution, not too busy

### SEO Checklist

For every page:
- ✅ **SEO Title**: 50-60 characters, include main keyword
- ✅ **Meta Description**: 150-160 characters, compelling summary
- ✅ **OG Image**: 1200x630px for social sharing
- ✅ **Slug**: Short, descriptive, lowercase with hyphens

---

## ⚡ Common Tasks

### Update a Statistic (e.g., "150+ Practices" → "200+ Practices")

1. Go to **Global Settings**
2. Find the stat in the Stats array
3. Edit **Value** field: `200+`
4. Click **"Publish"**
5. Updates everywhere on site instantly!

### Change Homepage Hero Text

1. Go to **Page** → **Home**
2. Find **Hero Section** block
3. Edit **Heading** and **Subheading**
4. Click **"Publish"**

### Add a New Testimonial

1. Go to **Page** → **Home** (or any page with Testimonials block)
2. Find **Testimonials Section**
3. Click **"Add item"** under Testimonials
4. Fill in:
   - Quote: `"NexClinical saved us 20+ hours per week!"`
   - Author: `Dr. Smith`
   - Role: `Primary Care Physician`
   - Rating: `5`
5. Click **"Publish"**

### Reorder Page Sections

1. Open any page
2. In **Page Sections**, find the 6-dot drag handle (⋮⋮)
3. Drag blocks up or down
4. Click **"Publish"**
5. Sections reorder on website instantly!

### Hide a Page from Google

1. Open the page
2. Click **"SEO"** tab
3. Toggle **"Hide from Search Engines"** ON
4. Click **"Publish"**

---

## 🔍 Troubleshooting

### "Changes not showing on website"

**Solutions**:
1. Did you click **"Publish"**? (Not just "Save")
2. Wait 10-15 seconds for cache to clear
3. Hard refresh browser (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)
4. Check if editing correct environment (dev vs. production)

### "Can't add a block to my page"

**Solutions**:
1. Make sure you're in **"Page Sections"** field
2. Click **"Add item"** button
3. Select block type from dropdown
4. If dropdown empty, contact developer

### "Accidentally deleted content"

**Solutions**:
1. Click **"Changes"** (clock icon, top right)
2. Find the version before deletion
3. Click **"Restore"**
4. Click **"Publish"**

### "Image not uploading"

**Solutions**:
1. Check file size (<10MB)
2. Use JPG or PNG format
3. Check image dimensions (not too small)
4. Try different browser

---

## 📞 Need Help?

**Contact Developer**: [your-email@nexclinical.com]  
**Sanity Support**: https://www.sanity.io/help  
**Documentation**: https://www.sanity.io/docs

---

## 🎓 Training Checklist

**Before editing production site, practice**:
- [ ] Log into Sanity Studio
- [ ] Edit Global Settings and publish
- [ ] Create a test page with 3 blocks
- [ ] Add a new testimonial
- [ ] Reorder blocks on a page
- [ ] Upload an image
- [ ] Preview changes before publishing
- [ ] Restore a previous version

**Next Steps**:
- [ ] Schedule 30-minute training session
- [ ] Get Sanity Studio login credentials
- [ ] Bookmark Studio URL
- [ ] Review this guide monthly

---

**Last Updated**: January 10, 2026  
**Version**: 1.0
