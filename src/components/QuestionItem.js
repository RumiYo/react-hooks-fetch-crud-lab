import React from "react";

function QuestionItem({ question, deleteQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function deleteButtonClick(){
    console.log("Delete item ID:", question.id)
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then( r => r.json() )
    .then( () => deleteQuestion(question) )
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={deleteButtonClick} >Delete Question</button>
    </li>
  );
}

export default QuestionItem;
