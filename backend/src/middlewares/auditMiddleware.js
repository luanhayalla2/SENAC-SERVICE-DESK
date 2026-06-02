// middlewares/auditMiddleware.js
const { logger } = require('../utils/logger');

/**
 * Audit middleware – records each request and response details.
 * Intended for use globally: app.use(auditMiddleware);
 */
function auditMiddleware(req, res, next) {
  const start = Date.now();
  const { method, originalUrl, body, query, params } = req;
  const userId = req.user ? req.user.id : 'anonymous';

  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info('AUDIT', {
      userId,
      method,
      url: originalUrl,
      status: res.statusCode,
      duration,
      body,
      query,
      params,
    });
  });
  next();
}

module.exports = { auditMiddleware };
