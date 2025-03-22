// src/components/LoginRegister.js

import React, { useState } from 'react';
import '../App.css';
import './header';
import './layout';
import './navigation';
import HomePage from './components/HomePage';
const LoginRegister = () => {
  const [showRoleSelection, setShowRoleSelection] = useState(false);
  const [role, setRole] = useState('');

  const handleLogin = () => {
    setShowRoleSelection(true);
  };

  const handleRegister = () => {
    console.log('Register button clicked');
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleRoleSubmit = () => {
    console.log(`Logging in as ${role}`);
    setShowRoleSelection(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
      {showRoleSelection && (
        <div>
          <label>
            Select Role:
            <select value={role} onChange={handleRoleChange}>
              <option value="" disabled>Select your role</option>
              <option value="admin">Admin</option>
              <option value="doctor">Doctor</option>
              <option value="patient">Patient</option>
            </select>
          </label>
          <button onClick={handleRoleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default LoginRegister;
