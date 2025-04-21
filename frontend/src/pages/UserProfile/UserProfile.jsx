import React from "react";
import { Link } from "react-router-dom";
import GirlCamera from "../../assets/images/GirlCamera.png";
import ResumeDownload from "../../assets/ResumeDownload.pdf";
import { FaGoogle } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa"; // Font Awesome
import { SiAdobecreativecloud } from "react-icons/si"; // Font Awesome
import "bootstrap/dist/css/bootstrap.min.css";
import UserProfile from "../../components/ProfileComponents/UserProfile";

export default function ResumePage() {
  return (
    <div className=" container-fluid">
        <UserProfile/>
    </div>
  );
}
