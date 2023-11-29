const validator = require("validator");

const validationPrice = (price) => {
  if (!price) {
    throw new Error("Price is not defined");
  }
  if (!validator.isNumeric(price)) {
    throw new Error("Invalid advertisement price entered");
  }
};

module.exports = validationPrice;
