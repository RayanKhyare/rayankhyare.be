import React from 'react'
import "./companycard.scss";

export default function CompanyCard({ logo , companyName, jobTitle , location , duration}) {
  return (
    <div className="company-card d-flex">
    <div className="d-flex">
        <img className="companyLogo" src={logo} alt="2mprove" width={60} height={60} />
        <div style={{paddingLeft: "20px"}}>
            <h3 className="jobTitle">{jobTitle}</h3>
            <p className="companyLocation">{companyName} - {location}

            </p>
        </div>
    </div>
    <p>{duration}</p>
</div>
  )
}
