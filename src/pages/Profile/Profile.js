import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Profile.css';

function Profile() {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-header">
          <div className="profile-avatar">
            {user.picture ? (
              <img src={user.picture} alt="Profile" className="avatar-image" />
            ) : (
              <div className="avatar-placeholder">
                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>
            )}
          </div>
          <h1 className="profile-name">{user.name}</h1>
          <p className="profile-email">{user.email}</p>
        </div>
        
        <div className="profile-details">
          <h2>Profile Information</h2>
          <div className="detail-item">
            <label>Name:</label>
            <span>{user.name}</span>
          </div>
          <div className="detail-item">
            <label>Email:</label>
            <span>{user.email}</span>
          </div>
          <div className="detail-item">
            <label>Email Verified:</label>
            <span>{user.email_verified ? 'Yes' : 'No'}</span>
          </div>
          <div className="detail-item">
            <label>Last Updated:</label>
            <span>{new Date(user.updated_at).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;