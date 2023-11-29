const validationDescription = (description) => {
  if (!description) {
    throw new Error("Description is not defined");
  }
};

module.exports = validationDescription;
