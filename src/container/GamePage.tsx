import React from "react";
import PlayerName from "./PlayerName";
import Question from "./Question";
import InputNumber from "./InputNumber";
import CalculateResult from "./CalculateResult";

function GamePage() {
  return (
    <div className="container">
      <Question />
      <PlayerName name="Player 1" playerNum={1} />
      <PlayerName name="Player 2" playerNum={2} />
      <InputNumber />
      <CalculateResult />
    </div>
  );
}

export default GamePage;
