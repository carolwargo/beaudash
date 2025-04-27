import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage'; // Import Home component
import ErrorBoundary from './components/ErrorBoundary'; // Import ErrorBoundary component

import Layout from './Layouts/Layout';

import DashboardPage from './pages/DashboardPage';  
import UserProfile from './pages/Profile/Profile'; // Import UserProfilePage component  
import Home from './pages/Home'; // Import UserHome component
import Test from './pages/Test/Test'; // Import Test component  
import DashboardLayout from './Layouts/DashboardLayout'; // Import DashboardLayout component
import ProfileLayout from './Layouts/ProfileLayout'; // Import ProfileLayout component
import HomeLayout from './Layouts/HomeLayout'; // Import HomeLayout component
import AuthProvider from './context/AuthProvider';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';

function App() {
  return (
    <div className="App">
         <AuthProvider>
      <BrowserRouter basename='/beaudash'>
        <ErrorBoundary>
          <Routes>


        {/* Public Website Homepage */}
  <Route path="/" element={<HomePage />} />

{/* User Home (with Drawer layout) */}
<Route element={<Layout />}>
  <Route path="/home" element={<Home />} />
  <Route path="/home/test" element={<Test />} />
</Route>

{/* Dashboard (with Dashboard layout) */}
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route index element={<DashboardPage />} /> {/* /dashboard */}
  <Route path="test" element={<Test />} /> {/* /dashboard/test */}
</Route>


                    {/* Dashboard layout routes */}
        <Route path="/profile" element={<ProfileLayout />}>
        <Route index element={<UserProfile />} />
              <Route path="user" element={<UserProfile />} /> {/* /dashboard/user */}
              <Route path="test" element={<Test />} /> {/* /dashboard/test */}
            </Route>


   
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

// Create a component for handling not found routes
function NotFound() {
  console.error("Page not found!"); // Log error to console
  return <h1>404 - Not Found</h1>;
}

export default App;

