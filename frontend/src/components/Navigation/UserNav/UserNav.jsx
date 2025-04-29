import React from "react";  
import './UserNav.css'

const UserNav = () => {
    return (   
      
      <div className="d-flex">
<div className="topnav">
  <a className="active" href="#home">Posts</a>
  <a href="#news">Replies</a>
  <a href="#contact">Articles</a>
  <a href="#about">Media</a>
  <a href="#likes">Likes</a>
</div>
</div>
    );
}

export default UserNav; 