import React from "react";
import {  useLoaderData } from "react-router-dom";
import JoblyApi from "../api/api";



async function companyLoader({ params }) {
    const handle = params.handle;
    const company = await JoblyApi.getCompany(handle);
    return { company };
}
const CompanyJobs = () => {
    const { company } = useLoaderData();
    // useEffect( () => {
    //     callGetCompanyJobs()
    // }, [handle])

    // const [company, setCompany] = useState(null);

    // async function callGetCompanyJobs() {
    //     let company = await JoblyApi.getCompany(handle);
    //     setCompany(company); 
    //     return company;    
    // }

    return (
        <div className="company-jobs">
            <h4>{company.name}</h4>
            <div className="comp-description">{company.description}</div>
        </div>
    )
}

export { CompanyJobs, companyLoader };