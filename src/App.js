import React from "react";
import {  RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import  BrowserRoutes from "./routes-nav/BrowserRouter";
import './App.css';


function App() {

  
  return (
    <div className="App">
     <AuthProvider>
     <RouterProvider router={BrowserRoutes} />
     </AuthProvider>
    </div>
  );
}

export default App;    
