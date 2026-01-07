'use client';

import { useEffect } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to external error tracking service (e.g., Sentry)
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Error Visual */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-red-600 mb-4">500</h1>
            <div className="inline-block px-6 py-3 bg-white rounded-lg shadow-md">
              <p className="text-xl text-gray-700">Server Error</p>
            </div>
          </div>

          {/* Message */}
          <h2 className="text-4xl font-bold font-heading mb-4 mt-8">
            Something Went Wrong
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            We encountered an unexpected error. Our team has been notified.
          </p>
          <p className="text-sm text-gray-500 mb-12">
            Error ID: {error.digest || 'unknown'}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => reset()}>
              Try Again
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/">Go Home</Link>
            </Button>
          </div>

          {/* Support Info */}
          <div className="mt-12 bg-white rounded-lg p-8 shadow-sm">
            <p className="text-gray-600 mb-4">
              If the problem persists, please contact our support team:
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:5168866137" className="text-primary-600 hover:underline font-semibold">
                (516) 886-6137
              </a>
              <a href="mailto:hello@nexclinical.com" className="text-primary-600 hover:underline font-semibold">
                hello@nexclinical.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
