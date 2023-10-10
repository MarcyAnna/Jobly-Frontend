import React from "react";
import  JoblyApi  from "../api/api";
import { useLoaderData } from "react-router-dom";
import JobCard from "./JobCard";


async function jobsLoader() {
    const jobs= await JoblyApi.getJobs();
    return { jobs };
}

const JobList = () => {
    const { jobs } = useLoaderData();

    return (
        <div className="jobs">
            {/* <h2>Jobs</h2> */}
            {jobs.map(j => <JobCard
            key={j.id}
            title={j.title} 
            companyName={j.companyName}
            salary={j.salary}
            equity={j.equity}
            />)}
        </div>
    )
}

export { JobList, jobsLoader};