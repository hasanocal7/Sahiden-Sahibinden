const { User } = require("../models");
const validator = require("validator");

exports.beforeRegister = async (req, res, next) => {
  const { email, first_name, last_name, password } = req.body;

  if (!email) {
    res.status(400);
    return next(new Error("Please enter a email address"));
  }

  if (!validator.isEmail(email)) {
    res.status(400);
    return next(new Error("Please enter a valid email address"));
  }

  const user = await User.findOne({ where: { email: email } });
  if (user) {
    res.status(400);
    return next(new Error("This email already exists"));
  }

  if (!first_name) {
    res.status(400);
    return next(new Error("Please enter your name"));
  }

  if (!last_name) {
    res.status(400);
    return next(new Error("Please enter your surname"));
  }

  if (!password) {
    res.status(400);
    return next(new Error("Please enter a password"));
  }

  if (!validator.isAlphanumeric(password)) {
    res.status(400);
    return next(new Error("Password must contain only letters and numbers"));
  }

  if (!validator.isLength(password, { min: 8, max: 255 })) {
    res.status(400);
    return next(
      new Error("Password must be between 8 and 255 characters long")
    );
  }

  const containsLowercase = (value) => {
    if (!/[a-z]/.test(value)) {
      res.status(400);
      return next(
        new Error("Password must contain at least one lowercase letter")
      );
    }
  };
  const containsUppercase = (value) => {
    if (!/[A-Z]/.test(value)) {
      res.status(400);
      return next(
        new Error("Password must contain at least one uppercase letter")
      );
    }
  };

  containsLowercase(password);
  containsUppercase(password);
  next();
};
