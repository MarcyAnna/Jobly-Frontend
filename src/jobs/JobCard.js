import React from "react";
import "./JobCard.css";


function JobCard({id, title, salary, equity, companyName}) {

    return (
        <div className = "card-body">
           <h5 className="card-title"> {title}</h5>
          <h6 className="card-company">{companyName}</h6> 
          <div className="card-salary">
          {salary && <div><small>Salary: {formatSalary(salary)}</small></div>}
          {equity !== undefined && <div><small>Equity: {equity}</small></div>}
          </div>
        </div>
    )
}

function formatSalary(salary) {
    const digitsRev = [];
    const salaryStr = salary.toString();
  
    for (let i = salaryStr.length - 1; i >= 0; i--) {
      digitsRev.push(salaryStr[i]);
      if (i > 0 && i % 3 === 0) digitsRev.push(",");
    }
  
    return digitsRev.reverse().join("");
  }

export default JobCard;