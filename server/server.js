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
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

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
