import React, { useState, useEffect } from 'react';
import Flashcard from './flashcards.jsx'; // Import the Flashcard component
import './flashcards.css'; // Ensure your CSS is linked if needed

function FlashcardContainer() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    fetch('/data/aiTools.json')
      .then(response => response.json())
      .then(data => setFlashcards(data.ai_tools))
      .catch(error => console.error('Error fetching the AI tools:', error));
  }, []);

  return (
    <div className="flashcard-container">
      {flashcards.length > 0 ? (
        flashcards.map((tool, index) => (
          <Flashcard 
            key={index} 
            question={tool.name} 
            answer={tool.description} 
          />
        ))
      ) : (
        <p>No flashcards available.</p>
      )}
    </div>
  );
}

export default FlashcardContainer;