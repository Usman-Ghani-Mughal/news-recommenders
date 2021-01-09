import React from "react";
import { Link, NavLink } from "react-router-dom";

// // for accessing global store
// import {useDispatch} from 'react-redux'
// import {login} from "../actions/loginAction";

function MainFooter(props) {


  return (
    <>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="border-top"></div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <ul className="footer-vertical-nav">
                  <li className="menu-title"><NavLink to="/">News</NavLink></li>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/latestnews">LatestNews</NavLink></li>
                  <li><NavLink to="/pakistan">Pakistan</NavLink></li>
                  <li><NavLink to="/technology">Technology</NavLink></li>
                </ul>
              </div>
              <div className="col-sm-3 col-lg-3">
                <ul className="footer-vertical-nav">
                  <li className="menu-title"><NavLink to="/world">World</NavLink></li>
                  <li><NavLink to="/sports">Sports</NavLink></li>
                  <li><NavLink to="/business">Business</NavLink></li>
                  <li><NavLink to="/">Magazine</NavLink></li>
                  <li><NavLink to="/">Art</NavLink></li>
                </ul>
              </div>
              <div className="col-sm-3 col-lg-3">
                <ul className="footer-vertical-nav">
                  <li className="menu-title"><NavLink to="/">Features</NavLink></li>
                  <li><NavLink to="/">Photography</NavLink></li>
                  <li><NavLink to="/">Video</NavLink></li>
                  <li><NavLink to="/">Newsletters</NavLink></li>
                  <li><NavLink to="/">Live Events</NavLink></li>
                </ul>
              </div>
              <div className="col-sm-3 col-lg-3">
                <ul className="footer-vertical-nav">
                  <li className="menu-title"><NavLink to="/">More</NavLink></li>
                  <li><NavLink to="/about">About us</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  <li><NavLink to="/">User Agreement</NavLink></li>
                  <li><NavLink to="/">Privacy</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="d-flex justify-content-between">
                  <img src="assets/images/logo.svg" className="footer-logo" alt="" />

                  <div className="d-flex justify-content-end footer-social">
                    <h5 className="m-0 font-weight-600 mr-3 d-none d-lg-flex">Follow on</h5>
                    <ul className="social-media">
                      <li>
                        <a href="#">
                          <i className="mdi mdi-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="mdi mdi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="mdi mdi-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="mdi mdi-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="mdi mdi-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div
                  className="d-lg-flex justify-content-between align-items-center border-top mt-5 footer-bottom"
                >
                  <ul className="footer-horizontal-menu">
                    <li><a href="#">Terms of Use.</a></li>
                    <li><a href="#">Privacy Policy.</a></li>
                    <li><a href="#">Accessibility & CC.</a></li>
                    <li><a href="#">AdChoices.</a></li>
                    <li><a href="#">Advertise with us Transcripts.</a></li>
                    <li><a href="#">License.</a></li>
                    <li><a href="#">Sitemap</a></li>
                  </ul>
                  <p className="font-weight-medium">
                    © 2020 <a href="https://www.bootstrapdash.com/" target="_blank" className="text-dark">@ BootstrapDash</a>, Inc.All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </>
  );
}

export default MainFooter;
