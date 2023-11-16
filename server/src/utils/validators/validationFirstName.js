const validationFirstName = (first_name) => {
  if (!first_name) {
    throw new Error("Please enter your name");
  }
};

module.exports = validationFirstName;
