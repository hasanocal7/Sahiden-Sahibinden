const services = require("../services/index");

const getPanelPage = async (req, res, next) => {
  try {
    const user = await services.userServices.getUser(res.locals.user.id);
    res.status(200).json({
      user: {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phonenumber: user.phonenumber,
      },
    });
  } catch (error) {
    res.status(500);
    return next(new Error(error.message));
  }
};

const logoutUser = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500);
    return next(new Error(error.message));
  }
};

const editPersonalInfo = async (req, res, next) => {
  try {
    const { phonenumber_home, phonenumber_bussines } = req.body;
    const id = res.locals.user.id;
    const image = req.file.originalname;
    await services.userServices.editPersonalInfo(
      id,
      phonenumber_home,
      phonenumber_bussines,
      image
    );
    res.status(200).json({
      success: true,
      message: "User infos edited",
    });
  } catch (error) {
    res.status(500);
    return next(new Error(error.message));
  }
};

const addPhoneNumber = async (req, res, next) => {
  try {
    const { phonenumber } = req.body;
    const id = res.locals.user.id;
    await services.userServices.addPhoneNumber(id, phonenumber);
    res.status(200).json({
      success: true,
      message: "Added user phonenumber",
    });
  } catch (error) {
    res.status(500);
    return next(new Error(error.message));
  }
};

module.exports = { getPanelPage, logoutUser, editPersonalInfo, addPhoneNumber };
