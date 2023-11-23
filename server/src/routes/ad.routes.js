const router = require("express").Router();
const controller = require("../controllers/index");
const authentication = require("../middlewares/authentication");
const { beforeAd } = require("../middlewares/validation");
const upload = require("../utils/imageUploader");

router.use(authentication.checkUser);
router.use(authentication.authenticationToken);
router
  .route("/")
  .post(upload.array("image", 10), beforeAd, controller.adController.createAd);
router.route("/").get(controller.adController.getAllAds);
router.route("/:slug/detay").get(controller.adController.getAd);
router.route("/category/:category").get(controller.adController.categoryFilter);
router.route("/:id").patch(controller.adController.updateAd);

module.exports = router;
