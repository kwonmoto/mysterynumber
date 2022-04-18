import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
interface InputTableItem {
  num1: number;
  num2: number;
}
interface InputNumberProps {
  inputTable: InputTableItem[];
  setInputTable: Dispatch<SetStateAction<InputTableItem[]>>;
}

//숫자 입력 컨테이너
function InputNumber({ inputTable, setInputTable }: InputNumberProps) {
  const [tryNumber, setTryNumber] = useState<number>(0);
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTryNumber(Number(e.target.value));
  const onClick = () =>
    setInputTable([
      ...inputTable,
      { num1: tryNumber, num2: Math.floor(Math.random() * 100) },
    ]);
  return (
    <div className="inputNumber">
      <input
        className="input-answer"
        type="number"
        value={tryNumber}
        min={0}
        onChange={onChange}
      ></input>
      <button className="btn-input" onClick={onClick}>
        제시
      </button>
      <button className="btn-input">정답</button>
    </div>
  );
}
export default InputNumber;
