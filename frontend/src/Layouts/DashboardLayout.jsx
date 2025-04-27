import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Navigation/Nav'; // Adjust the import path as necessary

const DashboardLayout = () => {
  return (
    <div>
      <Nav />
      <main>
        <Outlet /> {/* Renders child routes */}
      </main>
    </div>
  );
};

export default DashboardLayout;