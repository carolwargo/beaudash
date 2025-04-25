import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../DashboardComponents/Header'; // Adjust the import path as necessary

const Layout = () => {
  return (
    <div className="d-flex">
      <Header />
      <main>
        <Outlet /> {/* Renders child routes */}
      </main>
    </div>
  );
};

export default Layout;