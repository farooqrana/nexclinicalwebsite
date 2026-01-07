import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Services - Virtual Medical Support for Your Practice | NexClinical",
  description: "Patient scheduling, insurance authorizations, and clinical support. Choose from our comprehensive suite of virtual medical services.",
  openGraph: {
    title: "Services - Virtual Medical Support for Your Practice | NexClinical",
    description: "Patient scheduling, insurance authorizations, and clinical support services.",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Main Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
              {/* Premium Support */}
              <div>
                <div className="mb-16">
                  <h2 className="text-4xl font-bold font-heading pb-3 border-b-4 border-primary-600 inline-block">
                    Premium Support
                  </h2>
                </div>

                <div className="space-y-12">
                  {/* Patient Scheduling */}
                  <Link href="/services/patient-scheduling" className="group block">
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                          <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                          Patient Scheduling
                        </h3>
                        <p className="text-gray-700 text-lg">
                          Get all calls handled, patient scheduling & reminders.
                        </p>
                      </div>
                    </div>
                  </Link>

                  {/* Insurance Authorizations */}
                  <Link href="/services/authorization" className="group block">
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                          <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h-2m0 0H10m2 0v2m0-2v-2m7-7a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                          Insurance Authorizations
                        </h3>
                        <p className="text-gray-700 text-lg">
                          On-time prior authorizations & benefits check. Reduce delays.
                        </p>
                      </div>
                    </div>
                  </Link>

                  {/* Escribe/Medical Assistance */}
                  <Link href="/services/clinical-support" className="group block">
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                          <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                          Escribe/Medical Assistance
                        </h3>
                        <p className="text-gray-700 text-lg">
                          Escribe & EHR documentation, Leave before 5pm.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Practice Solutions */}
              <div>
                <div className="mb-16">
                  <h2 className="text-4xl font-bold font-heading pb-3 border-b-4 border-primary-600 inline-block">
                    Practice Solutions
                  </h2>
                </div>

                <div className="space-y-12">
                  {/* Revenue Cycle Management */}
                  <div>
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">
                          Revenue Cycle Management
                        </h3>
                        <p className="text-gray-700 text-lg">
                          Reduce denials, Increase collections, & transparent intelligence reporting.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Website+Marketing */}
                  <div>
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">
                          Website+Marketing
                        </h3>
                        <p className="text-gray-700 text-lg">
                          Build your practice web presence and generate more leads
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 24/7 Answering Service */}
                  <div>
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">
                          24/7 Answering Service
                        </h3>
                        <p className="text-gray-700 text-lg">
                          24/7 AI assisted answering service. Incoming calls, transfers handled.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
