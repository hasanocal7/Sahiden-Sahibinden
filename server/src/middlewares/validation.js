const validators = require("../utils/validators/index");

exports.beforeRegister = async (req, res, next) => {
  try {
    const { email, first_name, last_name, password } = req.body;
    validators.validationEmail(email);
    validators.validationFirstName(first_name);
    validators.validationLastName(last_name);
    validators.validationPassword(email, first_name, last_name, password);
    next();
  } catch (error) {
    res.status(error.statusCode || 400);
    return next(new Error(error.message));
  }
};

exports.beforeLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    validators.validationEmail(email);
    validators.validationPassword(undefined, undefined, undefined, password);
    if (req.headers.authorization) {
      res.status(401);
      return next(new Error("User already logged"));
    }
    next();
  } catch (error) {
    res.status(error.statusCode || 400);
    return next(new Error(error.message));
  }
};

exports.beforeForgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    validators.validationEmail(email);
    next();
  } catch (error) {
    res.status(error.statusCode || 400);
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
    res.status(error.statusCode || 400);
    return next(new Error(error.message));
  }
};
