import React, { useState, useEffect, useRef } from "react";
import "./header.scss";
import { useNavigate, useLocation } from "react-router-dom";
import moonIcon from "../../assets/moon_icon.svg";
import resume from "../../assets/rayankhyare_resume.pdf";
import { motion } from "framer-motion"

export default function Header() {
    // const navigate = useNavigate();
    // const location = useLocation();

    // function handleClickAbout() {
    //     navigate("/about");
    //   }
    
    //   function handleClickRegister() {
    //     navigate("/register");
    //   }

    const [darkMode, setDarkMode] = useState(() => {
      return JSON.parse(localStorage.getItem("light"));
  });

  useEffect(() => {
    if (darkMode) {
        document.body.classList.add("light");
    } else {
        document.body.classList.remove("light");
    }
}, [darkMode]);

const handleModeChange = () => {
    setDarkMode(prevMode => {
        const newMode = !prevMode;
        localStorage.setItem("light", newMode);
        return newMode;
    });
};

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
      onClick={handleModeChange}
      src={moonIcon}// Notice the path starts from the public directory
      alt="Moon Icon"
      width={30} // these are values for example
      height={30}
    />
    </div>
  </header>
  )
}
