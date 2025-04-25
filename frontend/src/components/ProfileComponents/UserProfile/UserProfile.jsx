import React from "react";
import { Link } from "react-router-dom";
import GirlCamera from "../../../assets/images/GirlCamera.png";
import ResumeDownload from "../../../assets/ResumeDownload.pdf";
import { FaMicrosoft } from "react-icons/fa"; // Font Awesome
import { SiAdobecreativecloud } from "react-icons/si"; // Font Awesome
import { Nav } from "react-bootstrap"; // Import Nav from react-bootstrap
import ProfileBadges from "./ProfileBadges/ProfileBadges"; // Import ProfileBadges component
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserProfile.css"; 
import ExploreTopics from "../../DashboardComponents/ExplorePosts/ExploreTopics";
import ExploreBusiness from "../../DashboardComponents/ExplorePosts/ExploreBusiness";
import ExploreJobs from "../../DashboardComponents/ExplorePosts/ExploreJobs";
import ExploreClasses from "../../DashboardComponents/ExplorePosts/ExploreClasses";

export default function UserProfile() {
  return (
    <div className="user-profile" id="user-profile">
      <div className="container-fluid">
      {/** Start Main container */}

          {/*} Start Main row*/}
          <div className="row-padding justify-content-center w3-white align-items-center">
            {/*Start Left Column*/}
            <div className="w3-quarter flex-column justify-content-center align-items-center"> 
            <div className="mt-4">
            <div className=" border border-black rounded-top-1 ">
              <div className="w3-display-container" style={{ position: "relative" }}>
  <img
    src={GirlCamera}
    alt="me"
    style={{
      width: "100%",
    }}
    className="rounded-top-1 opacity-50"
  />

  {/* Wrapper for Profile Image + Heading */}
  <div
    style={{
      position: "absolute",
      bottom: "15px",
      left: "15px",
      textAlign: "center",
    }}
  >
    <img
      src={GirlCamera} // Replace with your actual image path
      alt="profile"
      className="rounded-circle"
      style={{
        width: "120px",
        height: "120px",
        border: "3px solid white",
        objectFit: "cover",
      }}
    />
       <h3 className="fw-bolder text-secondary-emphasis">Jocelyn Doe</h3>
    <h2 className=' text-start' style={{ fontSize: "1rem", color: "blue"}}>
      @username
    </h2>
  </div>
</div>
                   
<div >
<div className="border py-2" style={{borderTop: "2px solid black"}}>
                  <div className="p-2">
                  <div className="container">
                  <h3 className="fw-bolder text-secondary-emphasis">Jocelyn Doe</h3>
    <h2 className=' text-muted' style={{ fontSize: "1rem",  marginBottom:'20px' }}>
     @username <i className=' bi-check-circle-fill small text-primary'></i>
    </h2>
                        <p className="mb-1 small">
                          <i className="fa fa-briefcase w3-margin-right "></i>
                         Cosmetologist
                        </p>

                        <p className="mb-1 small">
                          <i className="fa fa-home w3-margin-right"></i>
                          Huntingtown, MD
                        </p>
                        <a className="mb-1 small"
                        href="tel:+1234567890">
                          <i className="fa fa-phone-flip w3-margin-right"></i>(123) 456-7890
                        </a>
                      <br />
                        <a className="small"
                         href="mail:email@gmail.com">
                          <i className="fa fa-paper-plane w3-margin-right"></i>mymail@gmail.com
                        </a>
                        </div>
                  <div className="container p-3">
                  <p>
                     <i className="small">
                         Hello, Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Harum ratione modi corrupti
                            voluptate optio natus dolorem
                            esse cupiditate doloremque. Vel.
                          </i>
                        </p>
                    

                          <button className=" btn btn-outline-dark fw-bold shadow w-100">
                            Message
                          </button>
          
                      {/**end bio
                      <div className=" border border-black py-2">
                  <div className="p-2">
                  <div className="container">
        
                    </  div>
                  </div>
                  </div>
                   */}
              <hr />
<ProfileBadges/   >
</  div>
            
                    
            </div>

</div>
               

                  {/**start  certs */}
                  <div className="w3-black">
                  <div className="p-2">
                  <div className="container">
                  <h6 className="w3-xlarge my-3 ">
                          <i className="fa fa-certificate fa-fw"></i>
                          <b style={{ marginLeft: "3px" }}>      Licensing</b>
                        </h6>
           
                        <hr />
                    <div style={{marginLeft:'30px'}}>
                        <h6>
                          <b>Board Certified Cosmetologist</b>
                        </h6>
                     
                        <h6 className="fw-light small">
                       
                          <i className="fa fa-calendar" style={{marginRight:'5px'}}></i> {" "} June 2003- present
                        </h6>
                        <p className="small">State of Maryland</p>
                   
                      </div>
                      </div>
                    </div>
                  </div>
                  {/**end  certs */}

                  {/**Start hAIR Skills*/}
            
                  <div className="p-2">
                        <div className="container">
                        <h6 className="w3-xlarge my-3 mb-4">
                          <i className="bi-tools fa-fw"></i>
                          <b style={{ marginLeft: "10px" }}>Skills & Proficiencies</b>
                        </h6>
                        <div className="w3-grey w3-round-xlarge mt-4">
                          <div
                            className="w3-container w3-center w3-round-xlarge w3-black"
                            style={{ width: "90%" }}
                          >
                            99%
                          </div>
                        </div>
                        <p className=" small mt-1">
                      Styling
                        </p>
                        <div className="w3-grey w3-round-xlarge">
                          <div
                            className="w3-container w3-center w3-round-xlarge w3-black"
                            style={{ width: "75%" }}
                          >
                            95%
                          </div>
                        </div>
                         <p className=" small mt-1">
                 Cutting
                        </p>
                        <div className="w3-grey w3-round-xlarge">
                          <div
                            className="w3-container w3-center w3-round-xlarge w3-black"
                            style={{ width: "85%" }}
                          >
                            99%
                          </div>
                        </div>
                       <p className=" small mt-1">
                     Color
                        </p>

                             <div className="w3-grey w3-round-xlarge">
                          <div
                            className="w3-container w3-center w3-round-xlarge w3-black"
                            style={{ width: "85%" }}
                          >
                            69%
                          </div>
                        </div>
                         <p className=" small mt-1">
                 Boys
                        </p>
                             <div className="w3-grey w3-round-xlarge">
                          <div
                            className="w3-container w3-center w3-round-xlarge w3-black"
                            style={{ width: "85%" }}
                          >
                            90%
                          </div>
                        </div>
                    <p className=" small mt-1">
 Girls
                        </p>

                             <div className="w3-grey w3-round-xlarge">
                          <div
                            className="w3-container w3-center w3-round-xlarge w3-black"
                            style={{ width: "85%" }}
                          >
                            100%
                          </div>
                        </div>
                        <p className=" small mt-1">
                      Ethnic
                        </p>
</  div>
                
                      {/**End Tech Skills */}




                      {/**Start Proficiencies */}
                      <div className="w3-container border-top border-black">
                        <h6 className="w3-large  my-4">
                        
                          <b style={{ marginLeft: "3px" }}>
                            {" "}
                            Awards
                          </b>
                        </h6>
<div className="container">
                        <h6 className=" small">
                        <i className=" bi-trophy-fill fa-fw w3-margin-left "></i>   {" "}
                          Google Workspace
                        </h6>
                        <h6 className=" small">
                          <FaMicrosoft className="fa-fw w3-margin-left " />{" "}
                          Microsoft Suite
                        </h6>
                        <h6 className=" small">
                          <SiAdobecreativecloud className="fa-fw w3-margin-left " />{" "}
                          Adobe Creative Cloud
                        </h6>
                        </div>
                
                        <div className="w3-grey w3-round-xlarge mt-4">
                          <div
                            className="w3-container w3-center w3-round-xlarge w3-black"
                            style={{ width: "90%" }}
                          >
                            90%
                          </div>
                        </div>
                        <p className=" small mt-1">
                          Collaborative Software
                        </p>

                        <div className="w3-grey w3-round-xlarge">
                          <div
                            className="w3-container w3-center w3-round-xlarge w3-black"
                            style={{ width: "90%" }}
                          >
                            90%
                          </div>
                        </div>
                        <p className=" small mt-1">Design Software</p>
                        </div>
                      {/**end Proficiencies */}
                    </div>
                </div>
               
                <div
                  className="w3-padding-large w3-padding-32 text-white shadow border border-black "
                  style={{ backgroundColor: "#FF385C" }}
                >
                  <div className=" w3-container">
                    <h6 className="w3-large w3-text-white text-uppercase mb-3">
                      <i className="fas fa-desktop"></i>
                      <b style={{ marginLeft: "3px" }}> Downloads</b>
                    </h6>

                    <p className="fw-light w3-text-light-grey small">
                      For a physical copy, click the "Download" below to
                      download a PDF of of the selected document.
                    </p>
                    <div className=" text-end my-3">
                      <a
                        className="button text-decoration-none"
                        id="download"
                        download
                        href={ResumeDownload}
                      >
                        <button className=" btn w3-black w-100 w3-hover-opacity">
                          Download Resume
                        </button>
                      </a>
                    </div>
                    <div className=" text-end my-3">
                      <a
                        className="button text-decoration-none"
                        id="download"
                        download
                        href={ResumeDownload}
                      >
                        <button className=" btn w3-black w-100 w3-hover-opacity">
                          Download References
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
            {/*End Left Column*/}

            {/*Start Middle Column Half*/}
            <div className="w3-half flex-column justify-content-center align-items-center"> 
       {/**Start Post Component */}
       <div className="mt-4">
       <div className="container">

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

                  <div className="mt-2">
                    <div className="bg-white border border-black rounded">
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
     <PostsForm/>
              </div>
               {/**End Newsfeed */}
            </div>
            </div>
            </div>
            </div>
            {/*End Middle Column Half*/}

  {/*Start Right Column Quarter*/}
            <div className="w3-quarter flex-column justify-content-center align-items-center"> 
            <div className="mt-4">
            <div className="border border-black rounded"> 
    
                      {/**start Upgrade */}
                      <div className="bg-danger-subtle rounded-top-1">
       <div className="px-5 py-4">
                        <h5 className="fw-bolder">
                          Upgrade to Premium <b>+</b>
                        </h5>

                        <h6 className="w3-margin-top small text-danger">
                          <i>
                            {" "}
                            Enjoy additional benefits, zero ads and the largest
                            reply prioritization.{" "}
                          </i>
                        </h6>
                        <div className=" text-end my-3">
                          <button className=" btn btn-outline-dark rounded-5 w-100">
                            {" "}
                            Upgrade Now
                          </button>
                        </div>
                        </div>
                        </div>
                    {/**end Upgrade */}



                                 {/**start Upgrade */}
                                 <div className="border-top border-bottom border-danger bg-black">

       <div className="px-5 py-4 text-center">
                        <h3 className="fw-bolder text-light">
                       Marketplace
                        </h3>
                        <p className="small my-2 text-light fw-light text-uppercase">Track progress in a single location</p>
                        <h6 className="small text-light">
                        Barter, Buy, Advertise or Trade-
                          <i className=" fw-light">
                            {" "}
              Check out the beauPro marketplace for like-minded professionals.{" "}
                          </i>
                        </h6>
             
                     <i className="fab fa-shopify mx-1" style={{color:'#32CD32'}}></i>
                     <i className="fab fa-pinterest  mx-1" style={{color:'red'}}></i>
                     <i className="fab fa-etsy mx-1" style={{color:'#ff7518'}}></i>
                     <i className="fab fa-ebay text-white mx-1"></i>
                     <i className="fab fa-facebook text-primary mx-1"></i>
                     <i className="fab fa-tiktok mx-1" style={{color:'purple'}}></i>
                      
                        <div className=" text-end my-3">
                          <button className=" btn btn-outline-light rounded-5 w-100">
                            {" "}
                         Learn How
                          </button>
                        </div>
                        </div>
                        </div>
                    {/**end Upgrade */}

       <ExploreBusiness/>
<ExploreTopics/>  
<ExploreJobs/>  
<ExploreClasses/>  
          
          {/*End Right Column Quarter*/}
     
            {/*} End Grid*/}
          </div>
          {/*}End Main row*/}
        </div>
        </div>
        </div>


      <div className="w3-container w3-content text-center w3-padding-48 w3-margin-bottom w3-padding-small">
        <footer className="text-muted py-5 position-fixed bottom-0 start-0 w-100">
          <div className="container">
            <p className="float-end">
            <a href="#profile" className="btn-float">
   Create Post +
  </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
