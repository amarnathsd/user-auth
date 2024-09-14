// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import CheckUserScreen from './screens/CheckUserScreen';
import UserFormScreen from './screens/UserFormScreen';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/check-user" element={<CheckUserScreen />} />
        <Route path="/user-form" element={<UserFormScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
