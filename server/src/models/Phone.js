module.exports = (sequelize, DataTypes) => {
  const Phone = sequelize.define("Phone", {
    brand: { type: DataTypes.STRING, allowNull: false },
    model: { type: DataTypes.STRING, allowNull: false },
    ram: { type: DataTypes.STRING, allowNull: false },
    operating_system: { type: DataTypes.STRING, allowNull: false },
    internal_memory: { type: DataTypes.STRING, allowNull: false },
    camera: { type: DataTypes.STRING, allowNull: false },
    front_camera: { type: DataTypes.STRING, allowNull: false },
    screen_size: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
  });

  Phone.associate = (models) => {
    Phone.belongsTo(models.Ad, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Phone;
};
