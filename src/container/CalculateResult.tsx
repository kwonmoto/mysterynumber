import React from "react";

interface InputTableItem {
  id: number;
  num1?: number;
  num2?: number;
}
interface calculateResultProps {
  gameQuestion: (a: number, b: number) => number;
  inputTable: InputTableItem[];
}

// 플레이어들이 부른 숫자를 계산하여 보여주는 컨테이너
function CalculateResult({ gameQuestion, inputTable }: calculateResultProps) {
  return (
    <>
      {inputTable.map((row) => (
        <div className="calculateResult c-container" key={row.id}>
          <div className="calculateResult c-box c-number">
            <h2>{row.num1}</h2>
          </div>
          <div className="calculateResult c-box c-mark">
            <h1>?</h1>
          </div>
          <div className="calculateResult c-box c-number">
            <h2>{row.num2 === undefined ? "loading" : row.num2}</h2>
          </div>
          <div className="calculateResult c-box c-mark">
            <h1>=</h1>
          </div>
          <div className="calculateResult c-box c-number">
            <h2>
              {row.num1 !== undefined && row.num2 !== undefined
                ? gameQuestion(row.num1, row.num2)
                : "-"}
            </h2>
          </div>
        </div>
      ))}
    </>
  );
}

export default CalculateResult;
