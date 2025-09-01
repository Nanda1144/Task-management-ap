import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../context/AuthContext';
import Header from './UI/Header';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import TaskList from './Tasks/TaskList';
import AddTask from './Tasks/AddTask';
import EditTask from './Tasks/EditTask';
import Notification from './UI/Notification';
import './App.css';

function AppRoutes() {
  const { user, token } = useAuth();
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 3000);
  };

  return (
    <div className="app">
      <Header />
      {notification.show && (
        <Notification 
          message={notification.message} 
          type={notification.type} 
          onClose={() => setNotification({ show: false, message: '', type: '' })} 
        />
      )}
      <main className="main-content">
        <Routes>
          <Route path="/" element={token ? <TaskList showNotification={showNotification} /> : <Navigate to="/login" />} />
          <Route path="/login" element={!token ? <Login showNotification={showNotification} /> : <Navigate to="/" />} />
          <Route path="/signup" element={!token ? <Signup showNotification={showNotification} /> : <Navigate to="/" />} />
          <Route path="/add-task" element={token ? <AddTask showNotification={showNotification} /> : <Navigate to="/login" />} />
          <Route path="/edit-task/:id" element={token ? <EditTask showNotification={showNotification} /> : <Navigate to="/login" />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
