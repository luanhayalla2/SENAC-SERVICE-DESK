// models/Unit.js
module.exports = (sequelize, DataTypes) => {
  const Unit = sequelize.define('Unit', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    // Additional fields can be added here (e.g., location, code)
  }, {
    timestamps: true,
    tableName: 'units',
  });
  return Unit;
};
