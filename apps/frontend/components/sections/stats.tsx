import { Card, CardContent } from "@/components/ui/card";

interface Stat {
  value: string;
  label: string;
  sublabel?: string;
}

interface StatsProps {
  stats: Stat[];
  title?: string;
  subtitle?: string;
  variant?: "default" | "primary" | "card";
}

export function Stats({ stats, title, subtitle, variant = "default" }: StatsProps) {
  if (variant === "primary") {
    return (
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {(title || subtitle) && (
              <div className="text-center mb-12">
                {title && (
                  <h2 className="text-4xl font-bold font-heading mb-4">{title}</h2>
                )}
                {subtitle && (
                  <p className="text-xl text-primary-100">{subtitle}</p>
                )}
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</p>
                  <p className="text-lg font-semibold text-primary-100">{stat.label}</p>
                  {stat.sublabel && (
                    <p className="text-sm text-primary-200 mt-1">{stat.sublabel}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "card") {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {(title || subtitle) && (
              <div className="text-center mb-12">
                {title && (
                  <h2 className="text-4xl font-bold font-heading mb-4">{title}</h2>
                )}
                {subtitle && (
                  <p className="text-xl text-gray-600">{subtitle}</p>
                )}
              </div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-8">
                    <p className="text-5xl font-bold text-primary-600 mb-2">{stat.value}</p>
                    <p className="text-gray-800 font-semibold">{stat.label}</p>
                    {stat.sublabel && (
                      <p className="text-sm text-gray-600 mt-2">{stat.sublabel}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {(title || subtitle) && (
            <div className="text-center mb-8">
              {title && (
                <h2 className="text-3xl font-bold font-heading mb-3">{title}</h2>
              )}
              {subtitle && (
                <p className="text-lg text-gray-600">{subtitle}</p>
              )}
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-bold text-primary-600 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600 font-semibold">{stat.label}</p>
                {stat.sublabel && (
                  <p className="text-xs text-gray-500 mt-1">{stat.sublabel}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
