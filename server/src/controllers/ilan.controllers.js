const { Op } = require("sequelize");
const { Ilan } = require("../models");
const slugify = require("slugify");

const createAd = async (req, res, next) => {
  try {
    const { title, description, price, category, address } = req.body;
    const ad = await Ilan.create({
      title: title,
      description: description,
      price: Number(price),
      category: category,
      address: address,
      UserId: res.locals.user.id,
    });
    await Ilan.update(
      {
        slug: slugify(`${ad.category} ${ad.title} ${ad.id}`),
      },
      { where: { id: ad.id } }
    );
    res.status(201);
    res.json({
      success: true,
      message: "Ad created successfuly",
      ad: ad,
    });
  } catch (error) {
    next(error);
  }
};

const getAllAds = async (req, res, next) => {
  try {
    const query = req.query.search;
    let ads = await Ilan.findAll();
    if (query) {
      ads = ads.filter((ilan) => ilan.slug.includes(query));
      res.status(200).json({
        ilanlar: ads,
      });
    } else {
      res.status(200).json({
        ilanlar: ads,
      });
    }
  } catch (error) {
    next(error);
  }
};

const getAd = async (req, res, next) => {
  try {
    const slug = req.params.slug;
    const filter = slug.split("-").at(-1);
    const ad = await Ilan.findOne({
      where: { id: filter },
    });
    res.status(200);
    res.json({
      ad: ad,
    });
  } catch (error) {
    next(error);
  }
};

const categoryFilter = async (req, res, next) => {
  try {
    const category = req.params.category;
    const filter = category ? { category } : {};
    const ads = await Ilan.findAll({ where: filter });
    res.status(200).json({
      ads: ads,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createAd, getAllAds, getAd, categoryFilter };
