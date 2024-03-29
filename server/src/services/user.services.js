const { User } = require("../models");
const jwt = require("jsonwebtoken");
const cryptor = require("../utils/cryptor");
const { sendingMail } = require("../utils/mailer");
require("dotenv").config();
const createUser = async (email, first_name, last_name, password) => {
  const existingUser = await User.findOne({ where: { email: email } });
  if (!existingUser) {
    const hashedPassword = await cryptor.hash(password);
    const user = await User.create({
      email: email,
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
    throw new Error(error.message);
  }
};

const getUser = async (id) => {
  try {
    const user = await User.findOne({ where: { id: id } });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const loginUser = async (email, password) => {
  const user = await User.findOne({
    where: { email: email },
  });
  if (!user) {
    throw new Error("Invalid email address or password.");
  } else {
    const comparedPassword = await cryptor.compare(password, user.password);
    if (!comparedPassword) {
      throw new Error("Invalid email address or password.");
    }
  }
  const userID = user.id;
  const accessToken = jwt.sign({ userID }, process.env.ACCESSTOKEN_SECRET_KEY, {
    expiresIn: "1d",
  });
  return accessToken;
};

const forgotPassword = async (email) => {
  const user = await User.findOne({ where: { email: email } });
  if (!user) {
    throw new Error(
      "No user matching this username or email address was found."
    );
  } else {
    const maskedEmail = `${email[0]}***@${email.split("@")[1]}`;
    const userID = user.id;
    const token = jwt.sign({ userID }, process.env.ACCESSTOKEN_SECRET_KEY, {
      expiresIn: "10m",
    });
    sendingMail({
      from: "softalyainternship@sahiden.com",
      to: email,
      subject: "Forgot Password",
      text: `Hello! Please click on this link to change your password:
      https://sahiden-sahibinden.vercel.app/confirm-password/${token}`,
    });
    return maskedEmail;
  }
};

const changePassword = async (token, newPassword) => {
  try {
    const decodedToken = jwt.verify(token, process.env.ACCESSTOKEN_SECRET_KEY);
    console.log(decodedToken);

    const user = await User.findOne({ where: { id: decodedToken.userID } });

    if (user) {
      const hashedPassword = await cryptor.hash(newPassword);

      await User.update(
        { password: hashedPassword },
        { where: { id: decodedToken.userID } }
      );

      return user;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    throw new Error("Token verification failed: " + error.message);
  }
};

const editPersonalInfo = async (id, first_name, last_name, phonenumber) => {
  const user = await User.findOne({ where: { id: id } });
  if (user) {
    await User.update(
      {
        first_name: first_name,
        last_name: last_name,
        phonenumber: phonenumber,
      },
      { where: { id: id } }
    );
  } else {
  }
};

const addPhoneNumber = async (id, phonenumber) => {
  const user = await User.findOne({ where: { id: id } });
  if (user) {
    await User.update(
      {
        phonenumber: phonenumber,
      },
      { where: { id: id } }
    );
  } else {
    throw new Error("User not found");
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  loginUser,
  forgotPassword,
  changePassword,
  editPersonalInfo,
  addPhoneNumber,
};
