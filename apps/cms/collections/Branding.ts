import { CollectionConfig } from 'payload'

export const Branding: CollectionConfig = {
  slug: 'branding',
  admin: {
    useAsTitle: 'title',
    description: 'Manage site-wide branding and customization',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Default Branding',
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Colors',
          fields: [
            {
              name: 'primaryColor',
              type: 'text',
              admin: {
                description: 'Primary brand color (hex)',
              },
              defaultValue: '#0284c7',
            },
            {
              name: 'secondaryColor',
              type: 'text',
              admin: {
                description: 'Secondary brand color (hex)',
              },
              defaultValue: '#06b6d4',
            },
            {
              name: 'accentColor',
              type: 'text',
              admin: {
                description: 'Accent color for highlights (hex)',
              },
              defaultValue: '#f59e0b',
            },
            {
              name: 'textColor',
              type: 'text',
              admin: {
                description: 'Primary text color (hex)',
              },
              defaultValue: '#1f2937',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              admin: {
                description: 'Page background color (hex)',
              },
              defaultValue: '#ffffff',
            },
          ],
        },
        {
          label: 'Typography',
          fields: [
            {
              name: 'headingFont',
              type: 'select',
              options: [
                { label: 'Inter', value: 'inter' },
                { label: 'Poppins', value: 'poppins' },
                { label: 'Playfair Display', value: 'playfair' },
                { label: 'DM Serif Display', value: 'dm-serif' },
              ],
              defaultValue: 'inter',
              admin: {
                description: 'Font for headings (H1, H2, H3)',
              },
            },
            {
              name: 'bodyFont',
              type: 'select',
              options: [
                { label: 'Inter', value: 'inter' },
                { label: 'Plus Jakarta Sans', value: 'plus-jakarta' },
                { label: 'Space Mono', value: 'space-mono' },
              ],
              defaultValue: 'inter',
              admin: {
                description: 'Font for body text and paragraphs',
              },
            },
            {
              name: 'baseFontSize',
              type: 'number',
              defaultValue: 16,
              admin: {
                description: 'Base font size in pixels',
              },
            },
            {
              name: 'headingSize',
              type: 'number',
              defaultValue: 32,
              admin: {
                description: 'Heading (H1) font size in pixels',
              },
            },
            {
              name: 'lineHeight',
              type: 'select',
              options: [
                { label: 'Tight (1.2)', value: '1.2' },
                { label: 'Normal (1.5)', value: '1.5' },
                { label: 'Relaxed (1.75)', value: '1.75' },
                { label: 'Loose (2)', value: '2' },
              ],
              defaultValue: '1.5',
              admin: {
                description: 'Line height for body text',
              },
            },
          ],
        },
        {
          label: 'Site Info',
          fields: [
            {
              name: 'siteName',
              type: 'text',
              defaultValue: 'NexClinical',
              admin: {
                description: 'Site name displayed in headers/footers',
              },
            },
            {
              name: 'tagline',
              type: 'textarea',
              admin: {
                description: 'Site tagline or mission statement',
              },
            },
            {
              name: 'description',
              type: 'textarea',
              admin: {
                description: 'SEO meta description',
              },
            },
            {
              name: 'contactEmail',
              type: 'email',
              admin: {
                description: 'Primary contact email address',
              },
            },
            {
              name: 'contactPhone',
              type: 'text',
              admin: {
                description: 'Primary contact phone number',
              },
            },
          ],
        },
      ],
    },
  ],
  versions: {
    drafts: true,
  },
}
