const express = require("express");
const router = express.Router();
const {Review, Answer} = require("../models/reviewSchema");
// var db = require("../models/mongoDatabaseConnection");
var con = require("../models/sqlDatabaseConnection");
// let user = "";

router.get("/", function (req, res, next) {
  res.send("API is working properly");
});

router.post("/backend/submitForm", async function (req, res, next) {
  // try {
  //   user = req.body.userId;
  //   let rev = new Review(req.body);
  //   rev.save();
  //   Review.insertOne(req.body); 
  // } catch (error) {
  //   res.status(400).json({ error: error.message });
  // }

  // user = req.body.userId;
  con.connect(function(err) {
    if (err) throw err;
    var sql = "INSERT INTO `ifeedback`.`reviews` (`userid`, `rating`, `application`, `comments`) VALUES ('"+req.body.userId+"', '"+req.body.rating+"', '"+req.body.app+"', '"+req.body.comment+"');";
    con.query(sql, function (err, result) {
      if (err) throw err;
    });
  });
  res.sendStatus(200);
  // console.log(req.body.userid);
});

router.post("/backend/submitQuestions",async function (req, res, next) {
  // var myquery = { userId: user };
  // var newvalues = { $set: {answer: req.body.questions} };
  // db.collection("iFeedback").updateOne(myquery, newvalues, function(err, res) {
  //   if (err) throw err;
  // });
  // let userRev = await Review.findOne({ userId: user} );
  // let ans = new Answer({rev: userRev, answer: req.body.questions});
  // userRev.reviewAnswer = ans;
  // await ans.save();
  // await userRev.save();


  con.connect(function(err) {
    if (err) throw err;
    var sql = "INSERT INTO `ifeedback`.`answers` (`userid`, `answers`) VALUES ('"+user+"', '"+req.body.questions+"');";
    con.query(sql, function (err, result) {
      if (err) throw err;
    });
  });
  res.sendStatus(200);
  // console.log(req.body);
});

router.get("/backend/getSubmissions", async function (req, res, next) {
  // let ans = await Review.findOne({ userId: "SESA705409"});
  // console.log(await Answer.findById(ans.reviewAnswer.toHexString()).populate("rev"));

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM ifeedback.reviews WHERE userid = 'SESA705409';", function (err, result, fields) {
      if (err) throw err;
      res.send(result[0]);
    });
  });
})

module.exports = router;
