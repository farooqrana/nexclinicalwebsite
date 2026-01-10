/**
 * Dynamic Page Route - Renders any page created in Sanity Studio
 * Supports all block types via PageBuilder component
 */

import { getPageBySlug, getAllPages } from "@/lib/sanity";
import { PageBuilder } from "@/components/blocks";
import { Footer } from "@/components/layout/footer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all pages at build time
export async function generateStaticParams() {
  const pages = await getAllPages();

  return pages
    .filter((page: any) => page.slug !== "home") // Exclude home page (handled by root route)
    .map((page: any) => ({
      slug: page.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = await getPageBySlug(params.slug);

  if (!page) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: page.seoTitle || page.title,
    description: page.seoDescription || undefined,
    openGraph: {
      title: page.seoTitle || page.title,
      description: page.seoDescription || undefined,
      images: page.ogImage ? [page.ogImage] : undefined,
    },
    robots: page.noIndex ? "noindex, nofollow" : undefined,
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const page = await getPageBySlug(params.slug);

  // If page doesn't exist in Sanity, show 404
  if (!page) {
    notFound();
  }

  // If page has no blocks, show minimal fallback
  if (!page.pageBuilder || page.pageBuilder.length === 0) {
    return (
      <main className="min-h-screen">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold font-heading mb-6 text-gray-900">{page.title}</h1>
              <p className="text-xl text-gray-600">This page is being built. Check back soon!</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  // Render page using PageBuilder
  return (
    <main className="min-h-screen">
      <PageBuilder blocks={page.pageBuilder} />
      <Footer />
    </main>
  );
}

// Enable ISR (Incremental Static Regeneration)
// Pages will be regenerated every 60 seconds if requested
export const revalidate = 60;
