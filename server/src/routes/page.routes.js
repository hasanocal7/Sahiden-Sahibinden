const controller = require("../controllers/index");
const router = require("express").Router();
const validation = require("../middlewares/validation");

const authentication = require("../middlewares/authentication");
router.use(authentication.checkUser);
router
  .route("/signup")
  .post(validation.beforeRegister, controller.pageController.createUser);

router
  .route("/signin")
  .post(validation.beforeLogin, controller.pageController.loginUser);

router
  .route("/forgot-password")
  .post(
    validation.beforeForgotPassword,
    controller.pageController.forgotPassword
  );

router
  .route("/forgot-password/:token")
  .put(
    validation.beforeChangePassword,
    controller.pageController.changePassword
  );

module.exports = router;
