import React from 'react';
import StartQuiz from './question/startQuiz.js';
import MainPage from './mainPage/MainPage.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Question from './question/Question.js';

function App() {
  console.log("indide app");

     // let data= getQuestion(6,'Spring');
      
  /*useEffect( ()=>{
    console.log("compDidMount");
    //const url='http://localhost:8080/quiz/questions'; 
    const url='http://localhost:8080/quiz/rightans';
      
  })*/

  return(
    <Router>
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="quiz" element={<StartQuiz/>} />
      <Route path="quiz/start" element={<Question/>} />
    </Routes>
  </Router>
  )
  
}

export default App;
