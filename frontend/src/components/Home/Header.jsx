import React from "react";
import GirlCamera from "../../assets/images/GirlCamera.png"; // Update path as needed
import HeaderBanner from "../../assets/images/HeaderBanner.png"; // Update path as needed
import { MdVerified } from "react-icons/md";

const HomeHeader = () => {
  return (
    <div>
      <style>
        {`
          .social-header {
            position: relative;
            height: 200px; /* Fixed height for banner */
          }

          .header-banner {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block; /* Ensure image respects container boundaries */
          }

          .profile-container {
            position: absolute;
            bottom: 0;
            left: 20px;
            transform: translateY(70%); /* Move half of the profile pic below banner */
            display: flex;
            flex-direction: column; /* Stack image and text vertically */
            align-items: flex-start; /* Align items to the left */
            z-index: 10; /* Ensure entire container is above banner */
          }

          .profile-image {
            width: 115px;
            height: 115px;
            border: 6px solid #fff;
            border-radius: 50%;
            object-fit: cover;
          }

          .profile-text {
            margin-bottom: 10px;
        
          }

          .profile-text h2 {
            font-size: 1.25rem;
            font-weight: bold;
            margin: 0;
            color: #000; /* Black text */
          }

          .profile-text p {
            font-size: 1.1rem;
            margin: 0;
          }
        `}
      </style>
      <div className="social-header w-100">
        {/* Background Banner */}
        <img
          src={HeaderBanner}
          alt="Header Background"
          className="header-banner"
        />

        {/* Profile Picture and Text */}
        <div className="profile-container">
          <img
            src={GirlCamera}
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-text">
            <h2>
              Jocelyn Doe{" "}
              <span>
                <MdVerified
                  style={{ fontSize: "1.2rem", color: "#007bff" }}
                />
              </span>
            </h2>
            <p className="text-secondary">Title | Creative Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;