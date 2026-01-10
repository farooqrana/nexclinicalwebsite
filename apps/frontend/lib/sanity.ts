/**
 * Sanity CMS Client for NexClinical Frontend
 * Fetches content, pages, and settings from Sanity
 */

import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "htfikdkh";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

// Create Sanity client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production", // Use CDN in production
  perspective: "published", // Only fetch published documents
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// GROQ Queries
export const QUERIES = {
  // Get global settings (company info, branding, stats)
  GLOBAL_SETTINGS: `*[_type == "globalSettings"][0]{
    _id,
    siteName,
    siteUrl,
    logo,
    description,
    contactEmail,
    contactPhone,
    address,
    socialMedia,
    stats[] {
      _key,
      label,
      value,
      icon
    }
  }`,

  // Get page by slug with all blocks populated
  PAGE_BY_SLUG: `*[_type == "page" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    seoTitle,
    seoDescription,
    ogImage,
    pageBuilder[] {
      _type,
      _key,
      // Hero block fields
      _type == "hero" => {
        heading,
        subheading,
        backgroundImage,
        ctaButton {
          text,
          link,
          variant
        },
        secondaryButton {
          text,
          link
        }
      },
      // Services section fields
      _type == "servicesSection" => {
        heading,
        subheading,
        displayMode,
        columns,
        selectedServices[]-> {
          _id,
          title,
          slug,
          description,
          icon,
          featured
        }
      },
      // Features block
      _type == "features" => {
        heading,
        subheading,
        features[] {
          _key,
          title,
          description,
          icon
        }
      },
      // Testimonials
      _type == "testimonials" => {
        heading,
        subheading,
        testimonials[] {
          _key,
          quote,
          author,
          role,
          company,
          image
        }
      },
      // FAQ
      _type == "faq" => {
        heading,
        subheading,
        faqs[] {
          _key,
          question,
          answer
        }
      },
      // CTA
      _type == "cta" => {
        heading,
        description,
        primaryButton {
          text,
          link,
          variant
        },
        secondaryButton {
          text,
          link
        },
        backgroundImage,
        backgroundColor
      },
      // Team section
      _type == "teamSection" => {
        heading,
        subheading,
        teamMembers[]-> {
          _id,
          name,
          role,
          bio,
          image,
          credentials
        }
      },
      // Contact
      _type == "contact" => {
        heading,
        subheading,
        showForm,
        contactInfo {
          phone,
          email,
          address
        }
      },
      // Rich text section
      _type == "richTextSection" => {
        heading,
        content
      }
    }
  }`,

  // Get all pages (for generateStaticParams)
  ALL_PAGES: `*[_type == "page"]{
    "slug": slug.current
  }`,

  // Get all services
  ALL_SERVICES: `*[_type == "service"] | order(order asc, _createdAt asc) {
    _id,
    title,
    slug,
    description,
    icon,
    featured,
    content
  }`,

  // Get featured services only
  FEATURED_SERVICES: `*[_type == "service" && featured == true] | order(order asc, _createdAt asc) {
    _id,
    title,
    slug,
    description,
    icon,
    featured
  }`,

  // Get service by slug
  SERVICE_BY_SLUG: `*[_type == "service" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    description,
    icon,
    featured,
    content,
    benefits[] {
      _key,
      title,
      description
    }
  }`,
};

// Typed fetch functions
export async function getGlobalSettings() {
  try {
    const settings = await client.fetch(QUERIES.GLOBAL_SETTINGS);
    return settings;
  } catch (error) {
    console.error("Error fetching global settings:", error);
    return null;
  }
}

export async function getPageBySlug(slug: string) {
  try {
    const page = await client.fetch(QUERIES.PAGE_BY_SLUG, { slug });
    return page;
  } catch (error) {
    console.error(`Error fetching page ${slug}:`, error);
    return null;
  }
}

export async function getAllPages() {
  try {
    const pages = await client.fetch(QUERIES.ALL_PAGES);
    return pages || [];
  } catch (error) {
    console.error("Error fetching all pages:", error);
    return [];
  }
}

export async function getAllServices() {
  try {
    const services = await client.fetch(QUERIES.ALL_SERVICES);
    return services || [];
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

export async function getFeaturedServices() {
  try {
    const services = await client.fetch(QUERIES.FEATURED_SERVICES);
    return services || [];
  } catch (error) {
    console.error("Error fetching featured services:", error);
    return [];
  }
}

export async function getServiceBySlug(slug: string) {
  try {
    const service = await client.fetch(QUERIES.SERVICE_BY_SLUG, { slug });
    return service;
  } catch (error) {
    console.error(`Error fetching service ${slug}:`, error);
    return null;
  }
}
