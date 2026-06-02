// models/Position.js
module.exports = (sequelize, DataTypes) => {
  const Position = sequelize.define('Position', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    // Additional fields like description, level can be added
  }, {
    timestamps: true,
    tableName: 'positions',
  });
  return Position;
};
