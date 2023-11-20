const { User } = require("../models");

const getPanelPage = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: res.locals.user.id } });
    res.status(200).json({
      message: "Welcome",
      user: `${user.first_name}`,
    });
  } catch (error) {
    res.status(500);
    return next(new Error(error.message));
  }
};

const logoutUser = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500);
    return next(new Error(error.message));
  }
};

module.exports = { getPanelPage, logoutUser };
