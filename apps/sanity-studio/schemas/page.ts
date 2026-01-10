import { defineType, defineField, defineArrayMember } from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'seo', title: 'SEO' },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'settings',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Sections',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({ type: 'hero' }),
        defineArrayMember({ type: 'servicesSection' }),
        defineArrayMember({ type: 'features' }),
        defineArrayMember({ type: 'testimonials' }),
        defineArrayMember({ type: 'faq' }),
        defineArrayMember({ type: 'cta' }),
        defineArrayMember({ type: 'teamSection' }),
        defineArrayMember({ type: 'contact' }),
        defineArrayMember({ type: 'richTextSection' }),
      ],
    }),
    // SEO Fields
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
      description: 'Title for search engines (50-60 characters recommended)',
      validation: (Rule) => Rule.max(70).warning('SEO title should be under 70 characters'),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'seo',
      rows: 3,
      description: 'Description for search engines (150-160 characters recommended)',
      validation: (Rule) => Rule.max(160).warning('Meta description should be under 160 characters'),
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Share Image',
      type: 'image',
      group: 'seo',
      description: 'Image shown when sharing on social media (1200x630 recommended)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from Search Engines',
      type: 'boolean',
      group: 'seo',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare({ title, slug }) {
      return {
        title,
        subtitle: `/${slug || ''}`,
      }
    },
  },
})
