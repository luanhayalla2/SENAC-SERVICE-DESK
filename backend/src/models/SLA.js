// models/SLA.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

module.exports = sequelize.define('SLA', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  ticketId: { type: DataTypes.INTEGER, allowNull: false },
  targetHours: { type: DataTypes.INTEGER, allowNull: false }, // SLA target in hours
  breached: { type: DataTypes.BOOLEAN, defaultValue: false },
  breachedAt: { type: DataTypes.DATE, allowNull: true },
}, {
  timestamps: true,
  tableName: 'slas',
});
