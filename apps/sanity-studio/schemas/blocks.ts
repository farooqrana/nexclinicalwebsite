import { defineType, defineField, defineArrayMember } from 'sanity'

// Portable Text - Rich text editor configuration
export const portableText = defineType({
  name: 'portableText',
  title: 'Rich Text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Bold', value: 'strong' },
          { title: 'Italic', value: 'em' },
          { title: 'Underline', value: 'underline' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
              },
              {
                name: 'openInNewTab',
                type: 'boolean',
                title: 'Open in new tab',
                initialValue: false,
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
        },
      ],
    }),
  ],
})

// Hero Section
export const hero = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      fields: [
        { name: 'text', title: 'Button Text', type: 'string' },
        { name: 'link', title: 'Button Link', type: 'string' },
        {
          name: 'variant',
          title: 'Style',
          type: 'string',
          options: {
            list: [
              { title: 'Primary', value: 'primary' },
              { title: 'Secondary', value: 'secondary' },
              { title: 'Outline', value: 'outline' },
            ],
          },
          initialValue: 'primary',
        },
      ],
    }),
    defineField({
      name: 'secondaryButton',
      title: 'Secondary Button',
      type: 'object',
      fields: [
        { name: 'text', title: 'Button Text', type: 'string' },
        { name: 'link', title: 'Button Link', type: 'string' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Hero Section',
        subtitle: 'Hero',
        media,
      }
    },
  },
})

// Services Section
export const servicesSection = defineType({
  name: 'servicesSection',
  title: 'Services Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'displayMode',
      title: 'Display Mode',
      type: 'string',
      options: {
        list: [
          { title: 'Show Featured Services', value: 'featured' },
          { title: 'Show All Services', value: 'all' },
          { title: 'Custom Selection', value: 'custom' },
        ],
      },
      initialValue: 'featured',
    }),
    defineField({
      name: 'selectedServices',
      title: 'Selected Services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
      hidden: ({ parent }) => parent?.displayMode !== 'custom',
    }),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'number',
      options: {
        list: [2, 3, 4],
      },
      initialValue: 3,
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      mode: 'displayMode',
    },
    prepare({ heading, mode }) {
      return {
        title: heading || 'Services Section',
        subtitle: `Services (${mode || 'featured'})`,
      }
    },
  },
})

// Features Section
export const features = defineType({
  name: 'features',
  title: 'Features Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      features: 'features',
    },
    prepare({ heading, features }) {
      return {
        title: heading || 'Features Section',
        subtitle: `${features?.length || 0} features`,
      }
    },
  },
})

// Testimonials Section
export const testimonials = defineType({
  name: 'testimonials',
  title: 'Testimonials Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'quote', title: 'Quote', type: 'text', rows: 3 },
            { name: 'author', title: 'Author Name', type: 'string' },
            { name: 'role', title: 'Role/Title', type: 'string' },
            { name: 'image', title: 'Author Photo', type: 'image' },
            {
              name: 'rating',
              title: 'Rating',
              type: 'number',
              options: { list: [1, 2, 3, 4, 5] },
            },
          ],
          preview: {
            select: {
              quote: 'quote',
              author: 'author',
              media: 'image',
            },
            prepare({ quote, author, media }) {
              return {
                title: author,
                subtitle: quote ? quote.substring(0, 50) + '...' : '',
                media,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      testimonials: 'testimonials',
    },
    prepare({ heading, testimonials }) {
      return {
        title: heading || 'Testimonials',
        subtitle: `${testimonials?.length || 0} testimonials`,
      }
    },
  },
})

// FAQ Section
export const faq = defineType({
  name: 'faq',
  title: 'FAQ Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'faqs',
      title: 'Questions & Answers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Answer', type: 'text', rows: 4 },
          ],
          preview: {
            select: {
              title: 'question',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      faqs: 'faqs',
    },
    prepare({ heading, faqs }) {
      return {
        title: heading || 'FAQ Section',
        subtitle: `${faqs?.length || 0} questions`,
      }
    },
  },
})

// CTA Section
export const cta = defineType({
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'object',
      fields: [
        { name: 'text', title: 'Button Text', type: 'string' },
        { name: 'link', title: 'Button Link', type: 'string' },
      ],
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Dark', value: 'dark' },
          { title: 'Light', value: 'light' },
        ],
      },
      initialValue: 'primary',
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: heading || 'CTA Section',
        subtitle: 'Call to Action',
      }
    },
  },
})

// Team Section
export const teamSection = defineType({
  name: 'teamSection',
  title: 'Team Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'displayMode',
      title: 'Display Mode',
      type: 'string',
      options: {
        list: [
          { title: 'Show All Team Members', value: 'all' },
          { title: 'Custom Selection', value: 'custom' },
        ],
      },
      initialValue: 'all',
    }),
    defineField({
      name: 'selectedMembers',
      title: 'Selected Team Members',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'doctor' }] }],
      hidden: ({ parent }) => parent?.displayMode !== 'custom',
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: heading || 'Team Section',
        subtitle: 'Team',
      }
    },
  },
})

// Contact Section
export const contact = defineType({
  name: 'contact',
  title: 'Contact Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'showForm',
      title: 'Show Contact Form',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showMap',
      title: 'Show Map',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showLocations',
      title: 'Show Location Cards',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: heading || 'Contact Section',
        subtitle: 'Contact',
      }
    },
  },
})

// Rich Text Section (standalone)
export const richTextSection = defineType({
  name: 'richTextSection',
  title: 'Rich Text Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading (Optional)',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'portableText',
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: heading || 'Rich Text Section',
        subtitle: 'Text Content',
      }
    },
  },
})
