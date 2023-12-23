module.exports = (sequelize, DataTypes) => {
  const Ad = sequelize.define("Ad", {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    sub_category: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.TEXT, allowNull: false },
    location: { type: DataTypes.GEOMETRY, allowNull: true },
    image: { type: DataTypes.JSON, allowNull: false },
    slug: { type: DataTypes.TEXT, allowNull: true },
  });

  Ad.associate = (models) => {
    Ad.hasMany(models.Car, { onUpdate: "cascade", onDelete: "cascade" });
    Ad.hasMany(models.Computer, { onUpdate: "cascade", onDelete: "cascade" });
    Ad.hasMany(models.Housing, { onUpdate: "cascade", onDelete: "cascade" });
    Ad.hasMany(models.Land, { onUpdate: "cascade", onDelete: "cascade" });
    Ad.hasMany(models.Motorcycle, { onUpdate: "cascade", onDelete: "cascade" });
    Ad.hasMany(models.Phone, { onUpdate: "cascade", onDelete: "cascade" });
  };

  return Ad;
};
