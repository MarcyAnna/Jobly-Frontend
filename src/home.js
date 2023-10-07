import React from "react";
import {NavLink} from "react-router-dom";
// import AuthContext from "./context/AuthProvider";
import "./home.css"


const Home = () => {

    const currentUser = null;

    return (
       <div className="home">
           <h1>Jobly</h1>
           <h3>The perfect place to find the perfect job!</h3>
           { currentUser === null ?
           <><NavLink className="nav-link-home" to="/signup">Sign Up</NavLink>
           <NavLink className="nav-link-home" to="/login">Log In</NavLink></> :
           <h3>Hello {currentUser}!</h3>}
       </div>
    )
}
export default Home;