import { createBrowserRouter, Route, createRoutesFromElements} from "react-router-dom";
import Home from "../home";
import { CompanyList, companiesLoader } from "../companies/CompanyList";
import { CompanyJobs, companyLoader} from "../companies/CompanyJobs";
import {JobList, jobsLoader } from "../jobs/JobList";
import RouteLayout from "../routes-nav/RouteLayout";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import Profile from "../auth/Profile";


  const BrowserRoutes = createBrowserRouter(createRoutesFromElements(
    <Route  path="/" element={<RouteLayout />}>
             <Route index element={<Home /> } />
             <Route path="/signup" element={<Signup />}/>
             <Route path="/login" element={<Login />} />
             <Route path="/profile" element={<Profile />} />
             <Route path='companies' element={<CompanyList /> } loader={companiesLoader}/>
             <Route path='companies/:handle' element={<CompanyJobs /> } loader={companyLoader}/>
             <Route path='jobs' element={<JobList /> } loader={jobsLoader}/>
     </Route>
 ))

 export default BrowserRoutes;