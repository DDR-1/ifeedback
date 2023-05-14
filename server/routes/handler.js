const express = require("express");
const router = express.Router();
const Review = require("../models/reviewSchema");
var db = require("../models/databaseConnection");
var user = "";

router.get("/", function (req, res, next) {
  res.send("API is working properly");
});

router.post("/submitForm", function (req, res, next) {
  // const review = new Review(req.body);
  try {
    // review.save();
    user = req.body.userId;
    db.collection('iFeedback').insertOne(req.body); 
    // res.status(201).json({ review });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // console.log(req.body);
});

router.post("/submitQuestions", function (req, res, next) {
  var myquery = { userId: user };
  var newvalues = { $set: {answer: req.body.questions} };
  db.collection("iFeedback").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    // console.log("Answer updated");
  });
  // console.log(req.body);
});

module.exports = router;
