const {
  Ad,
  Car,
  Computer,
  Housing,
  Land,
  Motorcycle,
  Phone,
} = require("../models");
const slugify = require("slugify");
const { Op } = require("sequelize");

const createAd = async (adData, subCategoryData) => {
  try {
    const ad = await Ad.create(adData);
    let subModel;
    switch (ad.sub_category) {
      case "Housing":
        subModel = Housing;
        break;
      case "Land":
        subModel = Land;
        break;
      case "Car":
        subModel = Car;
        break;
      case "Motorcycle":
        subModel = Motorcycle;
        break;
      case "Computer":
        subModel = Computer;
        break;
      case "Phone":
        subModel = Phone;
        break;
      default:
        throw new Error("Invalid sub category");
    }
    await Ad.update(
      {
        slug: slugify(`${ad.category} ${ad.sub_category} ${ad.title} ${ad.id}`),
      },
      { where: { id: ad.id } }
    );
    await subModel.create({ ...subCategoryData, AdId: ad.id });

    return ad;
  } catch (error) {
    throw new Error("Error creating ad");
  }
};

const getAllAds = async (query = "") => {
  let ads = await Ad.findAll();
  if (query) {
    ads = await Ad.findAll({
      where: {
        title: {
          [Op.like]: `%${String(query).toLowerCase()}%`,
        },
      },
    });
    return ads;
  }
  return ads;
};

const getAd = async (slug) => {
  try {
    const filter = Number(slug.split("-").at(-1));
    if (isNaN(filter)) {
      throw new Error("Invalid filter value");
    }

    let ad = await Ad.findOne({
      where: { id: filter },
    });

    if (!ad) throw new Error("Ad not found");

    let subModel;
    switch (ad.sub_category) {
      case "Housing":
        subModel = Housing;
        break;
      case "Land":
        subModel = Land;
        break;
      case "Car":
        subModel = Car;
        break;
      case "Motorcycle":
        subModel = Motorcycle;
        break;
      case "Computer":
        subModel = Computer;
        break;
      case "Phone":
        subModel = Phone;
        break;
      default:
        throw new Error(`Invalid sub category: ${ad.sub_category}`);
    }

    const adInfo = await subModel.findOne({ where: { AdId: ad.id } });

    switch (ad.sub_category) {
      case "NewCategory":
        subModel = NewCategory;
        break;
    }
    ad = {
      ...ad.dataValues,
      ...adInfo.dataValues,
    };

    return ad;
  } catch (error) {
    console.error("Error in getAd:", error);
    throw error;
  }
};

const categoryFilter = async (category) => {
  const filter = category ? { category } : {};
  const ads = await Ad.findAll({ where: filter });
  return ads;
};

const updateAd = async (id, ad = {}, info = {}) => {
  const updatedAd = await Ad.update(ad, { where: { id: id } });
  if (info) {
    let subModel;
    switch (ad.sub_category) {
      case "Housing":
        subModel = Housing;
        break;
      case "Land":
        subModel = Land;
        break;
      case "Car":
        subModel = Car;
        break;
      case "Motorcycle":
        subModel = Motorcycle;
        break;
      case "Computer":
        subModel = Computer;
        break;
      case "Phone":
        subModel = Phone;
        break;
      default:
        throw new Error("Invalid sub category");
    }
    const updatedAdInfo = await Ad.update(info, { where: { AdId: id } });
    return updatedAdInfo;
  }
  return updatedAd;
};

const deleteAd = async (id) => {
  const updatedAd = await Ad.destroy({ where: { id: id } });
  return updatedAd;
};

module.exports = {
  createAd,
  getAllAds,
  getAd,
  categoryFilter,
  updateAd,
  deleteAd,
};
