// utils/validators.js
/**
 * Basic validation utilities.
 * Extend as needed for your domain models.
 */

function isEmail(email) {
  const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email);
}

function isNonEmptyString(str) {
  return typeof str === 'string' && str.trim().length > 0;
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object' && !Array.isArray(obj);
}

module.exports = { isEmail, isNonEmptyString, isObject };
