# Security Checklist

## Overview

Comprehensive security measures for NexClinical to prevent common web vulnerabilities and maintain a hardened posture.

## Frontend Security (Next.js/Vercel)

### HTTP Security Headers

Configured via `next.config.js` or middleware:

```javascript
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  }
]

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://challenges.cloudflare.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https: blob:;
  font-src 'self' data:;
  connect-src 'self' https://api.nexclinical.com;
  frame-src https://calendly.com https://challenges.cloudflare.com;
  media-src 'self' https://media.nexclinical.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
```

**Checklist**:
- [ ] CSP configured and tested (no violations in console)
- [ ] HSTS enabled with long max-age
- [ ] X-Frame-Options set to DENY
- [ ] X-Content-Type-Options set to nosniff
- [ ] Referrer-Policy configured
- [ ] Permissions-Policy limits unnecessary features

### Input Validation & Sanitization

**Form Validation**:
```typescript
// apps/frontend/lib/validation.ts
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^[0-9\-\(\)\s]+$/).optional(),
  message: z.string().min(10).max(1000),
  turnstileToken: z.string(),
});
```

**Rich Text Sanitization**:
```typescript
import DOMPurify from 'isomorphic-dompurify';

function sanitizeHTML(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h2', 'h3', 'ul', 'ol', 'li', 'a'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
  });
}
```

**Checklist**:
- [ ] All form inputs validated with Zod schemas
- [ ] CMS rich text sanitized before rendering
- [ ] SQL injection prevented (use parameterized queries in Strapi)
- [ ] XSS prevention (escape user input, CSP)

### Authentication & Authorization

**API Route Protection**:
```typescript
// apps/frontend/app/api/admin/route.ts
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const headersList = headers();
  const token = headersList.get('authorization')?.replace('Bearer ', '');

  if (token !== process.env.ADMIN_API_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Protected logic
}
```

**Checklist**:
- [ ] No sensitive API routes exposed publicly
- [ ] Admin routes protected with secret tokens
- [ ] Rate limiting on form submissions

### Dependency Security

**Regular Updates**:
```bash
# Check for vulnerabilities
pnpm audit

# Update dependencies
pnpm update

# Check for outdated packages
pnpm outdated
```

**Checklist**:
- [ ] Regular `pnpm audit` runs (weekly)
- [ ] Dependabot/Renovate enabled for automated PRs
- [ ] Critical security updates applied within 24 hours
- [ ] Major version updates tested in staging first

## Backend Security (Strapi/Render)

### Strapi Configuration

**Admin Access Control**:
```javascript
// apps/cms/config/admin.js
module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  // IP allowlist for admin (via middleware or Cloudflare)
});
```

**CORS Configuration**:
```javascript
// apps/cms/config/middlewares.js
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://media.nexclinical.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'https://media.nexclinical.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://www.nexclinical.com', 'https://nexclinical.com'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

**Rate Limiting**:
```javascript
// apps/cms/config/middlewares.js (add rate limiter)
{
  name: 'strapi::ratelimit',
  config: {
    interval: { min: 5 },
    max: 100, // 100 requests per 5 minutes
    delayAfter: 50,
    timeWait: 1000,
    whitelist: [], // Whitelisted IPs if needed
    store: {
      type: 'memory', // Use Redis for production clusters
    },
  },
}
```

**Checklist**:
- [ ] Admin panel access restricted by IP (Cloudflare/WAF)
- [ ] Strong passwords enforced (min 12 chars, complexity)
- [ ] MFA enabled for admin users
- [ ] API tokens rotated regularly (90 days)
- [ ] CORS limited to production domains
- [ ] Rate limiting configured
- [ ] Audit logs enabled and reviewed

### Database Security (Neon/Postgres)

**Connection Security**:
```javascript
// apps/cms/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL') ? { rejectUnauthorized: true } : false,
    },
    pool: {
      min: 2,
      max: 10,
    },
    acquireConnectionTimeout: 10000,
  },
});
```

**Checklist**:
- [ ] SSL/TLS enforced for all connections
- [ ] Database user has minimal privileges (no superuser)
- [ ] Database not exposed to public internet
- [ ] Connection pooling configured
- [ ] Regular backups enabled and tested
- [ ] Point-in-time recovery available

### File Upload Security

**Strapi Upload Config**:
```javascript
// apps/cms/config/plugins.js
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
        region: env('AWS_REGION'),
        endpoint: env('AWS_ENDPOINT'),
        params: {
          Bucket: env('AWS_BUCKET'),
          ACL: 'private', // Use signed URLs or CloudFront
        },
      },
      sizeLimit: 10 * 1024 * 1024, // 10 MB
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
        xsmall: 64,
      },
    },
  },
});
```

**File Type Validation**:
```javascript
// apps/cms/src/api/upload/middlewares/fileValidation.js
module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const allowedMimeTypes = [
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/svg+xml',
      'application/pdf',
    ];

    if (ctx.request.files && ctx.request.files.files) {
      const files = Array.isArray(ctx.request.files.files)
        ? ctx.request.files.files
        : [ctx.request.files.files];

      for (const file of files) {
        if (!allowedMimeTypes.includes(file.type)) {
          return ctx.throw(400, `File type ${file.type} is not allowed`);
        }

        // Check for malicious content (basic)
        if (file.type === 'image/svg+xml') {
          const content = file.buffer ? file.buffer.toString() : '';
          if (content.includes('<script')) {
            return ctx.throw(400, 'SVG contains prohibited content');
          }
        }
      }
    }

    await next();
  };
};
```

**Checklist**:
- [ ] File type allowlist enforced
- [ ] File size limits set (10 MB default)
- [ ] SVG uploads sanitized or disabled
- [ ] Uploads stored outside webroot
- [ ] Media served from CDN (not app server)
- [ ] Signed URLs or CloudFront for private files

## Infrastructure Security

### Cloudflare WAF

**Managed Rules**:
- [x] OWASP Core Ruleset
- [x] Cloudflare Managed Ruleset
- [x] Cloudflare Specials

**Custom Rules**:
```
# Block admin access except from allowed IPs
(http.request.uri.path contains "/admin" and not ip.src in {1.2.3.4 5.6.7.8})

