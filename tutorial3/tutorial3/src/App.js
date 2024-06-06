import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Registration';
import Profile from './Profile';
import './App.css';
{/* Implemented routing in react */}
function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
