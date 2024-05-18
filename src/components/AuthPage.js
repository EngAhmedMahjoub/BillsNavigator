import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import './AuthPage.css';
import Header from './Header';

const AuthPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-links">
        <Header />
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
