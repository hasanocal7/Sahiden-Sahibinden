module.exports = (sequelize, DataTypes) => {
  const Housing = sequelize.define("Housing", {
    m2_gross: { type: DataTypes.INTEGER, allowNull: false },
    m2_net: { type: DataTypes.INTEGER, allowNull: false },
    room_count: { type: DataTypes.STRING, allowNull: false },
    building_age: { type: DataTypes.STRING, allowNull: false },
    floor_location: { type: DataTypes.STRING, allowNull: false },
    balcony: { type: DataTypes.BOOLEAN, allowNull: false },
    use_case: { type: DataTypes.STRING, allowNull: false },
  });

  Housing.associate = (models) => {
    Housing.belongsTo(models.Ad, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Housing;
};
