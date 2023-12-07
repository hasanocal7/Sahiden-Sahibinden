const { User } = require("../models");
const cryptor = require("../utils/bcrypt");

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
};

exports.getUser = async (req, res) => {
  const user = await User.findOne({ where: { id: req.params.id } });
  res.status(200).json(user);
};

exports.createUser = async (req, res) => {
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
    throw new Error(error.message);
  }
};
