import React from "react";
import "./SidePanel.css";
import { Navigate } from "react-router-dom";

function QuestionForm() {
  const [toAnswer, setToAnswer] = React.useState(0);

  function prevSubmit(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  function handleSubmit() {
    var dict = {
      1: "UI/UX",
      2 : "Speed",
      3: "Content",
      4 : "Accessibility"
    };
    let answer = dict[toAnswer];
    // console.log(answer);
    let xhr = new XMLHttpRequest();
    let url = "/backend/submitQuestions";
    xhr.open("POST", url);
    let data = { questions: answer };
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => console.log(xhr.responseText);
    xhr.send(JSON.stringify(data));
  }

  if (toAnswer !== 0) {
    handleSubmit();
    return <Navigate to="/thankyou" />;
  }
  return (
    <div>
      <form id="questionForm" onSubmit={prevSubmit}>
        <div className="title">What feature would you like to be improved upon?</div>
        <div className="answerArea">
          <button
            type="submit"
            className="answerbtn"
            onClick={() => setToAnswer(1)}
          >
            UI/UX
          </button>
          <button className="answerbtn" onClick={() => setToAnswer(2)}>
            Speed 
          </button>
        </div>
        <div className="answerArea">
          <button className="answerbtn" onClick={() => setToAnswer(3)}>
            Content
          </button>
          <button className="answerbtn" onClick={() => setToAnswer(4)}>
            Accessibility
          </button>
        </div>
      </form>
    </div>
  );
}
export default QuestionForm;
