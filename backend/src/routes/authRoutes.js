// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Login
router.post('/login', authController.login);
// Register
router.post('/register', authController.register);
// Refresh token
router.post('/refresh', authController.refreshToken);

module.exports = router;
