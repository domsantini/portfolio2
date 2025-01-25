'use client'
import { motion, useTransform } from 'framer-motion'

function MainContentWrapper({ children }) {
  
  // const borderRadius = useTransform(scrollYProgress, [0,1], [40,0])
    
  return (
    <motion.section className='sticky top-0 bg-zinc-700 h-full '>
      {children}
    </motion.section>
  )
}

export default MainContentWrapper;