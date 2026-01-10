/**
 * FAQ Block - Accordion for frequently asked questions
 */
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  _key: string;
  question: string;
  answer: string;
}

interface FAQBlockProps {
  data: {
    heading?: string;
    subheading?: string;
    faqs: FAQ[];
  };
}

export function FAQBlock({ data }: FAQBlockProps) {
  const { heading, subheading, faqs } = data;

  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {heading && (
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gray-900">
                {heading}
              </h2>
              {subheading && <p className="text-xl text-gray-600">{subheading}</p>}
            </div>
          )}

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq._key}
                value={faq._key}
                className="bg-gray-50 rounded-lg border border-gray-200 px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-primary-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Optional link to full FAQ page */}
          <div className="text-center mt-12">
            <a
              href="/faqs"
              className="text-primary-600 font-semibold text-lg hover:underline inline-flex items-center gap-2"
            >
              View All FAQs
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
