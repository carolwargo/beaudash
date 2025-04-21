 import React from "react";  
       import '../NewsfeedComponents/Newsfeed.css'
        import { Link } from "react-router-dom";
        import BeauProLogo from "../../assets/images/BeauProLogo.png";
        import GirlCamera from "../../assets/images/GirlCamera.png";
       
       const NewsfeedSidebar = () => {    
       
           return (
       <div className="newsfeed-sidebar" id="newsfeed-sidebar">
       
       <style>
           {`
             .bd-placeholder-img {
               font-size: 1.125rem;
               text-anchor: middle;
               -webkit-user-select: none;
               -moz-user-select: none;
               user-select: none;
             }
       
             @media (min-width: 768px) {
               .bd-placeholder-img-lg {
                 font-size: 3.5rem;
               }
             }
               `}
           </style>
  
           <div className="px-3 py-2">
       <div className="container w3-border-right">
    
           <ul className="nav nav-pills flex-column mb-auto mt-2">
           <li>
               <a href="#" style={{fontSize:'1.7rem'}} className="nav-link link-dark">
               <i className="fas fa-kiwi-bird me text-warning"></i> <span>Bea<span className="text-warning">ū</span>Pro</span> {/**ū or Ū */}
               </a>
             </li>
             
             <li>
               <a href="#" style={{fontSize:'1.1rem'}} className="nav-link link-dark">
               <i className="bi bi-house-door me-2" style={{fontSize:'1.4rem'}}></i>
           <span>Home</span>
               </a>
             </li>

             <li>
               <a href="#" style={{fontSize:'1.1rem'}} className="nav-link link-dark">
               <i className="bi bi-search me-2" style={{fontSize:'1.4rem'}}></i>
           <span>Explore</span>
               </a>
             </li>


             <li>
               <a href="#" style={{fontSize:'1.1rem'}} className="nav-link link-dark">
               <i className="bi bi-bell me-2" style={{fontSize:'1.4rem'}}></i>
           <span>Notifications</span>
               </a>
             </li>

             <li>
               <a href="#" style={{fontSize:'1.1rem'}} className="nav-link link-dark">
               <i className="bi bi-chat-quote me-2" style={{fontSize:'1.4rem'}}></i>
           <span>Messages</span>
               </a>
             </li>

             <li>
               <a href="#" style={{fontSize:'1.1rem'}} className="nav-link link-dark">
               <i className="bi bi-people me-2" style={{fontSize:'1.4rem'}}></i>
           <span>Network</span>
               </a>
             </li>

             
             <li>
               <a href="#" style={{fontSize:'1.1rem'}} className="nav-link link-dark">
               <i className="bi bi-clipboard-plus me-2" style={{fontSize:'1.4rem'}}></i>
           <span>Leads</span>
               </a>
             </li>


            
            
             <li>
               <a href="#" style={{fontSize:'1.1rem'}} className="nav-link link-dark">
               <i className="bi bi-grid me-2" style={{fontSize:'1.4rem'}}></i>
           <span>Product</span>
               </a>
             </li>

             <li>
               <a href="#" style={{fontSize:'1.1rem'}} className="nav-link link-dark">
               <i className="bi bi-collection me-2" style={{fontSize:'1.4rem'}}></i>
           <span>Orders</span>
               </a>
             </li>

             <li>
               <a href="#" style={{fontSize:'1.1rem'}} className="nav-link link-dark">
               <i className="bi bi-person-circle  me-2" style={{fontSize:'1.4rem'}}></i>
           <span>Profile</span>
               </a>
             </li>

             <li>
               <a href="#" style={{fontSize:'1.1rem'}} className="nav-link link-dark">
               <i className="bi bi-gear me-2" style={{fontSize:'1.4rem'}}></i>
         <span>Settings</span>
               </a>
             </li>

           </ul>
           <div className="my-2">
           <a href="#" className="btn btn-dark w3-hide-small text-light rounded-pill my-2"
             style={{width:'80%'}}>
       
         Post  
               </a>
               </div>
           <div className="dropdown align-items-end">
            <div className="row justify-content-center align-items-end">
            <div className="col-md-3">
     <img src={GirlCamera} alt="" className="shadow rounded-circle w3-hide-medium w3-hide-small mb-0 mt-1" style={{width:'100%'}}/>
            </div>
            <div className="col-md-6">
            <strong style={{marginLeft:'5px'}}> Username <br /><span className="fw-light">@username</span></strong>
            </div>
            <div className="col-md-2">
            <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
            </a>
            </div>
   
             <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
               <li><a className="dropdown-item" href="#">New project...</a></li>
               <li><a className="dropdown-item" href="#">Settings</a></li>
               <li><a className="dropdown-item" href="#">Profile</a></li>
               <li><hr className="dropdown-divider"/></li>
               <li><a className="dropdown-item" href="#">Sign out</a></li>
             </ul>
           </div>
 </div>
           </div>  
         
         {/** 
         <div className=" container-fluid">
        <h1>Newsfeed</h1>
        <h6>Newsfeed components</h6>
        <ul>
            <li>col 1- sidebar menu</li>
            <li>col 2- news feed</li>
            <li>col 3- ads and offerings</li>
        </ul>
    </div>
    */}
       {/** 
         <div className="col">
         <div className="d-flex flex-column flex-shrink-0 bg-light" style={{width: "4.5rem"}}>
           <a href="/" className="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
             <svg className="bi" width="40" height="32"><use href="#bootstrap"/></svg>
             <span className="visually-hidden">Icon-only</span>
           </a>
           <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
             <li className="nav-item">
               <a href="#" className="nav-link active py-3 border-bottom" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
                 <svg className="bi" width="24" height="24" role="img" aria-label="Home"><use href="#home"/></svg>
               </a>
             </li>
             <li>
               <a href="#" className="nav-link py-3 border-bottom" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
                 <svg className="bi" width="24" height="24" role="img" aria-label="Dashboard"><use href="#speedometer2"/></svg>
               </a>
             </li>
             <li>
               <a href="#" className="nav-link py-3 border-bottom" title="Orders" data-bs-toggle="tooltip" data-bs-placement="right">
                 <svg className="bi" width="24" height="24" role="img" aria-label="Orders"><use href="#table"/></svg>
               </a>
             </li>
             <li>
               <a href="#" className="nav-link py-3 border-bottom" title="Products" data-bs-toggle="tooltip" data-bs-placement="right">
                 <svg className="bi" width="24" height="24" role="img" aria-label="Products"><use href="#grid"/></svg>
               </a>
             </li>
             <li>
               <a href="#" className="nav-link py-3 border-bottom" title="Customers" data-bs-toggle="tooltip" data-bs-placement="right">
                 <svg className="bi" width="24" height="24" role="img" aria-label="Customers"><use href="#people-circle"/></svg>
               </a>
             </li>
           </ul>
           <div className="dropdown border-top">
             <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
               <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" className="rounded-circle"/>
             </a>
             <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
               <li><a className="dropdown-item" href="#">New project...</a></li>
               <li><a className="dropdown-item" href="#">Settings</a></li>
               <li><a className="dropdown-item" href="#">Profile</a></li>
               <li><hr className="dropdown-divider"/></li>
               <li><a className="dropdown-item" href="#">Sign out</a></li>
             </ul>
           </div>
         </div>
         </div>
         <div className="col">
         <div className="flex-shrink-0 p-3 bg-white" style={{width: "280px"}}>
           <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
             <svg className="bi me-2" style={{fontSize:'1.4rem'}}width="30" height="24"><use href="#bootstrap"/></svg>
             <span className="fs-5 fw-semibold">Collapsible</span>
           </a>
           <ul className="list-unstyled ps-0">
             <li className="mb-1">
               <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                 Home
               </button>
               <div className="collapse show" id="home-collapse">
                 <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                   <li><a href="#" className="link-dark rounded">Overview</a></li>
                   <li><a href="#" className="link-dark rounded">Updates</a></li>
                   <li><a href="#" className="link-dark rounded">Reports</a></li>
                 </ul>
               </div>
             </li>
             <li className="mb-1">
               <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                 Dashboard
               </button>
               <div className="collapse" id="dashboard-collapse">
                 <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                   <li><a href="#" className="link-dark rounded">Overview</a></li>
                   <li><a href="#" className="link-dark rounded">Weekly</a></li>
                   <li><a href="#" className="link-dark rounded">Monthly</a></li>
                   <li><a href="#" className="link-dark rounded">Annually</a></li>
                 </ul>
               </div>
             </li>
             <li className="mb-1">
               <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                 Orders
               </button>
               <div className="collapse" id="orders-collapse">
                 <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                   <li><a href="#" className="link-dark rounded">New</a></li>
                   <li><a href="#" className="link-dark rounded">Processed</a></li>
                   <li><a href="#" className="link-dark rounded">Shipped</a></li>
                   <li><a href="#" className="link-dark rounded">Returned</a></li>
                 </ul>
               </div>
             </li>
             <li className="border-top my-3"></li>
             <li className="mb-1">
               <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                 Account
               </button>
               <div className="collapse" id="account-collapse">
                 <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                   <li><a href="#" className="link-dark rounded">New...</a></li>
                   <li><a href="#" className="link-dark rounded">Profile</a></li>
                   <li><a href="#" className="link-dark rounded">Settings</a></li>
                   <li><a href="#" className="link-dark rounded">Sign out</a></li>
                 </ul>
               </div>
             </li>
           </ul>
         </div>
         </div>
         <div className="col">
           
       
       
         <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style={{width: "380px"}}>
           <a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
             <svg className="bi me-2" width="30" height="24"><use href="#bootstrap"/></svg>
             <span className="fs-5 fw-semibold">List group</span>
           </a>
           <div className="list-group list-group-flush border-bottom scrollarea">
             <a href="#" className="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true">
               <div className="d-flex w-100 align-items-center justify-content-between">
                 <strong className="mb-1">List group item heading</strong>
                 <small>Wed</small>
               </div>
               <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
             </a>
             <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
               <div className="d-flex w-100 align-items-center justify-content-between">
                 <strong className="mb-1">List group item heading</strong>
                 <small className="text-muted">Tues</small>
               </div>
               <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
             </a>
             <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
               <div className="d-flex w-100 align-items-center justify-content-between">
                 <strong className="mb-1">List group item heading</strong>
                 <small className="text-muted">Mon</small>
               </div>
               <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
             </a>
       
             <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
               <div className="d-flex w-100 align-items-center justify-content-between">
                 <strong className="mb-1">List group item heading</strong>
                 <small className="text-muted">Wed</small>
               </div>
               <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
             </a>
             <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
               <div className="d-flex w-100 align-items-center justify-content-between">
                 <strong className="mb-1">List group item heading</strong>
                 <small className="text-muted">Tues</small>
               </div>
               <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
             </a>
             <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
               <div className="d-flex w-100 align-items-center justify-content-between">
                 <strong className="mb-1">List group item heading</strong>
                 <small className="text-muted">Mon</small>
               </div>
               <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
             </a>
             <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
               <div className="d-flex w-100 align-items-center justify-content-between">
                 <strong className="mb-1">List group item heading</strong>
                 <small className="text-muted">Wed</small>
               </div>
               <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
             </a>
             <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
               <div className="d-flex w-100 align-items-center justify-content-between">
                 <strong className="mb-1">List group item heading</strong>
                 <small className="text-muted">Tues</small>
               </div>
               <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
             </a>
             <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
               <div className="d-flex w-100 align-items-center justify-content-between">
                 <strong className="mb-1">List group item heading</strong>
                 <small className="text-muted">Mon</small>
               </div>
               <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
             </a>
             <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
               <div className="d-flex w-100 align-items-center justify-content-between">
                 <strong className="mb-1">List group item heading</strong>
                 <small className="text-muted">Wed</small>
               </div>
               <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
             </a>
             <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
               <div className="d-flex w-100 align-items-center justify-content-between">
                 <strong className="mb-1">List group item heading</strong>
                 <small className="text-muted">Tues</small>
               </div>
               <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
             </a>
             <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
               <div className="d-flex w-100 align-items-center justify-content-between">
                 <strong className="mb-1">List group item heading</strong>
                 <small className="text-muted">Mon</small>
               </div>
               <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
             </a>
           </div>
         </div>
         </div>
         */}
          </div>
          </div>
       );
       };
       
       export default NewsfeedSidebar;
       