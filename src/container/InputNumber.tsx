import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
interface InputTableItem {
  id: number;
  num1?: number;
  num2?: number;
}
interface InputNumberProps {
  inputTable: InputTableItem[];
  gameAnswer: number;
  setInputTable: Dispatch<SetStateAction<InputTableItem[]>>;
  setPlayerTurn: Dispatch<SetStateAction<boolean>>;
}

//숫자 입력 컨테이너
function InputNumber({
  inputTable,
  gameAnswer,
  setInputTable,
  setPlayerTurn,
}: InputNumberProps) {
  const [tryNumber, setTryNumber] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean>(false);
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTryNumber(Number(e.target.value));
  const onClick = () => {
    setInputTable([
      ...inputTable,
      {
        id: inputTable.length,
        num1: tryNumber,
        num2: undefined,
      },
    ]);
    setPlayerTurn(true);
  };
  const isAnswer = () => {
    gameAnswer === tryNumber ? setCorrect(true) : setCorrect(false);
  };

  const bg = correct ? "input-answer bg-green" : "input-answer bg-red";

  return (
    <div className="inputNumber">
      <input
        className={bg}
        type="number"
        value={tryNumber}
        min={0}
        onChange={onChange}
      ></input>
      <button className="btn-input" onClick={onClick}>
        제시
      </button>
      <button className="btn-input" onClick={isAnswer}>
        정답
      </button>
    </div>
  );
}
export default InputNumber;
