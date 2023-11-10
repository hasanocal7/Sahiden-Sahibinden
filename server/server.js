//* Modules
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const session = require("express-session");
const errorHandler = require("./middleware/errorHandler");

//* Database
const db = require("./models");

//* Session Store
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//* App
const app = express();

//* Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    store: new SequelizeStore({
      db: db.sequelize,
      expiration: 24 * 60 * 60 * 1000,
    }),
    proxy: true,
    name: process.env.COOKIE_NAME,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    },
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

//* Routes
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
    console.error("Database sync error:", err);
  });
