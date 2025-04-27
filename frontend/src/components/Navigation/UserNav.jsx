import React from "react";  

const UserNav = () => {
    return (    
<div>
    <style>
        {`
        .topnav {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #04AA6D;
  color: white;
}`}
    </style>
        <div className="top-nav">
<a href="#">Active</a>
<a href="#">Item 1</a>
<a href="#">Item 2</a>
<a href="#">Item 3</a>
<a href="#">Item 4</a>
<a href="#">Item 5</a>
        </div>
</div>  

    );
}

export default UserNav; 