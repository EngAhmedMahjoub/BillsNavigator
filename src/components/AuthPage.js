import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import './AuthPage.css';

const AuthPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-links">
        <Link to="/auth/login" className="auth-link">Login</Link>
        <Link to="/auth/signup" className="auth-link">Sign Up</Link>
      </div>
      <div className="auth-form">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
};

export default AuthPage;
