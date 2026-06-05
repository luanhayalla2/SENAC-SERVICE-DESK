// src/controllers/notificationController.js

/**
 * Notification Controller placeholder
 * Handles creation and retrieval of user notifications (real‑time & email).
 */
module.exports = {
  // GET /notifications - list notifications for the logged‑in user
  async list(req, res) {
    // TODO: fetch notifications from DB or cache
    res.json({ message: 'List notifications - not implemented' });
  },

  // POST /notifications/mark-read - mark one or more notifications as read
  async markRead(req, res) {
    const { ids } = req.body; // array of notification IDs
    // TODO: update read status in DB
    res.json({ message: 'Marked notifications as read - not implemented', ids });
  }
};
