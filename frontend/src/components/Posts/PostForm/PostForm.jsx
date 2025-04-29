import React, { useState } from "react";
import GirlCamera from "../../../assets/images/GirlCamera.png";
import { Link } from "react-router-dom";

const PostForm = () => {
  // --- NEW: manage "View More" state
  const [showMore, setShowMore] = useState(false);

  // --- NEW: toggle function
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (

    <div>
      <style>{`
      .post-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* align everything to left */
}

.post-img-title {
  display: flex;
  align-items: center; /* vertically center image and title */
}

.profile-img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  text-align: center; /* optional, if you want to center everything */
  margin-bottom: 5px;
}

.card-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.post-text {
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
}


.post-date {
  margin-top: 0px;
  font-size: 12px;
}


.likes-shares {
  display: flex;
  justify-content: space-between;
  margin-top: 10px; /* optional: remove default paragraph spacing */
  padding: 0; /* optional: adds spacing on left/right */
  font-size: 12px;
}

.post-text-wrapper {
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.5s ease;
}

.post-text-collapsed {
  max-height: 80px;
  opacity: 0.8;
}

.post-text-expanded {
  max-height: 1000px;
  opacity: 1;
}
`}</style>

    <div className="mt-3">
      <div className="card">
        <div className="my-padding-large">
          <div className="post-wrapper">
            
            {/* Profile image + Title */}
            <div className="post-img-title">
              <img src={GirlCamera} alt="Profile" className="card-img" />
              <div className="post-text">
                <p className="post-title">TITLE (EVENT)</p>
                <p className="post-date small">April 15, 2025</p>
              </div>
            </div>

            {/* Post text with collapse/expand */}
            <div className={`post-text-wrapper ${showMore ? "post-text-expanded" : "post-text-collapsed"}`}>
              <p className="small m-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                pariatur minima harum recusandae perspiciatis obcaecati, ipsa
                laborum vero quas quis. Autem cumque nulla quasi sequi cum ad!
                Dolores, voluptas quasi.
              </p>
            </div>

            {/* View More/Less Button */}
            <div className="text-center mt-2">
              <button onClick={toggleShowMore} className="btn btn-link p-0">
                View {showMore ? "Less" : "More"}
              </button>
            </div>

            {/* Post Image */}
            <img src={GirlCamera} alt="Post" className="post-image w-100" />

            {/* Likes / Shares */}
            <div className="likes-shares mt-2">
              <span>Likes <b className="text-danger">12</b></span>
              <span>Shares <b className="text-danger">12</b></span>
            </div>

            {/* Message Button */}
            <div className="text-end my-3">
              <Link to={"/"} className="button text-decoration-none" id="download" download>
                <button className="btn my-black w-100 my-hover-opacity">
                  Message
                </button>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
