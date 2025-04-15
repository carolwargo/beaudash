import React from "react";
import GirlCamera from "../../assets/images/GirlCamera.png";
import "./PostsForm.css";
import { Link } from "react-router-dom";

const PostForm = () => {
  return (
    <div className="mt-2">
      <div className="shadow-lg border border-secondary-subtle border-2 rounded">
        <div className=" w3-padding-large ">
          <div className="post-wrapper">
            <div className="post-img-title">
              <img
                src={GirlCamera}
                alt="event"
                className="post-img rounded-circle"
              />
              <h5 className="post-title">TITLE (EVENT)</h5>
            </div>
            <p className="post-date">April 15, 2025</p>

            <p className="small">
              <b>Description</b>
            </p>
            <p className="small">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              pariatur minima harum recusandae perspiciatis obcaecati, ipsa
              laborum vero quas quis. Autem cumque nulla quasi sequi cum ad!
              Dolores, voluptas quasi.
            </p>

            <img src={GirlCamera} alt="girl camera" className="w-100" />
          </div>
          <p className="likes-shares">
            <span>
              Likes <b className="text-danger">12</b>
            </span>
            <span>
              Shares <b className="text-danger">12</b>
            </span>
          </p>

          <div className=" text-end my-3">
            <Link
              to={"/"}
              className="button text-decoration-none"
              id="download"
              download
            >
              <button className=" btn w3-black w-100 w3-hover-opacity">
                Message
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
