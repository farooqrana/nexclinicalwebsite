import { defineType, defineField } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'Brief description for service cards (100-150 characters)',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'portableText',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Lucide icon name (e.g., "stethoscope", "heart", "brain")',
      options: {
        list: [
          { title: 'Stethoscope', value: 'stethoscope' },
          { title: 'Heart', value: 'heart' },
          { title: 'Brain', value: 'brain' },
          { title: 'Activity', value: 'activity' },
          { title: 'Pill', value: 'pill' },
          { title: 'Syringe', value: 'syringe' },
          { title: 'Thermometer', value: 'thermometer' },
          { title: 'Microscope', value: 'microscope' },
          { title: 'Calendar', value: 'calendar' },
          { title: 'Phone', value: 'phone' },
          { title: 'Clipboard', value: 'clipboard' },
          { title: 'Shield', value: 'shield' },
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Service Image',
      type: 'image',
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
      name: 'price',
      title: 'Starting Price',
      type: 'string',
      description: 'e.g., "From $150" or "Contact for pricing"',
    }),
    defineField({
      name: 'duration',
      title: 'Typical Duration',
      type: 'string',
      description: 'e.g., "30-60 minutes"',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Service',
      type: 'boolean',
      description: 'Show on homepage',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
    // SEO
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      featured: 'featured',
      media: 'image',
    },
    prepare({ title, featured, media }) {
      return {
        title,
        subtitle: featured ? '⭐ Featured' : '',
        media,
      }
    },
  },
})
