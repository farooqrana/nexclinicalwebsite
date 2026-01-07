import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Testimonials } from "@/components/sections/testimonials";
import { Stats } from "@/components/sections/stats";
import { HowItWorks } from "@/components/sections/how-it-works";
import { CTASection } from "@/components/sections/cta-section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from "lucide-react";
import Image from "next/image";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Clean White with Left/Right Split */}
      <section className="bg-gradient-to-br from-blue-50 via-primary-50 to-blue-100 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-primary-600 leading-tight">
                Virtual Medical Support For Small Practices
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Have insurance authorizations, patient scheduling, & clinical notes handled. Reduce the admin chaos to focus on patient care.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
                <Button size="lg" className="bg-primary-600 text-white hover:bg-primary-700 shadow-lg" asChild>
                  <a href="https://calendly.com/nexclinical/15min">Book Consultation →</a>
                </Button>
                <a href="/pricing" className="text-primary-600 font-semibold text-lg underline hover:text-primary-700 mt-4">
                  Get Pricing
                </a>
              </div>
              <p className="text-gray-700 text-sm">
                Trusted by 150+ medical practices • HIPAA compliant • 7-day setup
              </p>
            </div>

            {/* Right: Hero Illustration */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/hero-illustration.svg"
                  alt="Medical team managing scheduling and patient care"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - 4 Column Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">150+</div>
              <p className="text-gray-700 font-semibold mb-1">Practices Served</p>
              <p className="text-gray-600 text-sm">Across the U.S.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">40%</div>
              <p className="text-gray-700 font-semibold mb-1">No-Show Reduction</p>
              <p className="text-gray-600 text-sm">Average improvement</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">&lt;1%</div>
              <p className="text-gray-700 font-semibold mb-1">Denial Rate</p>
              <p className="text-gray-600 text-sm">Insurance denials</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">20+hrs</div>
              <p className="text-gray-700 font-semibold mb-1">Saved per Week</p>
              <p className="text-gray-600 text-sm">Admin work reduced</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - 3 Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gray-900">
                Run Your Practice, Not Your Paperwork
              </h2>
              <p className="text-xl text-gray-600">
                Practices lose hours every day to scheduling chaos, insurance work & clinical notes. We take those tasks off your plate with dedicated, full-time support.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-md hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Never Miss a Patient Call</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 text-lg">
                    We handle all your incoming calls, patient reminders, and scheduling. Keep your front desk organized and your schedule full.
                  </p>
                  <a href="/services" className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center">
                    Learn more →
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Faster Approvals, Fewer Delays</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 text-lg">
                    Prior auths, benefits verification & eligibility checks completed before the patient arrives. No more surprise denials.
                  </p>
                  <a href="/services" className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center">
                    Learn more →
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Enhanced Clinical Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 text-lg">
                    Leave by 5pm. Have your EHR charting, prescription refills & patient follow-ups handled with dedicated medical assistance.
                  </p>
                  <a href="/services" className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center">
                    Learn more →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Streamline Section - Illustration Left, Checklist Right */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gray-900">
                Streamline Your Backend Office
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Save 20+ hours a week and improve your practice's workflow. No more call delays, late authorizations & disorganized clinical work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left: Illustration */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-primary-50 rounded-2xl p-12 border-2 border-primary-100">
                  {/* Medical professional illustration placeholder */}
                  <div className="flex items-center gap-6">
                    {/* Left: Medical professional */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 bg-white rounded-full border-4 border-primary-200 flex items-center justify-center shadow-lg">
                        <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                    {/* Right: Clipboard/checklist */}
                    <div className="flex-1">
                      <div className="bg-white rounded-xl p-6 shadow-xl border border-primary-200">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 bg-primary-600 rounded"></div>
                            <div className="h-2 bg-gray-200 rounded flex-1"></div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 bg-primary-600 rounded"></div>
                            <div className="h-2 bg-gray-200 rounded flex-1"></div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 bg-primary-600 rounded"></div>
                            <div className="h-2 bg-gray-200 rounded flex-1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Checklist */}
              <div className="space-y-5">
                {[
                  "Same Day Prior-Authorizations & Eligibility Checks",
                  "Front-Desk & Scheduling Optimization",
                  "Reduce Patient No-Show Rate By 40%",
                  "Get Insurance Denial Rates Down To <1%",
                  "Organized EHR Notes, & Provider Assistance",
                  "Experienced Healthcare Support Team",
                  "No Long-Term Contracts. Transparent Pricing."
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 font-medium text-lg">{benefit}</p>
                  </div>
                ))}
                <div className="pt-6">
                  <Button size="lg" className="bg-primary-600 text-white hover:bg-primary-700" asChild>
                    <a href="https://calendly.com/nexclinical/15min">Get Free Consultation</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Section - Before/After */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gray-900">
                Transform Your Practice With Insurance & Admin Support
              </h2>
              <p className="text-xl text-gray-600">
                Run your practice more efficiently without the additional cost & headaches
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-md bg-red-50">
                <CardHeader className="bg-red-100 rounded-t-lg">
                  <CardTitle className="text-3xl text-center text-red-700">Before NexClinical</CardTitle>
                </CardHeader>
                <CardContent className="pt-8">
                  <ul className="space-y-4">
                    {[
                      "Delayed calls, lost patients",
                      "High patient no-show rates",
                      "Late prior authorizations & payments",
                      "Hours spent on clinical admin work",
                      "Burnt out staff & high turnover",
                      "High overhead & benefits costs",
                      "No visibility into admin workload"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-red-600 font-bold text-lg mt-0.5">✗</span>
                        <span className="text-gray-700 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md bg-green-50">
                <CardHeader className="bg-green-100 rounded-t-lg">
                  <CardTitle className="text-3xl text-center text-green-700">Why NexClinical</CardTitle>
                </CardHeader>
                <CardContent className="pt-8">
                  <ul className="space-y-4">
                    {[
                      "Calls answered and appointments booked",
                      "Reduced no-show rates by 40%",
                      "Same-day prior auth + active tracking",
                      "Organized notes, paient care handled",
                      "Less stress on staff & stable support",
                      "One simple monthly reduced cost",
                      "Monthly clear intellegience reporting"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gray-900">
                Trusted By Practices Across the U.S
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Primary Care – Scheduling Chaos",
                  quote: "Our phones were ringing nonstop, and patients were getting voicemail or waiting on hold. We were constantly double-booking or missing appointments. NexClinical took over scheduling, cleaned up the calendar, and made sure calls were actually answered. It immediately reduced the daily stress in the office.",
                  author: "Dr. Rebecca S",
                  subtitle: "Primary Care Practice",
                  rating: 5,
                },
                {
                  title: "Physical Therapy – Missed Calls & Lost Visits",
                  quote: "We didn't realize how many appointments we were losing just because calls weren't being picked up. NexClinical stepped in, handled scheduling consistently, and followed up with patients. Our schedule is fuller now, and things don't fall through the cracks anymore.",
                  author: "Thomas M",
                  subtitle: "Physical Therapy Practice",
                  rating: 5,
                },
                {
                  title: "Dental Practice – Front Desk Overload",
                  quote: "Our front desk was juggling patients at the counter, phones, and insurance checks all at once. Scheduling always fell behind. NexClinical took that responsibility off our team, and everything runs smoother. Patients get booked faster and the staff isn't overwhelmed.",
                  author: "Sarah L",
                  subtitle: "Dental Office",
                  rating: 5,
                },
                {
                  title: "Psychiatry – Prior Authorization Delays",
                  quote: "Prior authorizations were slowing everything down. We had approvals sitting for days because no one had time to follow up. NexClinical took over the process, tracked each request, and stayed on the insurance companies. Approvals are coming through faster and patients aren't stuck waiting.",
                  author: "Dr. Ahmed",
                  subtitle: "Psychiatry Practice",
                  rating: 5,
                },
                {
                  title: "Internal Medicine – Insurance Follow-Ups",
                  quote: "Insurance work used to pile up quickly. We'd submit authorizations but didn't always have time to chase them. NexClinical brought structure to the whole process. Now we know what's pending, what's approved, and nothing gets lost.",
                  author: "Jennifer R",
                  subtitle: "Internal Medicine",
                  rating: 5,
                },
                {
                  title: "Multi-Provider Clinic – Insurance Bottlenecks",
                  quote: "Authorization delays were creating a backlog that affected patient care and scheduling. NexClinical stepped in and handled the insurance side consistently. It's taken a huge burden off our internal team and helped us move patients through faster.",
                  author: "Dr. Michael H",
                  subtitle: "Multi-Provider Clinic",
                  rating: 5,
                },
                {
                  title: "Primary Care Practice / Specialty Clinic",
                  quote: "Having clinical notes handled during or right after visits completely changed my workflow. Documentation is accurate, timely, and aligned with my EHR. I finally leave the office on time without worrying about unfinished charts.",
                  author: "Kate Winslet",
                  subtitle: "Primary Care Physician",
                  rating: 5,
                },
                {
                  title: "Primary Care Practice / Specialty Clinic",
                  quote: "The e-scribe support integrates smoothly with our EHR and follows our templates and clinical style. Notes are clean, detailed, and compliant, which has helped reduce back-and-forth corrections and coding issues.",
                  author: "Jack",
                  subtitle: "Practice Administrator, Multi-Provider Clinic",
                  rating: 5,
                },
                {
                  title: "Primary Care Practice / Specialty Clinic",
                  quote: "Having dedicated clinical note support has been a game changer as we've grown. Providers stay engaged during visits, charts are completed faster, and overall efficiency across the practice has improved without adding in-house staff.",
                  author: "Wesley",
                  subtitle: "Operations Manager, Specialty Practice",
                  rating: 5,
                },
              ].map((testimonial, idx) => (
                <Card key={idx} className="bg-white border-0 shadow-md hover:shadow-xl transition-shadow">
                  <CardContent className="pt-8">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3">{testimonial.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.quote}</p>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-gray-600 text-sm">{testimonial.subtitle}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Practice Workflow - 4 Steps Horizontal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gray-900">
                Seamless Practice Workflow
              </h2>
              <p className="text-xl text-gray-600">
                Get up and running in less than 7 days hassle-free
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Consultation",
                  description: "We review your current operations and give you our recommendations.",
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  number: "02",
                  title: "Onboarding",
                  description: "We integrate with your EHR, scheduling tools, and insurance portals.",
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )
                },
                {
                  number: "03",
                  title: "Go Live",
                  description: "Your dedicated team starts handling the admin work, freeing up your time.",
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )
                },
                {
                  number: "04",
                  title: "Ongoing Support",
                  description: "Continuous optimization, proactive support & clear reporting.",
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  )
                }
              ].map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-24 h-24 bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-center text-primary-600 mb-3">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-base">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-12 text-gray-900">
              We Work With Small Practices of Various Specialties
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Primary Care",
                "Psychiatry",
                "Behavioral Health",
                "Internal Medicine",
                "Physical Therapy",
                "Cardiology",
                "Dermatology",
                "Pediatrics",
                "OB/GYN",
                "Orthopedics"
              ].map((specialty) => (
                <span
                  key={specialty}
                  className="px-6 py-3 bg-primary-100 text-primary-700 rounded-full font-semibold hover:bg-primary-200 transition-colors text-lg"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gray-900">Commonly Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "How is NexClinical different from a call center or virtual assistant service?",
                  a: "NexClinical is not a call center and not task-based virtual assistants. We provide dedicated, full-time operational support focused specifically on patient scheduling and insurance authorizations. Your NexClinical team works inside your existing systems, follows your workflows, and handles daily workload as an extension of your practice — not shared agents switching between dozens of offices."
                },
                {
                  q: "Is this full-time support, or hourly coverage?",
                  a: "We provide dedicated full-time support during your practice hours. Your team member(s) work exclusively for your practice, not rotating between multiple clients. This ensures they know your patients, protocols, and systems intimately."
                },
                {
                  q: "What exactly do you handle for patient scheduling?",
                  a: "We handle all aspects of patient scheduling: answering incoming calls, booking appointments, sending automated reminders (via text/email/phone), managing cancellations and reschedules, maintaining your calendar, and conducting proactive follow-ups with patients who need to schedule."
                },
                {
                  q: "How do you handle insurance authorizations and delays?",
                  a: "Our authorization specialists submit prior auth requests, verify benefits and eligibility, track pending authorizations, follow up with insurance companies proactively, handle appeals when needed, and provide you with regular status updates. We achieve same-day turnaround for most authorizations."
                },
                {
                  q: "Will patients or insurance companies know this is outsourced?",
                  a: "No. Your NexClinical team operates as part of your practice. They use your practice name, follow your protocols, and represent your office professionally. To patients and insurance companies, they are simply your staff."
                },
                {
                  q: "How quickly will we actually see an improvement?",
                  a: "Most practices see immediate improvements in call response times and scheduling within the first week. For authorizations, you'll see faster turnaround times within 2-3 weeks as our team learns your specific requirements. Full optimization typically occurs within 30-45 days."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 text-lg mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="/faqs" className="text-primary-600 font-semibold text-lg hover:underline">
                ALL FAQ →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
