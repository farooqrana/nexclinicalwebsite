# Testing & Automation Guide - NexClinical Frontend

**Date:** January 7, 2026  
**Status:** ✅ **COMPLETE - All Testing Infrastructure Ready**

---

## Overview

Complete end-to-end testing and continuous integration/continuous deployment (CI/CD) automation has been implemented for the NexClinical frontend application.

### Testing Stack
- **E2E Testing:** Playwright (Chromium, Firefox, Safari, Mobile)
- **Unit Testing:** Jest + React Testing Library
- **Code Quality:** ESLint + TypeScript Type Checking
- **Pre-commit Hooks:** Husky + lint-staged
- **CI/CD:** GitHub Actions
- **Code Coverage:** Jest Coverage Reporter + Codecov

---

## 1. End-to-End Testing (Playwright)

### Setup
```bash
cd apps/frontend
pnpm add -D @playwright/test
npx playwright install  # Install browser binaries
```

### Configuration
**File:** `apps/frontend/playwright.config.ts`

```typescript
- Base URL: http://localhost:3000 (configurable)
- Browsers: Chromium, Firefox, WebKit
- Mobile: Pixel 5, iPhone 12
- Screenshots: On failure only
- Videos: On retry only
- Traces: On first retry
```

### Running E2E Tests

```bash
# Run all tests (headless)
pnpm test:e2e

# Run with UI
pnpm test:e2e:ui

# Run headed (browser visible)
pnpm test:e2e:headed

# Debug mode
pnpm test:e2e:debug

# View HTML report
pnpm test:e2e:report
```

### Test Suites

#### 1. **Contact Form Tests** (`tests/e2e/contact-form.spec.ts`)
- ✅ Renders all form fields
- ✅ Validates required fields
- ✅ Shows error when no service selected
- ✅ Submits successfully with valid data
- ✅ Enforces rate limiting (5/hour)
- ✅ Validates email format
- ✅ Responsive on mobile (375x667)

#### 2. **Pricing Form Tests** (`tests/e2e/pricing-form.spec.ts`)
- ✅ Displays all form fields
- ✅ Submits successfully
- ✅ Validates required fields
- ✅ Enforces rate limiting (3/hour)
- ✅ Shows pricing information

#### 3. **Navigation Tests** (`tests/e2e/navigation.spec.ts`)
- ✅ Homepage loads correctly
- ✅ Header navigation works
- ✅ All main pages accessible
- ✅ Service detail pages load
- ✅ Footer links present
- ✅ Logo/branding visible
- ✅ SEO meta tags present
- ✅ Responsive across devices (mobile/tablet/desktop)

#### 4. **Error Pages & SEO** (`tests/e2e/error-pages.spec.ts`)
- **Error Pages:**
  - ✅ 404 page displays for non-existent routes
  - ✅ 404 page has navigation back to home
  - ✅ 404 page responsive on mobile
  - ✅ 404 page has proper styling

- **SEO & Performance:**
  - ✅ Sitemap.xml returns 200 with valid XML
  - ✅ Robots.txt configured correctly
  - ✅ JSON-LD structured data present
  - ✅ Homepage loads in < 3 seconds
  - ✅ No console errors

- **Accessibility:**
  - ✅ Proper heading hierarchy (1 h1, multiple h2s)
  - ✅ Images have alt text
  - ✅ Form fields have labels
  - ✅ Keyboard navigation supported

### Example E2E Test

```typescript
import { test, expect } from '@playwright/test';

test('should submit contact form successfully', async ({ page }) => {
  await page.goto('/contact');
  
  // Fill form
  await page.getByLabel(/first name/i).fill('John');
  await page.getByLabel(/email/i).fill('john@example.com');
  await page.getByLabel(/message/i).fill('Test message');
  
  // Select service
  await page.getByLabel(/revenue cycle/i).check();
  
  // Submit
  await page.getByRole('button', { name: /send message/i }).click();
  
  // Assert success
  await expect(page.getByText(/thank you/i)).toBeVisible();
});
```

---

## 2. Unit Testing (Jest + React Testing Library)

### Setup
```bash
cd apps/frontend
pnpm add -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

### Configuration
**Files:**
- `apps/frontend/jest.config.js` - Main configuration
- `apps/frontend/jest.setup.ts` - Test environment setup

### Running Unit Tests

```bash
# Run all tests
pnpm test

# Watch mode
pnpm test:watch

# With coverage
pnpm test:coverage

