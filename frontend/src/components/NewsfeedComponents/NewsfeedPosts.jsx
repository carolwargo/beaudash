     import React from "react";
     import { Link } from "react-router-dom";
     import GirlCamera from "../../assets/images/GirlCamera.png";
     import Nav from 'react-bootstrap/Nav';
     import PostsForm from "../Posts/UserPostForm/UserPostForm";
     import "bootstrap/dist/css/bootstrap.min.css";
     import "./Newsfeed.css"; // Import CSS for styling

     
     export default function NewsfeedPosts() {
       return (
         <div className="newsfeed-posts" id="newsfeed-posts">
           <div className="container-fluid">
       <div className="py-2 w-100">
       <div className="mt-2">
       <Nav variant="tabs" defaultActiveKey="/home" className="justify-content-center border-bottom border-2">
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
                        
         
                          <div className="row align-items-center justify-content-center">
                       
                        <div className="col-sm-2 col-md-2 col-lg-2">
               
               <img src={GirlCamera} alt="" className="shadow rounded-circle w3-hide-medium w3-hide-small" style={{width:'85%'}}/>
             </div>
        
             <div className="col-sm-10 col-md-10 col-lg-10 align-items-center justify-content-center">
       
               <Link to={"/"} className=" text-decoration-none">
       <h3>What's Happening?</h3>
                 <p className="card-title my-2 opacity-50">Start a Post</p>
               </Link>
             
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
  {/**End Menu Icons */}

    {/**Start Newsfeed */}
              <div className="w3-post-content ">
     <PostsForm/>
     <PostsForm/>
              </div>
               {/**End Newsfeed */}
            </div>
            </div>
            </div>
      );
    }
    