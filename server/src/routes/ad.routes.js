const router = require("express").Router();
const controller = require("../controllers/index");
const authentication = require("../middlewares/authentication");
const { beforeAd } = require("../middlewares/validation");
const upload = require("../utils/imageUploader");

router.use(authentication.checkUser);
router.use(authentication.authenticationToken);
router
  .route("/")
  .post(upload.array("image", 10), controller.adController.createAd);
router.route("/").get(controller.adController.getAllAds);
router.route("/userAds").get(controller.adController.getAllAdsOfUser);
router.route("/:slug/detay").get(controller.adController.getAd);
router.route("/category/:category").get(controller.adController.categoryFilter);
router
  .route("/category/:sub_category")
  .get(controller.adController.subCategoryFilter);
router
  .route("/:id")
  .patch(upload.array("image", 10), controller.adController.updateAd);
router.route("/:id").delete(controller.adController.deleteAd);

module.exports = router;
