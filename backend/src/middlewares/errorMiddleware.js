// middlewares/errorMiddleware.js
/**
 * Global error handling middleware.
 * Should be placed after all route handlers: app.use(errorMiddleware);
 */
function errorMiddleware(err, req, res, next) {
  console.error('Error:', err);
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ error: message, ...(process.env.NODE_ENV === 'development' && { stack: err.stack }) });
}

module.exports = { errorMiddleware };
