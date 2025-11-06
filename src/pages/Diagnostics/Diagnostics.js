import React from 'react';
import './Diagnostics.css';

function Diagnostics() {
  return (
    <div className="diagnostics-container">
      <div className="diagnostics-content">
        <div className="diagnostics-header">
          <h1>📊 Driving Diagnostics</h1>
          <p>AI-powered analysis of your driving patterns</p>
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

        <div className="analysis-section">
          <h3>🧠 AI Analysis</h3>
          <div className="analysis-card">
            <h4>Driving Score: 85/100</h4>
            <div className="score-bar">
              <div className="score-fill" style={{width: '85%'}}></div>
            </div>
            <div className="recommendations">
              <h5>Recommendations:</h5>
              <ul>
                <li>⚠️ Reduce phone usage while driving for better safety</li>
                <li>🚗 Practice smoother braking techniques</li>
                <li>🛣️ Take wider turns to improve passenger comfort</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diagnostics;