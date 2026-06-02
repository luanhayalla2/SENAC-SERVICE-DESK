// services/notificationService.js
/**
 * Service for handling notifications.
 * Provides functions to create a notification, retrieve a user's notifications,
 * and mark notifications as read.
 */
const { Notification } = require('../models'); // Assuming models exported via index.js

/**
 * Create a new notification.
 * @param {Object} payload - { userId, ticketId, type, message }
 * @returns {Promise<Notification>}
 */
async function createNotification({ userId, ticketId = null, type, message }) {
  return Notification.create({ userId, ticketId, type, message, read: false });
}

/**
 * Get unread notifications for a user.
 * @param {number} userId
 * @returns {Promise<Array<Notification>>}
 */
async function getUnreadNotifications(userId) {
  return Notification.findAll({ where: { userId, read: false }, order: [['createdAt', 'DESC']] });
}

/**
 * Mark a notification as read.
 * @param {number} notificationId
 * @returns {Promise<Notification|null>}
 */
async function markAsRead(notificationId) {
  const notif = await Notification.findByPk(notificationId);
  if (!notif) return null;
  await notif.update({ read: true });
  return notif;
}

module.exports = { createNotification, getUnreadNotifications, markAsRead };
