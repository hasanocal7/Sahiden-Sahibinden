const authController = require("../controller/authController");
const router = require("express").Router();
const userAuth = require("../middleware/userAuth");

router.get("/", authController.getAllUsers);
router.get("/:id", authController.getUser);
router.post("/signup", userAuth.beforeRegister, authController.createUser);

module.exports = router;
