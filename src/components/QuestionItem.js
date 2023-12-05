import React from "react";

function QuestionItem({ question, deleteQuestion, updateQuestions }) {
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

  function changeAnswer(e){
    console.log('AnswerIndex:', e.target.value);
    console.log('QuestionID:', question.id);
    const newCorrectIndex = parseInt(e.target.value);
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correctIndex: newCorrectIndex,
      })
    })
    .then( r => r.json())
    .then( data => updateQuestions(data) )
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={changeAnswer} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={deleteButtonClick} >Delete Question</button>
    </li>
  );
}

export default QuestionItem;
