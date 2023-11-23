const services = require("../services/index");

const createAd = async (req, res, next) => {
  try {
    const userID = res.locals.user.id;
    const images = req.files.map((file) => file.path);
    const {
      title,
      description,
      price,
      category,
      province,
      distcrict,
      neighborhood,
    } = req.body;
    let address = [province, distcrict, neighborhood];
    address = address.join(" / ");
    const ad = await services.adServices.createAd(
      title,
      description,
      price,
      category,
      address,
      images,
      userID
    );
    res.status(201);
    res.json({
      success: true,
      message: "Ad created successfuly",
      ad: ad,
    });
  } catch (error) {
    res.status(400);
    return next(new Error(error.message));
  }
};

const getAllAds = async (req, res, next) => {
  try {
    const query = req.query.search;
    const ads = await services.adServices.getAllAds(query);
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
    const ad = await services.adServices.getAd(slug);
    if (!ad) {
      res.status(404);
      throw new Error("Ad not found");
    }
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
    const ads = await services.adServices.categoryFilter(category);
    res.status(200).json({
      ads: ads,
    });
  } catch (error) {
    next(error);
  }
};

const updateAd = async (req, res, next) => {
  try {
    const id = req.params.id;
    const ad = await services.adServices.updateAd(id);
    if (ad) {
      res.status(404);
      throw new Error("Ad not found");
    }
    res.status(200).json({
      message: "Ad updated successfuly",
      ad: ad,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createAd, getAllAds, getAd, categoryFilter, updateAd };
