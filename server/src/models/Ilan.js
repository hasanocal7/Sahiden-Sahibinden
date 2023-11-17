module.exports = (sequelize, Datatypes) => {
  const Ilan = sequelize.define("Ilan", {
    title: { type: Datatypes.STRING, allowNull: false },
    description: { type: Datatypes.TEXT, allowNull: false },
    price: { type: Datatypes.INTEGER, allowNull: false },
    category: { type: Datatypes.STRING, allowNull: false },
    address: { type: Datatypes.TEXT, allowNull: false },
    slug: { type: Datatypes.TEXT, allowNull: true },
  });

  Ilan.associate = (models) => {
    Ilan.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Ilan;
};
