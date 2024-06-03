import React , { useState, useEffect } from 'react'
import Me from '../../assets/me.png'
import { supabase } from '../../utils/supabase'

export default function Main() {

  const [projects, setProjects] = useState([])

useEffect(() => {
  async function getProjects() {
    const { data: projects } = await supabase
      .from('projects')
      .select()
      .limit(4);

    if (projects.length > 0) {
      setProjects(projects);
    }
  }

  getProjects();
}, []);

  return (
    <>
    <img
        src={Me} // Notice the path starts from the public directory
        alt="Picture of me"
        width={125} // these are values for example
        height={125}
      />
      
      <h1>Rayan Khyare</h1>

      <p className="introduction" style={{ width:"80%"}}>Hi there! I’m a passionate web developer specializing in creating stunning and user-friendly websites. At 21 years old, I&apos;m in my first year of professional experience, and I thrive on the thrill of learning new technologies and techniques. I&apos;m always eager for opportunities to expand my skills and deliver exceptional digital experiences.</p>

      <h2>Selected projects</h2>

      <section className='projects'>
        {projects.map((project) => (
            <article className='project' key={project.id}>
                <a href={"/projects/" + project.name.toLowerCase().replace(/ /g, '_')}>
                    <img src={project.thumbnail} />
                </a>
            </article>
          ))}
    </section>
    </>
  )
}
