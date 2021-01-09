import React from "react";
import { Link, NavLink } from "react-router-dom";

// // for accessing global store
// import {useDispatch} from 'react-redux'
// import {login} from "../actions/loginAction";

const activeStyle = {
    color: "#3E8177"
} 


function NavBar(props) {


  return (
      
      <div className="navbar navbar-bottom-menu navbar-expand-lg">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id = "navbarSupportedContent">
            <ul className="navbar-nav d-lg-flex justify-content-between align-items-center">
                <li>
                    <button className="navbar-close"> <i className="mdi mdi-close"></i> </button>
                </li>
                <li className="nav-item active">
                    <NavLink  className="nav-link active" to="/"  exact activeStyle={activeStyle}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/latestnews" activeStyle={activeStyle} >LatestNews</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/pakistan" activeStyle={activeStyle} >Pakistan</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/world" activeStyle={activeStyle} >World</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/technology" activeStyle={activeStyle} >Technology</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/sports" activeStyle={activeStyle}>Sports</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/business" activeStyle={activeStyle} >Business</NavLink>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li> */}
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about" activeStyle={activeStyle} >About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact" activeStyle={activeStyle} >Contact Us</NavLink>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/"><i className="mdi mdi-magnify"></i></Link>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default NavBar;
