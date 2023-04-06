const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  rating: Number,
  app: String,
  user: String,
  comment: String,
});

module.exports = mongoose.model("Review", reviewSchema);
