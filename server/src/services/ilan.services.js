const { Ilan } = require("../models");
const slugify = require("slugify");

const createAd = async (
  title,
  description,
  price,
  category,
  address,
  userID
) => {
  const ad = await Ilan.create({
    title: title,
    description: description,
    price: Number(price),
    category: category,
    address: address,
    UserId: userID,
  });
  await Ilan.update(
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
  let ads = await Ilan.findAll();
  if (query) {
    const filteredAds = ads.filter((ilan) => ilan.slug.includes(query));
    return filteredAds;
  } else {
    return ads;
  }
};

const getAd = async (slug) => {
  const filter = slug.split("-").at(-1);
  const ad = await Ilan.findOne({
    where: { id: filter },
  });
  return ad;
};

const categoryFilter = async (category) => {
  const filter = category ? { category } : {};
  const ads = await Ilan.findAll({ where: filter });
  return ads;
};

module.exports = { createAd, getAllAds, getAd, categoryFilter };
