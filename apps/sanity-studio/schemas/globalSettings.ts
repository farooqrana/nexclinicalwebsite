import { defineType, defineField } from 'sanity'

export const globalSettings = defineType({
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  groups: [
    { name: 'branding', title: 'Branding', default: true },
    { name: 'contact', title: 'Contact Info' },
    { name: 'social', title: 'Social Media' },
    { name: 'seo', title: 'Default SEO' },
    { name: 'analytics', title: 'Analytics' },
  ],
  fields: [
    // Branding
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      group: 'branding',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'branding',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'branding',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'logoLight',
      title: 'Logo (Light Version)',
      type: 'image',
      group: 'branding',
      description: 'For dark backgrounds',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      group: 'branding',
    }),
    defineField({
      name: 'primaryColor',
      title: 'Primary Color',
      type: 'string',
      group: 'branding',
      description: 'Hex color code (e.g., #0066CC)',
      validation: (Rule) => Rule.regex(/^#[0-9A-Fa-f]{6}$/).warning('Should be a valid hex color'),
    }),
    defineField({
      name: 'secondaryColor',
      title: 'Secondary Color',
      type: 'string',
      group: 'branding',
      description: 'Hex color code',
    }),
    defineField({
      name: 'accentColor',
      title: 'Accent Color',
      type: 'string',
      group: 'branding',
      description: 'Hex color code',
    }),

    // Contact Info
    defineField({
      name: 'mainPhone',
      title: 'Main Phone Number',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'mainEmail',
      title: 'Main Email',
      type: 'email',
      group: 'contact',
    }),
    defineField({
      name: 'mainAddress',
      title: 'Main Address',
      type: 'text',
      group: 'contact',
      rows: 3,
    }),

    // Social Media
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      group: 'social',
      fields: [
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'twitter', title: 'Twitter/X URL', type: 'url' },
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'youtube', title: 'YouTube URL', type: 'url' },
        { name: 'tiktok', title: 'TikTok URL', type: 'url' },
      ],
    }),

    // Default SEO
    defineField({
      name: 'defaultSeoTitle',
      title: 'Default SEO Title',
      type: 'string',
      group: 'seo',
      description: 'Fallback title for pages without custom SEO',
    }),
    defineField({
      name: 'defaultSeoDescription',
      title: 'Default Meta Description',
      type: 'text',
      group: 'seo',
      rows: 3,
    }),
    defineField({
      name: 'defaultOgImage',
      title: 'Default Social Share Image',
      type: 'image',
      group: 'seo',
      description: '1200x630 recommended',
    }),
    defineField({
      name: 'googleSiteVerification',
      title: 'Google Site Verification',
      type: 'string',
      group: 'seo',
      description: 'Google Search Console verification code',
    }),

    // Analytics
    defineField({
      name: 'googleAnalyticsId',
      title: 'Google Analytics ID',
      type: 'string',
      group: 'analytics',
      description: 'e.g., G-XXXXXXXXXX',
    }),
    defineField({
      name: 'googleTagManagerId',
      title: 'Google Tag Manager ID',
      type: 'string',
      group: 'analytics',
      description: 'e.g., GTM-XXXXXX',
    }),
    defineField({
      name: 'facebookPixelId',
      title: 'Facebook Pixel ID',
      type: 'string',
      group: 'analytics',
    }),
  ],
  preview: {
    select: {
      title: 'siteName',
      media: 'logo',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Global Settings',
        subtitle: 'Site-wide configuration',
        media,
      }
    },
  },
})
