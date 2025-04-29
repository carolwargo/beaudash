//components/Layouts/ProfileLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Drawer from '../components/Navigation/Drawer'

const ProfileLayout = () => {
  return (
    <div className="d-flex">
      <Drawer /> {/* Assuming you have a Drawer component for navigation */}
      <main>
        <Outlet /> {/* Renders child routes */}
      </main>
    </div>
  );
};

export default ProfileLayout;