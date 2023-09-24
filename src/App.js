import './App.css';
import './index.css'
import React, { useState } from 'react'

function App() {

  // state
  const [weightKg, setWeightKg] = useState(0);
  const [heightCm, setHeightCm] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calcBmi = (event) => {
    // Prevent submitting to the server
    event.preventDefault();

    if (weightKg === 0 || heightCm === 0) {
      alert('Please enter a valid weight and height');
    } else {
      // Convert height from cm to meters
      const heightM = heightCm / 100;

      // Calculate BMI using weight in kg and height in meters
      const bmiValue = weightKg / (heightM * heightM);
      setBmi(bmiValue.toFixed(1));

      // Logic for message
      if (bmiValue < 18.5) {
        setMessage('You are underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage('You are a healthy weight');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage('You are overweight');
      } else {
        setMessage('You are obese');
      }
    }
  }

  const reload = () => {
    window.location.reload();
  }

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>

          <div>
            <label>Weight (kg)</label>
            <input value={weightKg} onChange={(e) => setWeightKg(e.target.value)} />
          </div>

          <div>
            <label>Height (cm)</label>
            <input value={heightCm} onChange={(event) => setHeightCm(event.target.value)} />
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
