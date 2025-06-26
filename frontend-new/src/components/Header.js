import React from 'react';
import './Header.css';
const API_URL = 'https://gallaryhub.onrender.com';
const Header = ({ userInfo, onLogout, onProfileClick }) => {
  const defaultAvatar = '/default-avatar.png';
  const profilePictureUrl = userInfo.profilePicture ? `${API_URL}/uploads/${userInfo.profilePicture}` : defaultAvatar;
  return (
    <header className="app-header">
      <div className="header-left">
        {/* You can add logo or nav links here in the future */}
      </div>

      <div className="header-right">
        <button onClick={onProfileClick} className="profile-button">
          <img src={profilePictureUrl} alt="Profile" className="profile-avatar-header" />
        </button>
        <button onClick={onLogout} className="logout-button-global">
          <span className="button-icon">🚪</span>
          <span className="button-text">Logout</span>
        </button>
      </div>
    </header>
  );
};
export default Header; 