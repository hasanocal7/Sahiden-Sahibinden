const services = require("../services/index");

const createUser = async (req, res, next) => {
  try {
    const { email, first_name, last_name, password } = req.body;
    const user = await services.userServices.createUser(
      email,
      first_name,
      last_name,
      password
    );
    res.status(200).json({
      success: true,
      message: "User created succesfuly",
      user: user,
    });
  } catch (error) {
    res.status(400);
    return next(new Error(error.message));
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const accessToken = await services.userServices.loginUser(email, password);
    res.status(200).json({
      success: true,
      accessToken: accessToken,
    });
  } catch (error) {
    res.status(400);
    return next(new Error(error.message));
  }
};

const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const maskedEmail = await services.userServices.forgotPassword(email);
    res.status(200).json({
      message: `We have sent an email to your ${maskedEmail} address. You can change your password by clicking on the link in this email.`,
    });
  } catch (error) {
    res.status(400);
    return next(new Error(error.message));
  }
};

const changePassword = async (req, res, next) => {
  try {
    const { newPassword } = req.body;
    const id = req.params.id;
    const user = await services.userServices.changePassword(id, newPassword);
    res.status(200).json({
      success: true,
      message: `Your password has been successfully changed! You can log in to your sahiden sahibinden account using your new password.`,
      user: user,
    });
  } catch (error) {
    res.status(400);
    return next(new Error(error.message));
  }
};

module.exports = { createUser, loginUser, forgotPassword, changePassword };
