# Vercel Deployment Guide for NexClinical

## Step 1: Prepare GitHub Repository

Before deploying to Vercel, ensure your code is in a GitHub repository:

```bash
# If not already in Git:
cd c:\Nexclinical\nexclinical-rebuild
git init
git add .
git commit -m "Initial production-ready build with testing and automation"

# Create repository on GitHub.com
# Then:
git remote add origin https://github.com/[YOUR-USERNAME]/nexclinical-rebuild.git
git branch -M main
git push -u origin main
```

## Step 2: Create Vercel Project

### Manual Setup (Recommended for first-time):

1. **Go to https://vercel.com**
2. **Click "Add New..." → "Project"**
3. **Import Git Repository**
   - Select your GitHub repository `nexclinical-rebuild`
   - Select scope (personal or organization)

4. **Configure Build Settings:**
   - **Project Name:** `nexclincalwebsite`
   - **Framework:** Next.js
   - **Root Directory:** `apps/frontend`
   - **Build Command:** `pnpm build`
   - **Output Directory:** `.next`
   - **Install Command:** `pnpm install`

5. **Set Environment Variables:**
   ```
   RESEND_API_KEY = re_gDfDDkGt_EztZY2TtxcvpmnYbsLBGUZC7
   NEXT_PUBLIC_SITE_URL = https://nexclincalwebsite.vercel.app
   NODE_ENV = production
   ```

6. **Click "Deploy"**
   - First deployment takes 2-3 minutes
   - You'll get a preview URL: `https://nexclincalwebsite.vercel.app`

### Via Vercel CLI (Advanced):

```bash
# Install Vercel CLI globally
pnpm add -g vercel

# Login to Vercel
vercel login

# Deploy from frontend directory
cd c:\Nexclinical\nexclinical-rebuild\apps\frontend
vercel --prod --project=nexclincalwebsite
```

## Step 3: Configure Production Domain

After deployment:

1. **Add Custom Domain**
   - In Vercel Dashboard → Project Settings → Domains
   - Add your domain (e.g., www.nexclinical.com)
   - Update DNS records at your domain registrar
   - Wait 24-48 hours for DNS propagation

2. **Update Environment Variables**
   ```
   NEXT_PUBLIC_SITE_URL = https://www.nexclinical.com
   ```

## Step 4: Deployment Tests

### Pre-Deployment Checklist (Local):
- ✅ Run `pnpm build` - should complete in <2 min with 0 errors
- ✅ Run `pnpm test` - all tests should pass
- ✅ Run `pnpm lint` - no errors or warnings
- ✅ Verify `.env.local` has `RESEND_API_KEY`

### Post-Deployment Tests (On Vercel):

1. **Test Forms on Staging URL** (https://nexclincalwebsite.vercel.app):
   ```
   - Contact Form: /contact
   - Pricing Form: /pricing
   - Verify emails arrive at recipient
   - Check rate limiting works
   ```

2. **Test Email Delivery**:
   - Submit contact form
   - Email should arrive at: farooq@switchchoice.com
   - Check for errors in Vercel logs

3. **Run E2E Tests Against Production**:
   ```bash
   cd apps/frontend
   PLAYWRIGHT_BASE_URL=https://nexclincalwebsite.vercel.app pnpm test:e2e
   ```

4. **Test All Pages**:
   - Homepage: / ✓
   - About: /about ✓
   - Services: /services ✓
   - Pricing: /pricing ✓
   - Contact: /contact ✓
   - FAQs: /faqs ✓
   - Resources: /resources/* ✓

5. **Check SEO**:
   - Verify sitemap.xml is accessible
   - Check meta tags in HTML
   - Verify robots.txt serves correctly

## Step 5: Monitoring & Debugging

### If Forms Don't Send Emails:

1. **Check Vercel Logs:**
   - Dashboard → Deployments → Recent → View Logs
   - Look for Resend API errors

2. **Verify Environment Variable:**
   - Dashboard → Settings → Environment Variables
   - Confirm `RESEND_API_KEY` is set
   - Restart deployment: Dashboard → Deployments → Redeploy

3. **Test Resend API Directly:**
   ```bash
   curl -X POST "https://api.resend.com/emails" \
     -H "Authorization: Bearer re_gDfDDkGt_EztZY2TtxcvpmnYbsLBGUZC7" \
     -H "Content-Type: application/json" \
     -d "{
       \"from\": \"onboarding@resend.dev\",
       \"to\": \"delivered@resend.dev\",
       \"subject\": \"Hello\",
       \"html\": \"<strong>It works!</strong>\"
     }"
   ```

### Monitor Performance:
- Dashboard → Analytics
- Check response times, status codes, logs
- Use Vercel's built-in monitoring

### View Real-time Logs:
```bash
vercel logs --project=nexclincalwebsite
```

## Deployment Timeline

| Step | Duration | Notes |
|------|----------|-------|
| GitHub setup | 5 min | Create repo and push code |
| Vercel project creation | 1 min | Quick setup |
| First deployment | 3 min | Automatic after connection |
| Environment configuration | 2 min | Add API keys |
| DNS setup (optional) | 24-48h | For custom domain |
| Testing & validation | 15 min | Form submission & email tests |

## Phase 1, 2, 3 Assessment

### ✅ **PHASE 1 (Immediate - Required):**
- Deploy to Vercel production
- Test all forms and email delivery
- QA all pages and functionality
- Set custom domain (optional)
- **Timeline:** This week (1-2 days)
- **Blocker:** Email API key configuration

### 🟡 **PHASE 2 (Optional - Recommended):**
- Google Analytics 4 setup
- HubSpot CRM integration (lead capture)
- Advanced form analytics
- **Timeline:** Week 2-3
- **Decision:** Based on marketing requirements

### 🟢 **PHASE 3 (Future - Nice-to-have):**
- Strapi CMS for dynamic content
- WordPress migration
- Advanced content management
- **Timeline:** Weeks 5-10+
- **Decision:** Based on content strategy

## Next Steps

1. **Push code to GitHub** (if not already done)
2. **Create Vercel project** using instructions above
3. **Add environment variables** in Vercel
4. **Test forms and emails** on staging URL
5. **Set custom domain** (optional)
6. **Run full E2E test suite** against production

---

## Quick Reference - Environment Variables

**Local Development (.env.local):**
```
RESEND_API_KEY=re_gDfDDkGt_EztZY2TtxcvpmnYbsLBGUZC7
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Vercel Production:**
```
RESEND_API_KEY=re_gDfDDkGt_EztZY2TtxcvpmnYbsLBGUZC7
NEXT_PUBLIC_SITE_URL=https://nexclincalwebsite.vercel.app
NODE_ENV=production
```

**Vercel After Custom Domain:**
```
RESEND_API_KEY=re_gDfDDkGt_EztZY2TtxcvpmnYbsLBGUZC7
NEXT_PUBLIC_SITE_URL=https://www.nexclinical.com
NODE_ENV=production
```
