// models/Notification.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

module.exports = sequelize.define('Notification', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  ticketId: { type: DataTypes.INTEGER, allowNull: true },
  type: { type: DataTypes.STRING, allowNull: false }, // e.g., 'ticket_assigned', 'status_changed'
  message: { type: DataTypes.TEXT, allowNull: false },
  read: { type: DataTypes.BOOLEAN, defaultValue: false },
}, {
  timestamps: true,
  tableName: 'notifications',
});
