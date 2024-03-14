import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const originalText = 'Welcome to my personal portfolio webpage that I created using react';
    let index = 0;

    const intervalId = setInterval(() => {
      if (index <= originalText.length) {
        setDisplayText(originalText.slice(0, index));
        index += 1;
      } else {
        clearInterval(intervalId);
      }
    }, 100); 

    return () => {
      clearInterval(intervalId); 
    };
  }, []); 

  const textStyle = {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1'
  }

  return (
    <div style={textStyle}>
      <h1>{displayText}</h1>
    </div>
  );
};

export default HomePage;
