import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Login.css';

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1 className="login-title">Geminus</h1>
          <p className="login-subtitle">Your AI-powered companion</p>
        </div>
        
        <div className="login-content">
          <div className="gemini-icon">
            <div className="icon-circle blue"></div>
            <div className="icon-circle red"></div>
            <div className="icon-circle yellow"></div>
            <div className="icon-circle green"></div>
          </div>
          
          <p className="login-description">
            Sign in to access your personalized AI experience
          </p>
          
          <button 
            className="login-btn"
            onClick={() => loginWithRedirect()}
          >
            Sign In with Auth0
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;