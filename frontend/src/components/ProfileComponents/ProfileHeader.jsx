import React from "react";
//import { Link } from "react-router-dom";
import GirlCamera from "../../../assets/images/GirlCamera.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProfileHeader() {
  return (
<div className="user-profile" id="user-profile">
  <header className="user-header border-bottom-1">
    <div style={{ position: "relative", height: "300px", width: "100vw", margin: 0, padding: 0 }}>
      <img
        src={GirlCamera}
        alt="me"
        className="opacity-75"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

    {/* Profile image + name overlay */}
    <div
      style={{
        position: "absolute",
        bottom: "15px",
        left: "35px",
        zIndex: 1,
        textAlign: "center",
      }}
    >
      <img
        src={GirlCamera}
        alt="profile"
        className="rounded-circle shadow-lg"
        style={{
          width: "120px",
          height: "120px",
          border: "3px solid white",
          objectFit: "cover",
        }}
      />
      <h3 className="fw-bolder text-black">Jocelyn Doe</h3>
      <h2 style={{ fontSize: "1rem", color: "gray", marginTop: "4px" }}>
        Professional title
      </h2>
    </div>
  </div>
</header>

    </div>
  );
}
