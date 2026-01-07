# Performance Budget & Optimization

## Overview

Performance targets and optimization strategies to ensure NexClinical loads fast and maintains excellent Core Web Vitals scores.

## Performance Budget

### Core Web Vitals Targets

| Metric | Good | Needs Improvement | Poor | Target |
|--------|------|-------------------|------|--------|
| **LCP** (Largest Contentful Paint) | ≤ 2.5s | 2.5s - 4.0s | > 4.0s | **< 2.0s** |
| **FID** (First Input Delay) | ≤ 100ms | 100ms - 300ms | > 300ms | **< 50ms** |
| **CLS** (Cumulative Layout Shift) | ≤ 0.1 | 0.1 - 0.25 | > 0.25 | **< 0.05** |
| **INP** (Interaction to Next Paint) | ≤ 200ms | 200ms - 500ms | > 500ms | **< 150ms** |
| **FCP** (First Contentful Paint) | ≤ 1.8s | 1.8s - 3.0s | > 3.0s | **< 1.5s** |
| **TTFB** (Time to First Byte) | ≤ 800ms | 800ms - 1800ms | > 1800ms | **< 600ms** |

### Resource Budget

| Resource | Budget | Current | Status |
|----------|--------|---------|--------|
| **JavaScript** | < 200 KB (gzipped) | TBD | 🟡 |
| **CSS** | < 50 KB (gzipped) | TBD | 🟡 |
| **Images** (above fold) | < 500 KB | TBD | 🟡 |
| **Fonts** | < 100 KB (WOFF2) | TBD | 🟡 |
| **Total Page Weight** | < 1.5 MB | TBD | 🟡 |
| **Requests** | < 50 | TBD | 🟡 |

### Lighthouse Score Targets

| Category | Target | Minimum |
|----------|--------|---------|
| **Performance** | 95+ | 90 |
| **Accessibility** | 100 | 95 |
| **Best Practices** | 100 | 95 |
| **SEO** | 100 | 95 |

## Optimization Strategies

### 1. Rendering Strategy

**Static Site Generation (SSG)**:
- Home page
- About page
- Service pages
- Privacy/Terms pages

**Incremental Static Regeneration (ISR)**:
- Blog posts (revalidate: 3600s)
- Service pages (revalidate: 1800s)
- Testimonials (revalidate: 3600s)

**Dynamic (SSR)**:
- Contact form (if personalized)
- Search results (if implemented)

```typescript
// apps/frontend/app/page.tsx
export const revalidate = 3600; // ISR: Revalidate every hour

export default async function HomePage() {
  const data = await getHomeData();
  return <Home data={data} />;
}
```

### 2. Image Optimization

**Next/Image Configuration**:
```javascript
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.nexclinical.com',
        pathname: '/**',
      },
    ],
    minimumCacheTTL: 31536000, // 1 year
  },
};
```

**Best Practices**:
- Use AVIF format (smaller than WebP)
- Lazy load below-the-fold images
- Priority load hero images
- Responsive images with srcset
- Proper aspect ratios to prevent CLS

```tsx
// Example: Hero image
<Image
  src="/hero-image.jpg"
  alt="NexClinical virtual medical support"
  width={1920}
  height={1080}
  priority
  quality={90}
  placeholder="blur"
/>

// Example: Below-fold image
<Image
  src="/feature-image.jpg"
  alt="Feature description"
  width={800}
  height={600}
  loading="lazy"
  quality={85}
/>
```

### 3. Font Optimization

**Next.js Font Loading**:
```typescript
// apps/frontend/app/layout.tsx
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

**Best Practices**:
- Use `next/font` for automatic optimization
- Limit font weights (4 max)
- Subset fonts (latin only if applicable)
- Use `font-display: swap`
- Preload critical fonts

### 4. JavaScript Optimization

**Code Splitting**:
```typescript
// Dynamic imports for non-critical components
import dynamic from 'next/dynamic';

const TestimonialCarousel = dynamic(() => import('@/components/TestimonialCarousel'), {
  loading: () => <div className="animate-pulse h-96 bg-gray-200" />,
  ssr: false, // Client-side only if needed
});
```

**Tree Shaking**:
- Import only needed components from libraries
```typescript
// ❌ Bad
import _ from 'lodash';

// ✅ Good
import debounce from 'lodash/debounce';
```

**Bundle Analysis**:
```javascript
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // ... other config
});
```

Run: `ANALYZE=true pnpm build`

### 5. CSS Optimization

**Tailwind CSS Purging**:
```javascript
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

**Critical CSS**:
- Inline critical CSS (Next.js automatic)
- Defer non-critical CSS
- Minimize unused styles

### 6. Caching Strategy

**Next.js Cache Headers**:
```typescript
// apps/frontend/app/api/data/route.ts
export async function GET() {
  const data = await fetchData();
  
  return Response.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
```

