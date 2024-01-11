const controller = require("../controllers/index");
const router = require("express").Router();
const authentication = require("../middlewares/authentication");

router.use(authentication.checkUser);
router.use(authentication.authenticationToken);

router.route("/signout").post(controller.authController.logoutUser);
router.route("/panel").get(controller.authController.getPanelPage);
router.route("/update").patch(controller.authController.editPersonalInfo);
router.route("/phonenumber").patch(controller.authController.addPhoneNumber);

module.exports = router;
