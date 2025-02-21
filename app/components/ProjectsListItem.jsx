'use client'
import React from 'react'
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'framer-motion';

function ProjectListItem({ id, title, description, type, link, stack, activeProject, setActiveProject }) {
  
  const listItemRef = React.useRef(null)
  const isInView = useInView(listItemRef, { once: true })
  const width = isInView ? '100%' : '0%';
  
  function handleProjectClick(title) {
    if (activeProject === title) {
      setActiveProject(undefined)
    } else {
      setActiveProject(title)
    }
  }
  
  return (
    <li
      ref={listItemRef}
      key={id} 
      className='flex flex-col pb-2 h-auto w-full cursor-pointer' 
      onClick={() => handleProjectClick(title)}
    >
      <motion.div 
        className='will-change-transform h-[1px] w-full bg-[#FBFCF8] transition-all duration-[1.7s] ease-[cubic-bezier(0.76,0,0.24,1)] ' 
        style={{ width }}
      />
      <div className='flex pt-2'>
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
              <p className='text-base sm:text-xl'>{description}</p>
              <ul className='flex flex-wrap list-disc pl-6 gap-x-8 gap-y-2'>
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
  )
};

// Margins on animating items fuck up animation  
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

export default ProjectListItem;