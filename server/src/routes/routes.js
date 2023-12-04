const router = require("express").Router();
const pageRoute = require("./page.routes");
const userRoute = require("./user.routes");
const adRoute = require("./ad.routes");

router.use("/users", userRoute);
router.use("/", pageRoute);
router.use("/ads", adRoute);

module.exports = router;
