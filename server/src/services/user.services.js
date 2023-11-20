const { User } = require("../models");
const jwt = require("jsonwebtoken");
const cryptor = require("../utils/cryptor");
const { sendingMail } = require("../utils/mailer");
const crypto = require("crypto");

const createUser = async (email, first_name, last_name, password) => {
  const existingUser = await User.findOne({ email: email });
  if (!existingUser) {
    const hashedPassword = await cryptor.hash(password);
    const user = await User.create({
      email,
      first_name: first_name.charAt(0).toUpperCase() + first_name.slice(1),
      last_name: last_name.charAt(0).toUpperCase() + last_name.slice(1),
      password: hashedPassword,
    });
    return user;
  } else {
    throw new Error("User already exists with the provided email");
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    res.status(500);
    return next(new Error(error.message));
  }
};

const getUser = async (id) => {
  try {
    const user = await User.findOne({ where: { id: id } });
    return user;
  } catch (error) {
    res.status(500);
    return next(new Error(error.message));
  }
};

const loginUser = async (email) => {
  const user = await User.findOne({ where: { email: email } });
  if (!user) {
    res.status(400);
    return next(new Error("Invalid email address or password."));
  }
  const userID = user.id;
  const accessToken = jwt.sign({ userID }, process.env.ACCESSTOKEN_SECRET_KEY, {
    expiresIn: "1d",
  });
  return accessToken;
};

const forgotPassword = async (email) => {
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
    return maskedEmail;
  }
};

const changePassword = async (id, newPassword) => {
  const user = await User.findOne({ where: { id: id } });
  if (user) {
    const hashedPassword = await cryptor.hash(newPassword);
    await User.update(
      {
        password: hashedPassword,
      },
      { where: { id: id } }
    );
    return user;
  } else {
    res.status(404);
    return next(new Error("The connection cannot be accessed."));
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  loginUser,
  forgotPassword,
  changePassword,
};
