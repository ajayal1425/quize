import React, { useState } from 'react';

const Quizefun = () => {
  const data = [
    { id: 1, question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
    { id: 2, question: 'What is JSX?', answer: 'JSX is a syntax extension for JavaScript.' },
    { id: 3, question: 'What is State?', answer: 'It is an object.'},
    { id: 4, question: 'What is js?', answer: 'It is a Scripting language.'},
    { id: 5, question: 'What is css?', answer: 'It is an style sheet.'}
  ];
  
  const [currentQuestion, setCurrentQuestion] = useState(data[0]);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = (id) => {
    const question = data.find(item => item.id === id);
    setCurrentQuestion(question);
    setShowAnswer(false);
  };

  const handleDivClick = () => {
     setShowAnswer(!showAnswer);
  };

  return (
    <div  style={{ padding: '50px' }}>
      {[1, 2, 3, 4, 5].map(id => (
        <button  onClick={() => handleClick(id)} 
        style={{marginRight: '50px',
        padding: '10px',
        height:'35px',
        width: '80px',
        border: 'none',
        backgroundColor:'cornflowerblue',
        color: '#ffffff',
        borderRadius:'10px'}}>Button {id}</button>
      ))}
      <div
        onClick={handleDivClick}
        style={{
          width: '600px',
          height: '300px',
          backgroundColor: 'lightgray',
          marginTop: '20px'
        }}
      >
         {showAnswer ? currentQuestion.answer : currentQuestion.question}
      </div>
    </div>
  );
};

export default Quizefun;

