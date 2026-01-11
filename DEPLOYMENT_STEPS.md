# Deployment Guide - Sanity & Vercel

**Date**: January 10, 2026  
**Status**: Ready to deploy

---

## 🚀 Step 1: Deploy Frontend to Vercel

### Option A: Using Vercel CLI (Fastest)

```bash
cd C:\Nexclinical\nexclinical-rebuild\apps\frontend
vercel --prod
```

**Follow prompts**:
- Project name: `nexclinical-frontend` (or keep existing)
- Framework: Next.js
- Root directory: `./` (current)
- Build command: `pnpm build` (auto-detected)
- Output directory: `.next` (auto-detected)

**Result**: Frontend deploys to Vercel instantly!

### Option B: Using GitHub (If connected)

1. Push code to GitHub
2. Vercel auto-deploys on push
3. Production URL updates automatically

---

## 🎯 Step 2: Configure Vercel Environment Variables

**This is CRITICAL** - Without these, Sanity won't connect!

### 2a. Go to Vercel Dashboard

1. Open https://vercel.com
2. Click on your project: **nexclinical-frontend**
3. Go to **Settings** → **Environment Variables**

### 2b. Add These Variables

Click "Add Variable" for each:

| Name | Value | Environment |
|------|-------|-------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `htfikdkh` | Production, Preview, Development |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | Production, Preview, Development |
| `RESEND_API_KEY` | Your Resend API key | Production, Preview, Development |

**To get RESEND_API_KEY**:
- Go to https://resend.com
- Dashboard → API Keys
- Copy your key (looks like `re_xxxxx...`)

### 2c. Verify Setup

1. Scroll down in Environment Variables
2. Confirm all 3 variables are listed
3. Click **Deploy** button or wait for auto-redeploy

---

## 🧩 Step 3: Set Up Sanity Production Environment

### 3a. Check Sanity Project Exists

1. Go to https://sanity.io
2. Log in to your account
3. Go to **Projects**
4. Look for project ID: `htfikdkh` (should exist)
5. Click on it → **Settings**

### 3b. Verify Dataset & API

In Sanity Project Settings:

| Setting | Expected Value |
|---------|-----------------|
| Project ID | `htfikdkh` |
| Dataset | `production` |
| Status | Active |

### 3c. Set Up Content Access

1. Go to **API** section
2. Verify CORS origins include:
   - `https://nexclinical-frontend.vercel.app` (your Vercel URL)
   - `http://localhost:3000` (local dev)
   - `localhost:3333` (Studio dev)

---

## 📝 Step 4: Create Content in Sanity Studio

### 4a. Access Studio

**Local** (Development):
```bash
cd C:\Nexclinical\nexclinical-rebuild\apps\sanity-studio
pnpm dev
```
Then visit: http://localhost:3333

**Production** (When ready):
- URL: https://nexclinical.sanity.studio (or your custom domain)

### 4b. Follow Content Creation Guide

Open: **SANITY_CONTENT_GUIDE.md**

Create (in this order):
1. ✅ Global Settings (company info, stats)
2. ✅ 3-4 Services (mark as Featured)
3. ✅ Homepage page with blocks:
   - Hero Section
   - Services Section

### 4c. Publish Content

For each item:
1. Fill in fields
2. Click **"Publish"** (top right, not just Save)
3. Wait for confirmation

---

## ✅ Step 5: Test Everything

### Test 1: Homepage Loads
```
Visit: https://nexclinical-frontend.vercel.app
Expected: Page loads with content (Sanity or hardcoded fallback)
```

### Test 2: Check Console for Errors
```
F12 → Console tab
Expected: No red errors about Sanity
```

### Test 3: Try Dynamic Route
```
Visit: https://nexclinical-frontend.vercel.app/about
Expected: Either page renders OR 404 (if page not created)
```

### Test 4: Test Contact Form
```
Go to: https://nexclinical-frontend.vercel.app/contact
Fill form → Submit
Expected: Email in your inbox within 10 seconds
```

### Test 5: View Vercel Logs
```
Vercel Dashboard → Deployments → Latest → Logs
Expected: No errors about SANITY_PROJECT_ID or API
```

---

## 🔧 Troubleshooting

### "Page shows hardcoded content, not Sanity"

**Causes**:
1. Sanity Studio is empty (no content published)
2. `NEXT_PUBLIC_SANITY_PROJECT_ID` not set in Vercel
3. Sanity API is down

**Solutions**:
1. ✅ Create content in Studio and publish
2. ✅ Verify env vars in Vercel Settings
3. ✅ Check Sanity status: https://status.sanity.io

### "Environment variables not set in Vercel"

**Solution**:
1. Go to Vercel → Settings → Environment Variables
2. Add variables manually (copy from table above)
3. Click "Save"
4. Redeploy: Click "Deployments" → Latest → "Redeploy"

### "Contact form not working"

**Solution**:
1. Check `RESEND_API_KEY` is set in Vercel
2. Verify API key is valid at https://resend.com
3. Check Vercel logs for errors

### "Contact form sends but no email received"

**Verify**:
1. Check spam/junk folder
2. Verify Resend is configured correctly
3. Check Vercel logs: Deployments → Latest → Logs

---

## 📊 Quick Checklist

Before going live, confirm:

- [ ] Vercel CLI installed (`vercel --version` shows version)
- [ ] Frontend code pushed to git
- [ ] `vercel --prod` ran successfully
- [ ] Vercel shows production deployment
- [ ] Environment variables set in Vercel (3 variables)
- [ ] Sanity project ID confirmed: `htfikdkh`
- [ ] Content created in Sanity Studio (Global Settings + Services)
- [ ] Content published (not just saved)
- [ ] Homepage loads at Vercel URL
- [ ] No errors in browser console
- [ ] Contact form sends emails

---

## 🎯 Commands to Run (In Order)

```bash
# 1. Navigate to frontend
cd C:\Nexclinical\nexclinical-rebuild\apps\frontend

# 2. Build locally first (to catch errors before Vercel)
pnpm build

# 3. Deploy to Vercel
vercel --prod

# 4. Follow CLI prompts and confirm deployment
```

---

## 📞 After Deployment

Once everything is live:

1. **Production URL**: https://nexclinical-frontend.vercel.app
2. **Sanity Studio**: https://nexclinical.sanity.studio (set up later)
3. **Contact Form**: Should send emails via Resend
4. **Team Access**: Share CMS_EDITING_GUIDE.md with marketing

---

**Next Step**: Run the deployment commands above and let me know the results!
