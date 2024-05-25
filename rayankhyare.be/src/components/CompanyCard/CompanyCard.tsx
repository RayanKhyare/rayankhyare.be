import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import "./companycard.scss";

import twomproveLogo from "../../../public/assets/2mprove.png";


export default function CompanyCard({ logo , companyName, jobTitle , location , duration}) {
  return (
    <div className="company-card d-flex">
        <div className="d-flex">
            <Image className="companyLogo" src={logo} alt="2mprove" width={60} height={60} />
            <div style={{paddingLeft: "20px"}}>
                <h3 className="jobTitle">{jobTitle}</h3>
                <p className="companyLocation">{companyName} - {location}
  
                </p>
            </div>
        </div>
        <p>{duration}</p>
    </div>
  );
}
