// backend/src/models/Ticket.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ticket = sequelize.define('Ticket', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  level: { type: DataTypes.ENUM('N1', 'N2', 'N3'), defaultValue: 'N1' },
  status: { type: DataTypes.ENUM('open', 'in_progress', 'closed'), defaultValue: 'open' },
  priority: { type: DataTypes.INTEGER, defaultValue: 3 },
  // foreign keys will be defined via associations elsewhere
}, {
  timestamps: true,
  tableName: 'tickets'
});

module.exports = Ticket;
