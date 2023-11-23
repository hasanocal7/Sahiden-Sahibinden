const validationAddress = (province, distcrict, neighborhood) => {
  if (!province || !distcrict || !neighborhood) {
    throw new Error("Address is not defined");
  }
};

module.exports = validationAddress;
