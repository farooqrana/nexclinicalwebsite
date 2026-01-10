/**
 * Analytics Tracking Component
 * Tracks page views, form submissions, and other events
 * Can be connected to GA4, Plausible, Mixpanel, etc.
 */

interface AnalyticsEvent {
  eventName: string;
  properties?: Record<string, any>;
  timestamp?: number;
}

class AnalyticsTracker {
  private readonly isDev = process.env.NODE_ENV === "development";

  /**
   * Track a page view
   */
  trackPageView(path: string, title: string) {
    this.track("page_view", {
      path,
      title,
      referrer: typeof document !== "undefined" ? document.referrer : undefined,
    });
  }

  /**
   * Track form submission
   */
  trackFormSubmission(formName: string, success: boolean, errorMessage?: string) {
    this.track("form_submission", {
      form_name: formName,
      success,
      error_message: errorMessage,
    });
  }

  /**
   * Track button click
   */
  trackButtonClick(buttonName: string, location: string) {
    this.track("button_click", {
      button_name: buttonName,
      location,
    });
  }

  /**
   * Track link click
   */
  trackLinkClick(url: string, linkText?: string) {
    this.track("link_click", {
      url,
      link_text: linkText,
    });
  }

  /**
   * Track custom event
   */
  trackEvent(eventName: string, properties?: Record<string, any>) {
    this.track(eventName, properties);
  }

  /**
   * Internal tracking method
   */
  private track(eventName: string, properties?: Record<string, any>) {
    const event: AnalyticsEvent = {
      eventName,
      properties: {
        ...properties,
        timestamp: Date.now(),
        url: typeof window !== "undefined" ? window.location.href : undefined,
      },
    };

    if (this.isDev) {
      console.log("[Analytics]", event);
    }

    // Send to analytics backend
    this.sendToAnalytics(event);

    // Send to Google Analytics if available
    if (typeof window !== "undefined" && "gtag" in window) {
      (window as any).gtag("event", eventName, properties || {});
    }
  }

  /**
   * Send event to analytics backend
   */
  private async sendToAnalytics(event: AnalyticsEvent) {
    try {
      // Only send non-dev events to backend
      if (this.isDev) return;

      await fetch("/api/analytics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      });
    } catch (error) {
      // Silently fail - don't break the app if analytics fails
      console.error("Analytics error:", error);
    }
  }
}

// Export singleton instance
export const analytics = new AnalyticsTracker();

// Export the class for testing
export { AnalyticsTracker };

/**
 * React component for tracking page views
 */
export function AnalyticsPageView({ path, title }: { path: string; title: string }) {
  if (typeof window !== "undefined") {
    analytics.trackPageView(path, title);
  }
  return null;
}
