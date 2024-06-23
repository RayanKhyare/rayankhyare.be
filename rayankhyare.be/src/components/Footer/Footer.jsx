import React from 'react'
import "./footer.scss";
import linkedinLogo from "../../assets/linkedin.svg";
import githubLogo from "../../assets/github.svg";
import mailLogo from "../../assets/at-icon.svg";

export default function footer() {
  return (
    <>
    <footer>
        <div>
            <p>© 2024 Rayan Khyare</p>
        </div>
        <div className='contact_container'>
            <a href="https://www.linkedin.com/in/rayankhyare/" target='_blank'>
                <img src={linkedinLogo} alt="linkedin logo" />
            </a>
            <a href="https://github.com/RayanKhyare" target='_blank'>
                <img src={githubLogo} alt="github logo" />
            </a>
            <a href="mailto:rayankhyare@gmail.com" target='_blank'>
                <img src={mailLogo} alt="mail logo" />
            </a>
        </div>
    </footer>
    </>
  )
}
