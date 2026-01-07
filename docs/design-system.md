# Design Tokens & Branding

## Overview

Design system based on NexClinical's existing brand, modernized with a consistent token system.

## Color Palette

### Primary (Blue)
Used for main CTAs, links, and brand elements. Based on medical/healthcare industry standards.

```css
--primary-50: #f0f9ff;
--primary-100: #e0f2fe;
--primary-200: #bae6fd;
--primary-300: #7dd3fc;
--primary-400: #38bdf8;
--primary-500: #0ea5e9;  /* Main brand color */
--primary-600: #0284c7;  /* Primary CTA */
--primary-700: #0369a1;
--primary-800: #075985;
--primary-900: #0c4a6e;
```

### Neutral Grays
For text, backgrounds, and UI elements.

```css
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-300: #d1d5db;
--gray-400: #9ca3af;
--gray-500: #6b7280;
--gray-600: #4b5563;
--gray-700: #374151;
--gray-800: #1f2937;
--gray-900: #111827;
```

### Semantic Colors

```css
/* Success - for confirmations, positive states */
--success: #10b981;
--success-light: #d1fae5;

/* Warning - for alerts, pending states */
--warning: #f59e0b;
--warning-light: #fef3c7;

/* Error - for errors, destructive actions */
--error: #ef4444;
--error-light: #fee2e2;
```

## Typography

### Font Families

```css
--font-sans: 'Inter', -apple-system, sans-serif;
--font-heading: 'Poppins', 'Inter', sans-serif;
```

**Inter**: Body text, UI elements (400, 500, 600 weights)
**Poppins**: Headings, hero text (400, 500, 600, 700 weights)

### Type Scale

Based on a modular scale (1.25 ratio):

```css
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
--text-6xl: 3.75rem;    /* 60px */
```

### Line Heights

```css
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

### Font Weights

```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

## Spacing

Based on 4px base unit:

```css
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-5: 1.25rem;    /* 20px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
```

## Border Radius

```css
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.375rem;  /* 6px */
--radius-lg: 0.5rem;    /* 8px */
--radius-xl: 0.75rem;   /* 12px */
--radius-2xl: 1rem;     /* 16px */
--radius-full: 9999px;  /* Pill shape */
```

## Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
```

## Breakpoints

Mobile-first responsive design:

```css
--screen-sm: 640px;   /* Small devices */
--screen-md: 768px;   /* Tablets */
--screen-lg: 1024px;  /* Laptops */
--screen-xl: 1280px;  /* Desktops */
--screen-2xl: 1536px; /* Large screens */
```

## Component Patterns

### Buttons

**Primary**: Main CTAs (Book Consultation, Get Started)
- Background: `primary-600`
- Hover: `primary-700`
- Text: white
- Shadow: `shadow-lg`

**Secondary**: Alternative actions (Learn More, View Pricing)
- Border: `gray-300` 2px
- Hover: `border-primary-600`, `text-primary-600`
- Background: transparent

**Ghost**: Tertiary actions
- Hover: `gray-100`
- Text: `gray-700`

### Cards

- Background: white
- Border: `gray-200` 1px
- Border Radius: `xl` (12px)
- Padding: 32px (space-8)
- Shadow: `shadow-sm` default, `shadow-md` on hover

### Hero Sections

- Heading: `text-5xl` or `text-6xl`, `font-bold`, `font-heading`
- Subheading: `text-xl` or `text-2xl`, `text-gray-600`
- Max width: `max-w-4xl`
- Vertical spacing: `space-y-8`

### Sections

- Padding Y: `py-20` (80px)
- Container: `max-w-7xl mx-auto`
- Section heading: `text-4xl` or `text-5xl`, `font-bold`, `font-heading`, `mb-4`
- Section subheading: `text-xl`, `text-gray-600`, `max-w-3xl mx-auto`

## Motion & Animation

### Durations

```css
--duration-75: 75ms;
--duration-100: 100ms;
--duration-150: 150ms;
--duration-200: 200ms;
--duration-300: 300ms;
--duration-500: 500ms;
```

### Easing

```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### Common Transitions

```css
/* Button hover */
transition: colors 200ms ease-in-out;

/* Card hover */
transition: shadow 300ms ease-out;

/* Link hover */
transition: all 150ms ease-in-out;
```

### Reduced Motion

Respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Accessibility

### Color Contrast

All color combinations meet WCAG 2.1 AA standards:
- Normal text (< 18px): 4.5:1 minimum
- Large text (>= 18px or bold >= 14px): 3:1 minimum
- UI components: 3:1 minimum

### Focus States

```css
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-primary-600
focus-visible:ring-offset-2
```

### Touch Targets

Minimum size: 44x44px (iOS), 48x48px (Android)
- Buttons: min-height 48px (default)
- Links: padding ensures 44x44px hit area

## Usage Examples

### Hero Section
```tsx
<section className="py-20 px-4">
  <div className="max-w-4xl mx-auto text-center space-y-8">
    <h1 className="text-5xl md:text-6xl font-bold font-heading text-gray-900">
      Virtual Medical Support For Small Practices
    </h1>
    <p className="text-xl md:text-2xl text-gray-600">
      Reduce the admin chaos to focus on patient care.
    </p>
    <Button size="lg">Book Consultation →</Button>
  </div>
</section>
```

### Feature Card
```tsx
<Card className="p-8 hover:shadow-md transition-shadow">
  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
    <Icon className="w-6 h-6 text-primary-600" />
  </div>
  <CardTitle className="mb-3">Never Miss a Patient Call</CardTitle>
  <CardDescription>
    We handle all your incoming calls, patient reminders, and scheduling.
  </CardDescription>
</Card>
```

## Logo Usage

- Primary: Full color logo on white backgrounds
- Reversed: White logo on dark backgrounds (footer, hero overlays)
- Minimum size: 120px width
- Clear space: 2x logo height on all sides

## Brand Voice

- **Tone**: Professional, empathetic, solution-focused
- **Voice**: Clear, direct, avoiding jargon
- **Style**: Active voice, benefit-driven copy
- **Audience**: Small practice owners, office managers, physicians

## Resources

- Figma: [Design System] (to be created)
- Brand Guidelines: [Link]
- Component Library: `/components/ui`
