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
    if (!ads) {
      throw new Error("Ad not found");
    }
    res.status(200).json({
      ilanlar: ads,
    });
  } catch (error) {
    res.status(404);
    return next(new Error(error.message));
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
    res.status(404);
    return next(new Error(error.message));
  }
};

const categoryFilter = async (req, res, next) => {
  try {
    const category = req.params.category;
    const ads = await services.adServices.categoryFilter(category);
    if (!ads) {
      throw new Error("Ads not found");
    }
    res.status(200).json({
      ads: ads,
    });
  } catch (error) {
    res.status(404);
    return next(new Error(error.message));
  }
};

const updateAd = async (req, res, next) => {
  try {
    const id = req.params.id;
    const ad = await services.adServices.updateAd(id, req.body);
    if (ad <= 0) {
      throw new Error("Ad not found");
    }
    res.status(200).json({
      message: "Ad updated successfuly",
      ad: ad,
    });
  } catch (error) {
    res.status(404);
    return next(new Error(error.message));
  }
};

const deleteAd = async (req, res, next) => {
  try {
    const id = req.params.id;
    const ad = await services.adServices.deleteAd(id);
    if (ad <= 0) {
      throw new Error("Ad not found");
    }
    res.status(200).json({
      message: `${id} was deleted`,
    });
  } catch (error) {
    res.status(404);
    return next(new Error(error.message));
  }
};

module.exports = {
  createAd,
  getAllAds,
  getAd,
  categoryFilter,
  updateAd,
  deleteAd,
};
