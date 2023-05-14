import "./SidePanel.css";
import React from "react";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { Navigate } from "react-router-dom";

function RatingForm() {
  const [toSubmit, setToSubmit] = React.useState(false);
  const [toRating, setToRating] = React.useState(0);
  const [toText, setToText] = React.useState("");

  function handleChange(e) {
    setToText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setToSubmit(true);
    // console.log(toRating);
    // console.log(toText);
    console.log(window.location.href);
    let xhr = new XMLHttpRequest();
    // var url = 'https://learning.se.com/i-feedback/feedback.php';
    let url = "/submitForm";
    xhr.open("POST", url);
    let data = { rating: toRating, app: "mll", userId: "user2", comment: toText , answer: ""};
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => console.log(xhr.responseText);
    xhr.send(JSON.stringify(data));
  }

  if (toSubmit) {
    if (toRating === 3 || toRating === 4) return <Navigate to="/questions" />;
    else return <Navigate to="/thankyou" />;
  }

  return (
    <div>
      <div className="title">Please provide your ratings</div>
      <Link to="/info" id="info">
        <BsInfoCircle />{" "}
      </Link>
      <form id="ratingForm" onSubmit={handleSubmit}>
        <div className="rating">
          <input
            type="radio"
            id="star5"
            name="rating"
            value="5"
            onClick={() => setToRating(5)}
          />
          <label htmlFor="star5" title="Rocks!">
            ☆
          </label>
          <input
            type="radio"
            id="star4"
            name="rating"
            value="4"
            onClick={() => setToRating(4)}
          />
          <label htmlFor="star4" title="Pretty good">
            ☆
          </label>
          <input
            type="radio"
            id="star3"
            name="rating"
            value="3"
            onClick={() => setToRating(3)}
          />
          <label htmlFor="star3" title="Meh">
            ☆
          </label>
          <input
            type="radio"
            id="star2"
            name="rating"
            value="2"
            onClick={() => setToRating(2)}
          />
          <label htmlFor="star2" title="Kinda bad">
            ☆
          </label>
          <input
            type="radio"
            id="star1"
            name="rating"
            value="1"
            onClick={() => setToRating(1)}
          />
          <label htmlFor="star1" title="Sucks big time">
            ☆
          </label>
        </div>
        <div className="clearfix"></div>
        <textarea
          rows="5"
          name="commentArea"
          id="commentArea"
          className="clearfixComments"
          placeholder="Please add your comments"
          onChange={handleChange}
        ></textarea>
        <button className="submitClearfix" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RatingForm;