# Specific test file
pnpm test -- contact-form.test.tsx
```

### Test Suites

#### 1. **Rate Limiter Tests** (`__tests__/lib/rate-limit.test.ts`)
- ✅ Allows requests within limit
- ✅ Blocks requests over limit
- ✅ Resets after window expires
- ✅ Handles different identifiers separately
- ✅ Extracts IP from headers correctly

#### 2. **Analytics Tests** (`__tests__/lib/analytics.test.ts`)
- ✅ Singleton instance management
- ✅ Page view tracking
- ✅ Form submission tracking
- ✅ Button click tracking
- ✅ Link click tracking
- ✅ Custom event tracking
- ✅ Handles fetch errors gracefully

#### 3. **Contact Form Tests** (`__tests__/components/contact-form.test.tsx`)
- ✅ Renders all form fields
- ✅ Shows validation errors
- ✅ Requires service selection
- ✅ Submits with valid data
- ✅ Shows error messages on failure
- ✅ Displays loading state
- ✅ Handles network errors gracefully

### Coverage Thresholds
```javascript
coverageThreshold: {
  global: {
    branches: 70,
    functions: 70,
    lines: 70,
    statements: 70,
  },
}
```

### Example Unit Test

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from '@/components/contact-form';

test('should submit form successfully', async () => {
  render(<ContactForm />);
  const user = userEvent.setup();

  // Fill fields
  await user.type(screen.getByLabelText(/first name/i), 'John');
  await user.type(screen.getByLabelText(/email/i), 'john@example.com');
  
  // Submit
  await user.click(screen.getByRole('button', { name: /send/i }));
  
  // Assert
  expect(screen.getByText(/thank you/i)).toBeInTheDocument();
});
```

---

## 3. Code Quality & Linting

### ESLint
```bash
# Run linter
pnpm lint

# Fix issues
pnpm lint -- --fix
```

### Type Checking
```bash
# Type check entire project
pnpm type-check

# Watch mode
pnpm type-check -- --watch
```

### Prettier
```bash
# Format code
prettier --write "src/**/*.{ts,tsx,js,jsx}"
```

---

## 4. Pre-commit Hooks (Husky)

### Configuration
**Files:**
- `.husky/pre-commit` - Pre-commit hook script
- `apps/frontend/.lintstagedrc.json` - Lint-staged configuration

### How It Works
When you commit code:

1. **Type Check** - Full TypeScript type checking
2. **Lint & Format** - ESLint + Prettier on staged files
3. **Block Commit** - If any check fails, commit is blocked

### Pre-commit Hook Script
```bash
#!/usr/bin/env sh
# Type check frontend
pnpm -C apps/frontend type-check

# Lint & format staged files
pnpm -C apps/frontend lint-staged
```

### Lint-staged Config
```json
{
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,md,yml,yaml}": [
    "prettier --write"
  ]
}
```

---

## 5. CI/CD Pipeline (GitHub Actions)

### Workflow File
**Location:** `.github/workflows/ci-cd.yml`

### Pipeline Stages

#### 1. **Lint & Type Check**
- Runs ESLint
- TypeScript type checking
- Fails on errors, warns on issues

#### 2. **Unit Tests**
- Run Jest with coverage
- Upload coverage to Codecov
- Fails if coverage below threshold (70%)

#### 3. **Build**
- Build Next.js application
- Check for compile errors
- Upload build artifacts

#### 4. **E2E Tests**
- Run Playwright tests
- Download build artifacts
- Test against built application
- Upload failure screenshots/videos

#### 5. **Security Audit**
- Run npm audit
- Check for medium/high vulnerabilities

#### 6. **Deploy to Staging** (Main branch only)
- Deploy to staging environment
- Trigger after all tests pass

#### 7. **Deploy to Production** (Manual approval required)
- Deploy to production
- Requires environment approval

### Triggers
```yaml
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]
```

### Running Locally
To test the CI/CD workflow locally (optional):

```bash
# Install act (GitHub Actions runner)
# https://github.com/nektos/act

# Run all jobs
act

# Run specific job
act -j build

# Run on push event
act push
```

---

## 6. Complete Testing Workflow

### For Development (Local)

```bash
# 1. Start dev server
pnpm dev

# 2. Run unit tests in watch mode
pnpm test:watch

# 3. Run E2E tests (in another terminal)
pnpm test:e2e

# 4. Check code quality before committing
pnpm lint
pnpm type-check

# 5. Commit (pre-commit hooks run automatically)
git commit -m "feat: add new feature"
```

### For CI/CD (Automatic on Push)

1. **On Push to main/develop:**
   - ✅ Run ESLint + Type Check
   - ✅ Run Unit Tests + Coverage
   - ✅ Build Application
   - ✅ Run E2E Tests
   - ✅ Security Audit
   - ✅ Deploy to Staging (auto)
   - ⏸️ Deploy to Production (manual)

2. **On Pull Request:**
   - ✅ Run all checks
   - ❌ Blocks merge if any check fails
   - ✅ Shows status on PR

---

## 7. Test Commands Reference

