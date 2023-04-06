import React from 'react';
import './SidePanel.css';
import { Navigate } from "react-router-dom";


function QuestionForm(){
    const [toAnswer, setToAnswer] = React.useState(0);

    function answered(val){
        console.log("Answer: "+val);
    }

    if(toAnswer !== 0){
        answered(toAnswer)
        return <Navigate to="/thankyou" />;
    }
    return(
        <div>
            <div className = "title">Answer questions</div>
            <div className="answerArea">
                <button className="answerbtn" onClick={() => setToAnswer(1)}>Answer 1</button>
                <button className="answerbtn" onClick={() => setToAnswer(2)}>Answer 2</button>
            </div>
            <div className="answerArea">
                <button className="answerbtn" onClick={() => setToAnswer(3)}>Answer 3</button>
                <button className="answerbtn" onClick={() => setToAnswer(4)}>Answer 4</button>
            </div>
        </div>
    )
}
export default QuestionForm;