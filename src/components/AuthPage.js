import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import './AuthPage.css';
import Header from './Header';
import Footer from './Footer';

const AuthPage = () => {
  return (
    <div className="auth-page">
      <Header />
      <div className="auth-form">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default AuthPage;
