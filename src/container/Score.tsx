import React from "react";

type scoreProps = {
  playerNum: 1 | 2;
};

function Score({ playerNum }: scoreProps) {
  const className = playerNum === 1 ? "score1" : "score2";
  return (
    <div className={className}>
      <p>score</p>
      <p>0</p>
    </div>
  );
}

export default Score;
