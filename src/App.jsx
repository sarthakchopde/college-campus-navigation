import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from "./components/MainPage.jsx";
import MapView from "./components/MapView.jsx";
import StaticMap from "./components/StaticMap.jsx";
import SelectDepartment from "./components/SelectDepartment.jsx"; // optional if static maps used
import './styles.css'; // Import the CSS file

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/select-department" element={<SelectDepartment />} />
        <Route path="/map-view" element={<MapView />} />
        <Route path="/static-map" element={<StaticMap />} /> {/* optional */}
      </Routes>
    </Router>
  );
}

export default App;


