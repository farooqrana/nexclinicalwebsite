import { ReactNode } from 'react';

export function StructuredData(): ReactNode {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.nexclinical.com',
    name: 'NexClinical',
    description: 'Virtual Medical Support For Small Practices - Insurance authorizations, patient scheduling, and clinical notes',
    url: 'https://www.nexclinical.com',
    logo: 'https://www.nexclinical.com/logo.svg',
    email: 'hello@nexclinical.com',
    telephone: '(516) 886-6137',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    sameAs: [
      'https://www.facebook.com/nexclinical',
      'https://www.linkedin.com/company/nexclinical',
      'https://www.instagram.com/nexclinical',
    ],
    areaServed: 'US',
    priceRange: '$$$',
    serviceType: [
      'Patient Scheduling',
      'Insurance Authorization',
      'Clinical Note Support',
      'Revenue Cycle Management',
    ],
    knowsAbout: [
      'Healthcare Administration',
      'Medical Practice Management',
      'Patient Scheduling Systems',
      'Insurance Verification',
      'Clinical Documentation',
    ],
    serviceArea: {
      '@type': 'Country',
      name: 'United States',
    },
  };

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NexClinical',
    url: 'https://www.nexclinical.com',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '(516) 886-6137',
      email: 'hello@nexclinical.com',
      areaServed: 'US',
      availableLanguage: 'en',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />
    </>
  );
}
