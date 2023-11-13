const { User } = require("../models");
const validator = require("validator");
const cryptor = require("../utils/cryptor");
const jwt = require("jsonwebtoken");

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
  const emailCheck = email.split("@").splice(0, 1);
  const first_nameCheck = first_name.toLowerCase();
  const last_nameCheck = last_name.toLowerCase();
  const passwordCheck = password.toLowerCase();
  if (
    passwordCheck.includes(emailCheck) ||
    passwordCheck.includes(first_nameCheck) ||
    passwordCheck.includes(last_nameCheck)
  ) {
    res.status(400);
    return next(
      new Error(
        "Password cannot contain your first name, last name or e-mail address"
      )
    );
  }

  if (/(\w)\1\1/.test(passwordCheck)) {
    res.status(400);
    return next(
      new Error(
        "Three consecutive identical characters or numbers cannot be used in the password."
      )
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

exports.beforeLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });

  if (!email) {
    res.status(400);
    return next(new Error("Please enter a email address"));
  }

  if (!password) {
    res.status(400);
    return next(new Error("Please enter a password"));
  }

  if (!user) {
    res.status(400);
    return next(new Error("Your email address or password is incorrect."));
  } else {
    const isPasswordCorrect = await cryptor.compare(password, user.password);
    if (!isPasswordCorrect) {
      res.status(400);
      return next(new Error("Your email address or password is incorrect."));
    }
  }

  if (req.cookies.accessToken) {
    res.status(401);
    return next(new Error("User already exists"));
  }

  next();
};

exports.authenticationToken = (req, res, next) => {
  try {
    const token = req.cookies.accessToken;
    if (token) {
      jwt.verify(token, process.env.ACCESSTOKEN_SECRET_KEY, (err) => {
        if (err) {
          res.status(401);
          return next(new Error(err.message));
        } else {
          next();
        }
      });
    } else {
      res.status(404);
      return next(new Error("Token not found"));
    }
  } catch (error) {
    res.status(401);
    throw new Error("Token is not authorized");
  }
};

exports.checkUser = (req, res, next) => {
  try {
    const token = req.cookies.accessToken;
    if (token) {
      jwt.verify(
        token,
        process.env.ACCESSTOKEN_SECRET_KEY,
        async (err, decodedToken) => {
          if (err) {
            res.locals.user = null;
            next();
          } else {
            const user = await User.findOne({
              where: { id: decodedToken.id },
            });
            res.locals.user = user;
            next();
          }
        }
      );
    } else {
      res.locals.user = null;
      next();
    }
  } catch (error) {
    next(error);
  }
};
