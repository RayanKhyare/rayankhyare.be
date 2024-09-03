import React from 'react'
import "./companycard.scss";

export default function CompanyCard({ logo , companyName, companyWebsite , jobTitle , location , duration}) {
  return (
  <div className="company-card d-flex">
      <div className="d-flex">
          <a href={companyWebsite} target='_blank'>
            <img className="companyLogo" src={logo} alt="2mprove" width={60} height={60} />
          </a>
          <div style={{paddingLeft: "20px"}}>
              <h3 className="jobTitle">{jobTitle}</h3>
              <p className="companyLocation">{companyName} - {location}</p>
          </div>
      </div>
      <p className='duration'>{duration}</p>
  </div>
  )
}
