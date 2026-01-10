// Sanity CMS Integration for NexClinical
// Re-export everything for easy imports

// Client utilities
export {
  client,
  previewClient,
  getClient,
  urlFor,
  getImageUrl,
  projectId,
  dataset,
  apiVersion,
} from "./client";

// Query functions
export {
  // Global Settings
  getGlobalSettings,
  globalSettingsQuery,

  // Pages
  getPageBySlug,
  getAllPages,
  pageBySlugQuery,
  allPagesQuery,

  // Blog Posts
  getAllBlogPosts,
  getBlogPostBySlug,
  getBlogPostsByCategory,
  allBlogPostsQuery,
  blogPostBySlugQuery,

  // Services
  getAllServices,
  getFeaturedServices,
  getServiceBySlug,
  allServicesQuery,
  featuredServicesQuery,
  serviceBySlugQuery,

  // Doctors / Team
  getAllDoctors,
  getDoctorBySlug,
  allDoctorsQuery,
  doctorBySlugQuery,

  // Locations
  getAllLocations,
  getMainLocation,
  getLocationBySlug,
  allLocationsQuery,
  mainLocationQuery,
  locationBySlugQuery,

  // Categories
  getAllCategories,
  allCategoriesQuery,
} from "./queries";
