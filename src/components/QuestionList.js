import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, deleteQuestion, updateQuestions }) {
  
  if(!questions) return <h3>Loading...</h3>

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{
        /* display QuestionItem components here after fetching */
        questions.map(question => {
          return (
            <QuestionItem question={question} key={question.id} deleteQuestion={deleteQuestion} updateQuestions={updateQuestions} /> 
          )
        })
      }</ul>
    </section>
  );
}

export default QuestionList;
