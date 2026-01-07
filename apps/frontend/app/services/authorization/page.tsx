import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Prior Authorization & Insurance Verification Services | NexClinical",
  description: "Expert prior authorization and insurance verification services for medical practices. Reduce denials, improve cash flow, and eliminate administrative burden.",
  openGraph: {
    title: "Prior Authorization & Insurance Verification Services | NexClinical",
    description: "Expert prior authorization and insurance verification services. Reduce denials and improve cash flow.",
  },
};

export default function AuthorizationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary-500/30 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Prior Authorization & Verification
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              Stop Losing Revenue to Authorization Delays
            </h1>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Our authorization specialists handle the entire process—from submission to approval—
              so you can focus on treating patients, not fighting with insurance companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100" asChild>
                <a href="/contact">Book Free Consultation</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="/pricing">View Pricing</a>
              </Button>
            </div>
            <p className="text-primary-200 text-sm mt-6">
              Trusted by 150+ medical practices • HIPAA compliant • 85%+ approval rate
            </p>
          </div>
        </div>
      </section>

      {/* The Problem: Pain Points */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-heading mb-4">
                The Hidden Cost of Authorization Chaos
              </h2>
              <p className="text-xl text-gray-600">
                Prior authorization isn't just frustrating—it's costing you money, delaying patient care, and burning out your staff.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-red-100">
                <CardHeader>
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-red-900">Revenue Loss</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-red-600 mb-2">23%</p>
                  <p className="text-gray-700">
                    of claims are denied due to authorization issues. Even if you appeal successfully, you've lost weeks of cash flow.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-100">
                <CardHeader>
                  <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-orange-900">Time Drain</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-orange-600 mb-2">14 hours/week</p>
                  <p className="text-gray-700">
                    Average time spent by staff on phone holds, form submissions, and follow-ups with insurance companies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-100">
                <CardHeader>
                  <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <CardTitle className="text-yellow-900">Patient Delays</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-yellow-600 mb-2">7-14 days</p>
                  <p className="text-gray-700">
                    Average delay in treatment while waiting for authorization approval. Your patients suffer, and so does their satisfaction.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Real-world consequence */}
            <div className="mt-12 bg-gray-50 p-8 rounded-xl border-l-4 border-red-500">
              <p className="text-lg text-gray-800 italic">
                <span className="font-bold text-red-600">"We lost $47,000 last year to authorization denials we didn't even know about until it was too late to appeal."</span>
                <br />
                <span className="text-gray-600 text-base not-italic mt-2 block">
                  — Practice Administrator, 5-provider internal medicine group
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution: How We Help */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-heading mb-4">
                How Our Authorization Service Works
              </h2>
              <p className="text-xl text-gray-600">
                We handle the entire authorization process from start to finish—proactively, persistently, and professionally.
              </p>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <Card className="flex-1">
                  <CardHeader>
                    <CardTitle>Proactive Eligibility Verification</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Before every appointment and procedure, we verify patient eligibility, active coverage, copay amounts, 
                      deductibles, and authorization requirements. You'll know exactly what to expect before the patient walks in.
                    </p>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Real-time verification
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        All major payers
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Documented in EHR
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <Card className="flex-1">
                  <CardHeader>
                    <CardTitle>Complete Authorization Submission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      We gather all required clinical documentation (diagnosis, medical necessity, supporting records), 
                      complete payer-specific forms, and submit authorizations through the fastest channel (portal, fax, or phone).
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg mt-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">We handle authorizations for:</p>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Medications (specialty drugs)
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Imaging (MRI, CT, PET)
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Procedures & surgeries
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          DME (durable medical equipment)
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Specialty referrals
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Home health services
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <Card className="flex-1">
                  <CardHeader>
                    <CardTitle>Daily Monitoring & Follow-Up</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      We don't "set it and forget it." We track every authorization daily, follow up proactively with payers, 
                      and escalate urgent requests. You get real-time status updates via your EHR or our portal.
                    </p>
                    <div className="flex gap-4 text-sm">
                      <div className="flex-1 bg-blue-50 p-3 rounded-lg">
                        <p className="font-semibold text-blue-900 mb-1">Average Turnaround</p>
                        <p className="text-2xl font-bold text-blue-600">2-5 days</p>
                        <p className="text-xs text-blue-700 mt-1">vs. 7-14 days industry average</p>
                      </div>
                      <div className="flex-1 bg-green-50 p-3 rounded-lg">
                        <p className="font-semibold text-green-900 mb-1">Approval Rate</p>
                        <p className="text-2xl font-bold text-green-600">85%+</p>
                        <p className="text-xs text-green-700 mt-1">on first submission</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <Card className="flex-1">
                  <CardHeader>
                    <CardTitle>Appeals & Denials Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      If a request is denied, we spring into action. We review the denial reason, gather additional clinical 
                      documentation if needed, and file peer-to-peer appeals or reconsiderations. We don't give up easily.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                      <p className="text-sm font-semibold text-green-900">
                        Our appeal success rate: <span className="text-2xl font-bold">63%</span>
                      </p>
                      <p className="text-xs text-green-700 mt-1">
                        That's revenue you would have lost without persistent follow-up.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results: Social Proof */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-heading mb-4">
                Real Results from Real Practices
              </h2>
              <p className="text-xl text-gray-600">
                See how our authorization service has transformed operations for practices like yours.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
                <CardContent className="pt-6 text-center">
                  <p className="text-5xl font-bold text-green-700 mb-2">92%</p>
                  <p className="text-gray-800 font-semibold">Reduction in Authorization Denials</p>
                  <p className="text-sm text-gray-600 mt-2">From 23% to 2% denial rate</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
                <CardContent className="pt-6 text-center">
                  <p className="text-5xl font-bold text-blue-700 mb-2">18hrs</p>
                  <p className="text-gray-800 font-semibold">Staff Time Saved per Week</p>
                  <p className="text-sm text-gray-600 mt-2">Equivalent to 0.5 FTE freed up</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200">
                <CardContent className="pt-6 text-center">
                  <p className="text-5xl font-bold text-purple-700 mb-2">$84K</p>
                  <p className="text-gray-800 font-semibold">Average Annual Revenue Saved</p>
                  <p className="text-sm text-gray-600 mt-2">From reduced denials and faster approvals</p>
                </CardContent>
              </Card>
            </div>

            {/* Testimonial */}
            <Card className="bg-gray-50">
              <CardContent className="pt-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-2xl">
                      LM
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg text-gray-800 mb-4 italic">
                      "Before NexClinical, we had two staff members spending 20+ hours per week on authorizations, 
                      and we were still missing denials until it was too late. Now, our denial rate is under 2%, 
                      and those two staff members focus on patient care instead. It's been transformational."
                    </p>
                    <div>
                      <p className="font-bold text-gray-900">Dr. Lisa Martinez</p>
                      <p className="text-sm text-gray-600">Medical Director, Cardiology Associates</p>
                      <p className="text-xs text-gray-500 mt-1">6-provider practice, Atlanta, GA</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
              <CardContent className="pt-12 pb-12 text-center">
                <h2 className="text-3xl font-bold font-heading mb-4">
                  Ready to Stop Losing Revenue to Authorization Issues?
                </h2>
                <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                  Authorization support is available as an add-on to any plan or as a standalone service for high-volume practices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100" asChild>
                    <a href="/contact">Schedule Free Consultation</a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                    <a href="/pricing">View Pricing Options</a>
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

      {/* Trust Signals */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-primary-600">150+</p>
                <p className="text-sm text-gray-600 mt-1">Practices Served</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600">85%+</p>
                <p className="text-sm text-gray-600 mt-1">Approval Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600">2-5</p>
                <p className="text-sm text-gray-600 mt-1">Days to Approval</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600">100%</p>
                <p className="text-sm text-gray-600 mt-1">HIPAA Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
