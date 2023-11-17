const router = require("express").Router();
const pageRoute = require("./page.routes");
const userRoute = require("./user.routes");
const ilanRoute = require("./ilan.routes");

const { checkUser } = require("../middlewares/authentication");
router.use("*", checkUser);
router.use("/users", userRoute);
router.use("/", pageRoute);
router.use("/ads", ilanRoute);

module.exports = router;
