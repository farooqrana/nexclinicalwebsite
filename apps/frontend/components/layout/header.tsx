"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [servicesTimeout, setServicesTimeout] = useState<NodeJS.Timeout | null>(null);
  const [resourcesTimeout, setResourcesTimeout] = useState<NodeJS.Timeout | null>(null);

  const servicesMenu = [
    { name: "Patient Scheduling", href: "/services/patient-scheduling" },
    { name: "Insurance Authorizations", href: "/services/authorization" },
    { name: "Escribe/Medical Assistance", href: "/services/clinical-support" },
  ];

  const resourcesMenu = [
    { name: "Revenue Cycle Management", href: "/resources/revenue-cycle" },
    { name: "Website+Marketing", href: "/resources/website-marketing" },
    { name: "24/7 Answering Service", href: "#" },
  ];

  const handleServicesEnter = () => {
    if (servicesTimeout) clearTimeout(servicesTimeout);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    const timeout = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
    setServicesTimeout(timeout);
  };

  const handleResourcesEnter = () => {
    if (resourcesTimeout) clearTimeout(resourcesTimeout);
    setResourcesOpen(true);
  };

  const handleResourcesLeave = () => {
    const timeout = setTimeout(() => {
      setResourcesOpen(false);
    }, 150);
    setResourcesTimeout(timeout);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="NexClinical"
              width={240}
              height={48}
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-primary-600 font-medium transition-colors pb-1 border-b-2 border-transparent hover:border-primary-600">
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-0 w-72 bg-white border border-gray-200 rounded-lg shadow-lg py-3 z-50">
                  {servicesMenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* How It Works */}
            <Link
              href="/how-it-works"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors pb-1 border-b-2 border-transparent hover:border-primary-600"
            >
              How It Works
            </Link>

            {/* Pricing */}
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors pb-1 border-b-2 border-transparent hover:border-primary-600"
            >
              Pricing
            </Link>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleResourcesEnter}
              onMouseLeave={handleResourcesLeave}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-primary-600 font-medium transition-colors pb-1 border-b-2 border-transparent hover:border-primary-600">
                Resources
                <ChevronDown className="h-4 w-4" />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-0 w-72 bg-white border border-gray-200 rounded-lg shadow-lg py-3 z-50">
                  {resourcesMenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Us */}
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors pb-1 border-b-2 border-transparent hover:border-primary-600"
            >
              Contact Us
            </Link>

            {/* Get Started Button */}
            <Button asChild className="bg-primary-600 hover:bg-primary-700">
              <a href="https://calendly.com/nexclinical/15min">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 max-h-[calc(100vh-120px)] overflow-y-auto">
            {/* Services Section */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {servicesMenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-gray-600 hover:text-primary-600 transition-colors py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* How It Works */}
            <Link
              href="/how-it-works"
              className="block text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>

            {/* Pricing */}
            <Link
              href="/pricing"
              className="block text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>

            {/* Resources Section */}
            <div>
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
              >
                Resources
                <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {resourcesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {resourcesMenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-gray-600 hover:text-primary-600 transition-colors py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Us */}
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            {/* Get Started Button */}
            <Button asChild className="w-full bg-primary-600 hover:bg-primary-700">
              <a href="https://calendly.com/nexclinical/15min">Get Started</a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
