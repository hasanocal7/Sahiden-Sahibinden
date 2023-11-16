const jwt = require("jsonwebtoken");
const { User } = require("../models");
const cryptor = require("../utils/cryptor");
const crypto = require("crypto");
const { sendingMail } = require("../utils/mailer");

const createUser = async (req, res, next) => {
  try {
    const { email, first_name, last_name, password } = req.body;
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      const hashedPassword = await cryptor.hash(password);
      const user = await User.create({
        email,
        first_name: first_name.charAt(0).toUpperCase() + first_name.slice(1),
        last_name: last_name.charAt(0).toUpperCase() + last_name.slice(1),
        password: hashedPassword,
      });
      res.status(201).json(user);
    } else {
      res.status(400);
      return next(new Error("This email already exists"));
    }
  } catch (error) {
    res.status(500);
    return next(new Error(error.message));
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      res.status(400);
      return next(new Error("Invalid email address or password."));
    }
    const userID = user.id;
    const accessToken = jwt.sign(
      { userID },
      process.env.ACCESSTOKEN_SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
    req.headers.authorization = accessToken;
    res.status(200).json({
      success: true,
      message: `${user.first_name} ${user.last_name} is logged successful`,
      accessToken: accessToken,
    });
  } catch (error) {
    res.status(500);
    return next(new Error(error.message));
  }
};

const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const token = crypto.randomBytes(32).toString("hex");
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      res.status(404);
      return next(
        new Error("No user matching this username or email address was found.")
      );
    } else {
      const maskedEmail = `${email[0]}***@${email.split("@")[1]}`;
      sendingMail({
        from: "no-reply@example.com",
        to: email,
        subject: "Forgot Password",
        text: `Hello! Please click on this link to change your password:
            http://localhost:${process.env.PORT}/api/forgot-password/${user.id}/${token} `,
      });
      res.status(200).json({
        message: `We have sent an email to your ${maskedEmail} address. You can change your password by clicking on the link in this email.`,
      });
    }
  } catch (error) {
    res.status(500);
    return next(new Error(error.message));
  }
};

const changePassword = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ where: { id: id } });
    if (user) {
      const { newPassword } = req.body;
      const hashedPassword = await cryptor.hash(newPassword);
      await User.update(
        {
          password: hashedPassword,
        },
        { where: { id: id } }
      );
      res.status(200).json({
        success: true,
        message: `Your password has been successfully changed! You can log in to your sahiden sahibinden account using your new password.`,
        user: user,
      });
    } else {
      res.status(404);
      return next(new Error("The connection cannot be accessed."));
    }
  } catch (error) {
    res.status(500);
    return next(new Error(error.message));
  }
};

module.exports = { createUser, loginUser, forgotPassword, changePassword };
