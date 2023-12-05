import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then( r => r.json() )
    .then( data => setQuestions(data) )
  },[])

  function addQuestion(newQuestion){
    setQuestions([...questions, newQuestion])
  }

  function deleteQuestion(deletedQuestion){
    const updatedQuestions = questions.filter(question => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions);
  }

  function updateQuestions(updatedQuestion){
    const updatedQuestions = questions.map( question => {
      if(question.id === updatedQuestion.id){
        return updatedQuestion;
      }else{
        return question;
      }
    })
    setQuestions(updatedQuestions);
  }
  console.log(questions)

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuestion={addQuestion} /> : <QuestionList questions={questions} deleteQuestion={deleteQuestion}  updateQuestions={updateQuestions} />}
    </main>
  );
}

export default App;
