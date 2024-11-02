import "./about.scss";
import CompanyCard from "../CompanyCard/CompanyCard";
import Toolcard from "../ToolCard/ToolCard";
import Map from "../Map/Map";
import { Helmet } from 'react-helmet';
import { motion } from "framer-motion"

import twomproveLogo from "../../assets/2mprove.png";
import studiostudioLogo from "../../assets/studiostudio.png";
import ehbLogo from "../../assets/ehb.png";
import reactLogo from "../../assets/reactjs.svg";
import nextjsLogo from "../../assets/nextjs.svg";
import phpLogo from "../../assets/php.svg";
import nodejsLogo from "../../assets/nodejs.svg";
import angularLogo from "../../assets/angular.svg";
import adobecsLogo from "../../assets/adobecs.svg";
import wordpressLogo from "../../assets/wordpress.svg";
import linkedinLogo from "../../assets/linkedin.svg";
import githubLogo from "../../assets/github.svg";
import figmaLogo from "../../assets/figma.svg";
import discordLogo from "../../assets/discord.svg";
import atIcon from "../../assets/at-icon.svg";
import downloadBtn from "../../assets/downloadbtn.svg";
import resume from "../../assets/cv_rayan_khyare_en.pdf";



export default function About() {


    
  return (
    <div className="aboutpage">

    <Helmet>
        <title>ABOUT ME</title>
        <meta name="description" content="Hi, I'm Rayan Khyare, a 21-year-old web developer with Moroccan roots, based in Belgium." />
    </Helmet>

    <motion.h1
         initial={{ opacity: 0, y: 25 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5, ease: "easeInOut" }}
         >
          About me</motion.h1>
    <motion.section className="d-flex description-container"
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ delay: 0.25 ,duration: 0.5, ease: "easeInOut" }}
    >
      <div className="w-50" style={{paddingRight: "50px" , color: "#B4B4B4"}}>
        <p>
          Hi, I&apos;m Rayan Khyare, a 21-year-old web developer with Moroccan roots, based in Belgium. 
          <br></br>
          <br></br>
          My passion for IT has been a constant since childhood, and it led me to earn a Bachelor&apos;s degree in Multimedia & Creative Technologies, specializing in Web Development.
          <br></br>
          <br></br>
          When I&apos;m not in front of a screen, you can find me playing soccer or enjoying the outdoors – although, admittedly, that doesn&apos;t happen as often as I&apos;d like.
        </p>
      </div>
      <div className="w-50">
        <Map lng={4.351697} lat={50.8465573} zoom={4} pitch={25} height={'235px'} />
      </div>
    </motion.section>

    <motion.section className="experience-container"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5 ,duration: 0.5, ease: "easeInOut" }}
    >
      <h2>Experience</h2>
      <p style={{ color: "#B4B4B4"}}>Here is where I draw my experience from:</p>

      <div>
        <CompanyCard logo={twomproveLogo} companyName={'2MPROVE'} companyWebsite={'https://www.2mprove.be/'} jobTitle={'Full Stack Developer'} location={'Ronse'} duration={'Sep 2023 - Present'} />
        <CompanyCard logo={studiostudioLogo} companyName={'Studio Studio'} companyWebsite={'https://studiostudio.be/'} jobTitle={'Intern Web Developer'} location={'Ghent'} duration={'Jan 2023 - April 2023'} />
        <CompanyCard logo={ehbLogo} companyName={'Erasmus Hogeschool Brussels'} companyWebsite={'https://www.erasmushogeschool.be/nl/opleidingen/multimedia-creatieve-technologie'} jobTitle={'Student Multimedia & Creative Technologies'} location={'Brussels'} duration={'Sept 2020 - June 2023'} />
      </div>
    </motion.section>

    
    <motion.section className="technologies"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.7 ,duration: 0.5, ease: "easeInOut" }}
    >
      <h2>Technologies</h2>
      <p className="technologies-intro" style={{ width:"75%"}}>I specialize in JavaScript, React, Node.js, and web development as a whole. <br></br>Here are a few technologies I have come to love:</p>
      <div className="technologies-container">
        <Toolcard logo={reactLogo} name={'React'} siteURL={'https://reactjs.org/'} />
        <Toolcard logo={nextjsLogo} name={'Next.js'} siteURL={'https://nextjs.org/'} />
        <Toolcard logo={phpLogo} name={'PHP'} siteURL={'https://www.php.net/'} />
        <Toolcard logo={nodejsLogo} name={'Node.js'} siteURL={'https://nodejs.org/en'} />
        <Toolcard logo={angularLogo} name={'Angular 11'} siteURL={'https://angular.dev/'} />
        <Toolcard logo={adobecsLogo} name={'Adobe CS'} siteURL={'https://www.adobe.com/be_en/creativecloud.html'} />
        <Toolcard logo={wordpressLogo} name={'WordPress'} siteURL={'https://wordpress.com/en'} />
        <Toolcard logo={figmaLogo} name={'Figma'} siteURL={'https://www.figma.com/'} />
      </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.9 ,duration: 0.5, ease: "easeInOut" }}
    >
      <h2>Resume</h2>
      <p>Interested in learning more about my background and experience? 
        <br></br>
        You can download my full resume <a href={resume} target='_blank'>here <img src={downloadBtn} width={20} height={20} alt="Download button" /></a> </p>
        <p>You can also contact me on the following platforms:</p>
        <div className="technologies-container">
          <Toolcard logo={linkedinLogo} name={'Linkedin'} siteURL={'https://www.linkedin.com/in/rayankhyare/'} />
          <Toolcard logo={githubLogo} name={'Github'} siteURL={'https://github.com/RayanKhyare'} />
          {/* <Toolcard logo={discordLogo} name={'Discord'} siteURL={'https://github.com/RayanKhyare'} /> */}
          <Toolcard logo={atIcon} name={'E-mail'} siteURL={'mailto:rayankhyare@gmail.com'} />


      </div>
      </motion.section>
</div>
  )
}
