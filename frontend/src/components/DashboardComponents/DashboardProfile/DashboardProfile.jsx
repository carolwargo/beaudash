import React from "react";
import { Link } from "react-router-dom";
import GirlCamera from "../../../assets/images/GirlCamera.png";
import ResumeDownload from "../../../assets/ResumeDownload.pdf";
import { FaGoogle } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa"; // Font Awesome
import { SiAdobecreativecloud } from "react-icons/si"; // Font Awesome
import Accordion from "react-bootstrap/Accordion";
import Badge from 'react-bootstrap/Badge';
import { PiHairDryerFill } from "react-icons/pi";
import { GiLargePaintBrush } from "react-icons/gi";
import { FaHandHoldingDroplet } from "react-icons/fa6";
import { TbRazorElectric } from "react-icons/tb";
import { TbMassage } from "react-icons/tb";
import { RiSyringeFill } from "react-icons/ri";
import { BsSunglasses } from "react-icons/bs";
import { GiSyringe } from "react-icons/gi";
import { FaSwimmingPool } from "react-icons/fa";
import { GiFootprint } from "react-icons/gi";
import { MdOutlineBoy } from "react-icons/md";
import { MdOutlineGirl } from "react-icons/md";
import { GiCrystalEarrings } from "react-icons/gi";
import { PiNeedleDuotone } from "react-icons/pi";
import Nav from 'react-bootstrap/Nav';
import PostsForm from "../../Posts/UserPostForm/UserPostForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashboardProfile.css"; // Import CSS for styling
//import CustomUserSocialIcons from "../CustomUserSocialIcons/CustomUserSocialIcons"; // Import CustomUserSocialIcons component
import ExploreTopics from "../ExplorePosts/ExploreTopics";
import ExploreBusiness from "../ExplorePosts/ExploreBusiness";
import ExploreJobs from "../ExplorePosts/ExploreJobs";
import ExploreClasses from "../ExplorePosts/ExploreClasses";

