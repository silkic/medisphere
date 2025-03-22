import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin/register">Admin</Link>
        </li>
        <li>
          <Link to="/patient/register">Patient</Link>
        </li>
        <li>
          <Link to="/doctor/register">Doctor</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;