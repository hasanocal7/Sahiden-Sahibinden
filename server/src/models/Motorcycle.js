module.exports = (sequelize, DataTypes) => {
  const Motorcycle = sequelize.define("Motorcycle", {
    brand: { type: DataTypes.STRING, allowNull: false },
    model: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    year: { type: DataTypes.INTEGER, allowNull: false },
    fuel: { type: DataTypes.STRING, allowNull: false },
    gear: { type: DataTypes.STRING, allowNull: false },
    vehicle_status: { type: DataTypes.STRING, allowNull: false },
    km: { type: DataTypes.INTEGER, allowNull: false },
    engine_power: { type: DataTypes.STRING, allowNull: false },
    engine_volume: { type: DataTypes.STRING, allowNull: false },
    number_of_cyclinders: { type: DataTypes.INTEGER, allowNull: false },
    from_whom: { type: DataTypes.STRING, allowNull: false },
  });

  Motorcycle.associate = (models) => {
    Motorcycle.belongsTo(models.Ad, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Motorcycle;
};
