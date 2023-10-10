import React from "react";
import { NavLink } from "react-router-dom";
import  "./NavBar.css";
import { useAuth } from "../hooks/useAuth";
import { useAuthContext } from "../context/AuthContext";


const NavBar = () => {
    
    const { logout } = useAuth();

    const handleLogout = async () => {
        await logout();
    }

    
    const auth = useAuthContext()
    // const user = () => {
    //     if (!auth.user) {
    //         return null;
    //     }  
    //     console.log(auth.user); 
    //     return auth.user; 
    // }
    const user = auth.user;

    console.log(user);
        
      

    return (
        <nav className="navBar">
            <NavLink className="nav-link" to="/">Jobly</NavLink>
            { user === null ?
            <>
            <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
            <NavLink className="nav-link" to="/login">Log In</NavLink>
            </> : 
            <>
            <NavLink className="nav-link" to="/companies">Companies</NavLink>
            <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
            <NavLink className="nav-link" to="/" onClick={handleLogout}>Logout</NavLink>
            </>}
            {/* <NavLink className="nav-link" to="/">Jobly</NavLink>
            <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
            <NavLink className="nav-link" to="/login">Log In</NavLink>
            <NavLink className="nav-link" to="/companies">Companies</NavLink>
            <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
            <NavLink className="nav-link" to="/" onClick={handleLogout}>Logout</NavLink> */}
        </nav>
    )
}

export default NavBar;