**Static Assets**:
```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

**CDN Caching (Cloudflare)**:
- Static assets: 1 year
- Images: 1 year (immutable if hashed)
- HTML: 1 hour (with stale-while-revalidate)
- API responses: 5 minutes (if cacheable)

### 7. Third-Party Scripts

**Load Strategies**:
```tsx
// apps/frontend/app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        
        {/* Analytics - Load after page interactive */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"
          strategy="afterInteractive"
        />
        
        {/* Non-critical - Load lazily */}
        <Script
          src="https://widget.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
```

**Best Practices**:
- Defer non-critical scripts
- Use `strategy="afterInteractive"` or `"lazyOnload"`
- Self-host if possible (Google Fonts, Analytics)
- Minimize third-party dependencies

### 8. Prefetching & Preloading

**Link Prefetching**:
```tsx
import Link from 'next/link';

// Automatic prefetch on hover (default)
<Link href="/services" prefetch={true}>
  Services
</Link>

// Disable prefetch for low-priority links
<Link href="/terms" prefetch={false}>
  Terms
</Link>
```

**Resource Hints**:
```tsx
// apps/frontend/app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://api.nexclinical.com" />
        <link rel="dns-prefetch" href="https://media.nexclinical.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### 9. Database Query Optimization

**Strapi REST API**:
```typescript
// Limit fields to reduce payload
const data = await fetch(
  'https://api.nexclinical.com/api/home?fields[0]=title&fields[1]=description&populate=hero'
);

// Use pagination
const posts = await fetch(
  'https://api.nexclinical.com/api/posts?pagination[pageSize]=10&pagination[page]=1'
);
```

**Connection Pooling**:
```javascript
// apps/cms/config/database.js
module.exports = {
  connection: {
    pool: {
      min: 2,
      max: 10,
      acquireTimeoutMillis: 30000,
      idleTimeoutMillis: 30000,
    },
  },
};
```

### 10. Monitoring & Continuous Optimization

**Lighthouse CI**:
```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [pull_request]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 20
      - name: Install dependencies
        run: pnpm install
      - name: Build
        run: pnpm build
      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli
          lhci autorun
        env:
          LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
```

```javascript
// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000', 'http://localhost:3000/services'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 0.95 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
```

**Real User Monitoring (Vercel Analytics)**:
```tsx
// apps/frontend/app/layout.tsx
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

**Performance Alerts**:
- Lighthouse CI fails on PR if score drops
- Vercel Analytics alerts on P75 LCP > 2.5s
- Bundle size alerts if JS > 200 KB

## Performance Checklist

### Build Time
- [ ] Static pages generated (SSG)
- [ ] ISR configured for dynamic content
- [ ] Images optimized (AVIF/WebP)
- [ ] Fonts optimized (next/font)
- [ ] CSS purged (Tailwind)
- [ ] JavaScript tree-shaken
- [ ] Bundle analyzed (< 200 KB JS)

### Runtime
- [ ] CDN caching configured
- [ ] Image lazy loading enabled
- [ ] Third-party scripts deferred
- [ ] Prefetching enabled for nav links
- [ ] Resource hints added (preconnect, dns-prefetch)
- [ ] No CLS (proper dimensions on images/embeds)
- [ ] Minimal JavaScript on initial load

### Monitoring
- [ ] Vercel Analytics enabled
- [ ] Lighthouse CI in GitHub Actions
- [ ] Performance budget enforced
- [ ] Core Web Vitals tracked
- [ ] Alerts configured

### Testing
- [ ] Test on 3G/4G (Chrome DevTools throttling)
- [ ] Test on mobile devices (real devices or BrowserStack)
- [ ] Test in different browsers (Chrome, Safari, Firefox)
- [ ] Lighthouse audit (desktop + mobile)
- [ ] WebPageTest analysis

## Optimization Workflow

1. **Baseline**: Run Lighthouse on current site
2. **Identify**: Find bottlenecks (waterfall, coverage, bundle size)
3. **Optimize**: Apply strategies above
4. **Measure**: Re-run Lighthouse, compare
5. **Iterate**: Continue until budget met
6. **Monitor**: Track in production with RUM

## Performance Testing Tools

- **Lighthouse**: Built into Chrome DevTools
- **WebPageTest**: https://www.webpagetest.org/
- **GTmetrix**: https://gtmetrix.com/
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Vercel Analytics**: Built-in RUM
- **Chrome UX Report**: https://web.dev/chrome-ux-report/

## Resources

- [Next.js Performance Docs](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Web.dev Performance](https://web.dev/learn-core-web-vitals/)
- [Core Web Vitals](https://web.dev/vitals/)
- [Lighthouse Scoring Guide](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/)
