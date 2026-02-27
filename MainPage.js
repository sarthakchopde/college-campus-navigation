import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();
  return (
    <div className="centered-container">
      <h1>Welcome to College Navigator</h1>
      <button onClick={() => navigate('/select-department')}>Get Started</button>
    </div>
  );
}

export default MainPage;
