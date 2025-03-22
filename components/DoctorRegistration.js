// src/components/DoctorRegister.js

import React, { useState } from 'react';
import '../App.css';
import './header';
import './layout';
import './navigation';
import './HomePage';
const DoctorRegistration = () => {
  const [name, setName] = useState('');
  const [specialization, setDocSpecialization] = useState('');
  const [desig, setDesig] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phno, setPhno] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    if (username && password && phno && name && specialization && desig) {
      console.log('Doctor registered successfully');
    } else {
      setError('All fields are required');
    }
  };

  return (
    <div>
      <h2>Doctor Registration</h2>
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
          <label htmlFor="phno">Phone number :</label>
          <input
            type="text"
            id="phno"
            value={phno}
            onChange={(e) => setPhno(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="desig">Doctor's Designation :</label>
          <input
            type="text"
            id="desig"
            value={desig}
            onChange={(e) => setDesig(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="specialization">Doctor's Specialization :</label>
          <input
            type="text"
            id="specialization"
            value={specialization}
            onChange={(e) => setDocSpecialization(e.target.value)}
            required
          />
        </div>
    
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default DoctorRegistration;
