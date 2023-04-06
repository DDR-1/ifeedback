const createError = require("http-errors");
const express = require("express");

const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const Review = require("./models/reviewSchema");

mongoose.set("strictQuery", false);

const routeHandler = require("./routes/handler.js");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routeHandler);

// app.use(function (req, res, next) {
//   next(createError(404));
// });

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const url = process.env.URL;
const client = new MongoClient(url);

const dbName = "iFeedback";

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. ${err}`);
  });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
