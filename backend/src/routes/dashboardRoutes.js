// routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// Example: Get dashboard overview data
router.get('/overview', dashboardController.getOverview);

// Example: Get stats for a specific period
router.get('/stats/:period', dashboardController.getStats);

module.exports = router;
