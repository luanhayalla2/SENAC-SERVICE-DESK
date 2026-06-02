// middlewares/rateLimitMiddleware.js
const rateLimit = require('express-rate-limit');
const { RateLimiterMemory } = require('rate-limiter-flexible');

// General API rate limiter (100 requests per minute)
const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  message: { message: 'Too many requests, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Authentication-specific limiter (10 requests per minute)
const authLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: { message: 'Authentication attempts exceeded, try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { apiLimiter, authLimiter };
