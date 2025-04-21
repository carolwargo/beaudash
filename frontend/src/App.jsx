import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home'; // Import Home component
import ErrorBoundary from './components/ErrorBoundary'; // Import ErrorBoundary component
import DashboardPage from './pages/Dashboard/DashboardPage';  
import UserProfile from './pages/UserProfile/UserProfile'; // Import UserProfilePage component  
import Test from './pages/Test/Test'; // Import Test component  
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'; // Import global CSS

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/beaudash'>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/user" element={<UserProfile/>} /> {/* User profile route */}
            <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
            <Route path="/test" element={<Test />} /> {/* Test route */}
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

// Create a component for handling not found routes
function NotFound() {
  console.error("Page not found!"); // Log error to console
  return <h1>404 - Not Found</h1>;
}

export default App;

