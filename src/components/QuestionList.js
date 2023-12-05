import React, { useState, useEffect }from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  
  const [questions, setQuestions] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then( r => r.json() )
    .then( data => setQuestions(data) )
  },[])

  console.log(questions)

  if(!questions) return <h3>Loading...</h3>

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{
        /* display QuestionItem components here after fetching */
        questions.map(question => <QuestionItem question={question} key={question.id}/> ) 
      }</ul>
    </section>
  );
}

export default QuestionList;
