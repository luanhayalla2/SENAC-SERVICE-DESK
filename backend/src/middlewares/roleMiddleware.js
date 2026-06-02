// middlewares/roleMiddleware.js
/**
 * Role‑based access control middleware.
 * Usage: router.get('/admin', authenticate, authorize(['admin']), handler);
 */
function authorize(allowedRoles = []) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
    const userRole = req.user.role;
    if (allowedRoles.length && !allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: 'Insufficient permissions' });
    }
    next();
  };
}

module.exports = { authorize };
