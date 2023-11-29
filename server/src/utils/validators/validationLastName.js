const validationLastName = (last_name) => {
  if (!last_name) {
    throw new Error("Please enter your surname");
  }
};

module.exports = validationLastName;
