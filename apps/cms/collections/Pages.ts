import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: false,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly slug (e.g., clinical-support)',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'description',
              type: 'textarea',
              admin: {
                description: 'SEO meta description',
              },
            },
            {
              name: 'heroSection',
              type: 'group',
              fields: [
                {
                  name: 'enabled',
                  type: 'checkbox',
                  defaultValue: true,
                },
                {
                  name: 'title',
                  type: 'text',
                },
                {
                  name: 'subtitle',
                  type: 'textarea',
                },
                {
                  name: 'backgroundImage',
                  type: 'relationship',
                  relationTo: 'media',
                  admin: {
                    description: 'Background image for hero section',
                  },
                },
                {
                  name: 'ctaText',
                  type: 'text',
                  admin: {
                    description: 'Call-to-action button text',
                  },
                },
                {
                  name: 'ctaLink',
                  type: 'text',
                  admin: {
                    description: 'Call-to-action link URL',
                  },
                },
              ],
            },
            {
              name: 'sections',
              type: 'array',
              maxRows: 10,
              fields: [
                {
                  name: 'type',
                  type: 'select',
                  options: [
                    { label: 'Text & Image', value: 'text-image' },
                    { label: 'Features Grid', value: 'features' },
                    { label: 'Testimonials', value: 'testimonials' },
                    { label: 'CTA Section', value: 'cta' },
                    { label: 'Text Section', value: 'text' },
                  ],
                  required: true,
                },
                {
                  name: 'title',
                  type: 'text',
                },
                {
                  name: 'content',
                  type: 'textarea',
                },
                {
                  name: 'image',
                  type: 'relationship',
                  relationTo: 'media',
                },
                {
                  name: 'items',
                  type: 'array',
                  maxRows: 6,
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                    },
                    {
                      name: 'icon',
                      type: 'text',
                      admin: {
                        description: 'Lucide icon name (e.g., "shield", "zap")',
                      },
                    },
                  ],
                },
                {
                  name: 'backgroundColor',
                  type: 'text',
                  admin: {
                    description: 'Hex color for section background',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'SEO & Meta',
          fields: [
            {
              name: 'metaTitle',
              type: 'text',
              admin: {
                description: 'Browser tab title (recommended 50-60 chars)',
              },
            },
            {
              name: 'metaDescription',
              type: 'textarea',
              admin: {
                description: 'Search engine snippet (recommended 150-160 chars)',
              },
            },
            {
              name: 'metaKeywords',
              type: 'text',
              admin: {
                description: 'Comma-separated keywords',
              },
            },
            {
              name: 'ogImage',
              type: 'relationship',
              relationTo: 'media',
              admin: {
                description: 'Image for social media sharing',
              },
            },
            {
              name: 'canonicalUrl',
              type: 'text',
              admin: {
                description: 'Canonical URL to prevent duplicate content',
              },
            },
          ],
        },
      ],
    },
  ],
  timestamps: true,
  versions: {
    drafts: true,
  },
}
