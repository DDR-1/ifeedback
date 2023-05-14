const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  rating: Number,
  app: String,
  userId: String,
  comment: String,
  answer: String,
});

module.exports = mongoose.model("Review", reviewSchema);
