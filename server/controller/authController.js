const { User } = require("../models");
const cryptor = require("../utils/cryptor");
const jwt = require("jsonwebtoken");

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    res.status(200).json(user);
  } catch (error) {
    res.status(500);
    return next(new Error(error.message));
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const { email, first_name, last_name, password } = req.body;
    const hashedPassword = await cryptor.hash(password);
    const user = await User.create({
      email,
      first_name: first_name.charAt(0).toUpperCase() + first_name.slice(1),
      last_name: last_name.charAt(0).toUpperCase() + last_name.slice(1),
      password: hashedPassword,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
    return next(new Error(error.message));
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });
    const accessToken = jwt.sign(
      { ...user.dataValues },
      process.env.ACCESSTOKEN_SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
    /*     const refreshToken = jwt.sign(
      { ...user.dataValues },
      process.env.REFRESHTOKEN_SECRET_KEY
    ); */
    const maxAge = 24 * 60 * 60 * 1000;
    res.cookie("accessToken", accessToken, {
      maxAge: maxAge,
      httpOnly: true,
    });
    res.status(200).redirect("/");
  } catch (error) {
    res.status(500).send(error.message);
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
    res.redirect("/");
  } catch (error) {
    next(error);
  }
};
