import { NextRequest, NextResponse } from 'next/server';
import { sendContactFormEmail, sendConfirmationEmail } from '@/lib/email';
import { checkRateLimit, getClientIP } from '@/lib/rate-limit';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  practice: string;
  practiceType: string;
  providers: string;
  services: string[];
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting (5 submissions per hour per IP)
    const clientIP = getClientIP(request);
    if (!checkRateLimit(clientIP, 5, 60 * 60 * 1000)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json() as ContactFormData;

    // Validate required fields
    if (!body.firstName?.trim() || !body.lastName?.trim() || !body.email?.trim() || 
        !body.practice?.trim() || !body.practiceType || !body.providers) {
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

    // Validate at least one service is selected
    if (!body.services || body.services.length === 0) {
      return NextResponse.json(
        { error: 'Please select at least one service' },
        { status: 400 }
      );
    }

    // Sanitize inputs to prevent injection
    const sanitizedData: ContactFormData = {
      firstName: body.firstName.trim().substring(0, 100),
      lastName: body.lastName.trim().substring(0, 100),
      email: body.email.trim().toLowerCase(),
      phone: body.phone?.trim().substring(0, 20),
      practice: body.practice.trim().substring(0, 100),
      practiceType: body.practiceType,
      providers: body.providers,
      services: body.services.slice(0, 10).map((s: string) => String(s).substring(0, 100)),
      message: body.message?.trim().substring(0, 2000),
    };

    // Send email to admin
    const emailResult = await sendContactFormEmail(sanitizedData);
    if (!emailResult.success) {
      console.error('Failed to send contact email:', emailResult.error);
      return NextResponse.json(
        { error: 'Failed to process your request. Please try again.' },
        { status: 500 }
      );
    }

    // Send confirmation to user
    await sendConfirmationEmail(
      sanitizedData.email,
      sanitizedData.firstName,
      'contact form submission'
    );

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! We received your message and will be in touch within 2 business hours.',
        id: emailResult.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    );
  }
}
