const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  rating: Number,
  app: String,
  user: String,
  comment: String,
});

mongoose.model("Review", reviewSchema);
