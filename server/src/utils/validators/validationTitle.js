const validationTitle = (title) => {
  if (!title) {
    throw new Error("Title is not defined");
  }
};

module.exports = validationTitle;
