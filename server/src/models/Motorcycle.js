module.exports = (sequelize, DataTypes) => {
  const Motorcycle = sequelize.define("Motorcycle", {
    brand: { type: DataTypes.STRING, allowNull: false },
    model: { type: DataTypes.STRING, allowNull: false },
    year: { type: DataTypes.INTEGER, allowNull: false },
    km: { type: DataTypes.INTEGER, allowNull: false },
    number_of_cyclinders: { type: DataTypes.INTEGER, allowNull: false },
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
