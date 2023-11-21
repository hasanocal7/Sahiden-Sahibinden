const router = require("express").Router();
const controller = require("../controllers/index");
const authentication = require("../middlewares/authentication");

router.use(authentication.checkUser);
router.use(authentication.authenticationToken);
router.route("/").post(controller.ilanController.createAd);
router.route("/").get(controller.ilanController.getAllAds);
router.route("/:slug/detay").get(controller.ilanController.getAd);
router
  .route("/category/:category")
  .get(controller.ilanController.categoryFilter);

module.exports = router;
