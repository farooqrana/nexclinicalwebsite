import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Visual */}
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
              <div className="inline-block px-6 py-3 bg-white rounded-lg shadow-md">
                <p className="text-xl text-gray-700">Page Not Found</p>
              </div>
            </div>

            {/* Message */}
            <h2 className="text-4xl font-bold font-heading mb-4 mt-8">
              Oops! We Can't Find That Page
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild>
                <Link href="/">Go Home</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Popular Pages</h3>
              <div className="grid grid-cols-2 gap-4 text-left">
                <Link href="/services" className="text-primary-600 hover:underline">Services</Link>
                <Link href="/pricing" className="text-primary-600 hover:underline">Pricing</Link>
                <Link href="/how-it-works" className="text-primary-600 hover:underline">How It Works</Link>
                <Link href="/faqs" className="text-primary-600 hover:underline">FAQs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
