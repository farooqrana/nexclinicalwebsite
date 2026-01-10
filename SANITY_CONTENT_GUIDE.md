# Sanity Studio Content Creation Guide

**Studio URL**: http://localhost:3333

## Step 1: Create Global Settings

1. Open Studio at http://localhost:3333
2. Click **"Global Settings"** in the sidebar
3. Fill in the following fields:
   
   **Basic Info:**
   - Site Name: `NexClinical`
   - Site URL: `https://nexclincalwebsite.vercel.app`
   - Description: `Virtual medical support for small practices`
   - Contact Email: `support@nexclinical.com`
   - Contact Phone: `(555) 123-4567`

   **Stats (Click "Add item" 4 times):**
   
   Stat 1:
   - Label: `Practices Served`
   - Value: `150+`
   - Icon: `🏥`

   Stat 2:
   - Label: `No-Show Reduction`
   - Value: `40%`
   - Icon: `📊`

   Stat 3:
   - Label: `Denial Rate`
   - Value: `<1%`
   - Icon: `✅`

   Stat 4:
   - Label: `Saved per Week`
   - Value: `20+hrs`
   - Icon: `⏰`

4. Click **"Publish"** (top right)

---

## Step 2: Create Services

### Service 1: Patient Scheduling
1. Click **"Service"** in sidebar → **"Create new Service"**
2. Fill in:
   - Title: `Patient Scheduling`
   - Slug: `patient-scheduling` (auto-generated)
   - Description: `Never miss a patient call. Our virtual receptionists answer calls, schedule appointments, and send reminders – so patients show up.`
   - Icon: `📞`
   - Featured: ✅ **Check this box**
3. Click **"Publish"**

### Service 2: Authorization & Verification
1. Create new Service
2. Fill in:
   - Title: `Authorization & Verification`
   - Slug: `authorization-verification`
   - Description: `Faster approvals, fewer delays. We handle insurance authorization & verification so treatments don't get held up.`
   - Icon: `📋`
   - Featured: ✅ **Check this box**
3. Click **"Publish"**

### Service 3: Clinical Support
1. Create new Service
2. Fill in:
   - Title: `Clinical Support`
   - Slug: `clinical-support`
   - Description: `High-quality notes & intake forms. Our clinical assistants handle charting, intake coordination, and documentation.`
   - Icon: `🩺`
   - Featured: ✅ **Check this box**
3. Click **"Publish"**

---

## Step 3: Create Homepage

1. Click **"Page"** in sidebar → **"Create new Page"**
2. Fill in:
   - Page Title: `Home`
   - Slug: Click "Generate" → should be `home`

3. **Add Hero Section:**
   - In "Page Sections", click **"Add item"** → Select **"Hero Section"**
   - Heading: `Virtual Medical Support For Small Practices`
   - Subheading: `Have insurance authorizations, patient scheduling, & clinical notes handled. Reduce the admin chaos to focus on patient care.`
   - CTA Button:
     - Text: `Book Consultation →`
     - Link: `https://calendly.com/nexclinical/15min`
     - Style: `Primary`
   - Secondary Button:
     - Text: `Get Pricing`
     - Link: `/pricing`

4. **Add Services Section:**
   - Click **"Add item"** again → Select **"Services Section"**
   - Section Heading: `Run Your Practice, Not Your Paperwork`
   - Subheading: `Practices lose hours every day to scheduling chaos, insurance work & clinical notes. We take those tasks off your plate with dedicated, full-time support.`
   - Display Mode: `Show Featured Services`
   - Columns: `3`

5. **SEO Tab (Optional but recommended):**
   - Click **"SEO"** tab at top
   - SEO Title: `NexClinical - Virtual Medical Support for Small Practices`
   - Meta Description: `Reduce admin chaos with virtual scheduling, insurance authorization, and clinical support. Trusted by 150+ practices. HIPAA compliant.`

6. Click **"Publish"**

---

## Testing Content Updates

Once everything is published:

1. Edit any field (e.g., change Hero heading)
2. Click **"Publish"**
3. Wait 5-10 seconds
4. Refresh https://nexclincalwebsite.vercel.app
5. Your changes should appear!

---

## Next Steps

After Day 2 is complete, you'll be able to:
- ✅ Edit homepage content without code changes
- ✅ Add/remove services instantly
- ✅ Update stats in real-time
- ✅ Change hero text and CTAs
- ✅ Rearrange page sections via drag-and-drop

**Note**: Keep the Studio running while I wire up the frontend to fetch this data!
