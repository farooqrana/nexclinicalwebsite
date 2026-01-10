import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { structure } from './structure'

export default defineConfig({
  name: 'nexclinical-cms',
  title: 'NexClinical CMS',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'htfikdkh',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    structureTool({ structure }),
    visionTool({
      defaultApiVersion: '2024-01-01',
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  form: {
    image: {
      directUploads: true,
    },
  },
})
