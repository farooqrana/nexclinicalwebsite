import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | NexClinical",
  description: "Find answers to common questions about NexClinical's patient scheduling, authorization services, pricing, and implementation process.",
  openGraph: {
    title: "Frequently Asked Questions | NexClinical",
    description: "Find answers to common questions about NexClinical's services, pricing, and implementation.",
  },
};

// FAQ data structure for easy maintenance and CMS migration
const faqCategories = [
  {
    category: "General",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    questions: [
      {
        q: "What is NexClinical?",
        a: "NexClinical is a healthcare operations support company that provides remote medical assistants, patient scheduling, prior authorization, and clinical documentation services to small and mid-sized medical practices. We act as an extension of your team, handling time-consuming administrative tasks so you can focus on patient care."
      },
      {
        q: "What types of medical practices do you work with?",
        a: "We work with a wide range of specialties including primary care, internal medicine, pediatrics, psychiatry, behavioral health, cardiology, dermatology, physical therapy, and dental practices. Our services are customized to fit your specialty's specific needs and workflows."
      },
      {
        q: "How is NexClinical different from other medical virtual assistant companies?",
        a: "Unlike generic VAs, our team members are specifically trained in healthcare operations and HIPAA compliance. We integrate directly with your EHR system, follow your clinical protocols, and provide dedicated support rather than shared resources. Plus, we're based in the U.S. and operate during your practice hours."
      },
      {
        q: "Are you HIPAA compliant?",
        a: "Absolutely. All team members complete comprehensive HIPAA training and certification. We sign Business Associate Agreements (BAAs) with every client, use encrypted communication channels, and follow strict data security protocols. We take patient privacy as seriously as you do."
      },
      {
        q: "Do you work with my EHR system?",
        a: "Yes! We integrate with all major EHR platforms including Epic, Cerner, Athenahealth, eClinicalWorks, Kareo, DrChrono, NextGen, Practice Fusion, and many others. If you use a less common system, we'll work with you to establish a seamless workflow."
      },
    ]
  },
  {
    category: "Patient Scheduling & Call Handling",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    questions: [
      {
        q: "How do you answer calls for my practice?",
        a: "Our team answers in your practice's name, following your specific greeting and protocols. We have real-time access to your schedule and can book, reschedule, or cancel appointments immediately. Non-urgent clinical questions are documented and routed to your clinical staff according to your triage protocols."
      },
      {
        q: "What happens to calls after hours or on weekends?",
        a: "Standard service includes coverage during your practice hours (typically M-F, 8am-5pm). We offer 24/7 answering as an optional add-on for $495/month. After-hours calls can be handled via voicemail transcription, emergency protocols, or live answering depending on your preference."
      },
      {
        q: "Can you handle appointment reminders and confirmations?",
        a: "Yes! We send automated appointment reminders via text and email 48 hours and 24 hours before appointments. We also make confirmation calls for patients who haven't responded. This proactive approach has reduced no-show rates by an average of 40% for our clients."
      },
      {
        q: "What if a patient has an urgent medical question?",
        a: "We follow your established triage protocols. Urgent matters are immediately escalated to your on-call provider or clinical staff via your preferred method (phone, secure message, pager). We never provide medical advice—only properly trained clinical staff at your practice do."
      },
      {
        q: "How many calls can you handle per month?",
        a: "Our Essential plan includes up to 200 calls/month, Professional handles 500 calls/month, and Enterprise is customized for higher volumes. A 'call' is any inbound phone interaction—whether it's scheduling, canceling, or answering questions. We track this monthly and notify you if you're approaching your limit."
      },
    ]
  },
  {
    category: "Prior Authorization & Verification",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    questions: [
      {
        q: "What prior authorizations do you handle?",
        a: "We handle prior authorizations for medications, procedures, imaging (MRI, CT, PET), durable medical equipment (DME), specialty referrals, and more. We work with commercial payers (Aetna, UHC, BCBS, Cigna, etc.) as well as Medicare and Medicaid plans."
      },
      {
        q: "How long does the authorization process take?",
        a: "Most authorizations are completed within 2-5 business days, depending on the payer. Urgent requests can often be expedited within 24-48 hours. We monitor each authorization daily and proactively follow up with payers to prevent delays. You'll receive real-time status updates via your EHR or our portal."
      },
      {
        q: "What if an authorization is denied?",
        a: "We don't give up easily. If a request is denied, we immediately review the denial reason, gather any additional clinical documentation needed, and file a peer-to-peer appeal or reconsideration. Our approval rate after initial denials is over 60% because we're persistent and thorough."
      },
      {
        q: "Do you verify insurance eligibility and benefits?",
        a: "Yes! We verify patient eligibility and benefits before appointments, confirming active coverage, copay amounts, deductibles, and any authorization requirements for planned services. This prevents surprise denials and helps your front desk collect accurate copays."
      },
      {
        q: "How much does authorization support cost?",
        a: "Authorization & verification is typically added as a service to your existing plan, charged at $45-65 per authorization depending on complexity. For high-volume practices (10+ auths/week), we offer dedicated authorization packages starting at $1,295/month for up to 50 authorizations."
      },
    ]
  },
  {
    category: "Clinical Note Support (E-scribe)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    questions: [
      {
        q: "What is clinical note support (E-scribe)?",
        a: "E-scribe is a service where our HIPAA-trained medical scribes listen to your patient encounters (in-person or telehealth) and create detailed clinical notes in real-time or shortly after the visit. This significantly reduces after-hours charting time and improves documentation quality."
      },
      {
        q: "How does the scribe access my patient encounters?",
        a: "For in-person visits, scribes can join via secure video link (laptop in exam room) or phone. For telehealth visits, they join your Zoom/Doxy.me/etc. call as a silent participant with patient consent. Notes are entered directly into your EHR or provided as a draft for your review and signature."
      },
      {
        q: "Do I need to review and edit the notes?",
        a: "Yes. While our scribes are highly trained, you (the provider) are ultimately responsible for the medical documentation. Notes are provided in draft form for your review, approval, and signature. Most providers spend 2-3 minutes reviewing each note versus 10-15 minutes creating from scratch."
      },
      {
        q: "What if I have a specific note template or workflow?",
        a: "No problem! We train our scribes on your specific templates, documentation preferences, and clinical workflows. Whether you use problem-oriented notes, SOAP format, or specialty-specific templates, we adapt to your style—you don't adapt to ours."
      },
      {
        q: "How much does E-scribe cost?",
        a: "Clinical note support starts at $695/month for up to 40 patient encounters (approximately 10 hours of scribe time). Additional encounters are billed at $16-20 per encounter depending on complexity and volume. This is significantly more affordable than hiring a dedicated in-person scribe."
      },
    ]
  },
  {
    category: "Pricing & Billing",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    questions: [
      {
        q: "What are your pricing plans?",
        a: "We offer three main plans: Essential ($1,495/mo for scheduling + 200 calls), Professional ($2,495/mo for scheduling + authorization + 500 calls), and Enterprise (custom pricing for larger practices). Each plan is month-to-month with no long-term contract required. See our pricing page for detailed feature comparisons."
      },
      {
        q: "Are there any setup fees or hidden costs?",
        a: "No setup fees, no hidden costs, no surprises. The monthly price you see is what you pay. Add-on services like 24/7 answering, clinical note support, and revenue cycle management are optional and clearly priced separately. We believe in transparent pricing."
      },
      {
        q: "Do you require a long-term contract?",
        a: "No. All plans are month-to-month and can be canceled anytime with 30 days' notice. We earn your business every month by delivering excellent service—not by locking you into a multi-year contract."
      },
      {
        q: "What happens if I exceed my monthly call limit?",
        a: "If you approach your plan's call limit, we'll notify you proactively. You can either upgrade to the next tier or purchase additional call blocks at $0.50/call. We never shut off service mid-month—we work with you to find the right solution."
      },
      {
        q: "Do you offer discounts for multi-location practices?",
        a: "Yes! Practices with 2+ locations or 7+ providers qualify for our Enterprise plan with volume discounts. Contact us for a custom quote tailored to your organization's needs."
      },
      {
        q: "What's your refund policy?",
        a: "We offer a 60-day satisfaction guarantee. If you're not completely satisfied within the first 60 days, we'll refund your payment—no questions asked. We're confident you'll see the value, but we want you to feel secure in your decision."
      },
    ]
  },
  {
    category: "Implementation & Onboarding",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    questions: [
      {
        q: "How long does it take to get started?",
        a: "Most practices are fully operational within 7 business days. This includes EHR integration, team training on your protocols, phone system setup (if applicable), and a soft launch period. Simpler setups (scheduling only, EHR we know well) can go live in as little as 3-4 days."
      },
      {
        q: "What information do you need from me to get started?",
        a: "We'll need EHR access (view/edit permissions), your scheduling protocols and policies (cancellation, same-day appointments, etc.), call handling scripts, insurance contracts (for authorization), and a point of contact at your practice for questions during setup. We provide a detailed onboarding checklist to make this easy."
      },
      {
        q: "Will this disrupt my practice operations?",
        a: "Minimal disruption. Most setup happens behind the scenes. We typically start with a soft launch where we handle calls alongside your existing staff for 2-3 days to ensure everything runs smoothly before you transition fully. You stay in control of the rollout pace."
      },
      {
        q: "Do I need to change my phone number?",
        a: "Not necessarily. We can set up call forwarding from your existing number(s), use a VoIP integration, or provide a new dedicated line—whatever works best for your workflow. Most practices simply forward their main line to us during implementation."
      },
      {
        q: "What training do your team members receive?",
        a: "All team members complete: (1) HIPAA compliance training, (2) EHR-specific training (we're certified on major platforms), (3) medical terminology and healthcare workflows, and (4) practice-specific training on your protocols, preferences, and culture. Ongoing training happens quarterly."
      },
      {
        q: "Who will be my main point of contact?",
        a: "You'll have a dedicated Account Manager who oversees your account and serves as your primary contact for questions, escalations, or service adjustments. You'll also have direct access to our support team via phone, email, or Slack (your choice)."
      },
    ]
  },
  {
    category: "Technology & Security",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    questions: [
      {
        q: "How do you keep patient data secure?",
        a: "We use enterprise-grade security: encrypted communications (TLS 1.3), secure VPN access to EHRs, multi-factor authentication, role-based access controls, regular security audits, and signed BAAs with all clients and vendors. All team members work from secure workstations with no data stored locally."
      },
      {
        q: "Where are your team members located?",
        a: "Our team is based in the United States and works during U.S. business hours. This ensures clear communication with patients, understanding of U.S. healthcare regulations, and real-time availability during your practice hours."
      },
      {
        q: "What happens if your system goes down?",
        a: "We have 99.9% uptime SLA with redundant systems and backup protocols. In the rare event of a system outage, calls automatically route to backup team members via mobile, and we can access your EHR through alternative secure channels. We've never had a full service outage."
      },
      {
        q: "Can I monitor what your team is doing?",
        a: "Absolutely. You have full visibility through: (1) Real-time EHR activity (you see what we enter), (2) Daily/weekly performance reports (calls handled, authorizations submitted, etc.), (3) Call recordings available upon request, and (4) Access to our portal for task tracking and communication."
      },
    ]
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Find answers to common questions about our services, pricing, and implementation. 
              Can't find what you're looking for?{" "}
              <a href="/contact" className="text-primary-600 hover:underline font-semibold">
                Contact us
              </a>
            </p>

            {/* Quick Search Placeholder */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search FAQs... (e.g., 'HIPAA', 'pricing', 'EHR')"
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent text-lg"
                />
                <svg
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Tip: Use Ctrl+F (Cmd+F on Mac) to search this page
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {faqCategories.map((cat, index) => (
              <a
                key={index}
                href={`#${cat.category.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4 py-2 bg-gray-100 hover:bg-primary-100 hover:text-primary-700 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
              >
                <span className="w-4 h-4">{cat.icon}</span>
                {cat.category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} id={category.category.toLowerCase().replace(/\s+/g, "-")}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold font-heading">{category.category}</h2>
                    <p className="text-gray-600">{category.questions.length} questions</p>
                  </div>
                </div>

                {/* Questions */}
                <div className="space-y-4">
                  {category.questions.map((faq, qIndex) => (
                    <Card key={qIndex} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-900 flex items-start gap-3">
                          <span className="text-primary-600 font-bold text-xl flex-shrink-0">Q:</span>
                          <span>{faq.q}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-start gap-3">
                          <span className="text-green-600 font-bold text-xl flex-shrink-0">A:</span>
                          <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold font-heading mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              We're here to help. Schedule a free consultation or give us a call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="tel:5168866137">Call (516) 886-6137</a>
              </Button>
            </div>
            <p className="text-primary-100 text-sm mt-6">
              We typically respond within 2 business hours • Free 15-minute consultation • No pressure
            </p>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-center mb-12">
              Helpful Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <CardTitle>Services Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Learn more about our patient scheduling, authorization, and clinical support services.
                  </p>
                  <a href="/services/patient-scheduling" className="text-primary-600 hover:underline text-sm font-semibold">
                    View Services →
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle>Pricing & Plans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Transparent pricing with no hidden fees. See which plan is right for your practice.
                  </p>
                  <a href="/pricing" className="text-primary-600 hover:underline text-sm font-semibold">
                    View Pricing →
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <CardTitle>About Our Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Meet the healthcare operations experts dedicated to helping your practice succeed.
                  </p>
                  <a href="/about" className="text-primary-600 hover:underline text-sm font-semibold">
                    About Us →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
