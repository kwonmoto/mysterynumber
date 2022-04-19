import React, { useEffect, useState } from "react";
import PlayerName from "./PlayerName";
import Question from "./Question";
import InputNumber from "./InputNumber";
import CalculateResult from "./CalculateResult";
import Score from "./Score";
import rules from "../Rules";

//게임 페이지
function GamePage() {
  interface InputTableItem {
    id: number;
    num1?: number;
    num2?: number;
  }

  const [name, setName] = useState(["Player 1", "Player 2"]);
  const [questionNumber, setQuetionNumber] = useState([0, 0]);
  const [gameNum, setGameNum] = useState(0);
  const gameQuestion = rules(gameNum);
  const gameAnswer = gameQuestion(questionNumber[0], questionNumber[1]);
  const [inputTable, setInputTable] = useState<InputTableItem[]>([]);
  const [playerTurn, setPlayerTurn] = useState(false);

  useEffect(() => {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    setQuetionNumber([num1, num2]);
    setGameNum(Math.random());
  }, []);

  useEffect(() => {
    playerTurn &&
      setTimeout(() => {
        setInputTable(
          [...inputTable].map((row) => {
            if (row.id === inputTable.length - 1) {
              return { ...row, num2: Math.floor(Math.random() * 100) };
            } else return row;
          })
        );
        setPlayerTurn(false);
      }, 1000);
  }, [playerTurn]);

  return (
    <div className="container">
      <Score playerNum={1} />
      <Question questionNumber={questionNumber} />
      <Score playerNum={2} />
      <PlayerName name={name[0]} playerNum={1} />
      <PlayerName name={name[1]} playerNum={2} />
      <InputNumber
        inputTable={inputTable}
        gameAnswer={gameAnswer}
        setInputTable={setInputTable}
        setPlayerTurn={setPlayerTurn}
      />
      <CalculateResult gameQuestion={gameQuestion} inputTable={inputTable} />
    </div>
  );
}

export default GamePage;
