'use client'
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import SectionWrapper from "./SectionWrapper";
import { projects } from '@/app/data.js'

function WorkSection({ id }) {  
  
  const [activeProject, setActiveProject] = React.useState(undefined)
  
  function handleProjectClick(title) {
    if (activeProject === title) {
      setActiveProject(undefined)
    } else {
      setActiveProject(title)
    }
  }
  
  return (
    <section
      id={id}
      className='
        relative z-[2] min-h-[100svh] h-screen p-4 md:px-8 lg:px-20
        pt-20
        flex flex-col
        text-[#E6E8E3] bg-zinc-700
      '
    >
      <h1 className='text-[clamp(45px,9vw,140px)] font-chillax font-semibold pb-20'>
        Projects / Work
      </h1>
      <div className='flex  h-full text-sm sm:text-base'>
        <ul className='w-full divide-y'>
          <li className='flex py-2 text-[#FBFCF8] font-semibold'>
            <span className='w-1/2 opacity-50'>Company / Project</span>
            <span className='w-1/2 opacity-50 pl-4'>Category</span>
          </li>    
            {projects.map(({ id, title, description, type, link, stack }, i) => (
              <li 
                key={id} 
                className='flex flex-col py-2 h-auto w-full cursor-pointer ' 
                onClick={() => handleProjectClick(title)}
              >
                <div className='flex'>
                  <span className='w-1/2 text-xs sm:text-base'>{title}</span>
                  <span className='w-1/2 text-xs sm:text-base pl-4'>{type}</span>
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
                            <Link href={link} target="_blank">Check out site</Link>
                          </button>
                        }
                      </div>
                    </motion.div>)}
                </AnimatePresence>
              </li>
            ))}
        </ul>
      </div>
    </section>      
    )
  }
  
  const projectVariants = {
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
  };
      
      export default WorkSection;
      