import React from "react";
import "./about.scss";
import Map from "../../components/Map/Map";

import {Metadata} from "next";
import CompanyCard from "@/components/CompanyCard/CompanyCard";

import twomproveLogo from "../../../public/assets/2mprove.png";
import studiostudioLogo from "../../../public/assets/studiostudio.png";
import ehbLogo from "../../../public/assets/ehb.png";
import reactLogo from "../../../public/assets/reactjs.svg";
import Toolcard from "@/components/ToolCard/ToolCard";

export const metadata : Metadata = {
    title: {
        absolute: "About | Rayan Khyare",
    }
}

export default function About() {
  return (
<div className="aboutpage">
    <h2>About me</h2>
    <section className="d-flex">
      <div className="w-50" style={{paddingRight: "50px" , color: "#B4B4B4"}}>
        <p>
          Hi, I’m Rayan Khyare, a 21-year-old web developer with Moroccan roots, based in Belgium. 
          <br></br>
          <br></br>
          My passion for IT has been a constant since childhood, and it led me to earn a Bachelor’s degree in Multimedia & Creative Technologies, specializing in Web Development.
          <br></br>
          <br></br>
          When I’m not in front of a screen, you can find me playing soccer or enjoying the outdoors – although, admittedly, that doesn't happen as often as I’d like.
        </p>
      </div>
      <div className="w-50">
        <Map lng={4.351697} lat={50.8465573} zoom={4} pitch={25} height={'235px'} />
      </div>
    </section>

    <section>
      <h2>Experience</h2>
      <p style={{ color: "#B4B4B4"}}>Here is where I draw my experience from:</p>

      <div>
        <CompanyCard logo={twomproveLogo} companyName={'2MPROVE'} jobTitle={'Full Stack Developer'} location={'Ronse'} duration={'Nov 2023 - Present'} />
        <CompanyCard logo={studiostudioLogo} companyName={'Studio Studio'} jobTitle={'Intern Web Developer'} location={'Ghent'} duration={'Jan 2023 - April 2023'} />
        <CompanyCard logo={ehbLogo} companyName={'Erasmus Hogeschool Brussels'} jobTitle={'Student Multimedia & Creative Technologies'} location={'Brussels'} duration={'Sept 2020 - June 2023'} />
      </div>
    </section>

    
    <section>
      <h2>Technologies</h2>
      <p style={{ width:"75%"}}>I specialize in JavaScript, React, Node.js, and web development as a whole. <br></br>Here are a few technologies I have come to love:</p>
      <div className="technologies-container">
      <Toolcard logo={reactLogo} name={'React'} siteURL={'https://reactjs.org/'} />
      <Toolcard logo={reactLogo} name={'React'} siteURL={'https://reactjs.org/'} />
      <Toolcard logo={reactLogo} name={'React'} siteURL={'https://reactjs.org/'} />
      <Toolcard logo={reactLogo} name={'React'} siteURL={'https://reactjs.org/'} />
      </div>
    </section>
</div>
  );
}
