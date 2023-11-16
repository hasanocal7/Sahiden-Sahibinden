const router = require("express").Router();
const pageRoute = require("./page.routes");
const userRoute = require("./user.routes");

const { checkUser } = require("../middlewares/authentication");
router.use(["/users"], checkUser);
router.use("/users", userRoute);
router.use("/", pageRoute);

module.exports = router;
