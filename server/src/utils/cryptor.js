const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.hash = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    console.log("Password is hashed!");
  }
};

exports.compare = async (bodyPassword, password) => {
  try {
    const comparedPassword = await bcrypt.compare(bodyPassword, password);
    return comparedPassword;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    console.log("Password is compared");
  }
};
