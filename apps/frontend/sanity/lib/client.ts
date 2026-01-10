import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// Define our own SanityImageSource type
type SanityImageSource =
  | {
      _type?: "image";
      asset?: {
        _ref?: string;
        _type?: "reference";
      };
      crop?: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
      };
      hotspot?: {
        x?: number;
        y?: number;
        height?: number;
        width?: number;
      };
    }
  | string;

// Sanity client configuration
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

// Client for fetching data (with CDN for faster reads)
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
});

// Client for previews (no CDN, always fresh)
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
});

// Get the appropriate client based on preview mode
export function getClient(preview?: boolean) {
  return preview ? previewClient : client;
}

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Image URL helper with common transformations
export function getImageUrl(
  source: SanityImageSource,
  options?: {
    width?: number;
    height?: number;
    quality?: number;
    format?: "webp" | "jpg" | "png";
  }
) {
  if (!source) return null;

  let img = builder.image(source);

  if (options?.width) img = img.width(options.width);
  if (options?.height) img = img.height(options.height);
  if (options?.quality) img = img.quality(options.quality);
  if (options?.format) img = img.format(options.format);

  return img.url();
}
