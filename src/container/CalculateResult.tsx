import React from "react";

// 플레이어들이 부른 숫자를 계산하여 보여주는 컨테이너
function CalculateResult() {
  return (
    <div className="calculateResult">
      <div className="number">
        <div className="text">
          <h2>1</h2>
        </div>
      </div>
      <div className="mark">
        <div className="text">
          <h1>?</h1>
        </div>
      </div>
      <div className="number">
        <div className="text">
          <h2>2</h2>
        </div>
      </div>
      <div className="mark">
        <div className="text">
          <h1>=</h1>
        </div>
      </div>
      <div className="number">
        <div className="text">
          <h2>2</h2>
        </div>
      </div>
    </div>
  );
}

export default CalculateResult;
