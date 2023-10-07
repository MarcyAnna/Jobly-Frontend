import React from "react";
import  JoblyApi  from "../api/api";
import { useLoaderData } from "react-router-dom";
import JobCard from "./JobCard";


async function jobsLoader() {
    const jobs= await JoblyApi.getJobs();
    // console.log(jobs)
    return { jobs };
}

const JobList = () => {
    // useEffect( () => {
    //     callGetJobs()
    // }, [])

    // const [jobs, setJobs] = useState([]);

    // async function callGetJobs() {
    //     let jobs = await JoblyApi.getJobs();
    //     setJobs(jobs); 
    //     return jobs;    
    // }
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