### All Commands
```bash
# Testing
pnpm test                    # Unit tests (Jest)
pnpm test:watch             # Unit tests (watch mode)
pnpm test:coverage          # Unit tests with coverage report
pnpm test:e2e               # E2E tests (headless)
pnpm test:e2e:ui            # E2E tests (with UI)
pnpm test:e2e:headed        # E2E tests (browser visible)
pnpm test:e2e:debug         # E2E tests (debug mode)
pnpm test:e2e:report        # View E2E test report

# Code Quality
pnpm lint                    # Run ESLint
pnpm type-check             # Run TypeScript check
pnpm lint-staged            # Run lint-staged

# Build & Run
pnpm build                  # Build for production
pnpm start                  # Start production server
pnpm dev                    # Start dev server
```

---

## 8. Test Coverage

### Current Coverage Thresholds
- **Branches:** 70%
- **Functions:** 70%
- **Lines:** 70%
- **Statements:** 70%

### Generate Coverage Report
```bash
pnpm test:coverage

# Open coverage report
open coverage/index.html
```

### Coverage Files
- `coverage/lcov.info` - LCOV format (for Codecov)
- `coverage/index.html` - HTML report
- `coverage/clover.xml` - Clover format

---

## 9. Debugging Tests

### Debug Unit Tests
```bash
# Run Jest with debugger
node --inspect-brk node_modules/.bin/jest --runInBand

# Then open chrome://inspect in Chrome
```

### Debug E2E Tests
```bash
# Run Playwright in debug mode
pnpm test:e2e:debug

# Opens Playwright Inspector with step-by-step execution
```

### View Test Reports
```bash
# E2E Test Report
pnpm test:e2e:report

# Shows HTML report with:
# - Test results
# - Screenshots on failure
# - Videos on retry
# - Trace files
```

---

## 10. Best Practices

### Unit Testing
- ✅ Test component rendering
- ✅ Test user interactions
- ✅ Test error states
- ✅ Mock external APIs
- ✅ Test accessibility

### E2E Testing
- ✅ Test critical user flows
- ✅ Test cross-browser compatibility
- ✅ Test responsive design
- ✅ Test error scenarios
- ✅ Test performance

### CI/CD
- ✅ Run all tests on every push
- ✅ Block deploys on test failure
- ✅ Keep test suite fast (< 15 min)
- ✅ Generate coverage reports
- ✅ Notify on failures

### Code Quality
- ✅ Use pre-commit hooks
- ✅ Fix linting issues automatically
- ✅ Keep type checking strict
- ✅ Run tests frequently
- ✅ Review coverage reports

---

## 11. Troubleshooting

### Jest Not Finding Tests
```bash
# Ensure test files match pattern
# __tests__/**/*.[jt]s?(x)
# **/?(*.)+(spec|test).[jt]s?(x)

# Clear cache
pnpm test -- --clearCache
```

### Playwright Timeouts
```bash
# Increase timeout
pnpm test:e2e -- --timeout=60000

# Or in playwright.config.ts
use: {
  timeout: 60000,
}
```

### Pre-commit Hook Not Running
```bash
# Reinstall Husky
pnpm install husky

# Make hook executable
chmod +x .husky/pre-commit
```

### Build Fails in CI/CD
```bash
# Check GitHub Actions logs in Actions tab
# Common issues:
# - Missing env variables
# - Node version mismatch
# - Dependency version conflicts
```

---

## 12. Continuous Improvement

### Recommended Next Steps

1. **Increase Test Coverage**
   - Add more unit tests for edge cases
   - Increase coverage threshold to 80%
   - Test error boundaries

2. **Add Performance Tests**
   - Measure Core Web Vitals
   - Test load time thresholds
   - Monitor bundle size

3. **Add Visual Regression Testing**
   - Use Percy or Chromatic
   - Capture visual diffs
   - Prevent UI regressions

4. **Add API Testing**
   - Test /api/contact endpoint
   - Test /api/pricing endpoint
   - Test /api/analytics endpoint

5. **Add Accessibility Testing**
   - Run axe-core checks
   - Test screen reader compatibility
   - Test keyboard navigation

---

## Summary

| Feature | Status | Coverage |
|---------|--------|----------|
| E2E Tests | ✅ | Contact, Pricing, Navigation, Errors, SEO, Accessibility |
| Unit Tests | ✅ | Rate Limiter, Analytics, Contact Form |
| Linting | ✅ | ESLint configured |
| Type Checking | ✅ | TypeScript strict mode |
| Pre-commit Hooks | ✅ | Husky + lint-staged |
| CI/CD Pipeline | ✅ | GitHub Actions (7 jobs) |
| Code Coverage | ✅ | 70% threshold enforced |
| Test Commands | ✅ | 13 test scripts available |

**All testing and automation infrastructure is now in place and ready for production!**
