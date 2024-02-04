import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import '../App.css'; // Import your CSS file for styling

const App = () => {
  const [isSwirling, setIsSwirling] = useState(false);

  useEffect(() => {
    // Trigger the swirling animation after the component mounts
    setIsSwirling(true);
  }, []);

  return (
    <div className={`app-container ${isSwirling ? 'swirl-animation' : ''}`}>
      <Container>
        <h1>Welcome to my personal portfolio webpage!</h1>
      </Container>
    </div>
  );
};

export default App;


