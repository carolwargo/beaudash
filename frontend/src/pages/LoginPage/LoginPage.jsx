import React from "react";
import './LoginPage.css'; // Import CSS for styling
import AuthForm from "../../components/AuthForm/AuthForm";
const LoginPage = () => {   

    return (
        <div class="login-page">
              <div className="welcome-message">
        <h1>Welcome to the App</h1>
        <p>Please login or register to continue.</p>
      </div>
<section>
    <AuthForm   isLogin={true} /> {/* Pass isLogin prop to AuthForm */}
</section>
        </div>
    );
}


export default LoginPage;
