import * as React from "react";
import GirlCamera from "../assets/images/GirlCamera.png"; // Import GirlCamera image
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import LoginForm from "../components/Forms/LoginForm/LoginForm"; // Import LoginForm component
import SignupForm from "../components/Forms/SignupForm/SignupForm"; // Import SignupForm component
import AuthForm from "../components/Forms/AuthForm/AuthForm"; // Import AuthForm component    

export default function HomePage() {
  return (

    <div>
   <AuthForm />
</div>
  );
}
