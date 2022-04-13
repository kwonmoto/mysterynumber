import React from "react";

type scoreProps = {
  playerNum: 1 | 2;
};

function Score({ playerNum }: scoreProps) {
  const className = playerNum === 1 ? "s-1p" : "s-2p";
  return (
    <div className={"scorebox " + className}>
      <div className="score-text s-title">
        <p>SCORE</p>
      </div>
      <div className="score-text s-score">
        <h1>0</h1>
      </div>
    </div>
  );
}

export default Score;
