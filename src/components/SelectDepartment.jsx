import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FaLaptopCode,
  FaMicrochip,
  FaCog,
  FaBolt,
  FaBuilding
} from "react-icons/fa";

function SelectDepartment() {

  const navigate = useNavigate();

  const handleDepartment = (department) => {
    navigate(`/map-view?department=${department}`);
  };

  return (

    <div className="container">

      <div className="card">

        <h1>Select Department</h1>

        <p>Select your destination to begin navigation.</p>

        <div className="department-grid">

          <div
            className="department-card"
            onClick={() => handleDepartment("CSE")}
          >
            <FaLaptopCode size={35} />
            <h3>CSE</h3>
          </div>

          <div
            className="department-card"
            onClick={() => handleDepartment("ENTC")}
          >
            <FaMicrochip size={35} />
            <h3>ENTC</h3>
          </div>

          <div
            className="department-card"
            onClick={() => handleDepartment("Mechanical")}
          >
            <FaCog size={35} />
            <h3>Mechanical</h3>
          </div>

          <div
            className="department-card"
            onClick={() => handleDepartment("Electrical")}
          >
            <FaBolt size={35} />
            <h3>Electrical</h3>
          </div>

          <div
            className="department-card"
            onClick={() => handleDepartment("Civil")}
          >
            <FaBuilding size={35} />
            <h3>Civil</h3>
          </div>

        </div>

      </div>

    </div>

  );
}

export default SelectDepartment;