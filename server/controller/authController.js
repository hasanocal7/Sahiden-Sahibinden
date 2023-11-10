const { User } = require("../models");
const cryptor = require("../utils/cryptor");

exports.getAllUsers = async (req, res) => {
  if (req.session.user) {
    const users = await User.findAll();
    res.status(200).json(users);
  } else {
    res.status(403).json({ success: false, message: "Permission denied." });
  }
};

exports.getUser = async (req, res) => {
  try {
    if (req.session.user) {
      const user = await User.findOne({ where: { id: req.params.id } });
      res.status(200).json(user);
    } else {
      res.status(401);
      return next(new Error("Authentication required"));
    }
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
    if (req.session.user) {
      res.status(400);
      return next(new Error("This user is already logged in"));
    } else {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email: email } });

      req.session.user = user;

      res.status(200).json({
        success: true,
        message: `${user.first_name} ${user.last_name} has successfully signed in.`,
        user: { id: req.session.user.id, email: req.session.user.email },
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
    return next(new Error(error.message));
  }
};

exports.logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(401);
      return next(new Error(err.message));
    } else {
      res.clearCookie();
      return res.status(200).json("User logout successful");
    }
  });
};
