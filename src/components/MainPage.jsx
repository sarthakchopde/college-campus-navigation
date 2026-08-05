import React from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkedAlt } from "react-icons/fa";

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">

        <FaMapMarkedAlt className="logo-icon" />

        <h1>College Campus Navigator</h1>

        <p>
          Navigate your college campus with real-time GPS navigation.
          Select any department and get the shortest walking route.
        </p>

        <button
          className="start-btn"
          onClick={() => navigate("/select-department")}
        >
          🚀 Get Started
        </button>

      </div>
    </div>
  );
}

export default MainPage;