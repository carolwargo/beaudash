// frontend/src/components/Sidebar.jsx
import React, { useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import GirlCamera from '../../assets/images/GirlCamera.png'; // Adjust the path as necessary 
import { AuthContext } from '../../context/AuthContext'; // ✅ Named import



const navItems = [
    { to: '/home', icon: 'bi-house-door', label: 'Home' },
    { to: '/explore', icon: 'bi-search', label: 'Explore' },
    { to: '/notifications', icon: 'bi-bell', label: 'Notifications' },
    { to: '/messages', icon: 'bi-chat-quote', label: 'Messages' },
    { to: '/network', icon: 'bi-people', label: 'Network' },
    { to: '/leads', icon: 'bi-clipboard-plus', label: 'Leads' },
    { to: '/products', icon: 'bi-grid', label: 'Product' },
    { to: '/orders', icon: 'bi-collection', label: 'Orders' },
    { to: '/profile', icon: 'bi-person-circle', label: 'Profile' },
    { to: '/settings', icon: 'bi-gear', label: 'Settings' },
  ];

const Sidebar = () => {
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((el) => new bootstrap.Tooltip(el));
  }, []);


  if (loading) {
    return <div className="sidebar">Loading...</div>;
  }


  const displayName = user?.name || 'Guest';
  const displayHandle = user?.handle || '@guest';

  return (
    <div className="sidebar">
      <style> {`
      /* Sidebar.css */
.sidebar {
    position: fixed; /* Fix sidebar to the viewport */
    top: 0;
    left: 0;
    height: 100vh; /* Full viewport height */
    width: 250px; /* Fixed width */
    background-color: #fff;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    overflow-y: auto; /* Scroll if content overflows */
    z-index: 1000; /* Ensure sidebar is above other content */
  }
  
  .sidebar-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-bottom: 1rem; /* Prevent content from sticking to bottom */
  }
  
  .brand {
    padding: 0 1rem;
  }
  
  /* Navigation */
  .custom-nav .nav-item {
    margin-bottom: 0.25rem;
  }
  
  .custom-nav .nav-link {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 1rem;
    color: #333;
  }
  
  .custom-nav .nav-link i {
    font-size: 1.3rem;
    width: 1.5rem;
    text-align: center;
  }
  
  .custom-nav .nav-link:hover {
    background-color: #e2e2e2;
    color: #000;
  }
  
  .custom-nav .nav-link.active {
    background-color: #000;
    color: #fff !important;
  }
  
  /* Post Button */
  .custom-nav .btn {
    font-size: 1rem;
    padding: 0.5rem;
  }
  
  /* Profile Dropdown */
  .dropdown .row {
    cursor: pointer;
  }
  
  .dropdown .rounded-circle {
    object-fit: cover;
  }
  
  .dropdown-menu {
    min-width: 150px;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .sidebar {
      width: 80px;
    }
  
    .custom-nav .nav-link span {
      display: none; /* Hide text on mobile */
    }
  
    .custom-nav .nav-link i {
      font-size: 1.5rem;
    }
  
    .brand span {
      display: none; /* Hide brand text on mobile */
    }
  
    .dropdown .col-6 {
      display: none; /* Hide username text */
    }
  
    .dropdown .col-3 {
      flex: 1;
      text-align: center;
    }
  }
  
  /* Main content offset */
  main {
    margin-left: 250px; /* Offset main content by sidebar width */
    height: 100vh;
    overflow-y: auto; /* Allow main content to scroll */
  }
  
  @media (max-width: 768px) {
    main {
      margin-left: 80px; /* Smaller offset for mobile */
    }
  }`}
  </style>
  <div>
      <div className="sidebar-content px-3 py-3 mt-3">
    
        <div className="brand mb-4">
          <Link to="/" className="text-decoration-none text-dark fs-4 fw-bold">
            <i className="fas fa-kiwi-bird text-warning me-1"></i>
            Bea<span className="text-warning">ū</span>Pro
          </Link>
        </div>

        
        <ul className="nav nav-pills flex-column mb-auto custom-nav">
          {navItems.map((item) => (
            <li key={item.to} className="nav-item">
              <NavLink
                to={item.to}
                className="nav-link link-dark"
                activeclassname="active"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title={item.label}
              >
                <i className={`bi ${item.icon} me-2`}></i>
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="nav-item mt-2">
            <Link to="/post" className="btn btn-dark rounded-pill w-75">
              Post
            </Link>
          </li>
        </ul>

     
        <div className="dropdown w-100 mt-3">
          <div className="row align-items-center p-2">
            <div className="col-3">
              <img
                src={GirlCamera}
                alt="Profile"
                className="rounded-circle shadow"
                style={{ width: '40px', height: '40px' }}
              />
            </div>
            <div className="col-6 text-start">
              <strong>{displayName}</strong>
              <br />
              <span className="text-muted">{displayHandle}</span>
            </div>
            <div className="col-3 text-end">
              <a
                href="#"
                className="dropdown-toggle link-dark"
                id="dropdownUser"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-three-dots"></i>
              </a>
              <ul className="dropdown-menu shadow" aria-labelledby="dropdownUser">
                <li>
                  <Link className="dropdown-item" to="/logout">
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;