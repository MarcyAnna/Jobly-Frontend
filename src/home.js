import React from "react";
import {NavLink} from "react-router-dom"; 
import "./home.css"
import { useAuth } from "./hooks/useAuth";


const Home = () => {

    const { user } = useAuth();

    return (
       <div className="home">
           <h1>Jobly</h1>
           <h3>The perfect place to find the perfect job!</h3>
           { user === null ?
           <><NavLink className="nav-link-home" to="/signup">Sign Up</NavLink>
           <NavLink className="nav-link-home" to="/login">Log In</NavLink></> :
           <h3>Hello {user}!</h3>}
       </div>
    )
}
export default Home;