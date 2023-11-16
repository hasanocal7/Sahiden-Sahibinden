const validator = require("validator");

const validationPassword = (first_name, last_name, email, password) => {
  if (!password) {
    throw new Error("Please enter a password");
  }

  if (!validator.isAlphanumeric(password)) {
    throw new Error("Password must contain only letters and numbers");
  }

  if (!validator.isLength(password, { min: 8, max: 255 })) {
    throw new Error("Password must be between 8 and 255 characters long");
  }
  const emailCheck = String(email).split("@").splice(0, 1);
  const first_nameCheck = String(first_name).toLowerCase();
  const last_nameCheck = String(last_name).toLowerCase();
  const passwordCheck = String(password).toLowerCase();
  if (
    passwordCheck.includes(emailCheck) ||
    passwordCheck.includes(first_nameCheck) ||
    passwordCheck.includes(last_nameCheck)
  ) {
    throw new Error(
      "Password cannot contain your first name, last name or e-mail address"
    );
  }
  if (/(\w)\1\1/.test(passwordCheck)) {
    throw new Error(
      "Three consecutive identical characters or numbers cannot be used in the password."
    );
  }
  const containsLowercase = (value) => {
    if (!/[a-z]/.test(value)) {
      throw new Error("Password must contain at least one lowercase letter");
    }
  };
  const containsUppercase = (value) => {
    if (!/[A-Z]/.test(value)) {
      throw new Error("Password must contain at least one uppercase letter");
    }
  };
  containsLowercase(password);
  containsUppercase(password);
};

module.exports = validationPassword;
