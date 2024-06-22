import React , { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase'
import parse from 'html-react-parser';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css'
import { Helmet } from 'react-helmet';
import "./project.scss"
import ToolCard from '../ToolCard/ToolCard'
import ReactLogo from '../../assets/reactjs.svg';

export default function Project() {
  const [project, setProject] = useState({});
  const [tools, setTools] = useState([]);
  const [links, setLinks] = useState([]);
  const [content, setContent] = useState([]);
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
      .select('platforms(*), *')
      .eq('project_id', projectId);
      
      console.log(linkData);
  
    if (linkError) {
      console.error('Error fetching links:', linkData);
    } else {
      setLinks(linkData);
    }

    const { data: contentData, error: contentError } = await supabase
    .from('articles')
    .select('*')
    .eq('project_id', projectId);
    
    console.log(contentData);

    if (contentError) {
      console.error('Error fetching content:', contentData);
    } else {
      setContent(contentData);
    }


      setLoading(false); // Set loading to false after the data has been fetched
    };

    fetchProject();
  
  }, []);

  if (loading) {
        return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <p>
          <Skeleton count={50} />
        </p>
      </SkeletonTheme>
      ) 
  }

  return (
    <>

    <Helmet>
        <title>{project.name && project.name}</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    
    <h1>{project.name && project.name}</h1>
    <p>{project.small_description && project.small_description}</p>

    <section className='technologies'>
    <h2>Technologies</h2>
    

    <div className='technologies-container'>
      {tools.map((tool) => (
        <ToolCard logo={tool.technologies.logo} name={tool.technologies.name} siteURL={tool.technologies.url} />
      ))}
    </div>
    </section>

    <section className='project-links'>
      <h2>Links</h2>

      <div className='technologies-container'>
      {links.map((link) => (
          <ToolCard logo={link.platforms.logo_url} name={link.platforms.name} siteURL={link.url} />
        ))}
      </div>
    </section>

    <section className="project-description">

      {content.map((content) => (<>
        {parse(content.content) || <Skeleton count={10} />}
        </>
        ))}
    </section>
    </>
  )
}
