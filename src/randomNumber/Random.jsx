import React, { useState, useEffect } from 'react';
import './random.css'

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    setRandomNumber(generateRandomNumber());

    return () => {
      setRandomNumber(null);
    };
  }, []);


  return (
    <div className='div'>
      <h1 className='text-random'>Random Number: {randomNumber}</h1>
      <button className='button-random' onClick={() => setRandomNumber(generateRandomNumber())}>
        Generate New Number
      </button>
    </div>
  );
};

export default RandomNumberGenerator;
