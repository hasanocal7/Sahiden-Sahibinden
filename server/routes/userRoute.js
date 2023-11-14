const authController = require("../controller/authController");
const router = require("express").Router();
const userAuth = require("../middleware/userAuth");

router.get("/", userAuth.authenticationToken, authController.getAllUsers);
router.get("/:id", userAuth.authenticationToken, authController.getUser);
router.post("/signup", userAuth.beforeRegister, authController.createUser);
router.post("/signin", userAuth.beforeLogin, authController.loginUser);
router.post("/signout", authController.logoutUser);
router.get("/panel", userAuth.authenticationToken, authController.getPanelPage);

module.exports = router;
