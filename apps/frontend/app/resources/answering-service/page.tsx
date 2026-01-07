import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "24/7 Medical Answering Service | NexClinical",
  description: "Professional 24/7 answering service for medical practices. Never miss a call. HIPAA-compliant call handling, appointment scheduling, and emergency routing.",
  openGraph: {
    title: "24/7 Medical Answering Service | NexClinical",
    description: "Professional 24/7 answering service for medical practices. HIPAA-compliant call handling available around the clock.",
  },
};

export default function AnsweringServicePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
              24/7 Medical Answering Service
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight mb-6">
              Never Miss a Call Again
            </h1>

            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Professional medical call answering available 24/7/365. HIPAA-compliant, trained operators 
              handle appointments, emergencies, and patient inquiries—so your practice never closes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100">
                Schedule a Demo →
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                View Pricing
              </Button>
            </div>

            {/* Trust Signal */}
            <div className="pt-8 text-primary-100 text-sm">
              <p className="flex items-center justify-center gap-2 flex-wrap justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Available 24/7/365
              </p>
              <p className="flex items-center justify-center gap-2 flex-wrap justify-center mt-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                100% HIPAA Compliant
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-heading mb-4">
                After-Hours Calls Are Costing You Patients
              </h2>
              <p className="text-xl text-gray-600">
                68% of patients won't leave a voicemail. They simply call your competitor.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-red-100">
                <CardHeader>
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-red-900">After-Hours Call Loss</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-red-600 mb-3">68%</p>
                  <p className="text-gray-700">
                    of patients won't leave a voicemail. They call another practice that answers.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-100">
                <CardHeader>
                  <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-orange-900">Emergency Misses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-orange-600 mb-3">Liability Risk</p>
                  <p className="text-gray-700">
                    Missed emergency calls create patient safety issues and legal exposure.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-100">
                <CardHeader>
                  <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-yellow-900">Staff Burnout</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-yellow-600 mb-3">Hours Wasted</p>
                  <p className="text-gray-700">
                    Your staff spends hours on after-hours call coverage instead of patient care.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary-100">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-primary-900">Revenue Loss</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary-600 mb-3">$12K+/year</p>
                  <p className="text-gray-700">
                    Lost revenue per provider from unanswered calls and missed appointment bookings.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-heading mb-4">
                Our 24/7 Answering Service
              </h2>
              <p className="text-xl text-gray-600">
                Trained, HIPAA-compliant operators answer every call—day, night, weekends, and holidays.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary-600">1</span>
                  </div>
                  <CardTitle>Call Answering</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Your phone is answered by a real person, not a voicemail system. Professionally trained to represent your practice.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary-600">2</span>
                  </div>
                  <CardTitle>Appointment Booking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Operators schedule appointments into your system in real-time. Reduced no-shows with automated reminders.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary-600">3</span>
                  </div>
                  <CardTitle>Emergency Routing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    True emergencies are immediately escalated to on-call physicians or sent to urgent care/ED as appropriate.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Key Features */}
            <Card className="bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200">
              <CardHeader>
                <CardTitle className="text-2xl">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    "24/7/365 call answering",
                    "HIPAA-compliant operations",
                    "Custom call scripts per your practice",
                    "Real-time appointment booking",
                    "Emergency call escalation",
                    "Detailed call logs & reports",
                    "Multi-language support available",
                    "Seamless EHR integration",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-heading mb-4">
                Results Our Clients See
              </h2>
              <p className="text-xl text-gray-600">
                Measurable improvements in patient satisfaction and revenue.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <p className="text-5xl font-bold text-primary-600 mb-2">98%</p>
                  <p className="text-gray-800 font-semibold">Call Answer Rate</p>
                  <p className="text-sm text-gray-600 mt-2">Every call is answered professionally</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <p className="text-5xl font-bold text-primary-600 mb-2">45%</p>
                  <p className="text-gray-800 font-semibold">Fewer No-Shows</p>
                  <p className="text-sm text-gray-600 mt-2">With appointment confirmation reminders</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <p className="text-5xl font-bold text-primary-600 mb-2">20+</p>
                  <p className="text-gray-800 font-semibold">Hours/Month Saved</p>
                  <p className="text-sm text-gray-600 mt-2">Your staff doesn't manage after-hours calls</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <p className="text-5xl font-bold text-primary-600 mb-2">$18K+</p>
                  <p className="text-gray-800 font-semibold">Annual Revenue Gain</p>
                  <p className="text-sm text-gray-600 mt-2">From recovered missed calls & bookings</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
              <CardContent className="pt-12 pb-12 text-center">
                <h2 className="text-3xl font-bold font-heading mb-4">
                  Ready to Never Miss Another Call?
                </h2>
                <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                  Professional 24/7 answering service starts at just $199/month. 
                  No setup fees. Cancel anytime.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100" asChild>
                    <a href="/contact">Schedule Demo</a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                    <a href="/pricing">View Pricing</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
