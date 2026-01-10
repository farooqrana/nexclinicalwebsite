/**
 * Sanity CMS Integration for NexClinical
 *
 * This module provides client utilities for integrating Sanity CMS
 * with the NexClinical Next.js frontend.
 *
 * Note: Sanity Studio is hosted separately at sanity.io due to
 * React 19 compatibility. Use `pnpm --filter @nexclinical/sanity-studio dev`
 * to run the studio locally, or deploy with `sanity deploy`.
 *
 * @example
 * // Import client utilities
 * import { client, urlFor, getImageUrl } from '@/sanity'
 *
 * // Import query functions
 * import { getGlobalSettings, getAllServices, getPageBySlug } from '@/sanity'
 */

// Re-export everything from lib
export * from "./lib";
