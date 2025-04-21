import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <div className="p-4">
      <h1>Profile</h1>
      <nav>
        <Link to="posts">Posts</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* Renders ProfilePosts or ProfileSettings */}
    </div>
  );
};

export default ProfilePage;