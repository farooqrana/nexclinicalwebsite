import { defineType, defineField } from 'sanity'

export const location = defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Location Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "Main Office", "Downtown Clinic"',
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
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        { name: 'street', title: 'Street Address', type: 'string' },
        { name: 'suite', title: 'Suite/Unit', type: 'string' },
        { name: 'city', title: 'City', type: 'string' },
        { name: 'state', title: 'State', type: 'string' },
        { name: 'zip', title: 'ZIP Code', type: 'string' },
      ],
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'fax',
      title: 'Fax Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
    }),
    defineField({
      name: 'hours',
      title: 'Office Hours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'days',
              title: 'Days',
              type: 'string',
              description: 'e.g., "Monday - Friday" or "Saturday"',
            },
            {
              name: 'hours',
              title: 'Hours',
              type: 'string',
              description: 'e.g., "8:00 AM - 5:00 PM" or "Closed"',
            },
          ],
          preview: {
            select: {
              days: 'days',
              hours: 'hours',
            },
            prepare({ days, hours }) {
              return {
                title: days,
                subtitle: hours,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'coordinates',
      title: 'Map Coordinates',
      type: 'geopoint',
      description: 'For Google Maps integration',
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Google Maps URL',
      type: 'url',
      description: 'Direct link to Google Maps location',
    }),
    defineField({
      name: 'image',
      title: 'Location Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'parkingInfo',
      title: 'Parking Information',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'accessibilityInfo',
      title: 'Accessibility Information',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'isMainLocation',
      title: 'Main Location',
      type: 'boolean',
      description: 'Is this the primary office?',
      initialValue: false,
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
  ],
  preview: {
    select: {
      name: 'name',
      city: 'address.city',
      state: 'address.state',
      isMain: 'isMainLocation',
      media: 'image',
    },
    prepare({ name, city, state, isMain, media }) {
      return {
        title: isMain ? `⭐ ${name}` : name,
        subtitle: city && state ? `${city}, ${state}` : '',
        media,
      }
    },
  },
})
