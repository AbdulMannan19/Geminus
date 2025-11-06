import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Home.css';

function Home() {
  const { user } = useAuth0();

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Gemini Powered</span><br/>
            Driving Assistant
          </h1>
          
          <p className="hero-subtitle">
            Experience the future of safe driving with AI-powered real-time guidance, 
            intelligent diagnostics, and interactive learning powered by Google's Gemini AI
          </p>
          
          <div className="features-grid">
            <div className="feature-card ai">
              <div className="feature-icon">🤖</div>
              <h3>Real-time AI Guidance</h3>
              <p>Camera-based traffic analysis with instant voice guidance for safer driving decisions</p>
            </div>
            
            <div className="feature-card diagnostics">
              <div className="feature-icon">📊</div>
              <h3>Smart Diagnostics</h3>
              <p>AI-powered analysis of driving patterns, phone usage, and safety metrics</p>
            </div>
            
            <div className="feature-card learning">
              <div className="feature-icon">⚡</div>
              <h3>Interactive Learning</h3>
              <p>Gamified traffic sign quizzes powered by Gemini for new driver education</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;