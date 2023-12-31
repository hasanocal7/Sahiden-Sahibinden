const services = require("../services/index");
const { Ad } = require("../models");

const createAd = async (req, res, next) => {
  try {
    const userID = res.locals.user.id;
    const allData = req.body;
    console.log(allData);
    console.log(req.files);
    const mainData = {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      address: `${req.body.province}/${req.body.distcrict}/${req.body.neighborhood}`,
      ...(req.files ? { image: req.files.map((image) => image.filename) } : {}),
      UserId: userID,
      category: req.body.category,
      sub_category: req.body.sub_category,
    };

    let subCategoryData = {};

    let foundSubCat = false;

    for (const key in allData) {
      if (key === "sub_category") {
        foundSubCat = true;
        continue;
      }

      if (foundSubCat) {
        subCategoryData[key] = allData[key];
      }
    }
    console.log(mainData);
    console.log(subCategoryData);
    const ad = await services.adServices.createAd(mainData, subCategoryData);
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
      ads: ads,
    });
  } catch (error) {
    res.status(404);
    return next(new Error(error.message));
  }
};

const getAllAdsOfUser = async (req, res, next) => {
  try {
    const userID = res.locals.user.id;
    const ads = await services.adServices.getAllAdsOfUser(userID);
    res.status(200).json({
      ads: ads,
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

const subCategoryFilter = async (req, res, next) => {
  try {
    const sub_category = req.params.sub_category;
    const ads = await services.adServices.categoryFilter.subCategoryFilter(
      sub_category
    );
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
    const { body: adData, files } = req;
    const images = files.map((image) => image.path);

    let updatedAdData = { ...adData };

    if (images && adData) {
      updatedAdData = { ...adData, image: images };
    }

    if (
      updatedAdData.province ||
      updatedAdData.distcrict ||
      updatedAdData.neighborhood
    ) {
      res.status(400);
      throw new Error("Missing address details");
    }

    const columnNames = Object.keys(Ad.rawAttributes);
    const adDataKeys = Object.keys(updatedAdData);
    let subCategoryData = {};

    for (const key of adDataKeys) {
      if (!columnNames.includes(key)) {
        subCategoryData[key] = updatedAdData[key];
        delete updatedAdData[key];
      }
    }

    const id = req.params.id;
    let ad;

    if (Object.keys(subCategoryData).length > 0) {
      ad = await services.adServices.updateAd(
        id,
        updatedAdData,
        subCategoryData
      );
    } else {
      ad = await services.adServices.updateAd(id, updatedAdData);
    }

    if (!ad) {
      throw new Error("Update error");
    }

    res.status(200).json({
      message: "Ad updated successfully",
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
    const ad = await services.adServices.deleteAd(id).image;
    if (ad <= 0) {
      res.status(400);
      throw new Error("Ad not found");
    }
    res.status(200).json({
      message: `${id} was deleted`,
    });
  } catch (error) {
    res.status(error.statusCode);
    return next(new Error(error.message));
  }
};

module.exports = {
  createAd,
  getAllAds,
  getAllAdsOfUser,
  getAd,
  categoryFilter,
  subCategoryFilter,
  updateAd,
  deleteAd,
};
