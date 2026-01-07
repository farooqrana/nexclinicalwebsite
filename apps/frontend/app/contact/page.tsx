import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Contact Us - Get Started Today | NexClinical",
  description: "Get in touch with NexClinical. Schedule a free consultation or speak with our team. We're here to help your practice succeed.",
  keywords: ["contact NexClinical", "schedule consultation", "get in touch"],
  openGraph: {
    title: "Contact Us - Get Started Today | NexClinical",
    description: "Get in touch with NexClinical. Schedule a free consultation or speak with our team.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              Let's Talk About Your Practice
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Schedule a free 15-minute consultation. No pressure, no sales pitch—
              just honest advice on how we can help streamline your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Form - 3 columns */}
              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you within 2 business hours.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info & CTAs - 2 columns */}
              <div className="lg:col-span-2 space-y-6">
                {/* Quick Contact Card */}
                <Card className="bg-primary-600 text-white">
                  <CardHeader>
                    <CardTitle className="text-white">Prefer to Talk Now?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-primary-100 text-sm mb-2">Call us directly:</p>
                      <a href="tel:5168866137" className="text-2xl font-bold hover:underline flex items-center gap-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        (516) 886-6137
                      </a>
                      <p className="text-primary-100 text-sm mt-2">Mon-Fri, 9am-6pm ET</p>
                    </div>

                    <div className="border-t border-primary-500 pt-4">
                      <p className="text-primary-100 text-sm mb-2">Email us:</p>
                      <a href="mailto:hello@nexclinical.com" className="text-lg font-semibold hover:underline flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        hello@nexclinical.com
                      </a>
                      <p className="text-primary-100 text-sm mt-2">We respond within 2 hours</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Calendly Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Schedule a Consultation</CardTitle>
                    <p className="text-gray-600 text-sm">
                      Book a time that works for you—no back-and-forth emails.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" size="lg" asChild>
                      <a href="https://calendly.com/nexclinical/15min" target="_blank" rel="noopener noreferrer">
                        View Available Times →
                      </a>
                    </Button>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        15-minute introductory call
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        No pressure, no commitment
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Get honest advice for your practice
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Office Location (if applicable) */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Our Team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      We're a dedicated team of healthcare operations experts committed to 
                      helping small practices thrive. Our specialists have worked with over 
                      150 practices nationwide.
                    </p>
                    <div className="flex gap-3 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Serving practices nationwide</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Trust Signals */}
                <Card className="bg-gray-50">
                  <CardContent className="pt-6">
                    <div className="space-y-4 text-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">HIPAA Compliant</p>
                          <p className="text-gray-600">All team members are HIPAA-trained and certified</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">150+ Practices Served</p>
                          <p className="text-gray-600">Trusted by practices across the U.S.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">7-Day Setup</p>
                          <p className="text-gray-600">Get started quickly with minimal disruption</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-center mb-12">
              Quick Answers
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: "How quickly will you respond?",
                  a: "We respond to all inquiries within 2 business hours, typically much faster."
                },
                {
                  q: "Is there a consultation fee?",
                  a: "No. The initial 15-minute consultation is completely free with no obligation."
                },
                {
                  q: "Do you work with my EHR?",
                  a: "Yes, we integrate with all major EHR platforms. We'll discuss your specific system during the call."
                },
                {
                  q: "What if I'm just exploring options?",
                  a: "Perfect! We're happy to provide guidance even if you're not ready to commit."
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-base">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="/faqs" className="text-primary-600 hover:underline font-semibold">
                View All FAQs →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
