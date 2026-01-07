# 🔧 Commands Reference

## Quick Copy-Paste Commands

### 1. GitHub Setup

```bash
# Navigate to project
cd c:\Nexclinical\nexclinical-rebuild

# Initialize git (if needed)
git init

# Add all files
git add .

# First commit
git commit -m "Production-ready with testing and automation"

# Add remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/nexclinical-rebuild.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

### 2. Vercel CLI Deployment (Alternative)

```bash
# Install Vercel CLI globally
pnpm add -g vercel

# Login to Vercel (opens browser)
vercel login

# Navigate to frontend
cd c:\Nexclinical\nexclinical-rebuild\apps\frontend

# Deploy to production
vercel --prod --project=nexclincalwebsite
```

### 3. Local Testing

```bash
# Navigate to frontend
cd c:\Nexclinical\nexclinical-rebuild\apps\frontend

# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build production
pnpm build

# Test production build locally
pnpm start
```

### 4. Testing Commands

```bash
# Run unit tests
pnpm test

# Run unit tests in watch mode
pnpm test:watch

# Generate coverage report
pnpm test:coverage

# Run E2E tests
pnpm test:e2e

# Run E2E tests in UI mode (interactive)
pnpm test:e2e:ui

# Run E2E tests headed (see browser)
pnpm test:e2e:headed

# Run E2E tests in debug mode
pnpm test:e2e:debug

# View E2E test report
pnpm test:e2e:report
```

### 5. Code Quality

```bash
# Run linter
pnpm lint

# Fix linting issues
pnpm lint --fix

# Type check
pnpm type-check

# Format code
pnpm format

# Format and check
pnpm format:check
```

### 6. Deployment Testing (After Vercel Deploy)

```bash
# Test against production URL
PLAYWRIGHT_BASE_URL=https://nexclincalwebsite.vercel.app pnpm test:e2e

# Test against staging
PLAYWRIGHT_BASE_URL=https://nexclincalwebsite-staging.vercel.app pnpm test:e2e

# Test with headed browser (see what's happening)
PLAYWRIGHT_BASE_URL=https://nexclincalwebsite.vercel.app pnpm test:e2e:headed
```

### 7. Local Email Testing

```bash
# Start dev server with env variables loaded
NEXT_PUBLIC_SITE_URL=http://localhost:3000 pnpm dev

# In another terminal, test API directly:
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "your-email@example.com",
    "company": "Test Co",
    "phone": "555-0123",
    "service": "patient-scheduling",
    "message": "Test message"
  }'
```

### 8. Environment Variables

```bash
# Set environment variables (Windows PowerShell)
$env:RESEND_API_KEY="re_gDfDDkGt_EztZY2TtxcvpmnYbsLBGUZC7"
$env:NEXT_PUBLIC_SITE_URL="http://localhost:3000"

# Or add to .env.local file:
# RESEND_API_KEY=re_gDfDDkGt_EztZY2TtxcvpmnYbsLBGUZC7
# NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 9. Build Verification

```bash
# Check build size and routes
cd c:\Nexclinical\nexclinical-rebuild\apps\frontend
pnpm build 2>&1 | tail -30

# View routes summary
ls .next/server/pages
```

### 10. Docker Commands (If Using Docker)

```bash
# Build Docker image
docker build -t nexclinical:latest .

# Run Docker container
docker run -p 3000:3000 nexclinical:latest

# Stop container
docker stop <container-id>

# View logs
docker logs <container-id>
```

---

## Environment Variables Reference

### Local Development (.env.local)
```
RESEND_API_KEY=re_gDfDDkGt_EztZY2TtxcvpmnYbsLBGUZC7
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=development
```

### Vercel Staging
```
RESEND_API_KEY=re_gDfDDkGt_EztZY2TtxcvpmnYbsLBGUZC7
NEXT_PUBLIC_SITE_URL=https://nexclincalwebsite-staging.vercel.app
NODE_ENV=production
```

