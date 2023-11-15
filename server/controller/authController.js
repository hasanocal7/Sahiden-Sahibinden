const { User } = require("../models");

exports.getAllUsers = async (req, res, next) => {
  try {
    if (res.locals.user !== null) {
      const users = await User.findAll();
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500);
    return next(new Error(error.message));
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    res.status(200).json(user);
  } catch (error) {
    res.status(500);
    return next(new Error(error.message));
  }
};

exports.getPanelPage = async (req, res, next) => {
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

exports.logoutUser = async (req, res, next) => {
  try {
    res.clearCookie("accessToken");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500);
    return next(new Error(error.message));
  }
};
