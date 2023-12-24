import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './MainPage.css'; // Import the CSS file
import axios from 'axios';

function MainPage() {
    const [selectedTopic, setSelectedTopic] = useState(''); // State for selected topic
  const [maxQuestions, setMaxQuestions] = useState(10); // Default to 5 questions

  const navigate = useNavigate();

  const [topics,setTopics] = useState([]);

  useEffect( () => {
     
    getTopic();
  
    
  },[])


  const getTopic = async () => {
    const url='http://localhost:8080/quiz/topics';

    const response=await axios.get(url);
    const result=response.data;
    console.log("inside main axios result- ",result);
    setTopics(result);
  };
  

  const handleStartQuiz = () => {

    // Use react-router to navigate to the quiz page with query parameters
    if(maxQuestions<1){
        alert('Select more question');
        return;
    }
    if(maxQuestions>100){
      alert('Select less question');
      return;
    }
     if(selectedTopic.length > 0){
      navigate('/quiz',{state:{
      topic : selectedTopic
      ,maxQuestions : maxQuestions
   } }) ;
  }
  else{
    alert('Select Correct Topic');
  }
  };

  return (
    <div className="front-page-container">
      <h1>Welcome to the Quiz App!</h1>
      <label htmlFor="topic">Select Topic:</label>
      <select
        id="topic"
        value={selectedTopic}
        onChange={(e) => setSelectedTopic(e.target.value)}
      >
        <option value="">Select...</option>
        {/*
        <option value="geography">Geography</option>
        <option value="science">Science</option>
         Add more topics as needed */}
         {topics.map((topic)=>{
          return(
          <option value={topic}>{topic}</option>
          );
         })}
      </select>

      <label htmlFor="maxQuestions">Number of Questions:</label>
      <input
        type="number"
        id="maxQuestions"
        value={maxQuestions}
        min='1'
        max='100'
        onChange={(e) => setMaxQuestions(e.target.value)}
      />

      <button onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
}

export default MainPage;