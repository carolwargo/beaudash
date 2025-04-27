//frontend/src/context/AuthContext.js dummy context
// frontend/src/context/AuthContext.js
import { createContext } from 'react';

export const AuthContext = createContext(null);


/* 
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/posts');
      console.log('Fetched posts:', response.data); 
      setPosts(Array.isArray(response.data) ? response.data : []);
    } catch (err) {
      console.error('Fetch posts error:', err);
      setError(err.message);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
      setUser(response.data.user);
      await fetchPosts();
    } catch (err) {
      setError(err.message);
    }
  };

  const logout = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/logout');
      setUser(null);
      setPosts([]);
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };


  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <AuthContext.Provider value={{ user, posts, loading, error, fetchPosts, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

*/