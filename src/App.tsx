import React from "react";
import "./App.css";
import GamePage from "./container/GamePage";
import Title from "./container/Title";

function App() {
  return (
    <div className="App">
      <Title />
      <GamePage />
    </div>
  );
}

export default App;
