// src/components/PatientRegister.js

import React, { useState } from 'react';
import '../App.css';
import './header';
import './layout';
import './navigation';

const PatientRegistration = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phno, setPhno] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bp, setBp] = useState('');
  const [sugar, setSugar] = useState('');
  const [bloodgroup, setBloodgroup] = useState('');
  const [prblm, setPrblm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    if (username && password && setPhno) {
      console.log('Patient registered successfully');
      setSuccess('Registration successful');
      setError('');
    } else {
      setError('All fields are required');
      setSuccess('');
    }
  };

  return (
    <div>
      <h2>Patient Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="username">Username :</label>
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
          <label htmlFor="age">Age :</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phno">Phone Number :</label>
          <input
            type="text"
            id="phno"
            value={phno}
            onChange={(e) => setPhno(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="weight">weight:</label>
          <input
            type="text"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="height">Height:</label>
          <input
            type="text"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="bp">Blood Pressure:</label>
          <input
            type="text"
            id="bp"
            value={bp}
            onChange={(e) => setBp(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="sugar">Sugar Level :</label>
          <input
            type="text"
            id="sugar"
            value={sugar}
            onChange={(e) => setSugar(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="bloodgroup">Blood Group :</label>
          <input
            type="text"
            id="bloodgroup"
            value={bloodgroup}
            onChange={(e) => setBloodgroup(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="prblm">Problem :</label>
          <input
            type="text"
            id="prblm"
            value={prblm}
            onChange={(e) => setPrblm(e.target.value)}
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

export default PatientRegistration;
