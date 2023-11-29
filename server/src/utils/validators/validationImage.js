const validationImage = (image) => {
  if (!image) {
    throw new Error(
      "It is mandatory to enter at least 1 picture for the advertisement"
    );
  }
};

module.exports = validationImage;
