// CustomSocialIcons.jsx
import * as React from "react";
import "./CustomUserSocialIcons.css"; // Import CSS specific to this component
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

export default function CustomSocialIcons() {

  return (
    <div>
                <div className="form-footer">
      <div className="social-buttons">
      <a href=""> 
        <button type="button" className="icon-button">
          <i className="fa fa-bag-shopping"></i>
        </button>
        </a>

       <a href=""> 
        <button type="button" className="icon-button">
          <i className="fab fa-facebook-f"></i>
        </button>
        </a>

        <a href=""> 
        <button type="button" className="icon-button">
        <i className="fab fa-etsy"></i>
        </button>
        </a>

        <a href=""> 
        <button type="button" className="icon-button">
          <i className="fab fa-twitter"></i>
        </button>
        </a>

        <a href=""> 
        <button type="button" className="icon-button">
          <i className="fab fa-instagram"></i>
        </button>
        </a>
        <a href=""> 
        <button type="button" className="icon-button">
          <i className="fab fa-pinterest"></i>
        </button>
        </a>
        
      </div>
    </div>
    </div>
  );
}
