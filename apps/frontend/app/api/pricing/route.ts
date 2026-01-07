import { NextRequest, NextResponse } from 'next/server';
import { sendPricingFormEmail, sendConfirmationEmail } from '@/lib/email';
import { checkRateLimit, getClientIP } from '@/lib/rate-limit';

interface PricingFormData {
  practiceName: string;
  name: string;
  phone: string;
  email: string;
  freeAudit?: boolean;
  problems?: string;
  services: string[];
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting (3 submissions per hour per IP)
    const clientIP = getClientIP(request);
    if (!checkRateLimit(clientIP, 3, 60 * 60 * 1000)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json() as PricingFormData;

    // Validate required fields
    if (!body.practiceName?.trim() || !body.name?.trim() || !body.email?.trim() || !body.phone?.trim()) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData: PricingFormData = {
      practiceName: body.practiceName.trim().substring(0, 100),
      name: body.name.trim().substring(0, 100),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim().substring(0, 20),
      freeAudit: !!body.freeAudit,
      problems: body.problems?.trim().substring(0, 2000),
      services: body.services?.slice(0, 10).map((s: string) => String(s).substring(0, 100)) || [],
    };

    // Send email to admin
    const emailResult = await sendPricingFormEmail(sanitizedData);
    if (!emailResult.success) {
      console.error('Failed to send pricing email:', emailResult.error);
      return NextResponse.json(
        { error: 'Failed to process your request. Please try again.' },
        { status: 500 }
      );
    }

    // Send confirmation to user
    await sendConfirmationEmail(
      sanitizedData.email,
      sanitizedData.name.split(' ')[0],
      'pricing request'
    );

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! We received your pricing request and will respond within 2 business hours.',
        id: emailResult.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Pricing form error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    );
  }
}
