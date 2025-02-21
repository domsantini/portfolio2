'use client'
import React from 'react';

import ProjectsListItem from './ProjectsListItem';
import { projects } from '../data';
import { motion, useInView } from 'framer-motion';

function ProjectsList() {
  const [activeProject, setActiveProject] = React.useState(undefined)
  
  return (
    <ul className='w-full py-2  text-[#FBFCF8] text-sm sm:text-base'>
      <li className='flex font-semibold pb-2'>
        <span className='w-1/2 opacity-50'>Company / Project</span>
        <span className='w-1/2 opacity-50 pl-4'>Category</span>
      </li> 
      {projects.map(({ id, title, description, type, link, stack }) => (
        <ProjectsListItem 
          key={id}
          title={title}
          description={description}
          type={type}
          link={link}
          stack={stack}
          activeProject={activeProject}
          setActiveProject={setActiveProject}
        />
      ))}
    </ul>
  )  
}

export default ProjectsList;