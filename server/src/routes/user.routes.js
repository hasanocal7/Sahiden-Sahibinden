const controller = require("../controllers/index");
const router = require("express").Router();
const authentication = require("../middlewares/authentication");

router
  .route("/")
  .get(
    authentication.authenticationToken,
    controller.authController.getAllUsers
  );

router
  .route("/:id")
  .get(authentication.authenticationToken, controller.authController.getUser);

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

module.exports = router;
