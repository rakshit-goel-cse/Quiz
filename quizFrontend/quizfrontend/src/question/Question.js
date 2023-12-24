import React,{useState} from 'react';
import './Question.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const getCorrectAnswer = async (id) =>{
     const response = await axios.get('http://localhost:8080/quiz/rightans/'+id);
    return( response.data);

};

function Question(props){
    const navigate=useNavigate();
    const location=useLocation();
    const questions = location.state.questions;
    const numberOfQues=questions.length;
    const [index, setIndex] = useState(0);
    const [submittedAnswer, setsubmittedAnswer] = useState(null);
    const [answerSelected, setAnswerSelected] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [correctAns, setCorrectAns] = useState('');
    const [description , setDescription] = useState('');

    let category='',difficulty='',question='',answers=[];
    let data=null;
    if(index<numberOfQues){
        data=questions[index];
            //console.log('DATA-',data);
                if(null!=data){
                    category=data.category;
                    difficulty=data.difficulty;
                    question=data.question;
                    answers=[data.answer1,data.answer2,data.answer3,data.answer4];
                }
    }

    // Function to handle previous question
  const handlePrevQuestion = () => {
    console.log("HANdPREV-",index);
    if (index > 0) {
      setAnswerSelected(true); // Reset answer selection
      setSubmitted(true);
      setIndex(index-1);
    }
  };
    const handleNextQuestion=()=>{
        if(index+1<numberOfQues){
        setIndex(index+1);
        setAnswerSelected(false);
        setSubmitted(false);
        }
    };

    // Function to handle answer selection
  const handleAnswerSelect = (index) => {
    // Set the selected answer
    if(!answerSelected){
        //console.log("handle selected-",index);
        setsubmittedAnswer(index);
        setAnswerSelected(true);
    }
  };

  //handle answer submit
  const handleSubmit = async () => {
    const result = await getCorrectAnswer(data.id);
    console.log("correct answer result-",result);
    setCorrectAns(result.answer);
    setDescription(result.description);
    setSubmitted(true);
  };

  //handle answer finished
  const handleFinish = () =>{}

    let ansid=0;

    // Function to check if the user is on the first question
  const isFirstQuestion = index === 0;

  // Function to check if the user is on the last question
  const isLastQuestion = index === numberOfQues- 1;

    return (
        <div>

          {/* Reset button in the top-right corner */}
          <button className="rsest-button" onClick={()=>{
            navigate('/quiz',{state:{
              topic : category
              ,maxQuestions : numberOfQues
           } });
          }}>
             Reset
            </button>

            {/* Exit button in the top-right corner */}
          <button className="exit-button" onClick={()=>{
            navigate('/');
          }}>
             Exit
            </button>

            {/* Navigation arrows */}
        <div className={`arrow left ${isFirstQuestion ? 'disabled':''}`} 
            onClick={isFirstQuestion?null:handlePrevQuestion}>&lt;</div>

        <h1>{category} Quiz</h1>
        <h2>Difficulty: {difficulty}</h2>
        <h3>Question {index + 1}</h3>
        <p className='question'>{question}</p>
        <ul>
            {/* Map through answer options */ }
            {answers.map((answer,index) => (
            <li className='answer'
                key={data.id+''+index}
                // Highlight selected answer
                style={{ backgroundColor: data.id+''+index === submittedAnswer ? 
                (submitted ? (
                  answer===correctAns ? '#0af511' : '#e20d4de7' )
                  : '#ADD8E6' )
                  :'white' }}
                onClick={() => handleAnswerSelect(data.id+''+index)} >
                {answer}    
            </li>
            ))}
        </ul>
        {(isLastQuestion && submitted) ?<button onClick={handleFinish}>Finish Quiz</button> :null}
        {(answerSelected && !submitted) ?<button onClick={handleSubmit}>Submit</button> :null}

        {/* correct answer decription*/}
        {submitted && (
        <div>
          <h3>Selected Answer:</h3>
          <p className='answer'>{correctAns}</p>
          
          <h3>Description:</h3>
          <p className='description'>{description}</p>
        </div>
      )}

         {/* Navigation arrows */}
      <div className={`arrow right ${(!submitted || isLastQuestion) ? 'disabled' : ''}`} 
        onClick={isLastQuestion ? null : handleNextQuestion}>&gt;</div>
        </div>
    );
}

export default Question;