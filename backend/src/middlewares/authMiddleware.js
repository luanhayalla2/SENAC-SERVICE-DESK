// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt');

/**
 * Authentication middleware
 * Verifies JWT token from Authorization header (Bearer <token>)
 * Attaches decoded user payload to req.user.
 */
function authenticate(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ message: 'Missing Authorization header' });

  const token = authHeader.split(' ')[1]; // Expect "Bearer <token>"
  if (!token) return res.status(401).json({ message: 'Token not provided' });

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded; // { id, role, iat, exp }
    next();
  } catch (err) {
    console.error('Auth error:', err);
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
}

module.exports = { authenticate };
