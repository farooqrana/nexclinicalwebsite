/**
 * CMS API Integration for NexClinical Frontend
 * Fetches content, branding, and page data from Payload CMS
 */

const CMS_API_URL = process.env.NEXT_PUBLIC_SERVER_URL
  ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api`
  : "http://localhost:3000/api";

/**
 * Fetch branding configuration from CMS
 */
export async function getBranding() {
  try {
    const response = await fetch(`${CMS_API_URL}/branding?limit=1`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch branding: ${response.statusText}`);
    }

    const data = await response.json();
    return data.docs[0] || null;
  } catch (error) {
    console.error("Error fetching branding:", error);
    return null;
  }
}

/**
 * Fetch a page by slug from CMS
 */
export async function getPageBySlug(slug: string) {
  try {
    const response = await fetch(`${CMS_API_URL}/pages?where[slug][equals]=${slug}&depth=2`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch page: ${response.statusText}`);
    }

    const data = await response.json();
    return data.docs[0] || null;
  } catch (error) {
    console.error(`Error fetching page ${slug}:`, error);
    return null;
  }
}

/**
 * Fetch all published pages from CMS
 */
export async function getAllPages() {
  try {
    const response = await fetch(`${CMS_API_URL}/pages?where[status][equals]=published&limit=100`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch pages: ${response.statusText}`);
    }

    const data = await response.json();
    return data.docs || [];
  } catch (error) {
    console.error("Error fetching pages:", error);
    return [];
  }
}

/**
 * Fetch media by category
 */
export async function getMediaByCategory(category: string) {
  try {
    const response = await fetch(
      `${CMS_API_URL}/media?where[category][equals]=${category}&limit=50`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch media: ${response.statusText}`);
    }

    const data = await response.json();
    return data.docs || [];
  } catch (error) {
    console.error("Error fetching media:", error);
    return [];
  }
}

/**
 * Generate CSS custom properties from branding
 */
export function generateBrandingCSS(branding: any): string {
  if (!branding) return "";

  const fontMap: { [key: string]: string } = {
    inter: "'Inter', system-ui, -apple-system, sans-serif",
    poppins: "'Poppins', system-ui, -apple-system, sans-serif",
    playfair: "'Playfair Display', Georgia, serif",
    "dm-serif": "'DM Serif Display', Georgia, serif",
    "plus-jakarta": "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
    "space-mono": "'Space Mono', monospace",
  };

  return `
    :root {
      --primary-color: ${branding.primaryColor || "#0284c7"};
      --secondary-color: ${branding.secondaryColor || "#06b6d4"};
      --accent-color: ${branding.accentColor || "#f59e0b"};
      --text-color: ${branding.textColor || "#1f2937"};
      --background-color: ${branding.backgroundColor || "#ffffff"};
      --heading-font: ${fontMap[branding.headingFont] || fontMap.inter};
      --body-font: ${fontMap[branding.bodyFont] || fontMap.inter};
      --base-font-size: ${branding.baseFontSize || 16}px;
      --heading-size: ${branding.headingSize || 32}px;
      --line-height: ${branding.lineHeight || 1.5};
    }
  `;
}

/**
 * Type definitions for CMS data
 */
export interface BrandingConfig {
  id: string;
  title: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
  backgroundColor: string;
  headingFont: string;
  bodyFont: string;
  baseFontSize: number;
  headingSize: number;
  lineHeight: string;
  siteName: string;
  tagline?: string;
  description?: string;
  contactEmail?: string;
  contactPhone?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PageContent {
  id: string;
  title: string;
  slug: string;
  status: "draft" | "published";
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  heroSection?: {
    enabled: boolean;
    title?: string;
    subtitle?: string;
    backgroundImage?: any;
    ctaText?: string;
    ctaLink?: string;
  };
  sections?: any[];
  createdAt: string;
  updatedAt: string;
}

export interface MediaFile {
  id: string;
  title: string;
  alt?: string;
  caption?: string;
  category?: string;
  url: string;
  filename: string;
  mimeType: string;
  width?: number;
  height?: number;
  createdAt: string;
}
