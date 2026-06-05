const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

module.exports = sequelize.define('AuditLog', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, allowNull: true },
  action: { type: DataTypes.STRING, allowNull: false }, // e.g., 'login', 'create_ticket'
  entity: { type: DataTypes.STRING, allowNull: true }, // affected model name
  entityId: { type: DataTypes.INTEGER, allowNull: true },
  payload: { type: DataTypes.JSON, allowNull: true }, // snapshot of changes
}, {
  timestamps: true,
  tableName: 'audit_logs',
});
