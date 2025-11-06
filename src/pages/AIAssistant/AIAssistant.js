import React from 'react';
import './AIAssistant.css';

function AIAssistant() {
  return (
    <div className="ai-assistant-container">
      <div className="ai-assistant-content">
        <div className="ai-header">
          <h1>🤖 AI Driving Assistant</h1>
          <p>Real-time Gemini AI guidance for safer driving</p>
        </div>
        
        <div className="camera-section">
          <div className="camera-placeholder">
            <div className="camera-icon">📹</div>
            <h3>Camera Feed</h3>
            <p>Gemini AI will analyze your surroundings in real-time</p>
            <button className="start-camera-btn">Start Camera</button>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🔄</div>
            <h3>Sharp Turns</h3>
            <div className="stat-number">12</div>
            <p>Detected this week</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🛑</div>
            <h3>Sudden Brakes</h3>
            <div className="stat-number">8</div>
            <p>Emergency stops detected</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📱</div>
            <h3>Phone Usage</h3>
            <div className="stat-number">45m</div>
            <p>Total time while driving</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <h3>Drive Time</h3>
            <div className="stat-number">8.5h</div>
            <p>This week</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIAssistant;