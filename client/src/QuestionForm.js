import React from "react";
import "./SidePanel.css";
import { Navigate } from "react-router-dom";

function QuestionForm() {
  const [toAnswer, setToAnswer] = React.useState(0);

  function prevSubmit(e) {
    e.preventDefault();
  }

  function handleSubmit() {
    let answer = "Answer: " + toAnswer;
    // console.log(answer);
    let xhr = new XMLHttpRequest();
    let url = "/submitQuestions";
    xhr.open("POST", url);
    let data = { questions: answer, app: "mll", userId: "" };
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
      <form id="questionForm">
        <div className="title">Answer questions</div>
        <div className="answerArea">
          <button
            type="submit"
            className="answerbtn"
            onClick={() => setToAnswer(1)}
          >
            Answer 1
          </button>
          <button className="answerbtn" onClick={() => setToAnswer(2)}>
            Answer 2
          </button>
        </div>
        <div className="answerArea">
          <button className="answerbtn" onClick={() => setToAnswer(3)}>
            Answer 3
          </button>
          <button className="answerbtn" onClick={() => setToAnswer(4)}>
            Answer 4
          </button>
        </div>
      </form>
    </div>
  );
}
export default QuestionForm;
