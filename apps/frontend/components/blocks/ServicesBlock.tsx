/**
 * Services Block Component
 * Renders services grid from Sanity CMS
 */

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";

interface ServicesBlockProps {
  data: {
    heading?: string;
    description?: string;
    selectedServices?: Array<{
      _id: string;
      title: string;
      slug: { current: string };
      excerpt?: string;
      description?: string;
      icon?: any;
    }>;
    layout?: "grid-2" | "grid-3" | "grid-4";
  };
}

export function ServicesBlock({ data }: ServicesBlockProps) {
  const { heading, description, selectedServices = [], layout = "grid-3" } = data;

  const gridClass =
    layout === "grid-2"
      ? "md:grid-cols-2"
      : layout === "grid-4"
        ? "md:grid-cols-4"
        : "md:grid-cols-3";

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {(heading || description) && (
            <div className="text-center mb-16">
              {heading && (
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gray-900">
                  {heading}
                </h2>
              )}
              {description && <p className="text-xl text-gray-600">{description}</p>}
            </div>
          )}

          <div className={`grid ${gridClass} gap-8`}>
            {selectedServices.map((service) => (
              <Card
                key={service._id}
                className="border-0 shadow-md hover:shadow-xl transition-shadow bg-white"
              >
                <CardHeader>
                  {service.icon && (
                    <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                      <Image
                        src={urlFor(service.icon).width(64).height(64).url()}
                        alt={service.title}
                        width={64}
                        height={64}
                      />
                    </div>
                  )}
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.excerpt || service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={`/services/${service.slug.current}`}
                    className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center group"
                  >
                    Learn more
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
