import React from 'react';
import { Outlet } from 'react-router-dom';
import Drawer from '../components/Navigation/Drawer'; // <-- Make sure your component is actually "Drawer", not "TemporaryDrawer"

const Layout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Drawer />
      <main style={{ flexGrow: 1, padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
