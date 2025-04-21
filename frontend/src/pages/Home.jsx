import * as React from "react";
import GirlCamera from "../../assets/images/GirlCamera.png"; // Import GirlCamera image
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import LoginForm from "../../components/Forms/LoginForm/LoginForm"; // Import LoginForm component
import SignupForm from "../../components/Forms/SignupForm/SignupForm"; // Import SignupForm component
import CustomSocialIcons from "../../components/Forms/CustomSocialIcons/CustomSocialIcons"; // Import CustomSocialIcons component 

export default function HomePage() {
  return (

    <div>
    <div className="container py-5 px-3">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-12 col-md-6">
          <img src={GirlCamera} alt="Login" className="shadow rounded" style={{width:'100%'}}/>
        </div>
        <div className="col-sm-12 col-md-6">
          <LoginForm />
        </div>
      </div>
    </div>
    <div className="container py-5 px-3">
      <SignupForm />
      </div>
      

      <div className="container py-5 px-3">
      <CustomSocialIcons />
      </div>
    </div>
  );
}
