import React, {useEffect, useState} from 'react';

import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import './startQuiz.css';


function StartQuiz(){
  const navigate=useNavigate();
  const location=useLocation();
    useEffect(() => {

      //console.log("PROPS-",location.state.topic);  
      getData(location.state.maxQuestions ,location.state.topic);
       
      }, [])
    
      const [data, setData] = useState([]);
      
    
      const getData = async (numQ, Category)=> {
          //console.log("getQuestion");
          const url='http://localhost:8080/quiz/questions'; 
          
        const param={
            category:Category,
            numQ:numQ
        };
    
          const response=await axios.get(url, {
            params:param
          })
          //const data=promise.then((response)=>response.data);
          const result=response.data;
          //console.log("RESULT-",result);
          setData(result);
          return result;
      }
      return (

       
        
        <div className="App">
          <header className="App-header">
            
          </header>
          {/* Exit button in the top-right corner */}
          <button className="exit-button" onClick={()=>{
            navigate('/quiz');
          }}>
             Exit
            </button>
          {0<data.length?navigate('/quiz/start',{ state:{
              questions:data
            }}
            ):null}
        </div>
      );
}

export default StartQuiz;