module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define("Car", {
    brand: { type: DataTypes.STRING, allowNull: false },
    series: { type: DataTypes.STRING, allowNull: false },
    model: { type: DataTypes.STRING, allowNull: false },
    year: { type: DataTypes.INTEGER, allowNull: false },
    fuel: { type: DataTypes.STRING, allowNull: false },
    gear: { type: DataTypes.STRING, allowNull: false },
    km: { type: DataTypes.INTEGER, allowNull: false },
    case_type: { type: DataTypes.STRING, allowNull: false },
    traction: { type: DataTypes.STRING, allowNull: false },
  });

  Car.associate = (models) => {
    Car.belongsTo(models.Ad, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Car;
};
