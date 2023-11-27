module.exports = (sequelize, DataTypes) => {
  const Computer = sequelize.define("Computer", {
    brand: { type: DataTypes.STRING, allowNull: false },
    processor: { type: DataTypes.STRING, allowNull: false },
    ram: { type: DataTypes.STRING, allowNull: false },
    hdd: { type: DataTypes.STRING, allowNull: false },
    ssd: { type: DataTypes.STRING, allowNull: false },
    display_card: { type: DataTypes.STRING, allowNull: false },
    screen_size: { type: DataTypes.STRING, allowNull: false },
    resolution: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
  });

  Computer.associate = (models) => {
    Computer.belongsTo(models.Ad, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Computer;
};
