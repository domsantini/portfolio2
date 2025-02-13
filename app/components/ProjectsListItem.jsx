import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

function ProjectListItem({ id, title, description, type, link, stack, activeProject, setActiveProject }) {
  
  function handleProjectClick(title) {
    if (activeProject === title) {
      setActiveProject(undefined)
    } else {
      setActiveProject(title)
    }
  }
  
  return (
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