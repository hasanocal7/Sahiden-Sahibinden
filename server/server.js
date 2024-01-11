//* Modules
const express = require("express");
require("dotenv").config();

//* Middlewares Modules
const errorHandler = require("./src/middlewares/errorHandler");
const cors = require("cors");
const morgan = require("morgan");

//* Routes Modules
const router = require("./src/routes/routes");

//* Database
const db = require("./src/models");

//* App
const app = express();

//* Middlewares
const whiteList = [
  "http://localhost:3000",
  "https://sahiden-sahibinden.vercel.app",
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (whiteList.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/uploads", express.static("src/uploads"));

//* Routes
app.use("/api", router);

//* Error Handler
app.use(errorHandler);

//* Server Connection
const Port = process.env.PORT || 5000;

db.sequelize
  .sync()
  .then(() => {
    app.listen(Port, () => {
      console.log(`Server is running on port: ${Port}`);
    });
  })
  .catch((err) => {
    console.error("Database sync error:", err.message);
  });
