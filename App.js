import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import SelectDepartment from './components/SelectDepartment';
import MapView from './components/MapView';
import StaticMap from './components/StaticMap'; // optional if static maps used
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


