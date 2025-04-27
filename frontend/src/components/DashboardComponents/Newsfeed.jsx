import React from "react";
import { Link } from "react-router-dom";
import GirlCamera from "../../../assets/images/GirlCamera.png";
import Nav from 'react-bootstrap/Nav';
import PostsForm from "../../Posts/PostForm/PostForm";

import "bootstrap/dist/css/bootstrap.min.css";
import "./DashboardProfile.css"; // Import CSS for styling


export default function DashboardProfile() {
  return (
    <div className="dashboard-profile" id="dashboard-profile">
      <div className="container-fluid">
  
       {/**Start Post Component */}
       <div className="py-2 w-100">
       <div className="mt-2">
       <Nav variant="tabs" defaultActiveKey="/home" className="justify-content-center mt-3 border-bottom border-2">
      <Nav.Item>
        <Nav.Link href="/home" className=" border-2">Network</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" className=" border-2">Services</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className=" border-2">Classes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3" className=" border-2">For Sale</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4" className=" border-2">Jobs</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
                  <div className="mt-2">
                    <div className="bg-white border border-secondary-subtle border-2 rounded">
                      <div className=" w3-padding-large ">
                        <div className="post-wrapper">
                        
                        <Link to={"/"} className=" text-decoration-none">
                          <div className="row align-items-center justify-content-start">
                       
                        <div className="col-sm-2 col-md-2 col-lg-2">
               
               <img src={GirlCamera} alt="" className="shadow rounded-circle w3-hide-medium w3-hide-small mb-0 mt-1" style={{width:'65%'}}/>
             </div>
             <div className="col-sm-10 col-md-10 col-lg-10 align-items-center justify-content-start">
  <span className="text-primary fw-bold">What's Happening?</span><br />
  <span className="card-title opacity-75 small typing-indicator"></span>
  <span className="card-title opacity-25 small fw-bold">Start a Post</span>
</div>

                  </div>
                  </Link>
                  </div>
                  </div>
                  </div>
                  </div>
  {/**End Menu Icons */}

    {/**Start Newsfeed */}
              <div className="w3-post-content ">
 
     <PostsForm/>
              </div>
               {/**End Newsfeed */}
            </div>
            </div>
    </div>
  );
}
