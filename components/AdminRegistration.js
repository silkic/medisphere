// src/components/AdminRegister.js

import React, { useState } from 'react';
import '../App.css';
import './header';
import './layout';
import './navigation';
import './HomePage';

const AdminRegistration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phno, setPhno] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    // Replace this with actual registration logic
    if (username && password && phno) {
      console.log('Admin registered successfully');
      setSuccess('Registration successful');
      setError('');
    } else {
      setError('All fields are required');
      setSuccess('');
    }
  };

  return (
    <div>
      <h2>Admin Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phhno">Phone number :</label>
          <input
            type="text"
            id="phno"
            value={phno}
            onChange={(e) => setPhno(e.target.value)}
            required
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {success && <div style={{ color: 'green' }}>{success}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AdminRegistration;
