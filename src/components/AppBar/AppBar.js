import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './AppBar.css';

function AppBar() {
  const { logout, user, isAuthenticated } = useAuth0();

  return (
    <div className="appbar">
      <div className="appbar-content">
        <div className="appbar-left">
          <h1 className="app-title">Geminus</h1>
        </div>
        {isAuthenticated && (
          <div className="appbar-right">
            <span className="user-name">Welcome, {user.name}</span>
            <button 
              className="logout-btn"
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppBar;