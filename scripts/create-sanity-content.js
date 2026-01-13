#!/usr/bin/env node
/**
 * Sanity Content Creation Script
 * Populates Global Settings, Services, and Homepage with content
 * Usage: node scripts/create-sanity-content.js
 */

const { createClient } = require('@sanity/client');

// Configuration
const projectId = 'htfikdkh';
const dataset = 'production';
const apiToken = 'skd9lH0PWNro1C8DK9lIV4JPw7W6IvRjhpncCtGW49veVDancKWvwzuVLcwXTwN8ArKCzoycceOMisMPEWAiq6b6SgLG2rW7NOieJhJuMVyJDJojss4UYmHsgbEgIqiicbr02Vxgys692wICI84nLxvhBFnR3iWD6k1wtsAHugP6F9K9yRXF';

// Create Sanity client with write permissions
const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token: apiToken,
  useCdn: false,
});

// Color logging
const log = {
  info: (msg) => console.log('ℹ️ ', msg),
  success: (msg) => console.log('✅', msg),
  error: (msg) => console.error('❌', msg),
  pending: (msg) => console.log('⏳', msg),
};

// Delete existing documents to start fresh
async function deleteExisting() {
  try {
    log.pending('Checking for existing content...');
    
    // Delete Global Settings if exists
    const settingsResult = await client.delete({ query: '*[_type == "globalSettings"]' });
    if (settingsResult.results && settingsResult.results.length > 0) {
      log.success(`Deleted ${settingsResult.results.length} existing Global Settings`);
    }

    // Delete existing Services
    const servicesResult = await client.delete({ query: '*[_type == "service"]' });
    if (servicesResult.results && servicesResult.results.length > 0) {
      log.success(`Deleted ${servicesResult.results.length} existing Services`);
    }

    // Delete existing Pages
    const pagesResult = await client.delete({ query: '*[_type == "page"]' });
    if (pagesResult.results && pagesResult.results.length > 0) {
      log.success(`Deleted ${pagesResult.results.length} existing Pages`);
    }
  } catch (error) {
    // Ignore errors on delete (documents might not exist)
    log.info('Starting with clean slate');
  }
}

// Create Global Settings
async function createGlobalSettings() {
  log.pending('Creating Global Settings...');
  
  const globalSettings = {
    _type: 'globalSettings',
    siteName: 'NexClinical',
    siteUrl: 'https://nexclincalwebsite.vercel.app',
    description: 'Virtual medical support for small practices',
    contactEmail: 'support@nexclinical.com',
    contactPhone: '(555) 123-4567',
    address: 'San Francisco, CA',
    stats: [
      {
        _key: 'stat-1',
        label: 'Practices Served',
        value: '150+',
        icon: '🏥',
      },
      {
        _key: 'stat-2',
        label: 'No-Show Reduction',
        value: '40%',
        icon: '📊',
      },
      {
        _key: 'stat-3',
        label: 'Denial Rate',
        value: '<1%',
        icon: '✅',
      },
      {
        _key: 'stat-4',
        label: 'Saved per Week',
        value: '20+hrs',
        icon: '⏰',
      },
    ],
  };

  const result = await client.create(globalSettings);
  log.success(`Created Global Settings (ID: ${result._id})`);
  return result;
}

// Create Services
async function createServices() {
  log.pending('Creating Services...');
  
  const services = [
    {
      _type: 'service',
      title: 'Patient Scheduling',
      slug: { _type: 'slug', current: 'patient-scheduling' },
      description:
        'Never miss a patient call. Our virtual receptionists answer calls, schedule appointments, and send reminders – so patients show up.',
      icon: '📞',
      featured: true,
      content: [
        {
          _type: 'block',
          style: 'normal',
          text: 'Answer all incoming calls professionally during your practice hours.',
        },
      ],
    },
    {
      _type: 'service',
      title: 'Authorization & Verification',
      slug: { _type: 'slug', current: 'authorization-verification' },
      description:
        'Faster approvals, fewer delays. We handle insurance authorization & verification so treatments don\'t get held up.',
      icon: '📋',
      featured: true,
      content: [
        {
          _type: 'block',
          style: 'normal',
          text: 'Complete prior authorizations and benefits verification before patient arrival.',
        },
      ],
    },
    {
      _type: 'service',
      title: 'Clinical Support',
      slug: { _type: 'slug', current: 'clinical-support' },
      description:
        'High-quality notes & intake forms. Our clinical assistants handle charting, intake coordination, and documentation.',
      icon: '🩺',
      featured: true,
      content: [
        {
          _type: 'block',
          style: 'normal',
          text: 'Manage EHR charting, prescription refills, and patient follow-ups.',
        },
      ],
    },
  ];

  const results = [];
  for (const service of services) {
    const result = await client.create(service);
    log.success(`Created Service: ${result.title}`);
    results.push(result);
  }
  
  return results;
}

// Create Homepage
async function createHomepage(services) {
  log.pending('Creating Homepage...');
  
  const serviceIds = services.map(s => ({ _type: 'reference', _ref: s._id }));

  const homepage = {
    _type: 'page',
    title: 'Home',
    slug: { _type: 'slug', current: 'home' },
    seoTitle: 'NexClinical - Virtual Medical Support for Small Practices',
    seoDescription:
      'Reduce admin chaos with virtual scheduling, insurance authorization, and clinical support. Trusted by 150+ practices. HIPAA compliant.',
    pageBuilder: [
      {
        _type: 'hero',
        _key: 'hero-section',
        heading: 'Virtual Medical Support For Small Practices',
        subheading:
          'Have insurance authorizations, patient scheduling, & clinical notes handled. Reduce the admin chaos to focus on patient care.',
        ctaButton: {
          text: 'Book Consultation →',
          link: 'https://calendly.com/nexclinical/15min',
          variant: 'primary',
        },
        secondaryButton: {
          text: 'Get Pricing',
          link: '/pricing',
        },
      },
      {
        _type: 'servicesSection',
        _key: 'services-section',
        heading: 'Run Your Practice, Not Your Paperwork',
        subheading:
          'Practices lose hours every day to scheduling chaos, insurance work & clinical notes. We take those tasks off your plate with dedicated, full-time support.',
        displayMode: 'featured',
        columns: 3,
        selectedServices: serviceIds,
      },
    ],
  };

  const result = await client.create(homepage);
  log.success(`Created Homepage Page (ID: ${result._id})`);
  return result;
}

// Main execution
async function main() {
  try {
    log.pending('Starting Sanity content creation...\n');
    
    await deleteExisting();
    log.success('Cleaned up existing content\n');
    
    await createGlobalSettings();
    log.success('Global Settings created!\n');
    
    const services = await createServices();
    log.success('All Services created!\n');
    
    await createHomepage(services);
    log.success('Homepage created!\n');
    
    console.log('\n✨ Content Creation Complete! ✨\n');
    console.log('📍 Your content is now live in Sanity!');
    console.log('🌐 Visit: https://nexclincalwebsite.vercel.app');
    console.log('📝 Studio: http://localhost:3333\n');
    
    process.exit(0);
  } catch (error) {
    log.error(`Failed to create content: ${error.message}`);
    console.error(error);
    process.exit(1);
  }
}

main();
