// src/controllers/reportController.js
// TODO: Implement reporting endpoints (KPIs, analytics, export PDFs/Excel)

const { ReportService } = require('../services/reportService');

module.exports = {
  getReport: async (req, res) => {
    try {
      const { type, startDate, endDate } = req.query;
      const data = await ReportService.generateReport(type, { startDate, endDate });
      res.json({ success: true, data });
    } catch (err) {
      console.error('Report error:', err);
      res.status(500).json({ success: false, message: err.message });
    }
  },
  // Additional report actions (download, statistics) can be added here
};
