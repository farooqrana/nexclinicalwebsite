/**
 * Hero Block Component
 * Renders hero section from Sanity CMS
 */

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

interface HeroBlockProps {
  data: {
    heading?: string;
    subheading?: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
    image?: any;
    alignment?: "left" | "center" | "right";
    backgroundStyle?: "gradient" | "solid" | "image";
  };
}

export function HeroBlock({ data }: HeroBlockProps) {
  const {
    heading,
    subheading,
    description,
    ctaText,
    ctaLink,
    secondaryCtaText,
    secondaryCtaLink,
    image,
    alignment = "left",
    backgroundStyle = "gradient",
  } = data;

  const bgClass =
    backgroundStyle === "gradient"
      ? "bg-gradient-to-br from-blue-50 via-primary-50 to-blue-100"
      : backgroundStyle === "solid"
        ? "bg-primary-50"
        : "bg-white";

  const alignClass =
    alignment === "center" ? "text-center" : alignment === "right" ? "text-right" : "text-left";

  return (
    <section className={`${bgClass} pt-32 pb-20 md:pt-40 md:pb-32`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={alignClass}>
            {subheading && (
              <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-4">
                {subheading}
              </p>
            )}

            {heading && (
              <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-primary-600 leading-tight">
                {heading}
              </h1>
            )}

            {description && (
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">{description}</p>
            )}

            <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
              {ctaText && ctaLink && (
                <Button
                  size="lg"
                  className="bg-primary-600 text-white hover:bg-primary-700 shadow-lg"
                  asChild
                >
                  <a href={ctaLink}>{ctaText}</a>
                </Button>
              )}

              {secondaryCtaText && secondaryCtaLink && (
                <a
                  href={secondaryCtaLink}
                  className="text-primary-600 font-semibold text-lg underline hover:text-primary-700 mt-4"
                >
                  {secondaryCtaText}
                </a>
              )}
            </div>
          </div>

          {/* Image */}
          {image && (
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={urlFor(image).width(800).height(600).url()}
                  alt={heading || "Hero image"}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
