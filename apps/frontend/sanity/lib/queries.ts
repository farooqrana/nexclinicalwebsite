import { groq } from "next-sanity";
import { client, getClient } from "./client";

// ============================================
// GLOBAL SETTINGS
// ============================================

export const globalSettingsQuery = groq`
  *[_type == "globalSettings"][0] {
    siteName,
    tagline,
    logo,
    logoLight,
    favicon,
    primaryColor,
    secondaryColor,
    accentColor,
    mainPhone,
    mainEmail,
    mainAddress,
    socialLinks,
    defaultSeoTitle,
    defaultSeoDescription,
    defaultOgImage,
    googleAnalyticsId,
    googleTagManagerId
  }
`;

export async function getGlobalSettings() {
  return client.fetch(globalSettingsQuery);
}

// ============================================
// PAGES
// ============================================

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    pageBuilder[] {
      _type,
      _key,
      ...,
      // Expand references in services section
      selectedServices[]-> {
        _id,
        title,
        slug,
        shortDescription,
        icon,
        image
      },
      // Expand references in team section
      selectedMembers[]-> {
        _id,
        name,
        slug,
        credentials,
        title,
        specialty,
        photo,
        acceptingPatients
      }
    },
    seoTitle,
    seoDescription,
    ogImage,
    noIndex
  }
`;

export async function getPageBySlug(slug: string, preview = false) {
  return getClient(preview).fetch(pageBySlugQuery, { slug });
}

export const allPagesQuery = groq`
  *[_type == "page"] | order(title asc) {
    _id,
    title,
    slug,
    seoTitle,
    seoDescription
  }
`;

export async function getAllPages() {
  return client.fetch(allPagesQuery);
}

// ============================================
// BLOG POSTS
// ============================================

export const allBlogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt,
    author-> {
      name,
      credentials,
      photo
    },
    categories[]-> {
      _id,
      title,
      slug,
      color
    }
  }
`;

export async function getAllBlogPosts() {
  return client.fetch(allBlogPostsQuery);
}

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    content,
    publishedAt,
    author-> {
      _id,
      name,
      slug,
      credentials,
      title,
      specialty,
      photo,
      bio
    },
    categories[]-> {
      _id,
      title,
      slug,
      color
    },
    seoTitle,
    seoDescription
  }
`;

export async function getBlogPostBySlug(slug: string, preview = false) {
  return getClient(preview).fetch(blogPostBySlugQuery, { slug });
}

export const blogPostsByCategoryQuery = groq`
  *[_type == "blogPost" && $categoryId in categories[]._ref] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt,
    author-> {
      name,
      photo
    }
  }
`;

export async function getBlogPostsByCategory(categoryId: string) {
  return client.fetch(blogPostsByCategoryQuery, { categoryId });
}

// ============================================
// SERVICES
// ============================================

export const allServicesQuery = groq`
  *[_type == "service"] | order(order asc, title asc) {
    _id,
    title,
    slug,
    shortDescription,
    icon,
    image,
    price,
    duration,
    featured
  }
`;

export async function getAllServices() {
  return client.fetch(allServicesQuery);
}

export const featuredServicesQuery = groq`
  *[_type == "service" && featured == true] | order(order asc) {
    _id,
    title,
    slug,
    shortDescription,
    icon,
    image
  }
`;

export async function getFeaturedServices() {
  return client.fetch(featuredServicesQuery);
}

export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    shortDescription,
    description,
    icon,
    image,
    price,
    duration,
    seoTitle,
    seoDescription
  }
`;

export async function getServiceBySlug(slug: string, preview = false) {
  return getClient(preview).fetch(serviceBySlugQuery, { slug });
}

// ============================================
// DOCTORS / TEAM
// ============================================

export const allDoctorsQuery = groq`
  *[_type == "doctor"] | order(order asc, name asc) {
    _id,
    name,
    slug,
    credentials,
    title,
    specialty,
    photo,
    acceptingPatients,
    languages,
    locations[]-> {
      _id,
      name,
      slug
    }
  }
`;

export async function getAllDoctors() {
  return client.fetch(allDoctorsQuery);
}

export const doctorBySlugQuery = groq`
  *[_type == "doctor" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    credentials,
    title,
    specialty,
    photo,
    bio,
    education,
    certifications,
    languages,
    acceptingPatients,
    email,
    phone,
    locations[]-> {
      _id,
      name,
      slug,
      address,
      phone
    }
  }
`;

export async function getDoctorBySlug(slug: string, preview = false) {
  return getClient(preview).fetch(doctorBySlugQuery, { slug });
}

// ============================================
// LOCATIONS
// ============================================

export const allLocationsQuery = groq`
  *[_type == "location"] | order(order asc, name asc) {
    _id,
    name,
    slug,
    address,
    phone,
    fax,
    email,
    hours,
    googleMapsUrl,
    image,
    isMainLocation
  }
`;

export async function getAllLocations() {
  return client.fetch(allLocationsQuery);
}

export const mainLocationQuery = groq`
  *[_type == "location" && isMainLocation == true][0] {
    _id,
    name,
    slug,
    address,
    phone,
    fax,
    email,
    hours,
    googleMapsUrl,
    coordinates,
    image
  }
`;

export async function getMainLocation() {
  return client.fetch(mainLocationQuery);
}

export const locationBySlugQuery = groq`
  *[_type == "location" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    address,
    phone,
    fax,
    email,
    hours,
    coordinates,
    googleMapsUrl,
    image,
    parkingInfo,
    accessibilityInfo,
    isMainLocation
  }
`;

export async function getLocationBySlug(slug: string, preview = false) {
  return getClient(preview).fetch(locationBySlugQuery, { slug });
}

// ============================================
// CATEGORIES
// ============================================

export const allCategoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    color
  }
`;

export async function getAllCategories() {
  return client.fetch(allCategoriesQuery);
}
