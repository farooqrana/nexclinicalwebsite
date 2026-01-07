import { checkRateLimit, getClientIP } from '@/lib/rate-limit';

describe('Rate Limiter', () => {
  beforeEach(() => {
    // Clear rate limit store before each test
    jest.clearAllMocks();
  });

  describe('checkRateLimit', () => {
    it('should allow requests within limit', () => {
      const identifier = 'test-user-1';
      const limit = 5;
      const windowMs = 60000; // 1 minute

      // First 5 requests should be allowed
      for (let i = 0; i < 5; i++) {
        const result = checkRateLimit(identifier, limit, windowMs);
        expect(result).toBe(true);
      }
    });

    it('should block requests over limit', () => {
      const identifier = 'test-user-2';
      const limit = 3;
      const windowMs = 60000;

      // First 3 requests allowed
      for (let i = 0; i < 3; i++) {
        checkRateLimit(identifier, limit, windowMs);
      }

      // 4th request should be blocked
      const result = checkRateLimit(identifier, limit, windowMs);
      expect(result).toBe(false);
    });

    it('should reset after window expires', async () => {
      const identifier = 'test-user-3';
      const limit = 2;
      const windowMs = 100; // 100ms window for testing

      // Use up limit
      checkRateLimit(identifier, limit, windowMs);
      checkRateLimit(identifier, limit, windowMs);

      // Should be blocked
      expect(checkRateLimit(identifier, limit, windowMs)).toBe(false);

      // Wait for window to expire
      await new Promise(resolve => setTimeout(resolve, 150));

      // Should be allowed again
      expect(checkRateLimit(identifier, limit, windowMs)).toBe(true);
    });

    it('should handle different identifiers separately', () => {
      const limit = 2;
      const windowMs = 60000;

      // User 1 makes 2 requests
      checkRateLimit('user-1', limit, windowMs);
      checkRateLimit('user-1', limit, windowMs);

      // User 1 should be blocked
      expect(checkRateLimit('user-1', limit, windowMs)).toBe(false);

      // User 2 should still be allowed
      expect(checkRateLimit('user-2', limit, windowMs)).toBe(true);
    });
  });

  describe('getClientIP', () => {
    it('should extract IP from x-forwarded-for header', () => {
      const mockRequest = new Request('http://localhost', {
        headers: {
          'x-forwarded-for': '192.168.1.1, 10.0.0.1',
        },
      });

      const ip = getClientIP(mockRequest);
      expect(ip).toBe('192.168.1.1');
    });

    it('should extract IP from x-real-ip header', () => {
      const mockRequest = new Request('http://localhost', {
        headers: {
          'x-real-ip': '192.168.1.2',
        },
      });

      const ip = getClientIP(mockRequest);
      expect(ip).toBe('192.168.1.2');
    });

    it('should return unknown when no IP headers present', () => {
      const mockRequest = new Request('http://localhost', {
        headers: {},
      });

      const ip = getClientIP(mockRequest);
      expect(ip).toBe('unknown');
    });

    it('should prefer x-forwarded-for over x-real-ip', () => {
      const mockRequest = new Request('http://localhost', {
        headers: {
          'x-forwarded-for': '192.168.1.1',
          'x-real-ip': '192.168.1.2',
        },
      });

      const ip = getClientIP(mockRequest);
      expect(ip).toBe('192.168.1.1');
    });
  });
});
