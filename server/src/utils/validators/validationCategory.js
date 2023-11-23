const validator = require("validator");

const validationCategory = (category) => {
  if (!category) {
    throw new Error("Category is not defined");
  }

  if (!validator.isIn(category, ["Property", "Vehicle", "Electronics"])) {
    throw new Error(
      "Invalid advertisement category entered. Only the following categories can be entered (Property, Vehicle, Electronics)"
    );
  }
};

module.exports = validationCategory;
