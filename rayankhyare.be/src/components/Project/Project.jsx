import React , { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase'
import "./project.scss"
import ToolCard from '../ToolCard/ToolCard'
import ReactLogo from '../../assets/reactjs.svg';

export default function Project() {
  const [project, setProject] = useState({});
  const [tools, setTools] = useState([]);
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

      console.log(tools);

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
        <ToolCard logo={ReactLogo} name={'React'} siteURL={'https://reactjs.org/'} />
    </div>
    </section>
    </>
  )
}