# Rate limit API endpoints
(http.request.uri.path eq "/api/auth/local") and (rate > 5)

# Block known bad user agents
(http.user_agent contains "scrapy" or http.user_agent contains "curl")
```

**Bot Protection**:
- [x] Challenge on suspicious requests
- [x] JavaScript challenge for /admin
- [x] Rate limiting on forms

**Checklist**:
- [ ] WAF enabled and configured
- [ ] Admin panel IP allowlist active
- [ ] Rate limiting rules tested
- [ ] Bot protection verified
- [ ] DDoS protection enabled
- [ ] Firewall logs reviewed weekly

### Secrets Management

**Vercel Secrets**:
- Store in Vercel environment variables
- Separate values per environment (dev/staging/prod)
- Rotate every 90 days

**Render Secrets**:
- Store in Render environment variables
- Use Render's "Secret File" for multi-line secrets
- Never commit `.env` files to Git

**Secret Rotation Schedule**:
- API tokens: 90 days
- JWT secrets: 180 days
- Database passwords: 90 days
- Admin passwords: 60 days

**Checklist**:
- [ ] No secrets in Git history
- [ ] `.env` files in `.gitignore`
- [ ] Secrets documented (not values, just keys)
- [ ] Rotation schedule followed
- [ ] Access logs reviewed for suspicious activity

### SSL/TLS

**Configuration**:
- TLS 1.3 (minimum 1.2)
- Strong cipher suites only
- HSTS with preload
- Certificate auto-renewal (Vercel/Render/Cloudflare)

**Checklist**:
- [ ] HTTPS enforced everywhere
- [ ] HTTP redirects to HTTPS
- [ ] TLS 1.3 enabled
- [ ] A+ rating on SSL Labs
- [ ] Certificate expiry monitored

## Monitoring & Incident Response

### Security Monitoring

**What to Monitor**:
- Failed login attempts (Strapi admin)
- Unusual traffic patterns (WAF logs)
- 4xx/5xx error spikes
- Large file uploads
- Abnormal API usage

**Tools**:
- Cloudflare Analytics (WAF blocks, threats)
- Vercel Logs (errors, performance)
- Render Logs (Strapi errors)
- Sentry (frontend/backend errors)

**Checklist**:
- [ ] Uptime monitoring (UptimeRobot/Pingdom)
- [ ] Error tracking (Sentry)
- [ ] Log aggregation (Datadog/LogRocket - optional)
- [ ] Alerting configured (Slack/email)
- [ ] Security logs reviewed weekly

### Incident Response Plan

**Severity Levels**:
1. **Critical**: Data breach, site down, active attack
2. **High**: Unauthorized access attempt, XSS/injection found
3. **Medium**: Suspicious activity, minor vulnerability
4. **Low**: Informational, potential risk

**Response Steps**:
1. **Detect**: Monitoring alerts, user reports
2. **Assess**: Severity, scope, impact
3. **Contain**: Block IPs, disable accounts, rollback
4. **Eradicate**: Patch vulnerability, rotate secrets
5. **Recover**: Restore service, verify integrity
6. **Review**: Post-mortem, update procedures

**Contacts**:
- Technical Lead: [contact]
- DevOps: [contact]
- Legal/Compliance: [contact]
- Hosting Support: Vercel/Render/Neon support

**Checklist**:
- [ ] Incident response plan documented
- [ ] Team trained on procedures
- [ ] Contact list up to date
- [ ] Backup/restore tested monthly
- [ ] Post-mortem template ready

## Compliance & Best Practices

### HIPAA Considerations

While this is a marketing site (not handling PHI), maintain best practices:

- [ ] Encryption in transit (TLS 1.3)
- [ ] Encryption at rest (Neon, R2)
- [ ] Access controls (RBAC in Strapi)
- [ ] Audit logs enabled
- [ ] Regular security reviews
- [ ] Vendor BAAs if needed (Vercel, Render, Neon)

### GDPR/Privacy

**Contact Form Data**:
- Minimal data collection (name, email, message)
- No tracking without consent
- Privacy policy link on forms
- Data retention policy (delete after 90 days)

**Cookies**:
- Essential cookies only (session, auth)
- Analytics opt-in (if using GA4)
- Cookie banner if required

**Checklist**:
- [ ] Privacy policy updated and accessible
- [ ] Terms of use published
- [ ] Cookie consent implemented (if needed)
- [ ] Data retention policy documented
- [ ] User data deletion procedure

### Security Audit Schedule

**Weekly**:
- Review WAF logs
- Check for failed login attempts
- Monitor error rates

**Monthly**:
- Dependency updates (`pnpm audit`)
- Review access logs
- Test backup restore
- Scan for vulnerabilities (OWASP ZAP)

**Quarterly**:
- Rotate non-critical secrets
- Security training review
- Penetration testing (external)
- Update security documentation

**Annually**:
- Full security audit (third-party)
- Disaster recovery drill
- Compliance review
- Architecture security review

## Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Best Practices](https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy)
- [Strapi Security Guide](https://docs.strapi.io/dev-docs/security)
- [SSL Labs Test](https://www.ssllabs.com/ssltest/)
- [Security Headers Check](https://securityheaders.com/)
