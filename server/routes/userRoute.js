const authController = require("../controller/authController");
const router = require("express").Router();
const userAuth = require("../middleware/userAuth");

router.get("/", authController.getAllUsers);
router.get("/:id", authController.getUser);
router.post("/signup", userAuth.beforeRegister, authController.createUser);
router.post("/signin", userAuth.beforeLogin, authController.loginUser);
router.post("/signout", authController.logoutUser);
router.post(
  "/panel",
  userAuth.authenticationToken,
  authController.getPanelPage
);

module.exports = router;
