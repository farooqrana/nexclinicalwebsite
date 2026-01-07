import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "How It Works - Get Started in 7 Days | NexClinical",
  description: "Learn how NexClinical works. From consultation to go-live, we make it easy to get started with our virtual medical support services in less than 7 days.",
  openGraph: {
    title: "How It Works - Get Started in 7 Days | NexClinical",
    description: "Learn how NexClinical works. Get started with our virtual medical support services in less than 7 days.",
  },
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              How It Works
            </h1>
            <p className="text-2xl text-primary-100 mb-8">
              Get up and running in less than 7 days hassle-free
            </p>
            <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100">
              <a href="https://calendly.com/nexclinical/15min">Schedule Consultation</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold font-heading text-center mb-16">
              Seamless Practice Workflow
            </h2>

            <div className="space-y-16">
              {/* Step 1 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-primary-600 text-white flex items-center justify-center text-3xl font-bold">
                        01
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold font-heading mb-4">
                        Consultation
                      </h3>
                      <p className="text-lg text-gray-700 mb-4">
                        We review your current operations and give you our recommendations.
                      </p>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 font-bold">•</span>
                          <span>15-minute discovery call to understand your needs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 font-bold">•</span>
                          <span>Review current pain points and workflows</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 font-bold">•</span>
                          <span>Discuss service options and pricing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 font-bold">•</span>
                          <span>No pressure, no sales pitch—just honest advice</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <Card className="bg-gradient-to-br from-primary-50 to-blue-50 border-primary-200">
                    <CardContent className="p-8">
                      <div className="aspect-square bg-white rounded-lg flex items-center justify-center text-6xl">
                        📋
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Card className="bg-gradient-to-br from-primary-50 to-blue-50 border-primary-200">
                    <CardContent className="p-8">
                      <div className="aspect-square bg-white rounded-lg flex items-center justify-center text-6xl">
                        🔧
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-primary-600 text-white flex items-center justify-center text-3xl font-bold">
                        02
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold font-heading mb-4">
                        Onboarding
                      </h3>
                      <p className="text-lg text-gray-700 mb-4">
                        We integrate with your EHR, scheduling tools, and insurance portals.
                      </p>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 font-bold">•</span>
                          <span>Secure access setup to your systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 font-bold">•</span>
                          <span>Team training on your protocols and preferences</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 font-bold">•</span>
                          <span>Test runs to ensure everything works smoothly</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 font-bold">•</span>
                          <span>Typically completed within 3-5 business days</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-primary-600 text-white flex items-center justify-center text-3xl font-bold">
                        03
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold font-heading mb-4">
                        Go Live
                      </h3>
                      <p className="text-lg text-gray-700 mb-4">
                        Your dedicated team starts handling the admin work, freeing up your time.
                      </p>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 font-bold">•</span>
                          <span>Dedicated support team assigned to your practice</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 font-bold">•</span>
                          <span>Begin handling calls, scheduling, and authorizations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 font-bold">•</span>
                          <span>Daily communication during first week</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 font-bold">•</span>
                          <span>Most practices see immediate relief</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <Card className="bg-gradient-to-br from-primary-50 to-blue-50 border-primary-200">
                    <CardContent className="p-8">
                      <div className="aspect-square bg-white rounded-lg flex items-center justify-center text-6xl">
                        🚀
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Card className="bg-gradient-to-br from-primary-50 to-blue-50 border-primary-200">
                    <CardContent className="p-8">
                      <div className="aspect-square bg-white rounded-lg flex items-center justify-center text-6xl">
                        📈
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-primary-600 text-white flex items-center justify-center text-3xl font-bold">
                        04
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold font-heading mb-4">
                        Ongoing Support
                      </h3>
                      <p className="text-lg text-gray-700 mb-4">
                        Continuous optimization, proactive support, & clear reporting.
                      </p>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 font-bold">•</span>
                          <span>Weekly check-ins to review performance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 font-bold">•</span>
                          <span>Monthly reporting on key metrics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 font-bold">•</span>
                          <span>Continuous workflow optimization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 font-bold">•</span>
                          <span>Dedicated account manager for your practice</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold font-heading text-center mb-12">
              7-Day Implementation Timeline
            </h2>
            <Card className="bg-gradient-to-br from-primary-50 to-blue-50 border-primary-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="font-bold text-primary-600 min-w-[100px]">Day 1-2</div>
                    <div className="text-gray-700">Consultation, agreement signing, and access setup</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="font-bold text-primary-600 min-w-[100px]">Day 3-4</div>
                    <div className="text-gray-700">Team training on your systems and protocols</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="font-bold text-primary-600 min-w-[100px]">Day 5-6</div>
                    <div className="text-gray-700">Test runs and workflow refinement</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="font-bold text-primary-600 min-w-[100px]">Day 7</div>
                    <div className="text-gray-700 font-semibold">Go live! Your team starts handling real work</div>
                  </div>
                </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-50 mb-8">
              Schedule your free consultation today and see how we can help your practice
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
