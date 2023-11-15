const authController = require("../controller/authController");
const router = require("express").Router();
const authentication = require("../middleware/authentication");

router.get("/", authentication.authenticationToken, authController.getAllUsers);
router.get("/:id", authentication.authenticationToken, authController.getUser);
router.post(
  "/signout",
  authentication.authenticationToken,
  authController.logoutUser
);
router.post(
  "/panel",
  authentication.authenticationToken,
  authController.getPanelPage
);

module.exports = router;
