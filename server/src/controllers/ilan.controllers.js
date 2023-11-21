const services = require("../services/index");

const createAd = async (req, res, next) => {
  try {
    const userID = res.locals.user.id;
    const {
      title,
      description,
      price,
      category,
      province,
      district,
      neighborhood,
    } = req.body;
    let address = [province, district, neighborhood];
    address = address.join(" / ");
    const ad = await services.ilanServices.createAd(
      title,
      description,
      price,
      category,
      address,
      userID
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
    const ads = await services.ilanServices.getAllAds(query);
    res.status(200).json({
      ilanlar: ads,
    });
  } catch (error) {
    next(error);
  }
};

const getAd = async (req, res, next) => {
  try {
    const slug = req.params.slug;
    const ad = await services.ilanServices.getAd(slug);
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
    const ads = await services.ilanServices.categoryFilter(category);
    res.status(200).json({
      ads: ads,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createAd, getAllAds, getAd, categoryFilter };
