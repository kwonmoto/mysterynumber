import React from "react";

interface InputTableItem {
  num1: number;
  num2: number;
}
interface calculateResultProps {
  gameQuestion: (a: number, b: number) => number;
  inputTable: InputTableItem[];
}

// 플레이어들이 부른 숫자를 계산하여 보여주는 컨테이너
function CalculateResult({ gameQuestion, inputTable }: calculateResultProps) {
  return (
    <>
      {inputTable.map((row, i) => (
        <div className="calculateResult c-container" key={i}>
          <div className="calculateResult c-box c-number">
            <h2>{row.num1}</h2>
          </div>
          <div className="calculateResult c-box c-mark">
            <h1>?</h1>
          </div>
          <div className="calculateResult c-box c-number">
            <h2>{row.num2}</h2>
          </div>
          <div className="calculateResult c-box c-mark">
            <h1>=</h1>
          </div>
          <div className="calculateResult c-box c-number">
            <h2>{gameQuestion(row.num1, row.num2)}</h2>
          </div>
        </div>
      ))}
    </>
  );
}

export default CalculateResult;
