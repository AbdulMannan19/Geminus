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

        <div className="ai-guidance">
          <h3>🎯 AI Guidance</h3>
          <div className="guidance-box">
            <p>Click "Start Camera" to begin real-time AI assistance</p>
            <ul>
              <li>🚦 Traffic sign recognition</li>
              <li>🚗 Vehicle detection and warnings</li>
              <li>🛣️ Lane guidance</li>
              <li>⚠️ Hazard alerts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIAssistant;