import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/layout/footer";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Revenue Cycle Management - Reduce Denials & Increase Collections | NexClinical",
  description: "Expert revenue cycle management services for medical practices. Reduce claim denials, increase collections, and get transparent reporting on your practice's financial health.",
  openGraph: {
    title: "Revenue Cycle Management - Reduce Denials & Increase Collections | NexClinical",
    description: "Expert revenue cycle management services for medical practices. Reduce claim denials, increase collections, and get transparent reporting.",
  },
};

export default function RevenueCyclePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              Revenue Cycle Management
            </h1>
            <p className="text-2xl text-primary-100 mb-8">
              Reduce denials, increase collections, and get transparent intelligence reporting
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100">
                <a href="https://calendly.com/nexclinical/15min">Schedule Consultation</a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold font-heading mb-6">
                  Maximize Your Practice Revenue
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our revenue cycle management services help medical practices optimize their billing processes, 
                  reduce claim denials, and improve cash flow. From claim submission to payment posting, we handle 
                  the entire revenue cycle so you can focus on patient care.
                </p>
                <p className="text-lg text-gray-700">
                  We work with all major insurance payers and EHR systems to ensure seamless integration with your 
                  existing workflow.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {[
                    "Reduce claim denials to <1%",
                    "Faster payment turnaround",
                    "Transparent monthly reporting",
                    "Proactive denial management",
                    "Dedicated billing team",
                    "EHR integration",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-primary-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold font-heading text-center mb-12">
              Complete Revenue Cycle Management
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Claims Management",
                  description: "Submit clean claims the first time. We review every claim for accuracy before submission to minimize denials.",
                },
                {
                  title: "Denial Management",
                  description: "Proactive tracking and resubmission of denied claims. We work with payers to resolve issues quickly.",
                },
                {
                  title: "Payment Posting",
                  description: "Accurate and timely posting of payments. Track outstanding balances and follow up on delayed payments.",
                },
                {
                  title: "Patient Billing",
                  description: "Clear, professional patient statements. Handle patient billing inquiries and payment arrangements.",
                },
                {
                  title: "Reporting & Analytics",
                  description: "Monthly financial reports with key metrics. Track collection rates, denial patterns, and revenue trends.",
                },
                {
                  title: "Credentialing Support",
                  description: "Help with insurance credentialing and re-credentialing. Maintain up-to-date provider enrollment.",
                },
              ].map((service, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Model */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold font-heading mb-6">
              Simple, Performance-Based Pricing
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Our revenue cycle management services are priced at 3-5% of collections. 
              You only pay when we successfully collect payments for your practice.
            </p>
            <Card className="bg-primary-50 border-primary-200">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold text-primary-600 mb-4">
                  3-5%
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  of collections
                </p>
                <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
                  {[
                    "No upfront costs",
                    "No monthly minimums",
                    "Cancel anytime",
                    "Performance-based pricing",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg">
                  <a href="/pricing">Get Custom Quote</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Ready to Improve Your Cash Flow?
            </h2>
            <p className="text-xl text-primary-50 mb-8">
              Schedule a free consultation to learn how we can optimize your revenue cycle
            </p>
            <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100">
              <a href="https://calendly.com/nexclinical/15min">Schedule Free Consultation</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
