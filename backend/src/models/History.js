// models/History.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

module.exports = sequelize.define('History', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  ticketId: { type: DataTypes.INTEGER, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  action: { type: DataTypes.STRING, allowNull: false }, // e.g., 'created', 'status_updated'
  details: { type: DataTypes.TEXT, allowNull: true },
}, {
  timestamps: true,
  tableName: 'histories',
});
