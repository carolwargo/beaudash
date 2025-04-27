import React from 'react';  
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS  

const Drawer = () => {  

    return (    
<div>
        <div className="drawer">    
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdroped with scrolling</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home"/></svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"/></svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"/></svg>
          Orders
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid"/></svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#people-circle"/></svg>
          Customers
        </a>
      </li>
    </ul>
    <hr/>
  </div>
</div>
        </div>
        </div>
    );
}

export default Drawer;