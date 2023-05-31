const express = require("express");
const router = express.Router();
const {Review, Answer} = require("../models/reviewSchema");
var db = require("../models/databaseConnection");
var user = "";

router.get("/", function (req, res, next) {
  res.send("API is working properly");
});

router.post("/backend/submitForm", async function (req, res, next) {
  try {
    user = req.body.userId;
    let rev = new Review(req.body);
    rev.save();
    // Review.insertOne(req.body); 
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  res.sendStatus(200);
  // console.log(req.body);
});

router.post("/backend/submitQuestions",async function (req, res, next) {
  // var myquery = { userId: user };
  // var newvalues = { $set: {answer: req.body.questions} };
  // db.collection("iFeedback").updateOne(myquery, newvalues, function(err, res) {
  //   if (err) throw err;
  // });
  let userRev = await Review.findOne({ userId: user} );
  let ans = new Answer({rev: userRev, answer: req.body.questions});
  userRev.reviewAnswer = ans;
  await ans.save();
  await userRev.save();
  res.sendStatus(200);
  // console.log(req.body);
});

router.get("/backend/getSubmissions", async function (req, res, next) {
  let ans = await Review.findOne({ userId: "SESA705409"});
  console.log(await Answer.findById(ans.reviewAnswer.toHexString()).populate("rev"));
  res.sendStatus(200);
})

module.exports = router;
