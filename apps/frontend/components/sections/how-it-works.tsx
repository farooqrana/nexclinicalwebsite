interface Step {
  number: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface HowItWorksProps {
  steps: Step[];
  title?: string;
  subtitle?: string;
}

export function HowItWorks({ steps, title, subtitle }: HowItWorksProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
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

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                {/* Step Number/Icon */}
                <div className="flex-shrink-0">
                  {step.icon ? (
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-700">
                      {step.icon}
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                      {step.number}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 h-12 w-0.5 bg-gray-200 -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