export default function DashboardProfile() {
  return (
    <div className="dashboard-profile" id="dashboard-profile">
      <div className="container-fluid">
      {/** Start Main container */}

          {/*} Start Main row*/}
          <div className="row-padding justify-content-center w3-white align-items-center">
            {/*Start Left Column*/}
            <div className="w3-quarter flex-column justify-content-center align-items-center"> 
       
              <div className="border border-3 rounded ">
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
    <h2 style={{ fontSize: "1rem", color: "white", marginTop: "8px" }}>
      Your Name
    </h2>
  </div>
</div>
                      <div className="container">  
                     <div className="container my-2 ">
                 
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
                        <a className="mb-1 small"
                         href="mail:email@gmail.com">
                          <i className="fa fa-paper-plane w3-margin-right"></i>mymail@gmail.com
                        </a>
                 </div>
                 <div>
                 <div className="container my-3 ">
                      <Badge
  className="bg-danger-subtle border border-danger border-2"
  style={{
    marginRight: '3px',
    minWidth: '68px',
    display: 'inline-block', // ensures width takes effect
    textAlign: 'center'      // optional: centers the text
  }}
>
                      <span>
                           < TbRazorElectric className="text-danger fw-bold" style={{fontSize: "11px"}}/> 
                      </span>
                       <span style={{ fontSize: "9px", fontFamily:'Roboto', marginLeft:'2px' }} className="text-danger fw-bold">  
                       Barber
                      </span>
                      </Badge>

                      <Badge className="bg-info-subtle border border-info border-2" 
                       style={{
                        marginRight: '3px',
                        minWidth: '68px',
                        display: 'inline-block', // ensures width takes effect
                        textAlign: 'center'      // optional: centers the text
                      }}
                      >
                      <span>
                           <PiHairDryerFill className="text-info fw-bold" style={{fontSize: "10px"}}/> 
                      </span>
                       <span style={{ fontSize: "9px", fontFamily:'Roboto', marginLeft:'3px' }} className="text-info fw-bold">  
                        Stylist
                      </span>
                      </Badge>
                      
                      <Badge className="bg-warning-subtle border border-warning border-2" 
                        style={{
                          marginRight: '3px',
                          minWidth: '68px',
                          display: 'inline-block', // ensures width takes effect
                          textAlign: 'center'      // optional: centers the text
                        }}
                      >
                      <span>
                           <FaHandHoldingDroplet className="text-warning fw-bold" style={{fontSize: "10px"}}/> 
                      </span>
                       <span style={{ fontSize: "9px", fontFamily:'Roboto', marginLeft:'3px' }} className="text-warning fw-bold">  
                     Manicure
                      </span>
                      </Badge>

                      <Badge className="bg-primary-subtle border border-primary border-2" 
                               style={{
                                marginRight: '3px',
                                minWidth: '68px',
                                display: 'inline-block', // ensures width takes effect
                                textAlign: 'center'      // optional: centers the text
                              }}
                      >
                      <span>
                           <GiLargePaintBrush className="text-primary fw-bold" style={{fontSize: "10px"}}/> 
                      </span>
                       <span style={{ fontSize: "9px", fontFamily:'Roboto', marginLeft:'3px' }} className="text-primary fw-bold">  
                       Color
                      </span>
                      </Badge>

                      <Badge className="bg-secondary-subtle border border-secondary border-2" 
                               style={{
                                marginRight: '3px',
                                minWidth: '68px',
                                display: 'inline-block', // ensures width takes effect
                                textAlign: 'center'      // optional: centers the text
                              }}
                              >
                      <span>
                           <TbMassage className="text-secondary fw-bold" style={{fontSize: "10px"}}/> 
                      </span>
                       <span style={{ fontSize: "9px", fontFamily:'Roboto', marginLeft:'3px' }} className="text-secondary fw-bold">  
                     Massage
                      </span>
                      </Badge>

                      <Badge className="bg-success-subtle bg border border-success border-2"
                               style={{
                                marginRight: '3px',
                                minWidth: '68px',
                                display: 'inline-block', // ensures width takes effect
                                textAlign: 'center'      // optional: centers the text
                              }}
                              >
                      <span>
                           <GiFootprint className="text-success fw-bold" style={{fontSize: "10px"}}/> 
                      </span>
                       <span style={{ fontSize: "9px", fontFamily:'Roboto', marginLeft:'3px' }} className="text-success fw-bold">  
                      Pedicure
                      </span>
                      </Badge>
                      <Badge className="bg-light bg border border-black border-2"          
                      style={{
                          marginRight: '3px',
                          minWidth: '68px',
                          display: 'inline-block', // ensures width takes effect
                          textAlign: 'center'      // optional: centers the text
                        }}>
                      <span> 
                           <FaSwimmingPool className="text-black fw-bold" style={{fontSize: "10px"}}/> 
                      </span>
                       <span style={{ fontSize: "9px", fontFamily:'Roboto', marginLeft:'3px' }} className="text-black fw-bold">  
                    Spa Tech
                      </span>
                      </Badge>

                      
                      <Badge className="badge-purple-light"          
                      style={{
                          marginRight: '3px',
                          minWidth: '68px',
                          display: 'inline-block', // ensures width takes effect
                          textAlign: 'center'      // optional: centers the text
                        }}>
<style>
  {`
  .badge-purple-light {
  background-color: #f1d8fc !important;
  border: 2px solid #8e44ad;
  color: #8e44ad;
}
`}
</style>
                      <span>
                           <BsSunglasses className="fw-bold" style={{fontSize: "11px", color:' #8e44ad'}}/> 
                      </span>
                       <span style={{ fontSize: "9px",  color:' #8e44ad' , fontFamily:'Roboto', marginLeft:'3px' }} className=" fw-bold">  
                      Laser
                      </span>
                      </Badge>

                      <Badge className="badge-orange-light"          
                      style={{
                          marginRight: '3px',
                          minWidth: '68px',
                          display: 'inline-block', // ensures width takes effect
                          textAlign: 'center'      // optional: centers the text
                        }}>
<style>
  {`
  .badge-orange-light {
  background-color:#fbcec0 !important;
  border: 2px solid #f83a00;
  color:rgb(255, 226, 218) ;
}
`}
</style>
                      <span>
                           <RiSyringeFill className=" fw-bold" style={{fontSize: "10px", color:' #f83a00'}}/> 
                      </span>
                       <span style={{ fontSize: "9px",  color:' #f83a00' , fontFamily:'Roboto', marginLeft:'3px' }} className=" fw-bold">  
                    Fillers
                      </span>
                      </Badge>

                      <Badge className="badge-pink-light" 
                               style={{
                                marginRight: '3px',
                                minWidth: '68px',
                                display: 'inline-block', // ensures width takes effect
                                textAlign: 'center'      // optional: centers the text
                              }}
                      >
<style>
  {`
  .badge-pink-light {
  background-color:#fbcec0 !important;
  border: 2px solid #ff0080 !important; 
  color:rgb(253, 252, 253) ;
}
`}
</style>
                      <span>
                           <GiSyringe className=" fw-bold" style={{fontSize: "9px", color:' #ff0080'}}/> 
                      </span>
                       <span style={{ fontSize: "9px",  color:' #ff0080' , fontFamily:'Roboto', marginLeft:'3px' }} className=" fw-bold">  
                       Botox
                      </span>
                      </Badge>
     
                 

                      <Badge className="bg-info-subtle border border-info border-2" 
                       style={{
                        marginRight: '3px',
                        minWidth: '68px',
                        display: 'inline-block', // ensures width takes effect
                        textAlign: 'center'      // optional: centers the text
                      }}
                      >
                      <span>
                     < PiNeedleDuotone className="text-info fw-bold" style={{fontSize: "10px"}}/> 
                      </span>
                       <span style={{ fontSize: "9px", fontFamily:'Roboto', marginLeft:'3px' }} className="text-info fw-bold">  
                       Tatoo
                      </span>
                      </Badge>
                      <Badge className="bg-warning-subtle border border-warning border-2" 
                        style={{
                          marginRight: '3px',
                          minWidth: '68px',
                          display: 'inline-block', // ensures width takes effect
                          textAlign: 'center'      // optional: centers the text
                        }}
                      >
                      <span>
<GiCrystalEarrings className="text-warning fw-bold" style={{fontSize: "10px"}}/> 
                      </span>
                       <span style={{ fontSize: "9px", fontFamily:'Roboto', marginLeft:'3px' }} className="text-warning fw-bold">  
                     Piercing
                      </span>
                      </Badge>
                      <div className="mt-2" style={{fontSize:'10px'}}>
                        <Link className="text-primary"><i className="fa fa-info-circle "></i> Learn more about badge designations.</Link> </div>
                  </div>
                </div>
              
                      {/**start bio */}
                      <div className="container my-3">
                        <p className="small">
                     <i className="small">
                         Hello, Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Harum ratione modi corrupti
                            voluptate optio natus dolorem
                            esse cupiditate doloremque. Vel.
                          </i>
                        </p>
                     
                          <button className=" btn btn-outline-dark shadow w-100">
                            Message
                          </button>
                        </div>
                      {/**end bio */}
                    </div>
        

                  {/**start  certs */}
                  <div className="w3-black">
                    <div className="container py-2">
                      <div className="w3-container">
                        <h4 className="w3-large w3-text-theme my-3 text-uppercase">
                          <i className="fa fa-certificate w3-xlarge "></i>{" "}
                          Licensing
                        </h4>
                      </div>
               
                      <div className="w3-container">
                        <h6>
                          <b>Board Certified Cosmetologist</b>
                        </h6>
                        <h6 className="fw-light small">
                          {" "}
                          <i className="fa fa-calendar "></i> June 2003- present
                        </h6>
                        <p className="small">State of Maryland</p>
                      </div>
                    </div>
                  </div>
                  {/**end  certs */}

                  {/**Start hAIR Skills*/}
                  <div className="w3-container">
                    <div className="container py-2">
                  
                        <h6 className="w3-large my-3 ">
                          <i className="fa fa-asterisk fa-fw"></i>
                          <b style={{ marginLeft: "3px" }}>Hair Proficiency</b>
                        </h6>
                        <h6 className="w3-large w3-text-theme  my-4">
                          <i className="fa fa-globe fa-fw "></i>
                          <b style={{ marginLeft: "3px" }}>
                       Strengths
                          </b>
                        </h6>
                        <div className="w3-grey w3-round-xlarge w3-small">
                          <div
                            className="w3-container w3-center w3-round-xlarge w3-black small"
                            style={{ width: "90%" }}
                          >
                            90%
                          </div>
                        </div>
                        <p className="small"><span className="mt-3">Cut</span></p>



                        <div className="w3-grey w3-round-xlarge w3-small">
                          <div
                            className="w3-container w3-center w3-round-xlarge w3-black small"
                            style={{ width: "95%" }}
                          >
                            95%
                          </div>
                        </div>
                        <p className="small"><span className="mt-3">Color</span></p>




                        <div className="w3-grey w3-round-xlarge w3-small">
                          <div
                            className="w3-container w3-center w3-round-xlarge w3-black small"
                            style={{ width: "50%" }}
                          >
                            90%
                          </div>
                        </div>
                        <p className="small"><span className="mt-3">Style</span></p>

               {/**End Programming Languages */}
                      </div>


                      {/**Start Programming Languages */}
                      <div className="w3-container border-top border-black">
                        <h6 className="w3-large w3-text-theme  my-4">
                          <i className="fa fa-globe fa-fw "></i>
                          <b style={{ marginLeft: "3px" }}>
                          Gender
                          </b>
                        </h6>

                        <div className="w3-grey w3-round-xlarge w3-small">
                          <div
                            className="w3-container w3-center w3-round-xlarge w3-black small"
                            style={{ width: "50%" }}
                          >
                            50%
                          </div>
                        </div>
                        <p className="small"> <MdOutlineBoy className='pt-0' style={{fontSize:'1.3rem'}}/><span className="mt-3">Male</span></p>

                        <div className="w3-grey w3-round-xlarge w3-small">
                          <div
                            className="w3-container w3-center w3-round-xlarge w3-black small"
                            style={{ width: "90%" }}
                          >
                            95%
                          </div>
                        </div>
                        <p className="small"> < MdOutlineGirl className='pt-0' style={{fontSize:'1.3rem'}}/><span className="mt-3">Female</span></p>
                        {/**End Programming Languages */}
                      </div>
                      {/**End Programming Languages */}

                      {/**Start Frameworks */}
                      <div className="w3-container border-top border-black">
                        <h6 className="w3-large w3-text-theme  my-4">
                          <i className="fa fa-globe fa-fw  "></i>
                          <b style={{ marginLeft: "3px" }}>Frameworks</b>
                        </h6>

                        <div className="w3-grey w3-round-xlarge w3-small">
                          <div
                            className="w3-container w3-center w3-round-xlarge w3-black small"
                            style={{ width: "85%" }}
                          >
                            85%
                          </div>
                        </div>
                        <p className="small">
                          Front-End Frameworks-{" "}
                          <span
                            className="text-gray"
                            style={{ fontSize: "12px" }}
                          >
                            <i>
                              {" "}
                              " <i className="fa fa-heart w3-text-pink"></i>{" "}
                              React."
                            </i>
                          </span>
                        </p>

                        <div className="w3-grey w3-round-xlarge w3-small">
                          <div
                            className="w3-container w3-center w3-round-xlarge w3-black small"
                            style={{ width: "75%" }}
                          >
                            75%
                          </div>
                        </div>
                        <p className="small">Back-End Frameworks</p>

                        <div className="w3-grey w3-round-xlarge w3-small">
                          <div
                            className="w3-container w3-center w3-round-xlarge w3-black small"
                            style={{ width: "70%" }}
                          >
                            70%
                          </div>
                        </div>

                        <p className="small">Mobile App Frameworks</p>
                      </div>
                      {/**End Frameworks */}

                      {/**Start Proficiencies */}
                      <div className="w3-container border-top border-black">
                        <h6 className="w3-large w3-text-theme  my-4">
                          <i className="fas fa-desktop  "></i>
                          <b style={{ marginLeft: "3px" }}>
                            {" "}
                            Software Proficiencies
                          </b>
                        </h6>

                        <h6 className=" w3-margin-left small">
                          <FaGoogle className="fa-fw w3-margin-left " />{" "}
                          Google Workspace
                        </h6>
                        <h6 className=" w3-margin-left small">
                          <FaMicrosoft className="fa-fw w3-margin-left " />{" "}
                          Microsoft Suite
                        </h6>
                        <h6 className=" w3-margin-left small">
                          <SiAdobecreativecloud className="fa-fw w3-margin-left " />{" "}
                          Adobe Creative Cloud
                        </h6>
                        <div className="w3-grey w3-round-xlarge w3-small mt-4">
                          <div
                            className="w3-container w3-center w3-round-xlarge w3-black small"
                            style={{ width: "90%" }}
                          >
                            90%
                          </div>
                        </div>
                        <p className=" small">
                          Collaborative Software
                        </p>

                        <div className="w3-grey w3-round-xlarge w3-small">
                          <div
                            className="w3-container w3-center w3-round-xlarge w3-black small"
                            style={{ width: "90%" }}
                          >
                            90%
                          </div>
                        </div>
                        <p className=" small">Design Software</p>
                      </div>
                      {/**end Proficiencies */}
                    </div>
                
               
                <div
                  className="w3-padding-large w3-padding-32 text-white shadow border border-black "
                  style={{ backgroundColor: "#FF385C" }}
                >
                  <div className=" w3-container">
                    <h6 className="w3-large w3-text-theme w3-text-white text-uppercase mb-3">
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
         
            {/*End Left Column*/}

            {/*Start Middle Column Half*/}
            <div className="w3-half flex-column justify-content-center align-items-center"> 
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
     <PostsForm/>
              </div>
               {/**End Newsfeed */}
            </div>
            </div>
            </div>
            {/*End Middle Column Half*/}

  {/*Start Right Column Quarter*/}
            <div className="w3-quarter flex-column justify-content-center align-items-center"> 
            <div className="container ">
            <div className="border border-2 rounded"> 
    
                      {/**start Upgrade */}
                      <div className="bg-danger-subtle">
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
