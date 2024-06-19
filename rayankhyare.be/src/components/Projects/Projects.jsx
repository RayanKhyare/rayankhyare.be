import React , { useState, useEffect } from 'react'
import "./projects.scss"
import { supabase } from '../../utils/supabase'
import { Helmet } from 'react-helmet';
import { motion } from "framer-motion"
import ehb from '../../assets/ehb.png'



export default function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
      async function getProjects() {
      const { data: projects } = await supabase.from('projects').select('*');
  
        if (projects.length > 1) {
          setProjects(projects)
        }
      }
  
      getProjects()
    }, [])

console.log(projects);



    
  return (
    <>
    <Helmet>
        <title>PROJECTS</title>
        <meta name="description" content="Explore my web development projects. Each project demonstrates my commitment to creating exceptional digital experiences." />
    </Helmet>


    <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          >Projects</motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >Explore my web development projects. <br></br>Each project demonstrates my commitment to creating exceptional digital experiences.</ motion.p>
    
    <motion.section 
    className='projects'
    initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2 ,duration: 0.4, ease: "easeInOut" }}  
      >
    {projects.map((project) => (
        <article className='project' key={project.id}>
            <a href={"/projects/" + project.slug}>
                <img src={project.thumbnail} />
            </a>
        </article>
      ))}
    </motion.section>
    </>
  )
}
