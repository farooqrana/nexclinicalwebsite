import { AnalyticsTracker } from '@/lib/analytics';

// Mock fetch
global.fetch = jest.fn();

describe('AnalyticsTracker', () => {
  let tracker: AnalyticsTracker;

  beforeEach(() => {
    tracker = AnalyticsTracker.getInstance();
    (global.fetch as jest.Mock).mockClear();
    jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('getInstance', () => {
    it('should return singleton instance', () => {
      const instance1 = AnalyticsTracker.getInstance();
      const instance2 = AnalyticsTracker.getInstance();
      expect(instance1).toBe(instance2);
    });
  });

  describe('trackPageView', () => {
    it('should track page view with correct data', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      await tracker.trackPageView('/test-page');

      expect(global.fetch).toHaveBeenCalledWith('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: expect.stringContaining('"eventName":"page_view"'),
      });

      const callBody = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
      expect(callBody.properties.path).toBe('/test-page');
      expect(callBody.properties.title).toBeDefined();
    });

    it('should include referrer if provided', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      await tracker.trackPageView('/test', '/previous-page');

      const callBody = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
      expect(callBody.properties.referrer).toBe('/previous-page');
    });
  });

  describe('trackFormSubmission', () => {
    it('should track form submission with form name', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      await tracker.trackFormSubmission('contact_form');

      expect(global.fetch).toHaveBeenCalledWith('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: expect.stringContaining('"eventName":"form_submission"'),
      });

      const callBody = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
      expect(callBody.properties.formName).toBe('contact_form');
    });

    it('should include additional properties', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      await tracker.trackFormSubmission('pricing_form', { service: 'billing' });

      const callBody = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
      expect(callBody.properties.service).toBe('billing');
    });
  });

  describe('trackButtonClick', () => {
    it('should track button click with label', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      await tracker.trackButtonClick('Get Started');

      expect(global.fetch).toHaveBeenCalledWith('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: expect.stringContaining('"eventName":"button_click"'),
      });

      const callBody = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
      expect(callBody.properties.buttonLabel).toBe('Get Started');
    });
  });

  describe('trackLinkClick', () => {
    it('should track link click with URL', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      await tracker.trackLinkClick('/services', 'Services Page');

      expect(global.fetch).toHaveBeenCalledWith('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: expect.stringContaining('"eventName":"link_click"'),
      });

      const callBody = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
      expect(callBody.properties.url).toBe('/services');
      expect(callBody.properties.text).toBe('Services Page');
    });
  });

  describe('trackEvent', () => {
    it('should track custom event', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      await tracker.trackEvent('custom_event', { key: 'value' });

      expect(global.fetch).toHaveBeenCalledWith('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: expect.stringContaining('"eventName":"custom_event"'),
      });

      const callBody = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
      expect(callBody.properties.key).toBe('value');
    });

    it('should handle fetch errors gracefully', async () => {
      (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

      await tracker.trackEvent('test_event');

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Analytics tracking error:',
        expect.any(Error)
      );

      consoleErrorSpy.mockRestore();
    });
  });
});
