import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import "./toolcard.scss";

import reactLogo from "../../../public/assets/reactjs.svg";


export default function Toolcard({ logo , name , siteURL}) {
  return (
    <div className="tool-card d-flex">
        <Image src={logo} alt="React" width={30} height={30} />
        <h3>{name}</h3>
    </div>
  );
}
