// backend/src/config/jwt.js

require('dotenv').config({ path: '../../.env' });

module.exports = {
  secret: process.env.JWT_SECRET || 'supersecretkey',
  expiresIn: '1h', // token validity
};
