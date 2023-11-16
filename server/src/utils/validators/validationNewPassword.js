const cryptor = require("../cryptor");
const validator = require("validator");

const validationNewPassword = async (
  currentPassword,
  newPassword,
  confirmNewPassword
) => {
  if (!validator.equals(newPassword, confirmNewPassword)) {
    throw new Error("Passwords are not matched");
  }
  const isPasswordMatched = await cryptor.compare(newPassword, currentPassword);
  console.log(isPasswordMatched);
  if (isPasswordMatched) {
    throw new Error(
      "Your new password must be different from your current password."
    );
  }
};

module.exports = validationNewPassword;
