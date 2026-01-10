// Schema exports for Sanity CMS
// Medical Practice Website Content Types

import { page } from './page'
import { blogPost } from './blogPost'
import { service } from './service'
import { doctor } from './doctor'
import { location } from './location'
import { category } from './category'
import { globalSettings } from './globalSettings'
import {
  portableText,
  hero,
  servicesSection,
  features,
  testimonials,
  faq,
  cta,
  teamSection,
  contact,
  richTextSection,
} from './blocks'

export const schemaTypes = [
  // Document types (content)
  page,
  blogPost,
  service,
  doctor,
  location,
  category,
  globalSettings,
  
  // Object types (blocks)
  portableText,
  hero,
  servicesSection,
  features,
  testimonials,
  faq,
  cta,
  teamSection,
  contact,
  richTextSection,
]
