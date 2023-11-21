const controller = require("../controllers/index");
const router = require("express").Router();
const authentication = require("../middlewares/authentication");
const upload = require("../utils/imageUploader");

router.use(authentication.checkUser);

router
  .route("/signout")
  .post(
    authentication.authenticationToken,
    controller.authController.logoutUser
  );

router
  .route("/panel")
  .post(
    authentication.authenticationToken,
    controller.authController.getPanelPage
  );

router
  .route("/update")
  .patch(
    upload.single("image"),
    authentication.authenticationToken,
    controller.authController.editPersonalInfo
  );

router
  .route("/phonenumber")
  .patch(
    authentication.authenticationToken,
    controller.authController.addPhoneNumber
  );

module.exports = router;
