import React from "react";
import "./ExplorePosts.css";
import { Accordion } from "react-bootstrap";  
import { Link } from "react-router-dom";

const ExploreBusiness = () => {
  return (
  <div className="border-top">
                       <div className="card bg-white" style={{borderRadius:'0px'}}>
                         <div className="card-body py-3 px-4">
                         <h5 className="fw-bolder mt-2 mb-0 d-flex justify-content-between align-items-center">
                           <span className="text-danger">Business Services</span>
                           <span
                             className="w3-tag py-1 px-3 bg-danger-subtle text-danger rounded-4"
                             style={{ fontSize: "12px" }}
                           >
                             Beta
                           </span> 
                         </h5>
                         <p className="py-0 small text-muted mb-4">how we can help...</p>
 
                         {/**start business service 1 */}
                         <div className="explore-business">
                           <p className="explore-business-entry">
                             <span className="explore-business-title">
                             
 Cosmetic Chemist & Innovative Analyst
                             </span>
                             <br />
                             <span className="explore-business-meta">
                               {" "}
                               17 hours ago · 5 min read · 43K posts
                             </span>
                           </p>
                         </div>
                         {/**start business services 2 */}
                         <div className="explore-business">
                           <p className="explore-business-entry">
                             <span className="explore-business-title">
                             Virtual Makeup Consultant (AR/AI Tools)
                             </span>
                             <br />
                             <span className="explore-business-meta">
                               {" "}
                               15 hours ago · 8 min read · 3K posts
                             </span>
                           </p>
                         </div>
                         {/**start business services 3 */}
                         <div className="explore-business">
                           <p className="explore-business-entry">
                             <span className="explore-business-title">
                             Digital Beauty Content Strategist
                             </span>
                             <br />
                             <span className="explore-business-meta">
                               {" "}
                               2 hours ago · 1 min read · 3K posts
                             </span>
                           </p>
                         </div>
                         {/**start business services 4 */}
                         <div className="explore-business">
                           <p className="explore-business-entry">
                             <span className="explore-business-title">
                             Beauty Tech UX/UI Designer
                             </span>
                             <br />
                             <span className="explore-business-meta">
                               {" "}
                               7 hours ago · 15 min read · 3K posts
                             </span>
                           </p>
                         </div>
                         {/**Start Accordian Feature: See More */}
                         <Accordion>
                           <Accordion.Item eventKey="0">
                             <Accordion.Header> <span className="text-danger">See More</span></Accordion.Header>
                             <Accordion.Body>
                               <Link
                                 to={"/"}
                                 className="text-decoration-none text-dark"
                               >
                                 {/**start business services 5 */}
                                 <div className="explore-business">
                                   <p className="explore-business-entry">
                                     <span className="explore-business-title">
                                     E-commerce Brand Manager
                                     </span>
                                     <br />
                                     <span className="explore-business-meta">
                                       {" "}
                                       12 hours ago · 4 min read · 3K posts
                                     </span>
                                   </p>
                                 </div>
                               </Link>
                               <Link
                                 to={"/"}
                                 className="text-decoration-none text-dark"
                               >
                                 {/**start business services 6 */}
                                 <div className="explore-business">
                                   <p className="explore-business-entry">
                                     <span className="explore-business-title">
                                       {" "}
                                       Skincare Product Development Specialist
                                     </span>
                                     <br />
                                     <span className="explore-business-meta">
                                       {" "}
                                       8 hours ago · 19 min read · 3K posts
                                     </span>
                                   </p>
                                 </div>
                               </Link>
                               <Link
                                 to={"/"}
                                 className="text-decoration-none text-dark"
                               >
                                 {/**start business services 6 */}
                                 <div className="">
                                   <button className=" btn btn-outline-danger rounded-5 w-100 mt-2">
                                      See All 
                                   </button>
                                 </div>
                               </Link>
                             </Accordion.Body>
                           </Accordion.Item>
                         </Accordion>
                         {/**End Accordian Feature: See More */}
                       </div>
                     </div>
                   </div>
 

  );
};

export default ExploreBusiness;
