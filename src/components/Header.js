import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/auth/login" className="nav-link">Login</Link>
        <Link to="/auth/signup" className="nav-link">Sign Up</Link>
      </nav>
    </header>
  );
};

export default Header;
