const multer = require("multer");
const fs = require("fs");
const path = require("path");

const uploadFolder = "src/uploads/";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const rootDir = path.dirname(require.main.filename);

    fs.mkdirSync(path.join(rootDir, uploadFolder), { recursive: true });
    cb(null, path.join(rootDir, uploadFolder));
  },
  filename: function (req, file, cb) {
    const extension = file.mimetype.split("/")[1];

    if (!req.savedImages) req.savedImages = [];

    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    let url = `image_${uniqueSuffix}.${extension}`;

    req.savedImages = [...req.savedImages, path.join(url)];

    cb(null, url);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
