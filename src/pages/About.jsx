import React from "react";
import about_image from "../Images/contact.png";
// // for accessing global store
// import {useDispatch} from 'react-redux'
// import {login} from "../actions/loginAction";

function About(props) {


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="text-center">
              <h1 className="text-center mt-5">
                About Us
              </h1>
              <p className="text-secondary fs-15 mb-5 pb-3">
                This text can be added in the category Description field in
                dashboard
              </p>
            </div>
          </div>
        </div>
        <div className="contact-wrap">
          <div className="row">
            <div className="col-lg-6  mb-5 mb-sm-2">
              <div className="position-relative image-hover">
                <img
                  src={about_image}
                  className="img-fluid"
                  alt="world-news"
                />
              </div>
            </div>
            <div className="col-lg-6 mb-2 mb-lg-2">
              <div className="row">
                <div className="col-sm-12  mb-2 mb-lg-2">
                  <h1>OUR MISSION</h1>
                  <p className="mb-3">WHY CHOOSE US</p>
                  <p className="mb-4">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                  </p>
                  <p className="mb-4">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Sed
                    ut perspiciatis unde omnis.
                  </p>
                  <p className="fs-15 font-weight-600">
                    VIEW MORE INFORMATION
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6  mb-2 mb-lg-2">
              <p className="fs-15 font-weight-normal mb-4 mt-5">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis.
              </p>
            </div>
            <div className="col-lg-6  mb-5 mb-sm-2">
              <p className="fs-15 font-weight-normal mb-4 mt-5">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
