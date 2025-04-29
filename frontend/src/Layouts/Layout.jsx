import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header'
//import Drawer from '../components/Navigation/Drawer'; // <-- Make sure your component is actually "Drawer", not "TemporaryDrawer"

const Layout = () => {
  return (
<div className='w-100'>
  <Header />
  <main style={{ flexGrow: 1 }}>
    <Outlet />
  </main>
</div>

  );
};

export default Layout;
