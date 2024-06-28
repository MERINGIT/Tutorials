// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/LoginPage';
import ProfileList from './Pages/ProfileList';
import ProfileDetail from './Pages/ProfileDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profiles" element={<ProfileList />} />
        <Route path="/profiles/:id" element={<ProfileDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
