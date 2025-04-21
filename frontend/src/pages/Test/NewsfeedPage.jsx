import React from "react";
import NewsfeedPosts from "../../components/NewsfeedComponents/NewsfeedPosts";
import Sidebar from "../../components/Sidebar/Sidebar";
import NewsfeedPromos from "../../components/NewsfeedComponents/NewsfeedPromos"; // Import NewsfeedPromos component
import "bootstrap/dist/css/bootstrap.min.css";


export default function NewsFeedPage() {
  return (
    <div className="dashboard-profile" id="dashboard-profile">


      {/** Start Main container */}
  
          {/*} Start Main row*/}
          <div className="row justify-content-center w3-white">
            {/*Start Sidebar Left Column*/}
            <div className="col-md-3  justify-content-center"> 
   <Sidebar/>
            </div>
         
            {/*End Left Column*/}

            {/*Start Middle Column Half*/}
            <div className="col-md-6  justify-content-center "> 
       {/**Start Post Component */}
<NewsfeedPosts/>
            </div>
     
            {/*End Middle Column Half*/}





  {/*Start Right Column Quarter*/}
            <div className="col-md-3  justify-content-center "> 
          
     <NewsfeedPromos/>
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

