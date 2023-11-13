//* Modules
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/errorHandler");

//* Database
const db = require("./models");
//* App
const app = express();

//* Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => res.send("Hello"));

//* Routes
const { checkUser } = require("./middleware/userAuth");
app.use("*", checkUser);
app.use("/users", require("./routes/userRoute"));

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
