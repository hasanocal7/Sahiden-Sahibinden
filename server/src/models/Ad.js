module.exports = (sequelize, Datatypes) => {
  const Ad = sequelize.define("Ad", {
    title: { type: Datatypes.STRING, allowNull: false },
    description: { type: Datatypes.TEXT, allowNull: false },
    price: { type: Datatypes.INTEGER, allowNull: false },
    category: {
      type: Datatypes.ENUM("Property", "Vehicle", "Electronics"),
      allowNull: false,
    },
    address: { type: Datatypes.TEXT, allowNull: false },
    image: { type: Datatypes.ARRAY(Datatypes.STRING), allowNull: false },
    slug: { type: Datatypes.TEXT, allowNull: true },
  });

  Ad.associate = (models) => {
    Ad.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Ad;
};
