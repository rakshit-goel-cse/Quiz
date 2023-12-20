import React,{useState} from 'react';
import './Question.css';
function Question(props){
    console.log('QUESTION PROP-',props);
    const numberOfQues=props.data.length;
    const [index, setIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answerSelected, setAnswerSelected] = useState(false);

    let category='',difficulty='',question='',answers=[] , description='',correctAns='';
    let data=null;
    if(index<numberOfQues){
        data=props.data[index];
            console.log('DATA-',data);
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
        setIndex(index-1);
      setAnswerSelected(false); // Reset answer selection
    }
  };
    const handleNextQuestion=()=>{
        if(index+1<numberOfQues){
        setIndex(index+1);
        setAnswerSelected(false);
        }
    };

    // Function to handle answer selection
  const handleAnswerSelect = (index) => {
    // Set the selected answer
    if(!answerSelected){
        console.log("handle selected-",index);
        setSelectedAnswer(index);
        setAnswerSelected(true);
    }
  };

    let ansid=0;

    // Function to check if the user is on the first question
  const isFirstQuestion = index === 0;

  // Function to check if the user is on the last question
  const isLastQuestion = index === numberOfQues- 1;

    return (
        <div>
            {/* Navigation arrows */}
        <div className={`arrow left ${isFirstQuestion ? 'disabled':''}`} 
            onClick={isFirstQuestion?null:handlePrevQuestion}>&lt;</div>

        <h1>{category} Quiz</h1>
        <h2>Difficulty: {difficulty}</h2>
        <h3>Question {index + 1}</h3>
        <p>{question}</p>
        <ul>
            {/* Map through answer options */ }
            {answers.map((answer,index) => (
            <li className='answer'
                
                key={data.id+''+index}
                // Highlight selected answer
                style={{ backgroundColor: data.id+''+index === selectedAnswer ? '#ADD8E6' : 'white' }}
                onClick={() => handleAnswerSelect(data.id+''+index)}
            >
                {answer}
                
            </li>
            
            ))}
        </ul>
        <button onClick={handleNextQuestion}>Next Question</button>

        {/* correct answer decription*/}
        {answerSelected && (
        <div>
          <h3>Selected Answer:</h3>
          <p>{correctAns}</p>
          <br/>
          <h3>Description:</h3>
          <p>{description}</p>
        </div>
      )}

         {/* Navigation arrows */}
      <div className={`arrow right ${isLastQuestion ? 'disabled' : ''}`} 
        onClick={isLastQuestion ? null : handleNextQuestion}>&gt;</div>
        </div>
    );
}

export default Question;