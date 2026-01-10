import { CollectionConfig } from 'payload'

export const Images: CollectionConfig = {
  slug: 'media',
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    mimeTypes: [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'image/svg+xml',
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'alt',
      type: 'textarea',
      admin: {
        description: 'Alt text for accessibility and SEO',
      },
    },
    {
      name: 'caption',
      type: 'textarea',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Hero Image', value: 'hero' },
        { label: 'Feature Image', value: 'feature' },
        { label: 'Service Icon', value: 'icon' },
        { label: 'Team Photo', value: 'team' },
        { label: 'Logo', value: 'logo' },
        { label: 'Other', value: 'other' },
      ],
    },
  ],
  versions: {
    drafts: true,
  },
}
