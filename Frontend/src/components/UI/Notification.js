import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import './Notification.css';

const Notification = ({ message, type, onClose }) => {
  return (
    <div className={`notification ${type}`}>
      <span>{message}</span>
      <button onClick={onClose} className="close-btn">
        <FaTimesCircle />
      </button>
    </div>
  );
};

export default Notification;
