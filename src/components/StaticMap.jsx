import React from 'react';
import { useNavigate } from 'react-router-dom';
import cseMap from '../assets/cse_map.png'; // ✅ this path must be correct

function StaticMap() {
  const navigate = useNavigate();

  return (
    <div className="centered-container">
      <h2>Static Map of CSE Department</h2>
      <img src={cseMap} alt="CSE Map" style={{ width: '60%', border: '1px solid #ccc', borderRadius: '15px' }} />
      <div style={{ marginTop: '20px' }}>
        <button className="card-button" onClick={() => navigate('/select-department')}>Back to Department Selection</button>
      </div>
    </div>
  );
}

export default StaticMap;

