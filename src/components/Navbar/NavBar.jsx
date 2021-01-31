import React from "react";
import { Link, NavLink } from "react-router-dom";

const activeStyle = {
    color: "#3E8177",
} 

function NavBar(props) {

  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col">
                <nav className="navbar navbar-light bg-light navbar-expand-lg my_nav_bar">

                    <button className="navbar-toggler" data-toggle="collapse" data-target="#menu_navabr">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="menu_navabr">

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink  className="nav-link my_menu_items" exact to="/" activeClassName="menu_active" >Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link my_menu_items"  to="/latestnews" activeClassName="menu_active" >LatestNews</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link my_menu_items"  to="/pakistan" activeClassName="menu_active"  >Pakistan</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link my_menu_items" to="/world" activeClassName="menu_active" >World</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link my_menu_items" to="/technology" activeClassName="menu_active" >Technology</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link my_menu_items" to="/sports" activeClassName="menu_active">Sports</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link my_menu_items" to="/business" activeClassName="menu_active" >Business</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle my_menu_items" to="" data-toggle="dropdown"  activeStyle={activeStyle}>More</Link>
                                <div className="dropdown-menu">
                                    <Link to="/entertainment" className="dropdown-item " activeStyle={activeStyle} >Entertainment</Link>
                                    <Link to="/offbeat" className="dropdown-item " activeStyle={activeStyle} >Off Beat</Link>
                                    <Link to="/lifestyle" className="dropdown-item " activeStyle={activeStyle} >Life Style</Link>
                                    <Link to="/health" className="dropdown-item " activeStyle={activeStyle} >Health</Link>
                                    <Link to="/scitech" className="dropdown-item " activeStyle={activeStyle} >SCI & TECH</Link>
                                </div>  
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link my_menu_items" to="/about" activeClassName="menu_active" >About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link my_menu_items" to="/contact" activeClassName="menu_active" >Contact</NavLink>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        </div>
    </div>
    </>
  );
}

export default NavBar;
