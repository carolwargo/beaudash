// src/context/AuthProvider.jsx
import React, { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching user data from backend
    // Replace with real API call, e.g.:
    // import axios from 'axios';
    // axios.get('http://localhost:5000/api/users/me', { withCredentials: true })
    //   .then(res => {
    //     setUser({ name: res.data.name, handle: res.data.handle });
    //     setLoading(false);
    //   })
    //   .catch(err => {
    //     console.error('Failed to fetch user:', err);
    //     setUser(null);
    //     setLoading(false);
    //   });
    setUser({ name: 'Username', handle: '@username' });
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};