import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { getTasks } from './api';

// Main App logic, conditionally renders Login or Task UI and manages state
