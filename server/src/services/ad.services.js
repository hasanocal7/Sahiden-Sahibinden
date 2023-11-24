const { Ad } = require("../models");
const slugify = require("slugify");

const createAd = async (
  title,
  description,
  price,
  category,
  address,
  image,
  userID
) => {
  const ad = await Ad.create({
    title: title,
    description: description,
    price: Number(price),
    category: category,
    address: address,
    image: image,
    UserId: userID,
  });
  await Ad.update(
    {
      slug: String(
        slugify(`${ad.category} ${ad.title} ${ad.id}`)
      ).toLowerCase(),
    },
    { where: { id: ad.id } }
  );
  return ad;
};

const getAllAds = async (query = "") => {
  let ads = await Ad.findAll();
  if (query) {
    const filteredAds = ads.filter((ad) => ad.slug.includes(query));
    return filteredAds;
  } else {
    return ads;
  }
};

const getAd = async (slug) => {
  const filter = slug.split("-").at(-1);
  const ad = await Ad.findOne({
    where: { id: filter },
  });
  return ad;
};

const categoryFilter = async (category) => {
  const filter = category ? { category } : {};
  const ads = await Ad.findAll({ where: filter });
  return ads;
};

const updateAd = async (id, ad = {}) => {
  const updatedAd = await Ad.update(ad, { where: { id: id } });
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
