import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

// Set auth token for requests
API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

// Auth APIs
export const signUp = (formData) => API.post('/api/auth/signup', formData);
export const login = (formData) => API.post('/api/auth/login', formData);

// Task APIs
export const fetchTasks = () => API.get('/api/tasks');
export const createTask = (taskData) => API.post('/api/tasks', taskData);
export const updateTask = (id, taskData) => API.put(`/api/tasks/${id}`, taskData);
export const deleteTask = (id) => API.delete(`/api/tasks/${id}`);
