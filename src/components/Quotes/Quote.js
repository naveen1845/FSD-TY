import React, { useState, useEffect } from 'react';
import './Quote.css';

const quotes = [
  "Believe you can and you're halfway there.",
  "The only way to do great work is to love what you do.",
  "Life is what happens when you're busy making other plans.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The best way to predict the future is to create it."
];

function Quote() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setIndex(randomIndex);
  }, []);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % quotes.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <div className="quote-container">
      <div className="quote-box">
        <p className="quote-text">"{quotes[index]}"</p>
        <div className="quote-buttons">
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
        <div className="quote-counter">
          Quote {index + 1} of {quotes.length}
        </div>
      </div>
    </div>
  );
}

export default Quote;