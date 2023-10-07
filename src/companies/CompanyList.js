import React from "react";
import  JoblyApi  from "../api/api";
import { useLoaderData } from "react-router-dom";
import CompanyCard from "./CompanyCard";


async function companiesLoader() {
    const companies = await JoblyApi.getCompanies();
    // console.log(companies)
    return { companies };
}
const CompanyList = () => {

    const { companies } = useLoaderData();
    
    return (
        <div className="companies">
            <h2>Companies</h2>
            {companies.map(c => <CompanyCard 
            key={c.handle}
            handle={c.handle}
            name={c.name}
            description={c.description}
            // logoUrl={c.logoUrl}
            />)}
        </div>
    )
}

export { CompanyList, companiesLoader };