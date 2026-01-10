# NexClinical Deployment Architecture & Costs 2026

## 🏗️ Final Tech Stack

```
┌─────────────────────────────────────────────────────────────┐
│                    Client Browser                            │
│              https://nexclinical.com (Vercel)               │
└──────────────┬──────────────────────────────────────────────┘
               │
        ┌──────┴──────┬──────────────┬────────────────┐
        │             │              │                │
    ┌───▼─────┐ ┌──────▼──────┐ ┌──▼────────┐  ┌────▼─────────┐
    │  Vercel │ │   Sanity    │ │  Sentry   │  │   Resend     │
    │ (Host)  │ │   (CMS)     │ │  (Errors) │  │  (Email)     │
    └────┬────┘ └─────┬──────┘ └──────┬────┘  └────┬─────────┘
         │            │               │            │
    ┌────▼─────────────▼───────────────▼────────────▼─────────┐
    │              External Services (Cloud)                   │
    └───────────────────────────────────────────────────────────┘
```

## 📊 Service Breakdown

### **1. VERCEL (Frontend & API)**
**Primary Host for Web Application**

| Component | Function |
|-----------|----------|
| **Next.js App** | Renders all web pages, handles routing |
| **API Routes** | Custom APIs for forms, contact, scheduling |
| **Edge Functions** | Middleware, redirects, header manipulation |
| **Static Assets** | Images, CSS, JS (auto-optimized & cached) |
| **Analytics** | Built-in Vercel Analytics for page performance |

**What Runs:**
- All frontend code (React 19 + TypeScript)
- API endpoints (`/api/*`)
- Middleware for auth, redirects
- Environment: Node.js 18+ runtime

**NOT on Vercel:**
- CMS content storage (→ Sanity)
- Error tracking (→ Sentry)
- Email sending (→ Resend)

---

### **2. SANITY (Headless CMS)**
**Content Management & Storage**

| Component | Function |
|-----------|----------|
| **Content Studio** | Web UI for editors (sanity.io) |
| **GROQ API** | GraphQL-like queries for content |
| **Asset CDN** | Automatic image optimization & delivery |
| **Real-time Updates** | Live preview in frontend |
| **Webhooks** | Trigger frontend redeployment on content changes |

**What Runs:**
- All medical practice content (services, doctors, locations, blog)
- Structured data with validation
- Media library with smart crops

**NOT on Sanity:**
- Application logic (→ Vercel)
- Error tracking (→ Sentry)

---

### **3. SENTRY (Error Tracking & Monitoring)**
**Performance Monitoring & Error Reporting**

| Component | Function |
|-----------|----------|
| **Error Capturing** | Catch JavaScript errors in production |
| **Stack Traces** | Full context when things break |
| **Performance Monitoring** | Track slow API calls, page load times |
| **Release Tracking** | Monitor each deployment version |
| **Alerts** | Notify team of critical issues |
| **Source Maps** | Readable error messages (not minified) |

**What Monitors:**
- Frontend errors (React, Next.js, network)
- API endpoint performance
- Page load metrics
- User session tracking

**NOT on Sentry:**
- Application hosting
- Content management
- Email sending

---

### **4. RESEND (Transactional Email)**
**Email Delivery for Contact Forms, Scheduling**

| Component | Function |
|-----------|----------|
| **SMTP API** | Send emails from Next.js API routes |
| **Templates** | React email component templates |
| **Deliverability** | High inbox rates, bounce handling |
| **Analytics** | Track opens, clicks, bounces |

**What Sends:**
- Contact form submissions
- Appointment confirmations
- Newsletter signups
- System notifications

---

## 💰 Monthly Cost Breakdown

### **TIER 1: Basic Setup (Recommended for Launch)**

| Service | Tier | Price | Included |
|---------|------|-------|----------|
| **Vercel** | Hobby/Pro | $0-20 | 100GB bandwidth, auto-scaling |
| **Sanity** | Free→Growth | $0-99 | Unlimited projects, 500k API calls/mo |
| **Sentry** | Free→Team | $0-29 | 1M events/month error tracking |
| **Resend** | Free/Pay-as-you-go | $0-1/100 emails | 100 free emails/day, then $0.001 per email |
| **Domain** | .com registration | $12/year | Annual renewal |
| **Total Monthly** | **~$15-50/month** | | For typical medical practice traffic |

