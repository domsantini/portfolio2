'use client'
import { motion, useTransform } from 'framer-motion'

function MainContentWrapper({ ref, scrollYProgress, children }) {
  
  const borderRadius = useTransform(scrollYProgress, [0,1,0], [40,0,40])
    
  return (
    <motion.section ref={ref} style={{ borderRadius }}  className='overflow-hidden sticky top-0 bg-zinc-700 h-full border-solid border-red-500 border-2'>
      {children}
    </motion.section>
  )
}

export default MainContentWrapper;