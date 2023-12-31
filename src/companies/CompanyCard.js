import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";

function CompanyCard({name, description, logoUrl, handle}) {
    
    return (
        <div className = "card-body">
           <Link to={`/companies/${handle}`}>
           <h6 className="card-title">
            {name}
          </h6>
          <div className="comp-description"><h6>{description}</h6></div> 
           </Link>
        </div>
    )
}

export default CompanyCard;