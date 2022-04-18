import React from "react";

interface calculateResultProps {
  gameQuestion: (a: number, b: number) => number;
  inputTable: any;
}

// 플레이어들이 부른 숫자를 계산하여 보여주는 컨테이너
function CalculateResult({ gameQuestion, inputTable }: calculateResultProps) {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);

  return (
    <>
      <div className="calculateResult c-container">
        <div className="calculateResult c-box c-number">
          <h2>{num1}</h2>
        </div>
        <div className="calculateResult c-box c-mark">
          <h1>?</h1>
        </div>
        <div className="calculateResult c-box c-number">
          <h2>{num2}</h2>
        </div>
        <div className="calculateResult c-box c-mark">
          <h1>=</h1>
        </div>
        <div className="calculateResult c-box c-number">
          <h2>{gameQuestion(num1, num2)}</h2>
        </div>
      </div>
    </>
  );
}

export default CalculateResult;
