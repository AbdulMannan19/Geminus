import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './AppBar.css';

function AppBar({ onNavigateToProfile, onNavigateToHome, onNavigate, currentPage }) {
  const { logout, user, isAuthenticated } = useAuth0();

  return (
    <div className="appbar">
      <div className="appbar-content">
        <div className="appbar-left">
          <h1 className="app-title" onClick={onNavigateToHome}>Geminus</h1>
        </div>
        {isAuthenticated && (
          <>
            <div className="appbar-center">
              <nav className="nav-menu">
                <button 
                  className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
                  onClick={() => onNavigate('home')}
                >
                  Home
                </button>
                <button 
                  className={`nav-btn ${currentPage === 'ai-assistant' ? 'active' : ''}`}
                  onClick={() => onNavigate('ai-assistant')}
                >
                  AI Assistant
                </button>
                <button 
                  className={`nav-btn ${currentPage === 'diagnostics' ? 'active' : ''}`}
                  onClick={() => onNavigate('diagnostics')}
                >
                  Diagnostics
                </button>
                <button 
                  className={`nav-btn ${currentPage === 'flash-tests' ? 'active' : ''}`}
                  onClick={() => onNavigate('flash-tests')}
                >
                  Flash Tests
                </button>
              </nav>
            </div>
            <div className="appbar-right">
            <button 
              className="logout-btn"
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            >
              Logout
            </button>
            <button 
              className="profile-btn"
              onClick={onNavigateToProfile}
              title="View Profile"
            >
              {user.picture ? (
                <img src={user.picture} alt="Profile" className="profile-pic" />
              ) : (
                <div className="profile-pic-placeholder">
                  {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
              )}
            </button>
          </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AppBar;