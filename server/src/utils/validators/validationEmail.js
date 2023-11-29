const validator = require("validator");

const validationEmail = (email) => {
  if (!email) {
    throw new Error("Please enter a email address");
  }

  if (!validator.isEmail(email)) {
    throw new Error("Please enter a valid email address");
  }
};

module.exports = validationEmail;
