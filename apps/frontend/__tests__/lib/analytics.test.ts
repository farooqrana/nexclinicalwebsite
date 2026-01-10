import { analytics, AnalyticsTracker } from "@/lib/analytics";

// Mock fetch
global.fetch = jest.fn();

describe("AnalyticsTracker", () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
    jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("singleton instance", () => {
    it("should use the exported analytics singleton", () => {
      expect(analytics).toBeInstanceOf(AnalyticsTracker);
    });
  });

  describe("trackPageView", () => {
    it("should track page view with correct data", async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      await analytics.trackPageView("/test-page", "Test Page");

      expect(global.fetch).toHaveBeenCalledWith("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: expect.stringContaining('"eventName":"page_view"'),
      });

      const callBody = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
      expect(callBody.properties.path).toBe("/test-page");
      expect(callBody.properties.title).toBe("Test Page");
    });

    it("should include referrer if available", async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      await analytics.trackPageView("/test", "Test");

      const callBody = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
      expect(callBody.properties.referrer).toBeDefined();
    });
  });

  describe("trackFormSubmission", () => {
    it("should track successful form submission", async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      await analytics.trackFormSubmission("contact_form", true);

      expect(global.fetch).toHaveBeenCalledWith("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: expect.stringContaining('"eventName":"form_submission"'),
      });

      const callBody = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
      expect(callBody.properties.form_name).toBe("contact_form");
      expect(callBody.properties.success).toBe(true);
    });

    it("should track failed form submission with error message", async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      await analytics.trackFormSubmission("pricing_form", false, "Validation failed");

      const callBody = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
      expect(callBody.properties.success).toBe(false);
      expect(callBody.properties.error_message).toBe("Validation failed");
    });
  });

  describe("trackButtonClick", () => {
    it("should track button click with label and location", async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      await analytics.trackButtonClick("Get Started", "hero_section");

      expect(global.fetch).toHaveBeenCalledWith("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: expect.stringContaining('"eventName":"button_click"'),
      });

      const callBody = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
      expect(callBody.properties.button_name).toBe("Get Started");
      expect(callBody.properties.location).toBe("hero_section");
    });
  });

  describe("trackLinkClick", () => {
    it("should track link click with URL", async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      await analytics.trackLinkClick("/services", "Services Page");

      expect(global.fetch).toHaveBeenCalledWith("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: expect.stringContaining('"eventName":"link_click"'),
      });

      const callBody = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
      expect(callBody.properties.url).toBe("/services");
      expect(callBody.properties.link_text).toBe("Services Page");
    });
  });

  describe("trackEvent", () => {
    it("should track custom event", async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      await analytics.trackEvent("custom_event", { key: "value" });

      expect(global.fetch).toHaveBeenCalledWith("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: expect.stringContaining('"eventName":"custom_event"'),
      });

      const callBody = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
      expect(callBody.properties.key).toBe("value");
    });

    it("should handle fetch errors gracefully", async () => {
      (global.fetch as jest.Mock).mockRejectedValueOnce(new Error("Network error"));
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

      await analytics.trackEvent("test_event");

      expect(consoleErrorSpy).toHaveBeenCalledWith("Analytics tracking error:", expect.any(Error));

      consoleErrorSpy.mockRestore();
    });
  });
});
