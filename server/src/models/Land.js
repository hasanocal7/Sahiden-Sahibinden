module.exports = (sequelize, DataTypes) => {
  const Land = sequelize.define("Land", {
    m2: { type: DataTypes.INTEGER, allowNull: false },
    zoning_status: { type: DataTypes.STRING, allowNull: false },
    island_no: { type: DataTypes.STRING, allowNull: false },
    parcel_no: { type: DataTypes.STRING, allowNull: false },
  });

  Land.associate = (models) => {
    Land.belongsTo(models.Ad, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Land;
};
