import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from '@/components/contact-form';

// Mock fetch
global.fetch = jest.fn();

describe('ContactForm', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it('should render all form fields', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/practice name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/practice type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of providers/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('should render service checkboxes', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/revenue cycle management/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/medical billing/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/credentialing/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/practice management/i)).toBeInTheDocument();
  });

  it('should show error when no service selected', async () => {
    render(<ContactForm />);
    const user = userEvent.setup();

    // Fill all fields except services
    await user.type(screen.getByLabelText(/first name/i), 'John');
    await user.type(screen.getByLabelText(/last name/i), 'Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/phone/i), '555-1234');
    await user.type(screen.getByLabelText(/practice name/i), 'Test Practice');
    await user.type(screen.getByLabelText(/practice type/i), 'Primary Care');
    await user.type(screen.getByLabelText(/number of providers/i), '5');
    await user.type(screen.getByLabelText(/message/i), 'Test message');

    // Submit without selecting services
    await user.click(screen.getByRole('button', { name: /send message/i }));

    // Should show error
    await waitFor(() => {
      expect(screen.getByText(/please select at least one service/i)).toBeInTheDocument();
    });
  });

  it('should submit form successfully with valid data', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, message: 'Form submitted' }),
    });

    render(<ContactForm />);
    const user = userEvent.setup();

    // Fill all fields
    await user.type(screen.getByLabelText(/first name/i), 'John');
    await user.type(screen.getByLabelText(/last name/i), 'Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/phone/i), '555-1234');
    await user.type(screen.getByLabelText(/practice name/i), 'Test Practice');
    await user.type(screen.getByLabelText(/practice type/i), 'Primary Care');
    await user.type(screen.getByLabelText(/number of providers/i), '5');
    
    // Select services
    await user.click(screen.getByLabelText(/revenue cycle management/i));
    await user.click(screen.getByLabelText(/medical billing/i));
    
    await user.type(screen.getByLabelText(/message/i), 'Test message');

    // Submit form
    await user.click(screen.getByRole('button', { name: /send message/i }));

    // Should show success message
    await waitFor(() => {
      expect(screen.getByText(/thank you.*message.*sent successfully/i)).toBeInTheDocument();
    });

    // Form should be reset
    await waitFor(() => {
      expect(screen.getByLabelText(/first name/i)).toHaveValue('');
    });
  });

  it('should display error message on submission failure', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: 'Server error' }),
    });

    render(<ContactForm />);
    const user = userEvent.setup();

    // Fill valid form
    await user.type(screen.getByLabelText(/first name/i), 'John');
    await user.type(screen.getByLabelText(/last name/i), 'Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/phone/i), '555-1234');
    await user.type(screen.getByLabelText(/practice name/i), 'Test');
    await user.type(screen.getByLabelText(/practice type/i), 'Type');
    await user.type(screen.getByLabelText(/number of providers/i), '5');
    await user.click(screen.getByLabelText(/revenue cycle management/i));
    await user.type(screen.getByLabelText(/message/i), 'Test');

    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/server error/i)).toBeInTheDocument();
    });
  });

  it('should show loading state during submission', async () => {
    (global.fetch as jest.Mock).mockImplementation(
      () => new Promise(resolve => setTimeout(() => resolve({
        ok: true,
        json: async () => ({ success: true }),
      }), 100))
    );

    render(<ContactForm />);
    const user = userEvent.setup();

    // Fill and submit form
    await user.type(screen.getByLabelText(/first name/i), 'John');
    await user.type(screen.getByLabelText(/last name/i), 'Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/phone/i), '555-1234');
    await user.type(screen.getByLabelText(/practice name/i), 'Test');
    await user.type(screen.getByLabelText(/practice type/i), 'Type');
    await user.type(screen.getByLabelText(/number of providers/i), '5');
    await user.click(screen.getByLabelText(/revenue cycle management/i));
    await user.type(screen.getByLabelText(/message/i), 'Test');

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    // Button should show loading state
    expect(submitButton).toHaveTextContent(/sending/i);
    expect(submitButton).toBeDisabled();
  });

  it('should handle network errors gracefully', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    render(<ContactForm />);
    const user = userEvent.setup();

    // Fill and submit form
    await user.type(screen.getByLabelText(/first name/i), 'John');
    await user.type(screen.getByLabelText(/last name/i), 'Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/phone/i), '555-1234');
    await user.type(screen.getByLabelText(/practice name/i), 'Test');
    await user.type(screen.getByLabelText(/practice type/i), 'Type');
    await user.type(screen.getByLabelText(/number of providers/i), '5');
    await user.click(screen.getByLabelText(/revenue cycle management/i));
    await user.type(screen.getByLabelText(/message/i), 'Test');

    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/failed to send message/i)).toBeInTheDocument();
    });
  });
});
