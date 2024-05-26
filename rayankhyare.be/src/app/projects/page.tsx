import React from "react";
import "./projects.scss";
import { createClient } from '@/utils/supabase/server';
import { cookies } from "next/headers";
import Image from 'next/image'

import {Metadata} from "next";
import { log } from "console";



export const metadata : Metadata = {
    title: {
        absolute: "Projects | Rayan Khyare",
    }
}

export default async function Projects() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  
  const { data: projects } = await supabase.from('projects').select()
  log(projects)
  return (
<div className="projectspage">
   <h1>Projects</h1>
   <p style={{width:"60%"}}>Explore my web development projects. Each project demonstrates my commitment to creating exceptional digital experiences.</p>

   <ul>
      {projects?.map((project) => (
        <li>{project.name}</li>
      ))}
    </ul>

</div>
  );
}