### **TIER 2: Growth Setup (10k+ monthly visitors)**

| Service | Tier | Price | Included |
|---------|------|-------|----------|
| **Vercel** | Pro | $20 | 1TB bandwidth, priority support |
| **Sanity** | Growth | $99 | 2M API calls/mo, advanced features |
| **Sentry** | Team | $29 | 5M events/month |
| **Resend** | Pro | Variable | $0.0005 per email at scale |
| **Domain + SSL** | Premium | $15/year | Auto-renew |
| **Total Monthly** | **~$150-200/month** | | With advanced features |

### **TIER 3: Enterprise Setup (50k+ monthly visitors)**

| Service | Tier | Price | Included |
|---------|------|-------|----------|
| **Vercel** | Enterprise | Custom | Dedicated support, SLA |
| **Sanity** | Enterprise | Custom | White-label, custom storage |
| **Sentry** | Business | $99+ | Unlimited events, custom retention |
| **Resend** | Enterprise | Custom | Dedicated IP, priority routing |
| **Domain + SSL** | Enterprise | $50+ | Premium options |
| **Total Monthly** | **$200-500+/month** | | Full enterprise support |

---

## 🔄 How Services Work Together

### **User Visits Website**
```
1. Browser requests https://nexclinical.com
   ↓
2. Vercel serves Next.js app (fast CDN edge location near user)
   ↓
3. App renders with dynamic content from Sanity
   - Fetches via GROQ API: services, doctors, blog posts, etc.
   ↓
4. Sentry monitors if any errors occur during loading
   ↓
5. User sees fully rendered page in browser
```

### **User Submits Contact Form**
```
1. Form submitted to Vercel API route (/api/contact)
   ↓
2. API validates data, checks spam with Zod schema
   ↓
3. Email sent via Resend API with React email template
   ↓
4. Sentry tracks API performance (latency, errors)
   ↓
5. Response sent back to user (success/error message)
```

### **Admin Updates Content**
```
1. Editor logs into Sanity Studio (sanity.io or studio.nexclinical.com)
   ↓
2. Modifies page content, publishes changes
   ↓
3. Webhook triggers Vercel rebuild/ISR (on-demand revalidation)
   ↓
4. Frontend fetches updated content from Sanity
   ↓
5. Users see new content within seconds
```

### **Error Occurs in Production**
```
1. JavaScript error happens in user's browser
   ↓
2. Sentry SDK captures error with full context
   ↓
3. Error sent to Sentry dashboard (sampled to avoid overages)
   ↓
4. Team receives alert (Slack, email, PagerDuty)
   ↓
5. Dev debugs with stack trace, source maps, user session
   ↓
6. Fix deployed to Vercel, Sentry tracks version change
```

---

## 📈 Cost Estimation Formula

### For Your Medical Practice Website:

```
Assuming:
- 2,000-5,000 monthly visitors (typical medical practice)
- 50 contact form submissions/month
- 20 blog posts, 10 services, 15 doctors in CMS
- 5 team members managing content

Monthly Estimate:
├─ Vercel:        $0 (within free tier)
├─ Sanity:        $0 (free tier: 100k API calls/month)
├─ Sentry:        $0 (free tier: 1M events/month)
├─ Resend:        $5 (5,000 emails at $0.001 after free tier)
└─ Domain:        $1 (amortized from $12/year)
───────────────────────────────────
   TOTAL/MONTH:   ~$6/month
   YEAR 1:        ~$72 (first year includes domain setup)
```

### Scaling Example (50k visitors/month):

```
Assuming:
- 50,000 monthly visitors
- 500 contact submissions/month
- 100+ blog posts, 50+ services, 100+ doctors
- 20 team members managing content globally

Monthly Estimate:
├─ Vercel Pro:    $20 (guaranteed capacity)
├─ Sanity Growth: $99 (2M API calls/month)
├─ Sentry Team:   $29 (5M events, priority support)
├─ Resend:        $10 (10,000 emails)
└─ Domain:        $1 (amortized)
───────────────────────────────────
   TOTAL/MONTH:   ~$159/month
   YEAR 1:        ~$1,968
```

---

