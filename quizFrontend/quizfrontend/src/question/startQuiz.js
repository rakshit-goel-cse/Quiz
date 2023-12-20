import React, {useEffect, useState} from 'react';
import Question from '/Question.js';
import axios from 'axios';


function StartQuiz(props){
    useEffect(() => {
        getData(5,"Spring");
       
      }, [])
    
      const [data, setData] = useState([]);
      
    
      const getData = async (numQ, Category)=> {
          console.log("getQuestion");
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
          console.log("RESULT-",result);
          setData(result);
          return result;
      }
      return (

       
        
        <div className="App">
          <header className="App-header">
            
          </header>
          {0<data.length?<Question data={data}/>:null}
        </div>
      );
}

export default StartQuiz;