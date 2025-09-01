import React, { useState, useEffect } from 'react';
import { fetchTasks, deleteTask } from '../../services/api';
import TaskItem from './TaskItem';
import { useAuth } from '../../context/AuthContext';
import './Tasks.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    const getTasks = async () => {
      if (token) {
        const { data } = await fetchTasks();
        setTasks(data);
        setLoading(false);
      }
    };
    getTasks();
  }, [token]);

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter(task => task._id !== id));
  };

  const toggleStatus = (id) => {
    setTasks(tasks.map(task => 
      task._id === id 
        ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' } 
        : task
    ));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks found. Add a new task!</p>
      ) : (
        tasks.map(task => (
          <TaskItem 
            key={task._id} 
            task={task} 
            onDelete={handleDelete} 
            onToggle={toggleStatus} 
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
