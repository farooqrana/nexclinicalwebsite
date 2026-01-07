'use client';

import { FormEvent, ChangeEvent, useState } from 'react';
import { Button } from '@/components/ui/button';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  practice: string;
  practiceType: string;
  providers: string;
  services: string[];
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practice: '',
    practiceType: '',
    providers: '',
    services: [],
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      services: checked
        ? [...prev.services, value]
        : prev.services.filter(service => service !== value),
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({
        type: 'success',
        message: data.message,
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        practice: '',
        practiceType: '',
        providers: '',
        services: [],
        message: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'An error occurred. Please try again.',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Status Messages */}
      {status.type !== 'idle' && (
        <div
          className={`p-4 rounded-lg ${
            status.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : status.type === 'error'
              ? 'bg-red-50 text-red-800 border border-red-200'
              : 'bg-blue-50 text-blue-800 border border-blue-200'
          }`}
        >
          {status.message}
        </div>
      )}

      {/* Name Fields */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
            First Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
            Last Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
            placeholder="Smith"
          />
        </div>
      </div>

      {/* Email and Phone */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
            placeholder="john@practice.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      {/* Practice Name */}
      <div>
        <label htmlFor="practice" className="block text-sm font-semibold text-gray-700 mb-2">
          Practice Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="practice"
          name="practice"
          value={formData.practice}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
          placeholder="ABC Family Medicine"
        />
      </div>

      {/* Practice Type */}
      <div>
        <label htmlFor="practiceType" className="block text-sm font-semibold text-gray-700 mb-2">
          Practice Type <span className="text-red-600">*</span>
        </label>
        <select
          id="practiceType"
          name="practiceType"
          value={formData.practiceType}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all bg-white"
        >
          <option value="">Select your specialty...</option>
          <option value="primary-care">Primary Care</option>
          <option value="internal-medicine">Internal Medicine</option>
          <option value="pediatrics">Pediatrics</option>
          <option value="psychiatry">Psychiatry</option>
          <option value="behavioral-health">Behavioral Health</option>
          <option value="cardiology">Cardiology</option>
          <option value="dermatology">Dermatology</option>
          <option value="physical-therapy">Physical Therapy</option>
          <option value="dental">Dental</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Number of Providers */}
      <div>
        <label htmlFor="providers" className="block text-sm font-semibold text-gray-700 mb-2">
          Number of Providers <span className="text-red-600">*</span>
        </label>
        <select
          id="providers"
          name="providers"
          value={formData.providers}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all bg-white"
        >
          <option value="">Select...</option>
          <option value="1">1 (Solo Practice)</option>
          <option value="2-3">2-3 Providers</option>
          <option value="4-6">4-6 Providers</option>
          <option value="7-10">7-10 Providers</option>
          <option value="10+">10+ Providers</option>
        </select>
      </div>

      {/* Services Interested In */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Services You're Interested In <span className="text-red-600">*</span>
        </label>
        <div className="space-y-3">
          {[
            'Patient Scheduling & Call Handling',
            'Prior Authorization & Verification',
            'Clinical Note Support (E-scribe)',
            'Revenue Cycle Management',
            'Not Sure - Need Guidance',
          ].map((service, index) => (
            <label key={index} className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name="services"
                value={service}
                checked={formData.services.includes(service)}
                onChange={handleCheckboxChange}
                className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-600 cursor-pointer"
              />
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                {service}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Tell Us About Your Needs
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all resize-none"
          placeholder="What challenges are you facing? What are your goals? Any specific questions?"
        />
        <p className="text-xs text-gray-500 mt-2">Optional but helps us prepare for our conversation</p>
      </div>

      {/* Submit Button */}
      <div>
        <Button
          type="submit"
          size="lg"
          className="w-full bg-primary-600 hover:bg-primary-700"
          disabled={status.type === 'loading'}
        >
          {status.type === 'loading' ? 'Sending...' : 'Send Message →'}
        </Button>
        <p className="text-xs text-center text-gray-500 mt-3">
          We typically respond within 2 business hours. For urgent matters, please call us directly.
        </p>
      </div>

      {/* Privacy Note */}
      <div className="text-xs text-gray-600 bg-gray-50 p-4 rounded-lg">
        <p>
          🔒 Your information is secure and will never be shared. By submitting this form, you
          agree to our{' '}
          <a href="/privacy-policy" className="text-primary-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
