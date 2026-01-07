import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PricingForm } from "@/components/pricing-form";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Pricing - Transparent Pricing, No Hidden Costs | NexClinical",
  description: "Get custom pricing for your practice. No long-term contracts, no hidden costs. Contact us for a personalized quote based on your needs.",
  openGraph: {
    title: "Pricing - Transparent Pricing, No Hidden Costs | NexClinical",
    description: "Get custom pricing for your practice. No long-term contracts, no hidden costs.",
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              Pricing
            </h1>
            <p className="text-2xl text-primary-100 mb-4">
              Transparent Pricing. No Long Term Contracts. No Hidden costs.
            </p>
            <p className="text-xl text-primary-200">
              Please fill out form below to get pricing
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Get Your Custom Quote</CardTitle>
                <p className="text-center text-gray-600 mt-2">
                  Fill out the form below and we'll provide you with a personalized pricing plan
                </p>
              </CardHeader>
              <CardContent>
                <PricingForm />
              </CardContent>
            </Card>

            {/* Alternative Contact */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                <strong>Alternative:</strong> Prefer to speak directly?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="tel:5168866137">(516) 886-6137</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://calendly.com/nexclinical/15min">Schedule a Call</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
