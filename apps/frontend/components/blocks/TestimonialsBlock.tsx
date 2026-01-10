/**
 * Testimonials Block - Carousel/Grid display for customer testimonials
 */
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

interface Testimonial {
  _key: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
  image?: any;
}

interface TestimonialsBlockProps {
  data: {
    heading?: string;
    subheading?: string;
    testimonials: Testimonial[];
  };
}

export function TestimonialsBlock({ data }: TestimonialsBlockProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const { heading, subheading, testimonials } = data;

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying || !testimonials || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials]);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  // For small number of testimonials, show grid view
  if (testimonials.length <= 3) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {heading && (
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gray-900">
                  {heading}
                </h2>
                {subheading && <p className="text-xl text-gray-600">{subheading}</p>}
              </div>
            )}

            <div
              className={`grid ${testimonials.length === 1 ? "md:grid-cols-1 max-w-2xl mx-auto" : testimonials.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"} gap-8`}
            >
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial._key}
                  className="bg-white border-0 shadow-md hover:shadow-xl transition-shadow"
                >
                  <CardContent className="pt-8">
                    {/* Star rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      {(testimonial.role || testimonial.company) && (
                        <p className="text-gray-600 text-sm">
                          {testimonial.role}
                          {testimonial.role && testimonial.company && ", "}
                          {testimonial.company}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // For many testimonials, show carousel
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {heading && (
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gray-900">
                {heading}
              </h2>
              {subheading && <p className="text-xl text-gray-600">{subheading}</p>}
            </div>
          )}

          <div className="relative">
            {/* Main testimonial display */}
            <div className="grid md:grid-cols-3 gap-8">
              {[0, 1, 2].map((offset) => {
                const index = (currentIndex + offset) % testimonials.length;
                const testimonial = testimonials[index];

                return (
                  <Card
                    key={`${testimonial._key}-${index}`}
                    className={`bg-white border-0 shadow-md transition-all duration-500 ${
                      offset === 1 ? "md:scale-105 md:shadow-xl" : "md:opacity-75"
                    }`}
                  >
                    <CardContent className="pt-8">
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>

                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        {(testimonial.role || testimonial.company) && (
                          <p className="text-gray-600 text-sm">
                            {testimonial.role}
                            {testimonial.role && testimonial.company && ", "}
                            {testimonial.company}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex((current) =>
                    current === 0 ? testimonials.length - 1 : current - 1
                  );
                }}
                className="w-12 h-12 rounded-full bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-colors flex items-center justify-center shadow-md"
                aria-label="Previous testimonial"
              >
                ←
              </button>

              {/* Dots indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-primary-600 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex((current) => (current + 1) % testimonials.length);
                }}
                className="w-12 h-12 rounded-full bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-colors flex items-center justify-center shadow-md"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>

            {/* Auto-play toggle */}
            <div className="text-center mt-6">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
              >
                {isAutoPlaying ? "⏸ Pause" : "▶ Auto-play"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