## 🛡️ Data Security & Compliance

### HIPAA Considerations (Medical Practice)
| Area | Implementation |
|------|-----------------|
| **Data Encryption** | TLS 1.3 for all communications (Vercel + Sanity) |
| **At-Rest Encryption** | Sanity encrypts all stored data |
| **GDPR Compliance** | DPA signed with all vendors |
| **PII Handling** | Never log sensitive patient data in Sentry |
| **Backups** | Sanity maintains automatic backups |
| **Audit Logs** | Track all CMS content changes |

### Environment Variables (Secrets Management)
```
Vercel Secrets:
├─ NEXT_PUBLIC_SANITY_PROJECT_ID  (public)
├─ NEXT_PUBLIC_SANITY_DATASET     (public)
├─ SANITY_API_TOKEN               (private)
├─ SENTRY_AUTH_TOKEN              (private)
└─ RESEND_API_KEY                 (private)
```

---

## ✅ Current Implementation Checklist

| Item | Status | Notes |
|------|--------|-------|
| Frontend deployed to Vercel | ✅ | https://nexclincalwebsite.vercel.app/ |
| Next.js 15 + React 19 | ✅ | Latest stable versions |
| Sanity CMS integrated | ✅ | 7 content types, 9 page builder blocks |
| Sentry configured | ⏳ | Add `@sentry/nextjs` package |
| Resend email setup | ⏳ | Update contact form API route |
| Domain configured | ⏳ | Point DNS to Vercel |
| SSL Certificate | ✅ | Auto-managed by Vercel |
| Monitoring & Alerts | ⏳ | Configure Sentry alerts to Slack |

---

## 🚀 Way Forward - Next 30 Days

### Week 1: Sanity & Content
- [ ] Create Sanity project at sanity.io
- [ ] Set project ID in .env files
- [ ] Create initial content (services, doctors, locations)
- [ ] Connect Studio to frontend
- [ ] Test content fetching with GROQ queries

### Week 2: Error Tracking
- [ ] Add `@sentry/nextjs` to frontend
- [ ] Generate Sentry auth token
- [ ] Configure error reporting
- [ ] Connect Slack notifications
- [ ] Test error capture with test endpoint

### Week 3: Email & Forms
- [ ] Create Resend account
- [ ] Generate API key
- [ ] Build contact form UI (already exists)
- [ ] Implement email sending in API route
- [ ] Set up email templates for confirmations
- [ ] Test with live submissions

### Week 4: Launch & Monitoring
- [ ] Configure custom domain
- [ ] Update DNS records to Vercel
- [ ] Enable Vercel Analytics
- [ ] Set up monitoring dashboards
- [ ] Create runbook for common issues
- [ ] Soft launch to stakeholders
- [ ] Full production launch

---

## 📞 Support & Escalation

| Issue | Service | Resolution Time |
|-------|---------|-----------------|
| Website down | Vercel Support | <1 hour (Pro tier) |
| CMS can't save content | Sanity Support | <4 hours (Growth tier) |
| Massive error spike | Sentry Alerts | <15 minutes (configured alerts) |
| Emails not delivering | Resend Support | <1 hour |

---

## 💡 Cost Optimization Tips

1. **Start Free**: Use free tiers until traffic justifies upgrades
2. **Monitor Usage**: Set alerts on Sentry error count spike
3. **Batch Emails**: Send digest emails instead of individual notifications
4. **Cache Aggressively**: Reduce API calls with ISR (Incremental Static Regeneration)
5. **CDN First**: Serve static assets from Vercel Edge Network
6. **Review Monthly**: Check Vercel analytics for billing optimization

---

## 🎯 Recommended First Year Budget

| Category | Low Traffic | Medium Traffic | High Traffic |
|----------|------------|-----------------|-------------|
| **Monthly** | $10 | $150 | $500 |
| **Annual** | $120 | $1,800 | $6,000 |
| **Visitors/mo** | <5k | 5k-50k | 50k+ |
| **Support** | Community | Email | Dedicated |

---

## 📝 Important Notes

- **All prices in USD** as of January 2026
- **No long-term contracts** required (cancel anytime)
- **Prices may change** - review annually
- **Volume discounts** available for enterprise
- **Free tier includes generous limits** for startup phase
