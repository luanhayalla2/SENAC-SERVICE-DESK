// routes/reportRoutes.js
const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Generate reports
router.get('/tickets-by-status', reportController.ticketsByStatus);
router.get('/sla-breach-average', reportController.averageSlaBreachTime);

module.exports = router;
