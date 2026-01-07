import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/layout/footer";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Website & Digital Marketing for Medical Practices | NexClinical",
  description: "Build your practice web presence and generate more leads. Professional website design, SEO, and digital marketing services tailored for healthcare providers.",
  openGraph: {
    title: "Website & Digital Marketing for Medical Practices | NexClinical",
    description: "Build your practice web presence and generate more leads with professional healthcare marketing services.",
  },
};

export default function WebsiteMarketingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              Website & Marketing
            </h1>
            <p className="text-2xl text-primary-100 mb-8">
              Build your practice web presence and generate more leads
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100">
                <a href="https://calendly.com/nexclinical/15min">Schedule Consultation</a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                View Portfolio
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
                  Grow Your Practice Online
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Your website is often the first interaction potential patients have with your practice. 
                  We create professional, HIPAA-compliant websites that convert visitors into patients.
                </p>
                <p className="text-lg text-gray-700">
                  Our digital marketing services help you reach more patients in your local area through 
                  SEO, Google Ads, and social media marketing.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">What's Included</h3>
                <ul className="space-y-4">
                  {[
                    "Custom website design",
                    "Mobile-responsive layout",
                    "HIPAA-compliant forms",
                    "SEO optimization",
                    "Google My Business setup",
                    "Ongoing maintenance",
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
              Complete Digital Marketing Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Website Design",
                  description: "Professional, modern websites that reflect your practice's brand. Mobile-responsive and optimized for conversions.",
                },
                {
                  title: "Search Engine Optimization",
                  description: "Get found by patients searching for healthcare services in your area. Local SEO strategies that drive results.",
                },
                {
                  title: "Google Ads Management",
                  description: "Targeted advertising campaigns that reach patients actively searching for your services. ROI-focused approach.",
                },
                {
                  title: "Social Media Marketing",
                  description: "Build your online presence on Facebook, Instagram, and LinkedIn. Engage with patients and grow your following.",
                },
                {
                  title: "Content Marketing",
                  description: "Educational blog posts, patient resources, and healthcare content that positions you as an expert.",
                },
                {
                  title: "Reputation Management",
                  description: "Monitor and respond to online reviews. Build a positive online reputation that attracts new patients.",
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

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold font-heading text-center mb-12">
              Why Choose Our Marketing Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Healthcare Expertise",
                  description: "We specialize in marketing for medical practices. We understand HIPAA compliance, healthcare regulations, and what patients are looking for.",
                },
                {
                  title: "Data-Driven Results",
                  description: "Track your marketing ROI with detailed analytics. We provide monthly reports showing website traffic, lead generation, and campaign performance.",
                },
                {
                  title: "Patient-Centered Design",
                  description: "Our websites are designed with the patient experience in mind. Easy navigation, online scheduling, and mobile-friendly interfaces.",
                },
                {
                  title: "Ongoing Support",
                  description: "We don't just build your website and disappear. We provide ongoing maintenance, updates, and optimization to keep your site performing.",
                },
              ].map((feature, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Ready to Grow Your Practice?
            </h2>
            <p className="text-xl text-primary-50 mb-8">
              Schedule a free consultation to discuss your marketing goals
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
