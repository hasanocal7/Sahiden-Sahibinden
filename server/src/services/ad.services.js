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
const fs = require("fs");

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
    throw error;
  }
};

const categoryFilter = async (category) => {
  const filter = category ? { category } : {};
  const ads = await Ad.findAll({ where: filter });
  return ads;
};

const updateAd = async (id, adData, info) => {
  const ad = await Ad.findOne({ where: { id: id } });
  if (!ad) {
    throw new Error("Ad not found");
  }
  let updatedAd = await Ad.update(adData, { where: { id: id } });
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
    const updatedAdInfo = await subModel.update(info, { where: { AdId: id } });
    updatedAd = {
      ...updatedAd,
      ...updatedAdInfo,
    };
    return updatedAd;
  }
  return updatedAd;
};

const deleteAd = async (id) => {
  const ad = await Ad.findOne({ where: { id: id } });
  if (ad) {
    const imgPaths = ad.image;
    for (const img of imgPaths) {
      console.log(img);
      fs.unlink(img, (err) => {
        if (err) {
          throw err;
        }
      });
    }
  } else {
    throw new Error("Ad not found");
  }
  const deletedAd = await Ad.destroy({ where: { id: id } });
  return deletedAd;
};

module.exports = {
  createAd,
  getAllAds,
  getAd,
  categoryFilter,
  updateAd,
  deleteAd,
};
