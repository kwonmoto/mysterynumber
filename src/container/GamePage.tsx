import React, { useEffect, useState } from "react";
import PlayerName from "./PlayerName";
import Question from "./Question";
import InputNumber from "./InputNumber";
import CalculateResult from "./CalculateResult";
import Score from "./Score";
import rules from "../Rules";

//게임 페이지
function GamePage() {
  const [name, setName] = useState(["Player 1", "Player 2"]);
  const [questionNumber, setQuetionNumber] = useState([0, 0]);
  const gameQuestion = rules();
  const gameAnswer = gameQuestion(questionNumber[0], questionNumber[1]);

  useEffect(() => {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    setQuetionNumber([num1, num2]);
  }, []);
  return (
    <div className="container">
      <Score playerNum={1} />
      <Question questionNumber={questionNumber} />
      <Score playerNum={2} />
      <PlayerName name={name[0]} playerNum={1} />
      <PlayerName name={name[1]} playerNum={2} />
      <InputNumber />
      <CalculateResult gameQuestion={gameQuestion} />
      {gameAnswer}
    </div>
  );
}

export default GamePage;
