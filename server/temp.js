// var createError = require("http-errors");
// var express = require("express");
// var path = require("path");
// var cookieParser = require("cookie-parser");
// var logger = require("morgan");
// var cors = require("cors");
// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);

// var routeHandler = require("./routes/handler.js");

// var app = express();

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

// app.use(cors());
// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", routeHandler);

// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // app.use(function (err, req, res, next) {
// //   res.locals.message = err.message;
// //   res.locals.error = req.app.get("env") === "development" ? err : {};

// //   res.status(err.status || 500);
// //   res.render("error");
// // });

// const start = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://deveshdr:9p0W60yz3o6lJJ8N@ifeedback.nr66rci.mongodb.net/?retryWrites=true&w=majority"
//     );
//     const PORT = 4000;
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// start();
// const express = require('express')
// const bodyParser = require('body-parser');
// const routeHandler = require('./routes/handler.js')

// const app = express();
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
// app.use('/', routeHandler)

// const PORT = 4000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`)
// })
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

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

app.use(function (req, res, next) {
  next(createError(404));
});

// app.use(function (err, req, res, next) {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   res.status(err.status || 500);
//   res.render("error");
// });

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
