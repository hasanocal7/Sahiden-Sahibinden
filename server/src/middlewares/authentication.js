const jwt = require("jsonwebtoken");
const { User } = require("../models");

const authenticationToken = (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      res.status(401);
      return next(new Error("Authentication token missing"));
    }
    const token = authorizationHeader.split(" ")[1];

    jwt.verify(token, process.env.ACCESSTOKEN_SECRET_KEY, (err) => {
      if (err) {
        res.status(400);
        return next(new Error(err.message));
      } else {
        next();
      }
    });
  } catch (error) {
    res.status(error.statusCode || 401);
    return next(new Error(error.message));
  }
};

const checkUser = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      res.locals.user = null;
      return next();
    }
    const token = authorizationHeader.split(" ")[1];
    jwt.verify(
      token,
      process.env.ACCESSTOKEN_SECRET_KEY,
      async (err, decodedToken) => {
        if (err) {
          res.locals.user = null;
        } else {
          try {
            const user = await User.findOne({
              where: { id: decodedToken.userID },
            });
            if (user) {
              res.locals.user = user;
            }
          } catch (error) {
            res.locals.user = null;
          }
        }
        next();
      }
    );
  } catch (error) {
    res.status(error.statusCode || 401);
    return next(new Error(error.message));
  }
};

module.exports = { authenticationToken, checkUser };
