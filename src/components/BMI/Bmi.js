import React, { useState } from 'react';
import './Bmi.css';

function Bmi() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  function calculateBmi(height, weight) {
    if (height && weight) {
      let heightInM = height / 100;
      let newBmi = weight / (heightInM * heightInM);
      setBmi(newBmi.toFixed(2)); // rounded to 2 decimal places

      if (newBmi < 18.5) {
        setCategory('Underweight');
      } else if (newBmi >= 18.5 && newBmi < 24.9) {
        setCategory('Normal weight');
      } else if (newBmi >= 25 && newBmi < 29.9) {
        setCategory('Overweight');
      } else {
        setCategory('Obesity');
      }
    }
  }

  return (
    <div className="bmi-container">
      <h2>Calculate Your BMI</h2>
      <label htmlFor="height">Height (cm)</label>
      <input
        id="height"
        type="number"
        value={height}
        placeholder="Enter height"
        onChange={(e) => setHeight(e.target.value)}
      />

      <label htmlFor="weight">Weight (kg)</label>
      <input
        id="weight"
        type="number"
        placeholder="Enter weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <button onClick={() => calculateBmi(height, weight)}>Calculate</button>

      {bmi && (
        <p className="bmi-result">
          Your BMI is <strong>{bmi}</strong> - <span className="bmi-category">{category}</span>
        </p>
      )}
    </div>
  );
}

export default Bmi;