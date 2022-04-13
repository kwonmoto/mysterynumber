import React from "react";

interface questionProps {
  questionNumber: Array<number>;
}

function Question({ questionNumber }: questionProps) {
  return (
    <div className="question q-container">
      <div className="question q-box q-number">
        <h1>{questionNumber[0]}</h1>
      </div>
      <div className="question q-box q-mark">
        <h1>?</h1>
      </div>
      <div className="question q-box q-number">
        <h1>{questionNumber[1]}</h1>
      </div>
    </div>
  );
}

export default Question;
