import React from "react";
import {  useLoaderData } from "react-router-dom";
import JobCard from "../jobs/JobCard";
import JoblyApi from "../api/api";



async function companyLoader({ params }) {
    const handle = params.handle;
    const company = await JoblyApi.getCompany(handle);
    return { company };
}
const CompanyJobs = () => {
    const { company } = useLoaderData();
    let jobs = company.jobs;

    return (
        <div className="company-jobs">
            <h4>{company.name}</h4>
            <div className="comp-description">{company.description}</div>
            <div className="company-jobs">
         {jobs.map(j => <JobCard
         key={j.id}
         title={j.title} 
         companyName={j.companyName}
         salary={j.salary}
         equity={j.equity}
         />)}
     </div>
        </div>
    )
}

export { CompanyJobs, companyLoader };