import React from "react";
export default function Start(props) {
  return (
    <div>
      <main className="start--main">
        <h2>Quizzical</h2>
        <p>Some description if needed</p>
        <button onClick={props.startQuizz}>Start quiz</button>
      </main>
    </div>
  );
}
