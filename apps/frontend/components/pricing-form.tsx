'use client';

import { FormEvent, ChangeEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface FormData {
  practiceName: string;
  name: string;
  phone: string;
  email: string;
  freeAudit: boolean;
  problems: string;
  services: string[];
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export function PricingForm() {
  const [formData, setFormData] = useState<FormData>({
    practiceName: '',
    name: '',
    phone: '',
    email: '',
    freeAudit: false,
    problems: '',
    services: [],
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
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
    setStatus({ type: 'loading', message: 'Sending your request...' });

    try {
      const response = await fetch('/api/pricing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send request');
      }

      setStatus({
        type: 'success',
        message: data.message,
      });

      // Reset form
      setFormData({
        practiceName: '',
        name: '',
        phone: '',
        email: '',
        freeAudit: false,
        problems: '',
        services: [],
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

      {/* Free Audit Checkbox */}
      <div className="flex items-center space-x-2 p-4 bg-primary-50 rounded-lg">
        <input
          type="checkbox"
          id="free-audit"
          name="freeAudit"
          checked={formData.freeAudit}
          onChange={handleInputChange}
          className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
        />
        <Label htmlFor="free-audit" className="text-primary-900 font-semibold cursor-pointer">
          Request Free Audit
        </Label>
      </div>

      {/* Practice Name */}
      <div>
        <Label htmlFor="practiceName" className="required">
          Practice Name *
        </Label>
        <Input
          id="practiceName"
          name="practiceName"
          type="text"
          placeholder="Enter your practice name"
          value={formData.practiceName}
          onChange={handleInputChange}
          required
          className="mt-2"
        />
      </div>

      {/* Name */}
      <div>
        <Label htmlFor="name" className="required">
          Name *
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="mt-2"
        />
      </div>

      {/* Phone and Email */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone" className="required">
            Phone *
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 555-5555"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="email" className="required">
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="mt-2"
          />
        </div>
      </div>

      {/* Problems */}
      <div>
        <Label htmlFor="problems">
          What problem(s) is your practice currently facing?
        </Label>
        <Textarea
          id="problems"
          name="problems"
          placeholder="Tell us about your current challenges..."
          value={formData.problems}
          onChange={handleInputChange}
          rows={4}
          className="mt-2"
        />
      </div>

      {/* Services Interested */}
      <div>
        <Label className="mb-3 block">Services Interested</Label>
        <div className="space-y-3">
          {[
            'Patient Scheduling & Call Handling',
            'Prior Authorization & Insurance Verification',
            'Clinical Note Support (E-scribe)',
            'Revenue Cycle Management',
            'Website & Marketing',
          ].map((service) => (
            <div key={service} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={service.toLowerCase().replace(/\s+/g, '-')}
                value={service}
                checked={formData.services.includes(service)}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <Label
                htmlFor={service.toLowerCase().replace(/\s+/g, '-')}
                className="font-normal cursor-pointer"
              >
                {service}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status.type === 'loading'}
      >
        {status.type === 'loading' ? 'Sending...' : 'Get Pricing'}
      </Button>

      <p className="text-center text-sm text-gray-600">
        We'll respond within 2 business hours with your custom pricing
      </p>
    </form>
  );
}