### Vercel Production
```
RESEND_API_KEY=re_gDfDDkGt_EztZY2TtxcvpmnYbsLBGUZC7
NEXT_PUBLIC_SITE_URL=https://nexclincalwebsite.vercel.app
NODE_ENV=production
```

### With Custom Domain
```
RESEND_API_KEY=re_gDfDDkGt_EztZY2TtxcvpmnYbsLBGUZC7
NEXT_PUBLIC_SITE_URL=https://www.nexclinical.com
NODE_ENV=production
```

---

## Useful URLs

| Resource | URL |
|----------|-----|
| **Vercel Dashboard** | https://vercel.com/dashboard |
| **Vercel Project Settings** | https://vercel.com/projects/nexclincalwebsite/settings |
| **GitHub Repository** | https://github.com/YOUR-USERNAME/nexclinical-rebuild |
| **Local Dev Server** | http://localhost:3000 |
| **Production Deployment** | https://nexclincalwebsite.vercel.app |
| **Resend Dashboard** | https://resend.com/dashboard |
| **Resend API Docs** | https://resend.com/docs |
| **Next.js Docs** | https://nextjs.org/docs |
| **Playwright Docs** | https://playwright.dev |

---

## Troubleshooting Commands

```bash
# Clear node_modules and reinstall
rm -r node_modules
rm pnpm-lock.yaml
pnpm install

# Clean build cache
rm -r .next
pnpm build

# View Node.js version (should be 18+)
node --version

# View pnpm version
pnpm --version

# Check if ports are in use
netstat -ano | findstr :3000  # Windows
lsof -i :3000                  # Mac/Linux

# Kill process on port 3000 (Windows)
taskkill /PID <PID> /F

# Check git status
git status

# View git logs
git log --oneline -10

# View available pnpm scripts
pnpm run

# Test Resend API key validity
curl -X GET "https://api.resend.com/emails" \
  -H "Authorization: Bearer re_gDfDDkGt_EztZY2TtxcvpmnYbsLBGUZC7"
```

---

## Quick Deployment Flow

```bash
# 1. Make sure everything is committed
cd c:\Nexclinical\nexclinical-rebuild
git add .
git commit -m "Ready for production"

# 2. Build locally to verify
cd apps/frontend
pnpm build

# 3. Push to GitHub
cd ../..
git push origin main

# 4. Vercel deploys automatically!
# (If connected)

# 5. Wait 2-3 minutes, then:
# Visit https://nexclincalwebsite.vercel.app

# 6. Test
pnpm test:e2e --project=chromium
```

---

## Common Issues & Fixes

```bash
# Issue: Port 3000 already in use
# Fix:
taskkill /PID <PID> /F
# or use different port:
pnpm dev -- -p 3001

# Issue: Dependencies not installing
# Fix:
rm -r node_modules pnpm-lock.yaml
pnpm install

# Issue: Build fails on TypeScript
# Fix:
pnpm type-check  # See errors
pnpm lint --fix  # Auto-fix linting

# Issue: E2E tests failing locally
# Fix:
pnpm test:e2e:ui  # Debug mode
# or
PLAYWRIGHT_BASE_URL=http://localhost:3000 pnpm test:e2e:headed
```

---

## File Locations

```
c:\Nexclinical\nexclinical-rebuild\
├── apps/frontend/              # Next.js app
│   ├── .env.local             # Environment variables (local)
│   ├── app/                   # App Router pages
│   ├── components/            # React components
│   ├── lib/                   # Utilities
│   ├── public/                # Static files
│   └── tests/                 # E2E tests
├── .github/
│   └── workflows/             # GitHub Actions
│       └── ci-cd.yml          # CI/CD pipeline
├── QUICK_START_DEPLOYMENT.md  # 5-minute guide
├── VERCEL_DEPLOYMENT_GUIDE.md # Full deployment
└── PHASE_ASSESSMENT.md        # Phase 1,2,3 roadmap
```

---

**Ready to deploy? Start with:** `cd c:\Nexclinical\nexclinical-rebuild && git push origin main`
