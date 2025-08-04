import React, { useState } from 'react';
import './Bmi.css';

function Bmi() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  function calculateBmi() {
    setError('');

    if (!height || !weight) {
      setError('Please enter both height and weight');
      return;
    }

    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (heightNum <= 0 || weightNum <= 0) {
      setError('Height and weight must be positive numbers');
      return;
    }

    if (heightNum > 300) {
      setError('Please enter height in centimeters (max 300cm)');
      return;
    }

    if (weightNum > 500) {
      setError('Please enter a reasonable weight (max 500kg)');
      return;
    }

    const heightInM = heightNum / 100;
    const newBmi = weightNum / (heightInM * heightInM);
    setBmi(newBmi.toFixed(2)); 

    if (newBmi < 18.5) {
      setCategory('Underweight');
    } else if (newBmi < 24.9) {
      setCategory('Normal weight');
    } else if (newBmi < 29.9) {
      setCategory('Overweight');
    } else {
      setCategory('Obesity');
    }
  }

  const handleHeightChange = (e) => {
    const value = e.target.value;
    if (value === '' || (!isNaN(value) && parseFloat(value) >= 0)) {
      setHeight(value);
    }
  };

  const handleWeightChange = (e) => {
    const value = e.target.value;
    if (value === '' || (!isNaN(value) && parseFloat(value) >= 0)) {
      setWeight(value);
    }
  };

  return (
    <div className="bmi-container">
      <h2>BMI Calculator</h2>
      
      <div className="input-group">
        <label htmlFor="height">Height (cm)</label>
        <input
          id="height"
          type="number"
          value={height}
          placeholder="Enter height in cm"
          onChange={handleHeightChange}
          min="1"
        />
      </div>
      
      <div className="input-group">
        <label htmlFor="weight">Weight (kg)</label>
        <input
          id="weight"
          type="number"
          placeholder="Enter weight in kg"
          value={weight}
          onChange={handleWeightChange}
          min="1"
        />
      </div>

      {error && <div className="error-message">{error}</div>}

      <button onClick={calculateBmi}>Calculate BMI</button>

      {bmi && !error && (
        <div className="bmi-result">
          Your BMI is <strong>{bmi}</strong> - {' '}
          <span className="bmi-category" data-category={category}>
            {category}
          </span>
        </div>
      )}
    </div>
  );
}

export default Bmi;