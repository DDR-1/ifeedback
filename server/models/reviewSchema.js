const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  rating: Number,
  app: String,
  userId: String,
  comment: String,
  reviewAnswer: {
    type: mongoose.Schema.Types.ObjectId,
    rev: 'Answer',
  }
});

const answerSchema = new mongoose.Schema({
  rev: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
  },
  answer: String,
})

const Review = mongoose.model("Review", reviewSchema);
const Answer = mongoose.model("Answer", answerSchema);
module.exports ={Review, Answer}
