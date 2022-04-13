/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

//name: 플레이어 이름, playerNum: 1P/2P 구분
type playerNameProps = {
  name: string;
  playerNum: 1 | 2;
};

// 플레이어 이름 출력 컨테이너
function PlayerName({ name, playerNum }: playerNameProps) {
  const className = playerNum === 1 ? 1 : 3;

  return (
    <div
      css={css`
        background-color: #990000;
        height: 50px;
        display: inline-flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        grid-row: 2;
        grid-column: ${className};
      `}
    >
      <h4>{name}</h4>
    </div>
  );
}

export default PlayerName;
