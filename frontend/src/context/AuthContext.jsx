// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component to wrap the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initial state: no user

  // Simulate fetching user data from backend (replace with real API call)
  useEffect(() => {
    // Example: Fetch user from your MERN backend
    // import axios from 'axios';
    // axios.get('http://localhost:5000/api/users/me', { withCredentials: true })
    //   .then(res => setUser(res.data));
    setUser({ name: 'Username', handle: '@username' }); // Placeholder
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};