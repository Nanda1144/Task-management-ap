import React, { createContext, useContext, useState, useEffect } from 'react';
import { login, signUp } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      setUser(JSON.parse(atob(token.split('.')[1])).user);
    }
  }, [token]);

  const handleLogin = async (formData) => {
    try {
      const { data } = await login(formData);
      setToken(data.token);
      localStorage.setItem('token', data.token);
      return { success: true };
    } catch (error) {
      return { success: false, message: error.response.data.msg };
    }
  };

  const handleSignUp = async (formData) => {
    try {
      const { data } = await signUp(formData);
      setToken(data.token);
      localStorage.setItem('token', data.token);
      return { success: true };
    } catch (error) {
      return { success: false, message: error.response.data.msg };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, handleLogin, handleSignUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
