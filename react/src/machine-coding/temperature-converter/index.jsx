import React, { useState } from 'react';
import styles from './styles.module.css';

function TemperatureConverter() {
  const [inputTemperature, setInputTemperature] = useState('');
  const [outputTemperature, setOutputTemperature] = useState('');
  const [fromScale, setFromScale] = useState('celsius');
  const [toScale, setToScale] = useState('fahrenheit');

  const convertTemperature = () => {
    const inputTemp = parseFloat(inputTemperature);

    if (isNaN(inputTemp)) {
      setOutputTemperature('Invalid input');
      return;
    }

    if (fromScale === toScale) {
      setOutputTemperature(inputTemp);
      return;
    }

    if (fromScale === 'celsius' && toScale === 'fahrenheit') {
      setOutputTemperature((inputTemp * 9) / 5 + 32);
    } else if (fromScale === 'fahrenheit' && toScale === 'celsius') {
      setOutputTemperature(((inputTemp - 32) * 5) / 9);
    } else {
      // Handle other conversions here
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.cardTitle}>Temperature Converter</h1>
        <div className={styles.formGroup}>
          <label>Enter Temperature</label>
          <div className={styles.inputGroup}>
            <input
              type="text"
              className={`form-control ${styles.input}`}
              placeholder="Enter temperature"
              value={inputTemperature}
              onChange={(e) => setInputTemperature(e.target.value)}
            />
            <select
              className={`form-control ${styles.select}`}
              value={fromScale}
              onChange={(e) => setFromScale(e.target.value)}
            >
              <option value="celsius">Celsius</option>
              <option value="fahrenheit">Fahrenheit</option>
              {/* Add more temperature scales as needed */}
            </select>
          </div>
        </div>
        <button className={`btn btn-primary btn-block ${styles.convertButton}`} onClick={convertTemperature}>
          Convert
        </button>
        <div className={styles.outputGroup}>
          <p>Converted Temperature:</p>
          <p>{outputTemperature}</p>
          <select
            className={`form-control ${styles.select}`}
            value={toScale}
            onChange={(e) => setToScale(e.target.value)}
          >
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            {/* Add more temperature scales as needed */}
          </select>
        </div>
      </div>
    </div>
  );
}

export default TemperatureConverter;
