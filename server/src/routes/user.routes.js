const controller = require("../controllers/index");
const router = require("express").Router();
const authentication = require("../middlewares/authentication");
const upload = require("../utils/imageUploader");

router.use(authentication.checkUser);
router.use(authentication.authenticationToken);

router.route("/signout").post(controller.authController.logoutUser);
router.route("/panel").post(controller.authController.getPanelPage);
router
  .route("/update")
  .patch(upload.single("image"), controller.authController.editPersonalInfo);
router.route("/phonenumber").patch(controller.authController.addPhoneNumber);

module.exports = router;
