import React from 'react';
import { FaEdit, FaTrash, FaCheck, FaUndo } from 'react-icons/fa';
import './TaskItem.css';

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task-item ${task.status}`}>
      <div className="task-content">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div className="task-actions">
        <button 
          className={`status-btn ${task.status}`} 
          onClick={() => onToggle(task._id)}
        >
          {task.status === 'pending' ? <FaCheck /> : <FaUndo />}
        </button>
        <button className="edit-btn">
          <FaEdit />
        </button>
        <button className="delete-btn" onClick={() => onDelete(task._id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
