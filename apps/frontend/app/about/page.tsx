import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "About Us - Healthcare Operations Experts | NexClinical",
  description: "Meet the team behind NexClinical. We're healthcare operations specialists dedicated to helping medical practices thrive through exceptional administrative support.",
  openGraph: {
    title: "About Us - Healthcare Operations Experts | NexClinical",
    description: "Healthcare operations specialists dedicated to helping medical practices thrive.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              We Help Small Practices Thrive
            </h1>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Founded by healthcare professionals who saw firsthand how administrative burden 
              crushes the joy of practicing medicine. We're here to change that.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-heading mb-4">Our Story</h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                NexClinical was born from frustration—the frustration of watching talented physicians 
                spend hours on hold with insurance companies, struggle to keep up with charting, 
                and consider leaving medicine altogether because of administrative burnout.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our founder, a former practice administrator, witnessed this crisis firsthand. She saw 
                doctors who loved their patients but dreaded their inbox. Practices that provided excellent 
                care but struggled financially due to authorization delays and billing inefficiencies. 
                Solo practitioners who couldn't afford full-time staff but desperately needed help.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We realized that small practices—the backbone of American healthcare—were being left behind. 
                Large hospital systems have entire departments for authorization, scheduling, and documentation. 
                Small practices? They're expected to do it all with a skeleton crew.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed font-semibold text-primary-700">
                That's why we exist. To level the playing field. To give small practices access to the same 
                caliber of administrative support that large systems enjoy—without the overhead of hiring full-time staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-heading mb-4">Our Mission & Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do.</p>
            </div>

            {/* Mission Statement */}
            <Card className="mb-12 bg-primary-50 border-2 border-primary-200">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed">
                  To empower small medical practices with world-class administrative support, so physicians 
                  can focus on what they do best: providing exceptional patient care. We believe great 
                  healthcare starts with supporting the people who deliver it.
                </p>
              </CardContent>
            </Card>

            {/* Core Values */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <CardTitle>Patient Care First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Every decision we make starts with asking: "Will this help physicians spend more time 
                    with patients?" If the answer is no, we don't do it. Patient care is the north star.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <CardTitle>True Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We're not a vendor—we're an extension of your team. We learn your protocols, adapt to 
                    your style, and care about your success as much as you do. Your wins are our wins.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <CardTitle>Relentless Accountability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We do what we say we'll do, when we say we'll do it. No excuses. If we make a mistake, 
                    we own it, fix it, and learn from it. You deserve reliability.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <CardTitle>Continuous Improvement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Healthcare changes constantly, and so do we. We invest in ongoing training, adopt new 
                    technologies, and refine our processes based on feedback. Good enough never is.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <CardTitle>Compassion & Respect</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We handle sensitive patient information and interact with people in vulnerable moments. 
                    We treat every patient, provider, and colleague with dignity and compassion.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle>Transparent Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    No hidden fees, no surprise charges, no fine print. We believe in honest, straightforward 
                    pricing that lets you make informed decisions without fear of bait-and-switch.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-heading mb-4">
                What Makes Us Different
              </h2>
              <p className="text-xl text-gray-600">
                We're not your typical "virtual assistant" company.
              </p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardContent className="pt-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Healthcare-Specific Expertise
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        We don't hire generic VAs and teach them about healthcare. Our team members have backgrounds 
                        in medical offices, hospitals, or healthcare administration. They understand CPT codes, ICD-10, 
                        authorization requirements, and medical terminology. They speak your language.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        U.S.-Based Team During Your Practice Hours
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our team works during standard U.S. business hours (your hours), ensuring seamless communication 
                        with patients, payers, and your staff. No offshore call centers, no language barriers, 
                        no waiting until tomorrow because of time zone differences.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        HIPAA Compliance Taken Seriously
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        We don't just check a box for HIPAA training—we build our entire infrastructure around security. 
                        Encrypted communications, secure workstations, regular audits, signed BAAs, and a zero-tolerance 
                        policy for violations. Your patients' privacy is sacred.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Dedicated Support, Not Shared Resources
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        You're not competing for attention with 20 other practices. You get dedicated team members 
                        who learn your workflows, know your patients, and understand your preferences. Consistency 
                        builds quality—and trust.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Built for Small Practices
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Large healthcare systems have different needs than solo practitioners or small groups. 
                        We specialize in practices with 1-10 providers—we understand your constraints, your budgets, 
                        and your need for flexibility. We're the right size for you.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Track Record */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-heading mb-4">
                Our Track Record
              </h2>
              <p className="text-xl text-gray-600">
                Numbers that reflect our commitment to excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="pt-8">
                  <p className="text-5xl font-bold text-primary-600 mb-2">150+</p>
                  <p className="text-gray-800 font-semibold">Practices Served</p>
                  <p className="text-sm text-gray-600 mt-2">Across 35 states</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-8">
                  <p className="text-5xl font-bold text-primary-600 mb-2">4.9★</p>
                  <p className="text-gray-800 font-semibold">Client Satisfaction</p>
                  <p className="text-sm text-gray-600 mt-2">Based on 120+ reviews</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-8">
                  <p className="text-5xl font-bold text-primary-600 mb-2">92%</p>
                  <p className="text-gray-800 font-semibold">Retention Rate</p>
                  <p className="text-sm text-gray-600 mt-2">Clients stay with us</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-8">
                  <p className="text-5xl font-bold text-primary-600 mb-2">7 days</p>
                  <p className="text-gray-800 font-semibold">Average Setup Time</p>
                  <p className="text-sm text-gray-600 mt-2">Operational quickly</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
              <CardContent className="pt-12 pb-12 text-center">
                <h2 className="text-3xl font-bold font-heading mb-4">
                  Ready to Experience the NexClinical Difference?
                </h2>
                <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                  Let's talk about how we can help your practice thrive. No pressure, no sales pitch—
                  just honest advice about whether we're the right fit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100" asChild>
                    <a href="/contact">Schedule Free Consultation</a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                    <a href="/services/patient-scheduling">Explore Services</a>
                  </Button>
                </div>
                <p className="text-primary-200 text-sm mt-6">
                  No setup fees • No long-term contracts • 60-day satisfaction guarantee
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
