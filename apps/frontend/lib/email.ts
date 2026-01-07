import { Resend } from 'resend';

const ADMIN_EMAIL = 'farooq@switchchoice.com';
const FROM_EMAIL = 'noreply@nexclinical.com';

// Initialize Resend only if API key is available
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

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

interface PricingFormData {
  practiceName: string;
  name: string;
  phone: string;
  email: string;
  freeAudit?: boolean;
  problems?: string;
  services: string[];
}

/**
 * Send contact form submission email to admin
 */
export async function sendContactFormEmail(data: ContactFormData) {
  try {
    if (!resend) {
      console.warn('Resend API key not configured. Email will not be sent.');
      console.log('[Contact Form Data]', data);
      return { success: true, id: 'mock-id' };
    }

    const emailBody = `
New Contact Form Submission

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Practice: ${data.practice}
Practice Type: ${data.practiceType}
Number of Providers: ${data.providers}

Services Interested In:
${data.services.map(s => `- ${s}`).join('\n')}

Message:
${data.message || 'No message provided'}

---
Submitted from: nexclinical.com/contact
Date: ${new Date().toISOString()}
    `;

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      replyTo: data.email,
      subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
      text: emailBody,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Practice:</strong> ${data.practice}</p>
        <p><strong>Practice Type:</strong> ${data.practiceType}</p>
        <p><strong>Number of Providers:</strong> ${data.providers}</p>
        
        <h3>Services Interested In:</h3>
        <ul>
          ${data.services.map(s => `<li>${s}</li>`).join('')}
        </ul>
        
        <h3>Message:</h3>
        <p>${(data.message || 'No message provided').replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p style="color: #888; font-size: 12px;">
          Submitted from: nexclinical.com/contact<br>
          Date: ${new Date().toISOString()}
        </p>
      `,
    });

    if (result.error) {
      console.error('Error sending contact email:', result.error);
      return { success: false, error: result.error.message };
    }

    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error('Contact email error:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Send pricing form submission email to admin
 */
export async function sendPricingFormEmail(data: PricingFormData) {
  try {
    if (!resend) {
      console.warn('Resend API key not configured. Email will not be sent.');
      console.log('[Pricing Form Data]', data);
      return { success: true, id: 'mock-id' };
    }

    const emailBody = `
New Pricing Request Form Submission

Practice Name: ${data.practiceName}
Contact Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Free Audit Requested: ${data.freeAudit ? 'Yes' : 'No'}

Problems/Challenges:
${data.problems || 'Not provided'}

Services Interested In:
${data.services.length > 0 ? data.services.map(s => `- ${s}`).join('\n') : 'None selected'}

---
Submitted from: nexclinical.com/pricing
Date: ${new Date().toISOString()}
    `;

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      replyTo: data.email,
      subject: `New Pricing Request from ${data.practiceName}`,
      text: emailBody,
      html: `
        <h2>New Pricing Request Submission</h2>
        <p><strong>Practice Name:</strong> ${data.practiceName}</p>
        <p><strong>Contact Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Free Audit Requested:</strong> ${data.freeAudit ? 'Yes' : 'No'}</p>
        
        <h3>Problems/Challenges:</h3>
        <p>${(data.problems || 'Not provided').replace(/\n/g, '<br>')}</p>
        
        <h3>Services Interested In:</h3>
        <ul>
          ${data.services.length > 0 ? data.services.map(s => `<li>${s}</li>`).join('') : '<li>None selected</li>'}
        </ul>
        
        <hr>
        <p style="color: #888; font-size: 12px;">
          Submitted from: nexclinical.com/pricing<br>
          Date: ${new Date().toISOString()}
        </p>
      `,
    });

    if (result.error) {
      console.error('Error sending pricing email:', result.error);
      return { success: false, error: result.error.message };
    }

    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error('Pricing email error:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Send confirmation email to user
 */
export async function sendConfirmationEmail(email: string, name: string, subject: string) {
  try {
    if (!resend) {
      console.warn('Resend API key not configured. Confirmation email will not be sent.');
      return { success: true };
    }

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `Thank You for Contacting NexClinical`,
      html: `
        <h2>Thank You, ${name}!</h2>
        <p>We've received your ${subject} and will be in touch within 2 business hours.</p>
        <p>In the meantime, feel free to explore more about our services at <a href="https://www.nexclinical.com">nexclinical.com</a></p>
        <p>Questions? Give us a call at <a href="tel:5168866137">(516) 886-6137</a></p>
        <hr>
        <p style="color: #888; font-size: 12px;">NexClinical | Virtual Medical Support For Small Practices</p>
      `,
    });

    if (result.error) {
      console.error('Error sending confirmation email:', result.error);
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    console.error('Confirmation email error:', error);
    return { success: false };
  }
}
