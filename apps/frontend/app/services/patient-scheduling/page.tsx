import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Patient Scheduling Services - Never Miss a Call | NexClinical",
  description: "Professional patient scheduling and call handling for medical practices. Reduce no-shows by 40%, keep your schedule full, and never miss a patient call again.",
  openGraph: {
    title: "Patient Scheduling Services - Never Miss a Call | NexClinical",
    description: "Professional patient scheduling and call handling for medical practices. Reduce no-shows by 40%, keep your schedule full, and never miss a patient call again.",
  },
};

export default function PatientSchedulingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Clear Value Proposition */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
              Patient Scheduling & Call Handling
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight">
              Never Miss a Patient Call Again
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-50 max-w-3xl mx-auto leading-relaxed">
              Professional call handling and scheduling that keeps your front desk organized, 
              your schedule full, and your patients happy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100">
                Book Free Consultation →
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                View Pricing
              </Button>
            </div>

            {/* Trust Signal */}
            <div className="pt-8 text-primary-100 text-sm">
              <p className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Trusted by 150+ medical practices across the U.S.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Agitation - Pain Points */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
              Stop Losing Patients to <span className="text-red-600">Missed Calls</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "📞",
                  stat: "67%",
                  problem: "Patients won't leave voicemail",
                  impact: "They call your competitor instead"
                },
                {
                  icon: "⏰",
                  stat: "40%",
                  problem: "Average no-show rate without reminders",
                  impact: "Lost revenue every single day"
                },
                {
                  icon: "😰",
                  stat: "3+ hours",
                  problem: "Daily time spent on phone & scheduling",
                  impact: "Staff burnout and inefficiency"
                }
              ].map((item, index) => (
                <Card key={index} className="text-center border-2 border-red-100 bg-white">
                  <CardHeader>
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <CardTitle className="text-4xl font-bold text-red-600 mb-2">
                      {item.stat}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-gray-900">
                      {item.problem}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.impact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution - How We Help */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                How We Keep Your Schedule Full
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dedicated, HIPAA-trained scheduling specialists who work inside your systems—
                not a call center, not a voicemail service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold font-heading mb-6">
                  Professional Call Handling
                </h3>
                <ul className="space-y-4">
                  {[
                    "Answer every call in your practice name",
                    "Real-time access to your calendar",
                    "Book appointments while patient is on the phone",
                    "Handle cancellations and reschedules immediately",
                    "Warm, professional tone that represents your brand",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-lg text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary-50 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Call Answered</p>
                      <p className="text-sm text-gray-600">Within 3 rings</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "Thank you for calling [Your Practice]. This is Sarah, how can I help you today?"
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary-700 font-semibold">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Appointment booked in real-time
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gray-50 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-primary-600">
                    <p className="text-sm text-gray-600 mb-1">Tomorrow 9:00 AM</p>
                    <p className="font-semibold">Dr. Smith - Annual Checkup</p>
                    <p className="text-sm text-green-600 mt-2">✓ Reminder sent</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                    <p className="text-sm text-gray-600 mb-1">Pending Confirmation</p>
                    <p className="font-semibold">Follow-up needed</p>
                    <p className="text-sm text-yellow-600 mt-2">⚠ Call scheduled</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-600">
                    <p className="text-sm text-gray-600 mb-1">This Week</p>
                    <p className="font-semibold">85% Schedule Fill Rate</p>
                    <p className="text-sm text-green-600 mt-2">↑ 23% vs last month</p>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold font-heading mb-6">
                  Proactive Patient Reminders
                </h3>
                <ul className="space-y-4">
                  {[
                    "Automated reminders 48h and 24h before appointments",
                    "SMS and phone call options based on patient preference",
                    "Confirmation tracking and follow-up for non-responders",
                    "Reschedule immediately if patient can't make it",
                    "Fill cancelled slots from your waitlist automatically",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-lg text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results - Social Proof */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Real Results from Real Practices
            </h2>
            <p className="text-xl text-gray-300 mb-16">
              Practices see immediate improvements in patient satisfaction and schedule optimization
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { stat: "40%", label: "Reduction in no-shows", sublabel: "Average across all practices" },
                { stat: "95%+", label: "Calls answered", sublabel: "No more missed opportunities" },
                { stat: "20+ hrs", label: "Saved per week", sublabel: "Staff can focus on patient care" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-primary-400 mb-2">
                    {item.stat}
                  </div>
                  <div className="text-xl font-semibold mb-1">{item.label}</div>
                  <div className="text-gray-400">{item.sublabel}</div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <Card className="bg-white/10 border-white/20 text-left max-w-3xl mx-auto">
              <CardContent className="pt-6">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg text-gray-100 mb-6">
                  "We were constantly missing calls and dealing with scheduling chaos. NexClinical completely
                  transformed our front desk operations. Our no-show rate dropped from 35% to under 15%, and 
                  patients actually comment on how professional and responsive we are now."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-xl font-bold">
                    RS
                  </div>
                  <div>
                    <p className="font-semibold text-white">Dr. Rebecca S.</p>
                    <p className="text-gray-400">Primary Care Practice, New York</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Clear Next Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Ready to Stop Missing Patient Calls?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a free consultation to see how we can optimize your scheduling and 
              keep your calendar full—with no long-term contracts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                Schedule Free Consultation →
              </Button>
              <Button size="lg" variant="outline">
                View Pricing Plans
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { icon: "⚡", title: "Fast Setup", desc: "Up and running in 7 days" },
                { icon: "🔒", title: "HIPAA Compliant", desc: "Fully trained and secure" },
                { icon: "💰", title: "Transparent Pricing", desc: "No hidden fees or contracts" },
              ].map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
