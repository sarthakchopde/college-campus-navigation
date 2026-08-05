import React from 'react';
import { useNavigate } from 'react-router-dom';

function SelectDepartment() {
  const navigate = useNavigate();

  const handleDepartment = (department) => {
    navigate(`/map-view?department=${department}`);
  };

  return (
    <div className="centered-container">
      <h2>Select a Department</h2>
      <div style={{ marginTop: '20px' }}>
        <button className="card-button" onClick={() => handleDepartment('CSE')}>CSE</button>
        <button className="card-button" onClick={() => handleDepartment('ENTC')}>ENTC</button>
        <button className="card-button" onClick={() => handleDepartment('Mechanical')}>Mechanical</button>
        <button className="card-button" onClick={() => handleDepartment('Electrical')}>Electrical</button>
        <button className="card-button" onClick={() => handleDepartment('Civil')}>Civil</button>
      </div>
    </div>
  );
}

export default SelectDepartment;
