import React, { useState } from "react";
import logo from '../../Images/logo7.jpeg';

// for accessing global store

import {useDispatch} from 'react-redux'
import {login} from "../../actions/loginAction";
// import { Link } from "react-router-dom";


function TopHeader(props){
    
  let udata = localStorage.getItem('userloginInfo');
  udata = JSON.parse(udata);

  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();

  const [ctime, settime] = useState(time);
  const [cdate, setdate] = useState(date);

  const updateTime = () =>{
    time = new Date().toLocaleTimeString();
    settime(time);
  }
  const updateDate = () =>{
    date = new Date().toLocaleDateString();
    setdate(date);
  }

  setInterval(updateTime, 1000);
  setInterval(updateDate, 1000);


  // make dispatch object
  const dispatch = useDispatch();
  
  const userLogout = () =>{
    dispatch(login(false));
    localStorage.clear();
   }

    return (
        <header id="header">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="d-flex justify-content-between align-items-center navbar-top">
                <ul className="navbar-left">
                  <li className="forFont">{cdate}</li>
                  <li className="forFont">{ctime}</li>
                </ul>
                <div>
                  <a className="navbar-brand" href="/"><img src={logo} alt="ProjectLogo"/>
                  </a>
                </div>
                <div className="d-flex">
                  <ul className="navbar-right">
                    <li>
                      <a href="/" className="forFont">{udata.username}</a>
                    </li>
                    <li>
                      <a href="/" onClick={userLogout} className="forFont">Logout</a>
                    </li>
                  </ul>
                  <ul className="social-media">
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="mdi mdi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://web.facebook.com/">
                        <i className="mdi mdi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/">
                        <i className="mdi mdi-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="mdi mdi-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://ads.twitter.com/">
                        <i className="mdi mdi-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
      );
}


export default TopHeader;
