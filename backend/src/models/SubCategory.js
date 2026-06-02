const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SubCategory = sequelize.define('SubCategory', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  categoryId: { type: DataTypes.INTEGER, references: { model: 'Categories', key: 'id' } },
}, {
  tableName: 'subcategories',
  timestamps: true,
});

module.exports = SubCategory;
