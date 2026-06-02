const express = require('express');
const router = express.Router();
// TODO: import notificationController once implemented
// Placeholder route – list notifications for a user
router.get('/user/:userId', (req, res) => {
  // Replace with notificationController.getUserNotifications(req, res);
  res.status(200).json({ message: 'List notifications for user ' + req.params.userId });
});

module.exports = router;
