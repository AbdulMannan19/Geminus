import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Home.css';

function Home() {
  const { user } = useAuth0();

  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1 className="welcome-title">Welcome back, {user.name}!</h1>
        <p className="welcome-subtitle">Ready to explore with Geminus?</p>
      </div>
      
      <div className="user-info-card">
        <div className="user-avatar">
          {user.picture ? (
            <img src={user.picture} alt="Profile" className="avatar-img" />
          ) : (
            <div className="avatar-placeholder">
              {user.name?.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        
        <div className="user-details">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      </div>
      
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon blue">🤖</div>
          <h3>AI Assistant</h3>
          <p>Get help with your daily tasks</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon red">💬</div>
          <h3>Smart Chat</h3>
          <p>Conversational AI at your fingertips</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon yellow">⚡</div>
          <h3>Quick Actions</h3>
          <p>Streamline your workflow</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon green">📊</div>
          <h3>Analytics</h3>
          <p>Track your productivity</p>
        </div>
      </div>
    </div>
  );
}

export default Home;