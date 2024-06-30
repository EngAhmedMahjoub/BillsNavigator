import React from 'react';
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to BillsNavigator</h1>
      <p>Your ultimate tool to manage your personal finances and track your expenses effortlessly.</p>
      <div className="home-buttons">
        <a href="/auth/signup" className="home-button">Get Started</a>
        <a href="/auth/login" className="home-button">Login</a>
      </div>
    </div>
  );
};

export default HomePage;
