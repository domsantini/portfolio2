'use client'

import React from "react";
import { projects } from '@/app/data.js'
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function WorkSection({ id, className }) {  
  
  const [activeProject, setActiveProject] = React.useState(undefined)
  
  function handleProjectClick(title) {
    if (activeProject === title) {
      setActiveProject(undefined)
    } else {
      setActiveProject(title)
    }
  }
  
  return (
    <section id={id} className={`min-h-screen h-[100svh] flex flex-col justify-end pt-20 text-[#E6E8E3] bg-zinc-700 p-4 md:px-8 lg:px-20 lg:pb-8 ${className}`}>
      <div className='grid place-items-center h-full text-sm sm:text-base'>
        <ul className="w-full divide-y ">
          <li className='flex py-2 text-[#FBFCF8] font-semibold'>
            <span className='w-1/2 '>Company / Project</span>
            <span className='w-1/2 '>Category</span>
            {/* <span className='w-1/2 md:w-1/3'>Company / Project</span>
            <span className='w-1/2 md:w-1/3'>Category</span> */}
            {/* <span className='hidden md:inline-block md:w-1/3'>Test</span> */}
          </li>
          {projects.map(({ id, title, description, type, link, stack }, i) => (
            <li 
              key={id} 
              className='flex flex-col py-2 h-auto w-full cursor-pointer ' 
              onClick={() => handleProjectClick(title)}
            >
              <div className='flex'>
              {/* <div className='flex hover:pl-2 transition-all ease-in-out duration-[250ms]'> */}
                <span className='w-1/2 '>{title}</span>
                <span className='w-1/2 '>{type}</span>
                {/* <span className='w-1/2 md:w-1/3'>{title}</span>
                <span className='w-1/2 md:w-1/3'>{type}</span> */}
              </div>  
              <AnimatePresence>  
                {activeProject === title && 
                  (<motion.div
                    layout
                    key={`${title}-desc`}
                    variants={projectVariants}
                    initial='closed'
                    animate='open'
                    exit='closed'
                    className='overflow-y-hidden'
                  >
                    <div className='space-y-4 py-4'>  
                      <p className='text-base'>{description}</p>
                      <ul className='flex flex-wrap list-disc pl-4 gap-x-8 gap-y-2'>
                        {stack.map((technology) => (
                          <li key={`${id}-${technology}`}>{technology}</li>
                        ))}
                      </ul>
                      {link && 
                        <button className='py-1 px-3 text-sm sm:text-base bg-[#FBFCF8] text-zinc-700 rounded-full'>
                          <Link href={link}>Check out site</Link>
                        </button>
                      }
                    </div>
                  </motion.div>)}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
      <h1 className="absolute bottom-2 text-[#E6E8E3] text-[clamp(45px,9vw,140px)] font-chillax font-semibold">Select Work</h1>    
    </section>
  )
}

const projectVariants ={
  // open: {
  //   width: '100%',
  //   height: '100%'
  // },
  // closed: {
  //   width: '100%',
  //   height: '0%'
  // }
  open: {
    height: "auto",
    // marginTop: "1rem",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  closed: {
    height: 0,
    // marginTop: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
}

export default WorkSection;

// <section id={id} className='relative h-screen flex flex-col justify-end pt-10 text-[#E6E8E3] border-2 border-solid border-red-400'>
// <div className="sticky top-0 flex-1 overflow-scroll border-2 border-solid border-green-400">
//   {projects.map(({ id, title, description, type, link, stack }, index) => (  
//     <div className="relative flex items-center justify-center min-h-full border-2 border-solid border-orange-400">
//       <ProjectCard
//         key={id} 
//         index={index}
//         title={title}
//         description={description}
//         type={type}
//         link={link}
//         stack={stack}
//       />
//     </div>  
//   ))}
// </div>
// <h1 className=" text-[#E6E8E3] text-[clamp(50px,9vw,140px)] font-chillax font-semibold">Select Work</h1>    
// </section>