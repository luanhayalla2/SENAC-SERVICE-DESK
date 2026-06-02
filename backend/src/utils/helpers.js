// utils/helpers.js
/**
 * General helper utilities used across the project.
 */

const crypto = require('crypto');

/**
 * Generate a random UUID v4.
 * @returns {string} UUID string
 */
function generateUuid() {
  return crypto.randomUUID();
}

/**
 * Simple password hashing using bcrypt.
 * @param {string} password - plain text password
 * @returns {Promise<string>} hashed password
 */
async function hashPassword(password) {
  const bcrypt = require('bcrypt');
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

/**
 * Compare a plaintext password with a bcrypt hash.
 * @param {string} password - plain text password
 * @param {string} hash - stored bcrypt hash
 * @returns {Promise<boolean>} true if match
 */
async function comparePassword(password, hash) {
  const bcrypt = require('bcrypt');
  return bcrypt.compare(password, hash);
}

module.exports = { generateUuid, hashPassword, comparePassword };
