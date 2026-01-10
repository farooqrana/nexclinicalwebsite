import { defineType, defineField } from 'sanity'

export const doctor = defineType({
  name: 'doctor',
  title: 'Doctor / Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'credentials',
      title: 'Credentials',
      type: 'string',
      description: 'e.g., MD, DO, PhD, NP, PA-C',
    }),
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      description: 'e.g., Chief Medical Officer, Family Physician',
    }),
    defineField({
      name: 'specialty',
      title: 'Specialty',
      type: 'string',
      description: 'e.g., Internal Medicine, Pediatrics, Cardiology',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
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
      name: 'bio',
      title: 'Biography',
      type: 'portableText',
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'degree', title: 'Degree', type: 'string' },
            { name: 'institution', title: 'Institution', type: 'string' },
            { name: 'year', title: 'Year', type: 'number' },
          ],
          preview: {
            select: {
              degree: 'degree',
              institution: 'institution',
            },
            prepare({ degree, institution }) {
              return {
                title: degree,
                subtitle: institution,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'certifications',
      title: 'Board Certifications',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'languages',
      title: 'Languages Spoken',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'acceptingPatients',
      title: 'Accepting New Patients',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'location' }] }],
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
    }),
    defineField({
      name: 'phone',
      title: 'Direct Phone',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Name A-Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      name: 'name',
      credentials: 'credentials',
      specialty: 'specialty',
      media: 'photo',
    },
    prepare({ name, credentials, specialty, media }) {
      return {
        title: credentials ? `${name}, ${credentials}` : name,
        subtitle: specialty,
        media,
      }
    },
  },
})
