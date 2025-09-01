import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Task Manager Logo" className="logo" />
        <h1>Task Manager</h1>
      </div>
      <div className="user-info">
        {user && (
          <>
            <span>Welcome, {user.username}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
