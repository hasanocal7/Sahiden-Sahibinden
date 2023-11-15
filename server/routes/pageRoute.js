const pageController = require("../controller/pageController");
const router = require("express").Router();
const userAuth = require("../middleware/validation");

router.post("/signup", userAuth.beforeRegister, pageController.createUser);
router.post("/signin", userAuth.beforeLogin, pageController.loginUser);
router.post(
  "/forgot-password",
  userAuth.beforeForgotPassword,
  pageController.forgotPassword
);
router.put(
  "/forgot-password/:id/:token",
  userAuth.beforeChangePassword,
  pageController.changePassword
);

module.exports = router;
