import React from 'react';
import './flashcards.css'; // Make sure this file exists if you want to style your flashcards

function Flashcard({ question, answer }) {
  return (
    <div className="flashcard">
      <div className="flashcard-question">{question}</div>
      <div className="flashcard-answer">{answer}</div>
    </div>
  );
}

export default Flashcard;