#!/usr/bin/env node

/**
 * NexClinical Deployment Test Suite
 * Validates all critical functionality after Vercel deployment
 * 
 * Usage:
 *   npx ts-node deployment-tests.ts
 *   PLAYWRIGHT_BASE_URL=https://nexclincalwebsite.vercel.app npx ts-node deployment-tests.ts
 */

import fs from 'fs';
import path from 'path';

interface TestResult {
  name: string;
  passed: boolean;
  message: string;
  duration: number;
}

const results: TestResult[] = [];

function logTest(name: string, passed: boolean, message: string, duration: number = 0) {
  const status = passed ? '✅' : '❌';
  console.log(`${status} ${name}: ${message} (${duration}ms)`);
  results.push({ name, passed, message, duration });
}

async function runDeploymentTests() {
  const baseUrl = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';
  
  console.log('\n🚀 NexClinical Deployment Test Suite');
  console.log(`📍 Testing against: ${baseUrl}\n`);
  console.log('═'.repeat(60));

  // Test 1: Homepage loads
  console.log('\n📄 Page Load Tests:');
  try {
    const start = Date.now();
    const response = await fetch(`${baseUrl}/`);
    const duration = Date.now() - start;
    logTest('Homepage Load', response.ok, `Status ${response.status}`, duration);
  } catch (e) {
    logTest('Homepage Load', false, (e as Error).message);
  }

  // Test 2: Contact page loads
  try {
    const start = Date.now();
    const response = await fetch(`${baseUrl}/contact`);
    const duration = Date.now() - start;
    logTest('Contact Page Load', response.ok, `Status ${response.status}`, duration);
  } catch (e) {
    logTest('Contact Page Load', false, (e as Error).message);
  }

  // Test 3: Pricing page loads
  try {
    const start = Date.now();
    const response = await fetch(`${baseUrl}/pricing`);
    const duration = Date.now() - start;
    logTest('Pricing Page Load', response.ok, `Status ${response.status}`, duration);
  } catch (e) {
    logTest('Pricing Page Load', false, (e as Error).message);
  }

  // Test 4: SEO - Sitemap
  console.log('\n🔍 SEO Tests:');
  try {
    const response = await fetch(`${baseUrl}/sitemap.xml`);
    logTest('Sitemap.xml', response.ok, `Status ${response.status}`);
  } catch (e) {
    logTest('Sitemap.xml', false, (e as Error).message);
  }

  // Test 5: SEO - Robots.txt
  try {
    const response = await fetch(`${baseUrl}/robots.txt`);
    logTest('Robots.txt', response.ok, `Status ${response.status}`);
  } catch (e) {
    logTest('Robots.txt', false, (e as Error).message);
  }

  // Test 6: API endpoints
  console.log('\n🔌 API Endpoint Tests:');
  
  // Contact API
  try {
    const response = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Corp',
        phone: '555-0123',
        service: 'patient-scheduling',
        message: 'Test message',
      }),
    });
    logTest('Contact API', response.ok, `Status ${response.status}`);
  } catch (e) {
    logTest('Contact API', false, (e as Error).message);
  }

  // Analytics API
  try {
    const response = await fetch(`${baseUrl}/api/analytics`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'page_view',
        page: '/',
      }),
    });
    logTest('Analytics API', response.ok, `Status ${response.status}`);
  } catch (e) {
    logTest('Analytics API', false, (e as Error).message);
  }

  // Test 7: Performance metrics
  console.log('\n⚡ Performance Tests:');
  
  try {
    const start = Date.now();
    await fetch(`${baseUrl}/`);
    const duration = Date.now() - start;
    const performanceGood = duration < 3000;
    logTest('Page Response Time', performanceGood, `${duration}ms (target: <3000ms)`, duration);
  } catch (e) {
    logTest('Page Response Time', false, (e as Error).message);
  }

  // Test 8: Security headers
  console.log('\n🔒 Security Tests:');
  try {
    const response = await fetch(`${baseUrl}/`);
    const hasSecurityHeaders = 
      response.headers.has('x-content-type-options') ||
      response.headers.has('x-frame-options') ||
      response.headers.has('referrer-policy');
    logTest('Security Headers', hasSecurityHeaders, 'Headers present');
  } catch (e) {
    logTest('Security Headers', false, (e as Error).message);
  }

  // Test 9: Check if environment variables are working
  console.log('\n⚙️ Environment & Configuration Tests:');
  try {
    const response = await fetch(`${baseUrl}/`);
    const html = await response.text();
    const hasSiteUrl = html.includes('nexclinical') || html.includes('NexClinical');
    logTest('Site Configuration', hasSiteUrl, 'Site content loaded correctly');
  } catch (e) {
    logTest('Site Configuration', false, (e as Error).message);
  }

  // Summary
  console.log('\n' + '═'.repeat(60));
  console.log('📊 Test Summary:');
  const passed = results.filter(r => r.passed).length;
  const total = results.length;
  const percentage = ((passed / total) * 100).toFixed(0);
  console.log(`✅ Passed: ${passed}/${total} (${percentage}%)\n`);

  if (passed === total) {
    console.log('🎉 All deployment tests passed! Ready for production.\n');
    process.exit(0);
  } else {
    console.log('⚠️  Some tests failed. Review errors above.\n');
    results.forEach(r => {
      if (!r.passed) {
        console.log(`  ❌ ${r.name}: ${r.message}`);
      }
    });
    process.exit(1);
  }
}

// Run tests
runDeploymentTests().catch(error => {
  console.error('❌ Test suite error:', error);
  process.exit(1);
});
