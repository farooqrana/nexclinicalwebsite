/**
 * Page Builder Component
 * Renders Sanity page builder blocks dynamically
 */

import { HeroBlock } from "./HeroBlock";
import { ServicesBlock } from "./ServicesBlock";
import { FeaturesBlock } from "./FeaturesBlock";
import { TestimonialsBlock } from "./TestimonialsBlock";
import { FAQBlock } from "./FAQBlock";
import { CTABlock } from "./CTABlock";
import { TeamBlock } from "./TeamBlock";
import { ContactBlock } from "./ContactBlock";
import { RichTextBlock } from "./RichTextBlock";

export interface PageBuilderProps {
  blocks: any[];
}

export function PageBuilder({ blocks }: PageBuilderProps) {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  return (
    <div className="page-builder">
      {blocks.map((block) => {
        const key = block._key || block._id;

        switch (block._type) {
          case "hero":
            return <HeroBlock key={key} data={block} />;

          case "services":
            return <ServicesBlock key={key} data={block} />;

          case "features":
            return <FeaturesBlock key={key} data={block} />;

          case "testimonials":
            return <TestimonialsBlock key={key} data={block} />;

          case "faq":
            return <FAQBlock key={key} data={block} />;

          case "cta":
            return <CTABlock key={key} data={block} />;

          case "team":
            return <TeamBlock key={key} data={block} />;

          case "contact":
            return <ContactBlock key={key} data={block} />;

          case "richText":
            return <RichTextBlock key={key} data={block} />;

          default:
            console.warn(`Unknown block type: ${block._type}`);
            return null;
        }
      })}
    </div>
  );
}
