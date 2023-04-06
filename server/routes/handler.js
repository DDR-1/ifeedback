// const express = require('express');
// const router = express.Router();

// router.post('/submitForm', (req, res) => {
//     console.log(req.body);
// })

// module.exports = router;
const express = require("express");
const router = express.Router();
const Review = require("../models/reviewSchema");

router.get("/", function (req, res, next) {
  res.send("API is working properly");
});

router.post("/submitForm", function (req, res, next) {
  const review = new Review(req.body);
  try {
    review.save();
    res.status(201).json({ review });
  } catch (error) {
    res.status(400).json({ error: e.message });
  }
  console.log(req.body);
});

module.exports = router;
