import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminRegister from './components/AdminRegistration';
import AdminLogin from './components/AdminLogin';
import PatientRegister from './components/PatientRegistration';
import PatientLogin from './components/PatientLogin';
import DoctorRegister from './components/DoctorRegistration';
import DoctorLogin from './components/DoctorLogin';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>MediSphere</h1>
        </header>
        <nav className="navbar">
          <div className="nav-item">
            <button className="nav-button">Register</button>
            <div className="dropdown-content">
              <Link to="/admin/register">Admin</Link>
              <Link to="/patient/register">Patient</Link>
              <Link to="/doctor/register">Doctor</Link>
            </div>
          </div>
          <div className="nav-item">
            <button className="nav-button">Login</button>
            <div className="dropdown-content">
              <Link to="/admin/login">Admin</Link>
              <Link to="/patient/login">Patient</Link>
              <Link to="/doctor/login">Doctor</Link>
            </div>
          </div>
        </nav>
        <main className="main-content">
          <Routes>
            {/* Add your other routes here */}
            <Route path="/admin/register" element={<AdminRegister />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/patient/register" element={<PatientRegister />} />
            <Route path="/patient/login" element={<PatientLogin />} />
            <Route path="/doctor/register" element={<DoctorRegister />} />
            <Route path="/doctor/login" element={<DoctorLogin />} />
            <Route path="/" element={<div>Welcome to MediSphere</div>} />
            <Route path="*" element={<div>404 Not Found</div>} />
            <Route path="/" element={<div>Welcome to MediSphere</div>} />
            <Route path="*" element={<div>404 Not Found. <Link to="/">Go back to home</Link></div>} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2024 MediSphere. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
