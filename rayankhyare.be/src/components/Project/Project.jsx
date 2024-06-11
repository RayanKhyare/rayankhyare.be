import React , { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase'
import "./project.scss"
import ToolCard from '../ToolCard/ToolCard'
import ReactLogo from '../../assets/reactjs.svg';

export default function Project() {
  const [project, setProject] = useState({});
  const [tools, setTools] = useState([]);
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      // Get the project name from the URL
      const url = window.location.href;
      const projectNameInUrl = url.split('/').pop();

      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', projectNameInUrl);
        console.log(data);

      if (error) {
        console.error('Error fetching project:', error);
      } else {
        setProject(data[0]);
      }

      const projectId = data[0].id;
    
      const { data: techData, error: techError } = await supabase
        .from('project_technology')
        .select('technologies(*)')
        .eq('project_id', projectId);
        
        console.log(techData);
    
      if (techError) {
        console.error('Error fetching technologies:', techError);
      } else {
        setTools(techData);
      }

      const { data: linkData, error: linkError } = await supabase
      .from('links')
      .select('*')
      .eq('project_id', projectId);
      
      console.log(linkData);
  
    if (linkError) {
      console.error('Error fetching technologies:', linkData);
    } else {
      setLinks(linkData);
    }


      setLoading(false); // Set loading to false after the data has been fetched
    };

    fetchProject();
  
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while the data is being fetched
  }

  return (
    <>
    <h1>{project.name && project.name}</h1>
    <p>{project.small_description && project.small_description}</p>

    <section className='technologies'>
    <h2>Technologies</h2>
    

    <div className='technologies-container'>
      {tools.map((tool) => (
        <ToolCard logo={tool.technologies.logo} name={tool.technologies.name} siteURL="https://reactjs.org/" />
      ))}
    </div>
    </section>

    <section className='project-links'>
      <h2>Links</h2>

      <div className='technologies-container'>
      {tools.map((tool) => (
          <ToolCard logo={tool.technologies.logo} name={tool.technologies.name} siteURL="https://reactjs.org/" />
        ))}
      </div>
    </section>

    <section className="project-description">
      <p>Learnify is a website that I have created for my bachelor's thesis. Its purpose is to provide a new way of teaching for educators and a better way of taking online lessons for students.
        
        Sometimes, online lessons can be tedious to sit through for hours on end. That's why I have endeavored to create an experience that closely resembles the one someone might have when attending a lesson in person. 

        I have achieved this by adding interactive features to the site, such as polls and question-and-answer sessions, to foster real interaction between students and teachers.</p>
    </section>
    </>
  )
}
