import React, { useState, useEffect, useRef } from "react";
import "./header.scss";
import { useNavigate, useLocation } from "react-router-dom";
import moonIcon from "../../assets/moon_icon.svg";
import resume from "../../assets/rayankhyare_resume.pdf";


export default function Header() {
    // const navigate = useNavigate();
    // const location = useLocation();

    // function handleClickAbout() {
    //     navigate("/about");
    //   }
    
    //   function handleClickRegister() {
    //     navigate("/register");
    //   }

  return (
    <header>
    <h1>
      <a href="/">
        RAYAN
      </a>
    </h1>


    <nav>
        
      <ul>
      <li>
        <a href="/about">
          ABOUT
        </a>
      </li>
      <li>
        <a href="/projects">
          PROJECTS
        </a>
      </li>
      <li>
        <a href={resume} target='_blank'>
          RESUME
        </a>
      </li>
      </ul>
    </nav>
  
    <div>

    <img
      src={moonIcon}// Notice the path starts from the public directory
      alt="Moon Icon"
      width={30} // these are values for example
      height={30}
    />
    </div>
  </header>
  )
}
