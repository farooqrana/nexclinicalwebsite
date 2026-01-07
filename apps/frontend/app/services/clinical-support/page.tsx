import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Clinical Note Support & Medical Scribe Services (E-scribe) | NexClinical",
  description: "Professional medical scribe services (E-scribe) for physicians. Reduce charting time, improve documentation quality, and prevent burnout.",
  openGraph: {
    title: "Clinical Note Support & Medical Scribe Services (E-scribe) | NexClinical",
    description: "Professional medical scribe services. Reduce charting time and improve documentation quality.",
  },
};

export default function ClinicalSupportPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary-500/30 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Clinical Note Support (E-scribe)
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              Reclaim Your Evenings. Let Us Handle the Notes.
            </h1>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Professional medical scribes document patient encounters in real-time—so you can focus on your patients, 
              not your keyboard. Say goodbye to after-hours charting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100" asChild>
                <a href="/contact">Book Free Demo</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="/pricing">View Pricing</a>
              </Button>
            </div>
            <p className="text-primary-100 text-sm mt-6">
              Trusted by 80+ physicians • HIPAA compliant • 2-3 minute review time per note
            </p>
          </div>
        </div>
      </section>

      {/* The Problem: Physician Burnout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-heading mb-4">
                Charting Is Stealing Your Life
              </h2>
              <p className="text-xl text-gray-600">
                Electronic health records were supposed to make your life easier. Instead, they're burning you out.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-red-100">
                <CardHeader>
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                  <CardTitle className="text-red-900">After-Hours Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-red-600 mb-3">2+ hours/night</p>
                  <p className="text-gray-700">
                    The average physician spends 2-3 hours after work finishing notes. That's 10-15 hours per week—
                    time stolen from your family, hobbies, and rest.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-100">
                <CardHeader>
                  <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-orange-900">Burnout & Satisfaction Crisis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-orange-600 mb-3">54%</p>
                  <p className="text-gray-700">
                    of physicians report burnout, with EHR documentation cited as a top contributor. 
                    You didn't go to medical school to become a data entry clerk.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-100">
                <CardHeader>
                  <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <CardTitle className="text-yellow-900">Divided Attention</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-yellow-600 mb-3">52%</p>
                  <p className="text-gray-700">
                    of visit time is spent looking at the computer screen instead of the patient. 
                    This hurts rapport, trust, and diagnostic accuracy.
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
                  <CardTitle className="text-primary-900">Revenue Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary-600 mb-3">$64K/year</p>
                  <p className="text-gray-700">
                    Average lost revenue per physician due to documentation inefficiency and burnout-related 
                    productivity decline. You could see more patients if documentation weren't the bottleneck.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Physician testimonial about burnout */}
            <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-red-500">
              <p className="text-lg text-gray-800 italic">
                <span className="font-bold text-red-600">
                  "I was seriously considering leaving medicine. I'd finish a full clinic day and then spend 3 hours at night charting. 
                  My kids went to bed before I was done. I felt like a zombie."
                </span>
                <br />
                <span className="text-gray-600 text-base not-italic mt-2 block">
                  — Primary Care Physician (now using E-scribe services)
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution: How E-scribe Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-heading mb-4">
                How Our E-Scribe Service Works
              </h2>
              <p className="text-xl text-gray-600">
                A dedicated medical scribe joins your patient encounters and handles documentation—just like an in-person scribe, 
                but more flexible and affordable.
              </p>
            </div>

            <div className="space-y-8">
              {/* In-Person Visits */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <CardTitle>For In-Person Office Visits</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Scribe Joins Via Secure Video/Audio</p>
                        <p className="text-gray-700 text-sm">
                          Place a laptop or tablet in your exam room with a secure video link. Your dedicated scribe listens 
                          to the patient encounter (with patient consent) and takes notes in real-time.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Real-Time Documentation</p>
                        <p className="text-gray-700 text-sm">
                          The scribe captures chief complaint, HPI, physical exam findings, assessment, and plan in your 
                          preferred format (SOAP, problem-oriented, or specialty-specific template).
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        3
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Note Ready for Review</p>
                        <p className="text-gray-700 text-sm">
                          By the time you finish the visit, the note is 90-95% complete and entered into your EHR. 
                          You spend 2-3 minutes reviewing and signing—not 10-15 minutes creating from scratch.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Telehealth Visits */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <CardTitle>For Telehealth/Virtual Visits</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Scribe Joins Your Video Call</p>
                        <p className="text-gray-700 text-sm">
                          Your scribe joins your Zoom, Doxy.me, or other platform as a silent participant (with patient consent). 
                          Completely HIPAA-compliant and seamless.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Listen & Document</p>
                        <p className="text-gray-700 text-sm">
                          The scribe documents the encounter in real-time, handling all the typing while you focus 100% on the patient conversation.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        3
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Note Delivered Instantly</p>
                        <p className="text-gray-700 text-sm">
                          Note is ready immediately after the visit ends. Perfect for high-volume telehealth practices.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hybrid Model */}
              <Card className="bg-primary-50 border-2 border-primary-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <CardTitle>Flexible Hybrid Options</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    You can also use our service for:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Post-visit documentation (scribe reviews recordings and creates notes)",
                      "Specific visit types only (e.g., new patients, complex cases)",
                      "Overflow support (when you're behind on charts)",
                      "Dictation transcription (you dictate, we transcribe and structure)",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* What We Document */}
            <Card className="mt-12">
              <CardHeader>
                <CardTitle>What We Document</CardTitle>
                <p className="text-gray-600">
                  Our scribes are trained to handle all clinical documentation elements:
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  {[
                    "Chief Complaint & HPI (History of Present Illness)",
                    "Review of Systems (ROS)",
                    "Past Medical/Surgical/Family/Social History",
                    "Medications & Allergies",
                    "Physical Exam Findings",
                    "Assessment & Differential Diagnosis",
                    "Treatment Plan & Orders",
                    "Patient Education & Instructions",
                    "Follow-up Plans",
                    "Time-based billing documentation (99213, 99214, etc.)",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results: Time Saved */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-heading mb-4">
                Real Results: Time & Life Reclaimed
              </h2>
              <p className="text-xl text-gray-600">
                See how physicians are using E-scribe services to reclaim their evenings and rediscover why they love medicine.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
                <CardContent className="pt-6 text-center">
                  <p className="text-5xl font-bold text-blue-700 mb-2">85%</p>
                  <p className="text-gray-800 font-semibold">Reduction in After-Hours Charting</p>
                  <p className="text-sm text-gray-600 mt-2">From 2+ hours to 15-20 minutes per day</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
                <CardContent className="pt-6 text-center">
                  <p className="text-5xl font-bold text-green-700 mb-2">12hrs</p>
                  <p className="text-gray-800 font-semibold">Personal Time Saved per Week</p>
                  <p className="text-sm text-gray-600 mt-2">Time for family, hobbies, and rest</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200">
                <CardContent className="pt-6 text-center">
                  <p className="text-5xl font-bold text-primary-700 mb-2">94%</p>
                  <p className="text-gray-800 font-semibold">Physician Satisfaction Rate</p>
                  <p className="text-sm text-gray-600 mt-2">"Would recommend to colleagues"</p>
                </CardContent>
              </Card>
            </div>

            {/* Testimonials */}
            <div className="space-y-6">
              <Card className="bg-gray-50">
                <CardContent className="pt-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-2xl">
                        MK
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
                        "I got my life back. I now finish charting by 5:30pm instead of 9pm. I coach my daughter's soccer team again. 
                        And honestly, my notes are better—more detailed and better organized than when I rushed through them at night."
                      </p>
                      <div>
                        <p className="font-bold text-gray-900">Dr. Maria Kostas</p>
                        <p className="text-sm text-gray-600">Family Medicine, Portland, OR</p>
                        <p className="text-xs text-gray-500 mt-1">Solo practitioner, 20-25 patients/day</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="pt-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-2xl">
                        JP
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
                        "The ROI is obvious. I pay $695/month and save 12 hours per week. If I value my time at even $100/hour 
                        (way below my actual hourly rate), that's $4,800/month in value. Plus, I can actually look my patients 
                        in the eye during visits instead of typing."
                      </p>
                      <div>
                        <p className="font-bold text-gray-900">Dr. James Park</p>
                        <p className="text-sm text-gray-600">Psychiatry, San Francisco, CA</p>
                        <p className="text-xs text-gray-500 mt-1">Telehealth-focused practice</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
                  Ready to Reclaim Your Evenings?
                </h2>
                <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                  Clinical note support (E-scribe) starts at just $695/month for up to 40 patient encounters. 
                  More affordable than hiring an in-person scribe, with greater flexibility.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100" asChild>
                    <a href="/contact">Schedule Free Demo</a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                    <a href="/pricing">View Pricing Details</a>
                  </Button>
                </div>
                <p className="text-primary-200 text-sm mt-6">
                  Try it for 60 days risk-free • No setup fees • Cancel anytime
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
                <p className="text-3xl font-bold text-primary-600">80+</p>
                <p className="text-sm text-gray-600 mt-1">Physicians Served</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600">2-3min</p>
                <p className="text-sm text-gray-600 mt-1">Review Time per Note</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600">12hrs</p>
                <p className="text-sm text-gray-600 mt-1">Saved per Week</p>
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
