const validators = require("../utils/validators/index");

exports.beforeRegister = async (req, res, next) => {
  try {
    const { email, first_name, last_name, password } = req.body;
    validators.validationEmail(email);
    validators.validationFirstName(first_name);
    validators.validationLastName(last_name);
    validators.validationPassword(email, first_name, last_name, password);
    if (req.headers.authorization) {
      res.status(401);
      return next(new Error("User already logged"));
    }
    next();
  } catch (error) {
    res.status(400);
    return next(new Error(error.message));
  }
};

exports.beforeLogin = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      res.status(401);
      return next(new Error("User already logged"));
    }
    next();
  } catch (error) {
    return next(new Error(error.message));
  }
};

exports.beforeForgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    validators.validationEmail(email);
    next();
  } catch (error) {
    res.status(400);
    return next(new Error(error.message));
  }
};

const { User } = require("../models");

exports.beforeChangePassword = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ where: { id: id } });
    const currentPassword = user.password;
    const { newPassword, confirmNewPassword } = req.body;

    validators.validationPassword(undefined, undefined, undefined, newPassword);
    validators.validationPassword(
      undefined,
      undefined,
      undefined,
      confirmNewPassword
    );
    validators.validationNewPassword(
      currentPassword,
      newPassword,
      confirmNewPassword
    );
    next();
  } catch (error) {
    res.status(400);
    return next(new Error(error.message));
  }
};

exports.beforeAd = async (req, res, next) => {
  try {
    const {
      title,
      description,
      price,
      category,
      province,
      distcrict,
      neighborhood,
    } = req.body;
    const images = req.files.map((file) => file.filename);
    validators.validationTitle(title);
    validators.validationDescription(description);
    validators.validationPrice(price);
    validators.validationCategory(category);
    validators.validationAddress(province, distcrict, neighborhood);
    validators.validationImage(images);
    next();
  } catch (error) {
    res.status(400);
    return next(new Error(error.message));
  }
};
