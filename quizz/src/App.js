import React from "react";
import Start from "./Start";
import Questions from "./Questions";

function App() {
  const [isStart, setIsStart] = React.useState(false);

  function startQuizz() {
    setIsStart((preSate) => !preSate);
  }
  return (
    <div className="App">
      {!isStart ? <Start startQuizz={startQuizz} /> : <Questions />}
      <div className="top-shape"></div>
      <div className="bottom-shape"></div>
    </div>
  );
}

export default App;
