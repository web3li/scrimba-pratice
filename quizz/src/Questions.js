import React from "react";
import { nanoid } from "nanoid";

export default function Questions() {
  const [quizzList, setQuizzList] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const resp = await fetch(
        "https://opentdb.com/api.php?amount=5&category=9&type=multiple"
      );
      const resultData = await resp.json();
      const quizzData = resultData.results.map((data) => {
        return {
          question: data.question,
          answers:
            (data.incorrect_answers.push(data.correct_answer),
            data.incorrect_answers),
          correct_answer: data.correct_answer,
        };
      });
      setQuizzList(quizzData);
    }
    const result = getData();
  }, []);

  const questionElements = quizzList.map((item) => {
    const answerElements = item.answers.map((answer, index) => (
      <span key={index}>{answer}</span>
    ));

    return (
      <div className="qa" key={nanoid()}>
        <div className="question">{item.question}</div>
        <div className="aswers">{answerElements}</div>
      </div>
    );
  });
  return (
    <div className="qustions--main">
      <main>{questionElements}</main>
      <div>
        <button>Check answers</button>
      </div>
    </div>
  );
}
