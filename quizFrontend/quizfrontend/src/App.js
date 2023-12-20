import React from 'react';
import StartQuiz from '/question/StartQuiz.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
    <Switch>
      
      <Route path="/quiz" component={StartQuiz} />
    </Switch>
  </Router>
  )
  
}

export default App;
