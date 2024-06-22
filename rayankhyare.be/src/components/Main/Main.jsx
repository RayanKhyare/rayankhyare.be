import React , { useState, useEffect } from 'react'
import Me from '../../assets/me.png'
import { supabase } from '../../utils/supabase'
import { motion } from "framer-motion"

export default function Main() {

  const [projects, setProjects] = useState([])
  
  useEffect(() => {
    async function getProjects() {
      const projectIds = [1, 2, 3, 4]; // Replace with your desired project ids
  
      const { data: projects } = await supabase
        .from('projects')
        .select()
        .in('id', projectIds)
        .limit(4);
  
      if (projects.length > 0) {
        setProjects(projects);
      }
    }
  
    getProjects();
  }, []);

  return (
    <>
    
    <motion.img
        src={Me}
        alt="Picture of me"
        width={125}
        height={125}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
    />


      <motion.h1
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2 ,duration: 0.4, ease: "easeInOut" }}
      >Rayan Khyare</motion.h1>

      <motion.p 
           className="introduction" 
           style={{ width:"80%"}}
           initial={{ opacity: 0, y: 25 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0 }}
           transition={{ delay: 0.4 ,duration: 0.4, ease: "easeInOut" }}
      >
            Hi there! I’m a passionate web developer specializing in creating stunning and user-friendly websites. At 21 years old, I&apos;m in my first year of professional experience, and I thrive on the thrill of learning new technologies and techniques. I&apos;m always eager for opportunities to expand my skills and deliver exceptional digital experiences.
      </motion.p>


      <motion.h2
         initial={{ opacity: 0, y: 25 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0 }}
         transition={{ delay: 0.4 ,duration: 0.4, ease: "easeInOut" }}
      >Selected projects</motion.h2>

      <motion.section 
      className='projects'
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.6 ,duration: 0.4, ease: "easeInOut" }}
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
