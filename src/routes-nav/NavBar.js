import React from "react";
import { NavLink } from "react-router-dom";
import  "./NavBar.css";


const NavBar = () => {

    return (
        <nav className="navBar">
            <NavLink className="nav-link" to="/">Jobly</NavLink>
            <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
            <NavLink className="nav-link" to="/login">Log In</NavLink>
            <NavLink className="nav-link" to="/companies">Companies</NavLink>
            <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
        </nav>
    )
}

export default NavBar;