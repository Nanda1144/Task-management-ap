const API_URL = process.env.REACT_APP_API_URL;

export const register = (email, password) => fetch(`${API_URL}/auth/register`, {...});
export const login = (email, password) => fetch(`${API_URL}/auth/login`, {...});
export const getTasks = (token) => fetch(`${API_URL}/tasks`, {...});
export const createTask = (token, data) => fetch(`${API_URL}/tasks`, {...});
export const updateTask = (token, id, data) => fetch(`${API_URL}/tasks/${id}`, {...});
export const toggleTask = (token, id) => fetch(`${API_URL}/tasks/${id}/toggle`, {...});
export const deleteTask = (token, id) => fetch(`${API_URL}/tasks/${id}`, {...});
