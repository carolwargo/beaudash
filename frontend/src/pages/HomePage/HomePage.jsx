import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import { Link } from "react-router-dom";
import LogoBlack from "../../assets/images/LogoBlack.png";

const HomePage = () => {
  return (
    <div className="homepage">
<div className="container">
<div className="welcome-message">
<h1>Welcome to beau.</h1>
<p>Please login or register to continue.</p>
            <img src={LogoBlack} style={{ width: "40%" }} />
            </div>
      </div>
      <div className="container">
        <div className="row">
            <div className="col"><img src={LogoBlack} style={{ width: "100%" }} /></div>
            <div className="col"><img src={LogoBlack} style={{ width: "100%" }} /></div>
            <div className="col"><img src={LogoBlack} style={{ width: "100%" }} /></div>
            <div className="col"><img src={LogoBlack} style={{ width: "100%" }} /></div>
  </div>
      </div>
      <div className="container">
        <div className="row">
            <div className="col"><img src={LogoBlack} style={{ width: "100%" }} /></div>
            <div className="col"><img src={LogoBlack} style={{ width: "100%" }} /></div>
            <div className="col"><img src={LogoBlack} style={{ width: "100%" }} /></div>
            <div className="col"><img src={LogoBlack} style={{ width: "100%" }} /></div>
            <div className="col"><img src={LogoBlack} style={{ width: "100%" }} /></div>
            <div className="col"><img src={LogoBlack} style={{ width: "100%" }} /></div>
            <div className="col"><img src={LogoBlack} style={{ width: "100%" }} /></div>
            <div className="col"><img src={LogoBlack} style={{ width: "100%" }} /></div>
            <div className="col"><img src={LogoBlack} style={{ width: "100%" }} /></div>
            <div className="col"><img src={LogoBlack} style={{ width: "100%" }} /></div>
            <div className="col"><img src={LogoBlack} style={{ width: "100%" }} /></div>
            <div className="col"><img src={LogoBlack} style={{ width: "100%" }} /></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;