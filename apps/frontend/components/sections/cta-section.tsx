import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  footer?: string;
  variant?: "primary" | "secondary" | "dark";
}

export function CTASection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  footer,
  variant = "primary",
}: CTASectionProps) {
  const variantStyles = {
    primary: "bg-gradient-to-br from-primary-600 to-primary-800 text-white",
    secondary: "bg-gray-100 text-gray-900",
    dark: "bg-gray-900 text-white",
  };

  const buttonStyles = {
    primary: {
      primary: "bg-white text-primary-700 hover:bg-gray-100",
      secondary: "border-white text-white hover:bg-white/10",
    },
    secondary: {
      primary: "bg-primary-600 text-white hover:bg-primary-700",
      secondary: "border-primary-600 text-primary-600 hover:bg-primary-50",
    },
    dark: {
      primary: "bg-white text-gray-900 hover:bg-gray-100",
      secondary: "border-white text-white hover:bg-white/10",
    },
  };

  return (
    <section className={`py-16 ${variantStyles[variant]}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className={`text-xl mb-8 ${variant === "primary" ? "text-primary-100" : variant === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              {subtitle}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className={buttonStyles[variant].primary}
              asChild
            >
              <a href={primaryCTA.href}>{primaryCTA.text}</a>
            </Button>
            {secondaryCTA && (
              <Button
                size="lg"
                variant="outline"
                className={buttonStyles[variant].secondary}
                asChild
              >
                <a href={secondaryCTA.href}>{secondaryCTA.text}</a>
              </Button>
            )}
          </div>
          {footer && (
            <p className={`text-sm mt-6 ${variant === "primary" ? "text-primary-200" : variant === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              {footer}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
