import React , { useState, useEffect } from 'react'
import "./projects.scss"
import { supabase } from '../../utils/supabase'
import { Helmet } from 'react-helmet';

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


    <h1>Projects</h1>
    <p>Explore my web development projects. <br></br>Each project demonstrates my commitment to creating exceptional digital experiences.</p>
    
    <section className='projects'>
    {projects.map((project) => (
        <article className='project' key={project.id}>
            <a href={"/projects/" + project.slug}>
                <img src={project.thumbnail} />
            </a>
        </article>
      ))}
    </section>
    </>
  )
}
