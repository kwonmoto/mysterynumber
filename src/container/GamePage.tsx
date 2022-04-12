import React from "react";
import PlayerName from "./PlayerName";
import Question from "./Question";
import InputNumber from "./InputNumber";
import CalculateResult from "./CalculateResult";
import Score from "./Score";

//게임 페이지
function GamePage() {
  return (
    <div className="container">
      <Score playerNum={1} />
      <Question />
      <Score playerNum={2} />
      <PlayerName name="Player 1" playerNum={1} />
      <PlayerName name="Player 2" playerNum={2} />
      <InputNumber />
      <CalculateResult />
    </div>
  );
}

export default GamePage;
