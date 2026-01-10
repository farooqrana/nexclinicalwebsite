# NexClinical CMS

Payload CMS integration for managing NexClinical website content, branding, and customization.

## Features

- **Page Management**: Create and manage pages with flexible content blocks
- **Branding Control**: Customize colors, fonts, and site information
- **Media Management**: Upload and organize images with categorization
- **User Management**: Role-based access control (Admin, Editor)
- **SEO Optimization**: Built-in meta tags, descriptions, and canonical URLs
- **Draft/Publish Workflow**: Version control with drafts and publishing

## Quick Start

### Prerequisites
- Node.js 20+
- MongoDB running locally or connection URI
- pnpm

### Installation

1. **Install dependencies**:
   ```bash
   cd apps/cms
   pnpm install
   ```

2. **Set up environment**:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your MongoDB URI and secrets
   ```

3. **Start MongoDB** (if running locally):
   ```bash
   mongod
   ```

4. **Run development server**:
   ```bash
   pnpm dev
   ```

5. **Access CMS**:
   - Admin panel: http://localhost:3001/admin
   - API: http://localhost:3001/api

## Collections

### Branding
Manage all site-wide customization:
- **Colors**: Primary, secondary, accent, text, background
- **Typography**: Font selection, sizes, line height
- **Site Info**: Name, tagline, description, contact details

**Customization Scope**:
- Change brand colors globally (affects all pages)
- Switch font families (Inter, Poppins, Playfair Display, etc.)
- Adjust font sizes and line height
- Update contact information

### Pages
Create and manage website pages with:
- **Hero Section**: Title, subtitle, background image, CTA
- **Content Sections**: Text, images, features grid, testimonials
- **SEO Meta**: Title, description, keywords, OG image, canonical URL

**Customization Scope**:
- Add/edit page content without code changes
- Upload custom images
- Customize section backgrounds
- Manage CTAs and links
- Preview before publishing

### Media
Upload and organize images:
- Support for JPEG, PNG, GIF, WebP, SVG
- Categorization (Hero, Feature, Icon, Team, Logo)
- Automatic image optimization
- CDN-ready static storage

### Users
Manage CMS access:
- Email-based authentication
- Role-based permissions (Admin, Editor)
- Admin: Full control over all content
- Editor: Can create/edit content but cannot manage users

## API Endpoints

### Branding
- `GET /api/branding` - Fetch all branding settings
- `POST /api/branding` - Create branding config
- `PATCH /api/branding/:id` - Update branding

### Pages
- `GET /api/pages` - List all pages
- `GET /api/pages/:id` - Get single page
- `POST /api/pages` - Create page
- `PATCH /api/pages/:id` - Update page
- `DELETE /api/pages/:id` - Delete page

### Media
- `GET /api/media` - List media
- `POST /api/media` - Upload media
- `PATCH /api/media/:id` - Update media
- `DELETE /api/media/:id` - Delete media

## Frontend Integration

### Fetching Branding
```typescript
const response = await fetch('http://localhost:3001/api/branding');
const branding = await response.json();
const { primaryColor, headingFont, bodyFont } = branding.docs[0];
```

### Fetching Pages
```typescript
const response = await fetch('http://localhost:3001/api/pages?where[slug][equals]=clinical-support');
const page = await response.json();
const pageData = page.docs[0];
```

### Dynamic Styling
The frontend can apply branding customizations:
```typescript
<style>{`
  :root {
    --primary-color: ${branding.primaryColor};
    --heading-font: ${branding.headingFont};
    --body-font: ${branding.bodyFont};
  }
`}</style>
```

## Architecture

```
apps/cms/
├── collections/          # Payload collections
│   ├── Users.ts
│   ├── Branding.ts
│   ├── Pages.ts
│   └── Images.ts
├── payload.config.ts     # Main Payload configuration
├── package.json
├── tsconfig.json
└── .env.local           # Environment variables
```

## What Can Be Customized

### ✅ Can Be Customized (Via CMS)
- **Colors**: Primary, secondary, accent colors (no code deployment needed)
- **Fonts**: Font family selection from predefined options
- **Content**: Page titles, descriptions, hero text, section content
- **Images**: Hero backgrounds, feature images, logos
- **Contact Info**: Email, phone, site tagline
- **Meta Tags**: SEO titles, descriptions, keywords
- **CTAs**: Button text and links

### ⚠️ Requires Code Changes
- **Page Layout**: Adding new section types requires updating React components
- **New Collections**: Creating custom content types needs CMS schema updates
- **Advanced Styling**: Complex CSS or animations
- **Integrations**: Adding third-party services (payment, analytics, etc.)

## Limitations vs WordPress

### Payload CMS Advantages
✅ Type-safe content management  
✅ Headless (separate backend/frontend)  
✅ Easy to deploy on Vercel  
✅ Lower hosting costs  
✅ Faster page load times  
✅ Better SEO out of the box  

### WordPress Advantages Over Payload
✅ Larger plugin ecosystem (10,000+ plugins)  
✅ More pre-built themes  
✅ Better WYSIWYG page builders (Elementor, Beaver Builder)  
✅ Larger community and tutorials  
✅ Easier for non-technical users initially  

### Payload vs WordPress (Customization)
| Feature | Payload | WordPress |
|---------|---------|-----------|
| Color customization | CMS UI | Plugin/Code |
| Font changes | CMS UI | Plugin/Code |
| Page builders | Limited | Extensive (Elementor, etc.) |
| Custom fields | Admin-managed | Plugin-based |
| Performance | Better | Depends on plugins |
| Learning curve | Moderate | Beginner-friendly |
| Cost to scale | Low | Medium-High (plugins) |

## Deployment

### Local Development
```bash
pnpm dev
```

### Production Build
```bash
pnpm build
pnpm start
```

### Docker (Optional)
Create a `Dockerfile` for containerized deployment.

## Next Steps

1. **Populate Content**: Add sample pages and branding data
2. **Connect Frontend**: Integrate CMS API with Next.js frontend
3. **Test Customization**: Change colors/fonts and verify frontend updates
4. **Client Testing**: Try customizing with sample client data
5. **Documentation**: Create client-facing customization guide

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod`
- Check DATABASE_URI in .env.local
- For MongoDB Atlas, use connection string with credentials

### Build Errors
- Clear cache: `rm -rf .next node_modules && pnpm install`
- Check Node.js version: `node --version` (should be 20+)

### CMS Not Loading
- Check if port 3001 is available
- Verify PAYLOAD_SECRET is set
- Check browser console for errors

## Support & Documentation

- [Payload CMS Docs](https://payloadcms.com/docs)
- [API Documentation](http://localhost:3001/api-docs)
- [Admin Panel](http://localhost:3001/admin)
