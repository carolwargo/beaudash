import React from "react";
import GirlCamera from "../assets/images/GirlCamera.png"; // Update path as needed
import "./SocialHeader.css"; // Optional external styles

const SocialHeader = () => {
  return (

    <div>
        <style>
            {`.social-header {
  position: relative;
  max-height: 300px;
  overflow: hidden;
}

.header-banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-overlay {
  bottom: 15px;
  left: 15px;
}

.profile-image {
  width: 120px;
  height: 120px;
  border: 3px solid #fff;
  object-fit: cover;
}
`}
        </style>
    <div className="social-header position-relative w-100">
      {/* Background Banner */}
      <img
        src={GirlCamera}
        alt="Header Background"
        className="header-banner w-100 rounded-top-1 opacity-50"
      />

      {/* Profile Details Overlay */}
      <div className="profile-overlay position-absolute d-flex flex-column align-items-start px-3 pb-3">
        <img
          src={GirlCamera}
          alt="Profile"
          className="profile-image rounded-circle"
        />
        <h3 className="fw-bold text-secondary-emphasis mt-2 mb-0">Jocelyn Doe</h3>
        <p className="text-light small">Web Developer | Creative Designer</p>
      </div>
    </div>
    </div>
  );
};

export default SocialHeader;
