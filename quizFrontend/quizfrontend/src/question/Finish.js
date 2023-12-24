import React from 'react';
import './Finish.css'

const Finish = ({ score , maxQues }) => {
  return (
    <div className="final-score-container">
      <h1>Quiz Completed!</h1>
      <p>Your Final Score:</p>
      <h2>{score} / {maxQues}</h2> {/* Adjust the score and total questions as needed */}
      <p>Well done! You've completed the quiz.</p>
    </div>
  );
};

export default Finish;
