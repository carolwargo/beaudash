import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Navigation/UserNav'; // Adjust the import path as necessary

const HomeLayout = () => {
  return (
    <div className="d-flex">
      <Nav />
      <main>
        <Outlet /> {/* Renders child routes */}
      </main>
    </div>
  );
};

export default HomeLayout;