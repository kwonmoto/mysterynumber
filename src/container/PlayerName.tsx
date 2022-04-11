import React from "react";

type playerNameProps = {
  name: string;
  playerNum: 1 | 2;
};

function PlayerName({ name, playerNum }: playerNameProps) {
  const className = playerNum === 1 ? "player1" : "player2";

  return (
    <div className={className}>
      <h4>{name}</h4>
    </div>
  );
}

export default PlayerName;
